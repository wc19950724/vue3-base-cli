import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

import chalk from "chalk";
import enquirer from "enquirer";
import { execa } from "execa";
import minimist from "minimist";
import { ReleaseType } from "semver";
import semverInc from "semver/functions/inc";
import prerelease from "semver/functions/prerelease";
import valid from "semver/functions/valid";

let pkgPath = resolve(process.cwd(), "package.json");
let pkg = JSON.parse(readFileSync(pkgPath, "utf-8"));
const currentVersion = pkg.version;
const args = minimist(process.argv.slice(2));
const preId = args.preid || prerelease(currentVersion)?.[0];
const isDryRun = args.dry;

const keepThePackageName = (pkgName: string) => pkgName;

const versionIncrements: ReleaseType[] = [
  "patch",
  "minor",
  "major",
  ...((preId
    ? ["prepatch", "preminor", "premajor", "prerelease"]
    : []) as ReleaseType[]),
];

const inc = (i: ReleaseType) => semverInc(currentVersion, i, preId);
const run = (bin: string, args: string[], opts = {}) =>
  execa(bin, args, { stdio: "inherit", ...opts });
const dryRun = async (bin: string, args: string[], opts = {}) =>
  console.log(chalk.blue(`[dryrun] ${bin} ${args.join(" ")}`), opts);
const runIfNotDry = isDryRun ? dryRun : run;
const step = (msg: string) => console.log(chalk.cyan(msg));

async function main() {
  let targetVersion = args._[0];

  if (!targetVersion) {
    // no explicit version, offer suggestions
    const { release } = await enquirer.prompt<{
      release: ReleaseType | "custom";
    }>({
      type: "select",
      name: "release",
      message: "Select release type",
      choices: versionIncrements
        .map((i) => `${i} (${inc(i)})`)
        .concat(["custom"]),
    });

    if (release === "custom") {
      const { version } = await enquirer.prompt<{ version: string }>({
        type: "input",
        name: "version",
        message: "Input custom version",
        initial: currentVersion,
      });
      targetVersion = version;
    } else {
      const releaseMatchArray = release.match(/\((.*)\)/);
      if (releaseMatchArray?.length) {
        targetVersion = releaseMatchArray[1];
      } else {
        throw new Error("Version is required!");
      }
    }
  }

  if (!valid(targetVersion)) {
    throw new Error(`invalid target version: ${targetVersion}`);
  }

  const { yes: confirmRelease } = await enquirer.prompt<{ yes: boolean }>({
    type: "confirm",
    name: "yes",
    message: `Releasing v${targetVersion}. Confirm?`,
  });

  if (!confirmRelease) {
    return;
  }

  // update all package versions and inter-dependencies
  step("\nUpdating cross dependencies...");
  updateVersions(targetVersion, keepThePackageName);

  // generate changelog
  step("\nGenerating changelog...");
  await run(`yarn`, ["run", "changelog"]);

  const { yes: changelogOk } = await enquirer.prompt<{ yes: boolean }>({
    type: "confirm",
    name: "yes",
    message: `Changelog generated. Does it look good?`,
  });

  if (!changelogOk) {
    return;
  }

  // update yarn-lock.yaml
  // skipped during canary release because the package names changed and installing with `workspace:*` would fail
  step("\nUpdating lockfile...");
  await run(`yarn`, ["install", "--prefer-offline"]);

  const { stdout } = await run("git", ["diff"], { stdio: "pipe" });
  if (stdout) {
    step("\nCommitting changes...");
    await runIfNotDry("git", ["add", "-A"]);
    await runIfNotDry("git", ["commit", "-m", `release: v${targetVersion}`]);
  } else {
    console.log("No changes to commit.");
  }

  // push to GitHub
  step("\nPushing to GitHub...");
  await runIfNotDry("git", ["tag", `v${targetVersion}`]);
  const { yes: publishOk } = await enquirer.prompt<{ yes: boolean }>({
    type: "confirm",
    name: "yes",
    message: `Publish to Git?`,
  });

  if (publishOk) {
    await runIfNotDry("git", ["push", "origin", `refs/tags/v${targetVersion}`]);
    try {
      await runIfNotDry("git", ["push"]);
    } catch (error) {
      const branch = await getCurrentBranch();
      try {
        await runIfNotDry("git", ["push", "--set-upstream", "origin", branch]);
        console.log(`Upstream branch set successfully for ${branch}.`);
      } catch (error) {
        console.error(`Failed to set upstream branch for ${branch}:`, error);
      }
    }
  }

  if (isDryRun) {
    console.log(`\nDry run finished - run git diff to see package changes.`);
  }
}

function updateVersions(
  version: string,
  getNewPackageName = keepThePackageName
) {
  // 1. update root package.json
  updatePackage(process.cwd(), version, getNewPackageName);
}

function updatePackage(
  pkgRoot: string,
  version: string,
  getNewPackageName: typeof keepThePackageName
) {
  pkgPath = resolve(pkgRoot, "package.json");
  pkg = JSON.parse(readFileSync(pkgPath, "utf-8"));
  pkg.name = getNewPackageName(pkg.name);
  pkg.version = version;
  writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n");
}

async function getCurrentBranch() {
  const result = await run("git", ["branch", "--show-current"], {
    stdio: "pipe",
  });
  console.log(result, "看看本地分支信息");

  return result.stdout.trim();
}

main().catch((err) => {
  updateVersions(currentVersion);
  console.error(err);
  process.exit(1);
});
