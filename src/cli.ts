import { cac } from "cac";
import fs from "fs";
import path from "path";
import { rimraf } from "rimraf";

import { name as pkgName, version as pkgVersion } from "@/../package.json";
import { gitPath } from "@/config";
import { Options } from "@/types";
import {
  deleteConfirm,
  getScripts,
  installConfirm,
  logger,
  promptQuestions,
  run,
  selectCmd,
  step,
} from "@/utils";

const cli = async () => {
  const program = cac(pkgName);
  program
    .command("create <project-name>")
    .option("-g, --git", "git clone url")
    .action(async (projectName: string, options: Options) => {
      try {
        let questionResult;
        try {
          questionResult = await promptQuestions(projectName);
          if (!questionResult) return;
        } catch (error) {
          return;
        }

        const targetDir = path.join(process.cwd(), projectName); // 生成项目的目录

        // Check if target directory exists
        if (fs.existsSync(targetDir)) {
          try {
            await deleteConfirm(projectName, targetDir);
          } catch (error) {
            return;
          }
        }
        step("Clone remote warehouse...");
        await run("git", ["clone", options.git || gitPath, targetDir]);
        const gitFile = path.join(targetDir, ".git");
        await rimraf(gitFile);
        const packageFile = path.join(targetDir, "package.json");
        const packageData = fs.readFileSync(packageFile, "utf8");
        const data = JSON.parse(packageData);
        data.name = questionResult.name;
        data.author = questionResult.author;
        data.description = questionResult.description;
        fs.writeFileSync(packageFile, JSON.stringify(data, null, 2) + "\n");
        step("Project created successfully!");
        let installed, command;
        try {
          installed = await installConfirm(targetDir);
          command = await selectCmd(false);
        } catch (error) {
          return;
        }
        logger.log(`\n`);
        logger.info(`\tcd ${questionResult.name}`);
        !installed && logger.info(`\t${command} install`);
        const scripts = getScripts(packageFile);
        for (const key in scripts) {
          logger.info(`\t${command} ${key}`);
        }
        logger.log(`\n`);
      } catch (error) {
        if (error instanceof Error) {
          logger.error(`${error.name}: ${error.message}`);
        } else {
          logger.log(error);
        }
      }
    });
  program.help();
  program.version(pkgVersion);
  program.parse(process.argv);
};

cli().catch((err) => {
  if (err instanceof Error) {
    logger.error(`${err.name}: ${err.message}`);
  } else {
    logger.log(err);
  }
});
