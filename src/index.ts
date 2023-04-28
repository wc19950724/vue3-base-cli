import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

import { program } from "commander";
import { rimraf } from "rimraf";

import { gitPath } from "./config";
import { ProgramOptions } from "./types";
import {
  deleteConfirm,
  installConfirm,
  promptQuestions,
  selectCmd,
} from "./utils/enquirer";
import logger from "./utils/logger";
import { getScripts, run, step } from "./utils/utils";

const pkgPath = resolve(__dirname, "..", "package.json");
const pkg = JSON.parse(readFileSync(pkgPath, "utf-8"));
program.name(pkg.name).version(pkg.version).description(pkg.description);

program
  .command("create <project-name>")
  .option("-g, --git <git url>", "git clone url")
  .action(async (projectName: string, options: ProgramOptions) => {
    step(`Start creating project: ${projectName}`);
    try {
      const answers = await promptQuestions(projectName);

      const { name, description, author } = answers;
      const targetDir = resolve(projectName); // 生成项目的目录

      // Check if target directory exists
      if (existsSync(targetDir)) {
        await deleteConfirm(projectName, targetDir);
      }
      step("Clone remote warehouse...");
      await run("git", ["clone", options.git || gitPath, targetDir]);
      // Delete .git
      const gitFile = resolve(targetDir, ".git");
      await rimraf(gitFile);
      // Update package.json
      const packageFile = resolve(targetDir, "package.json");
      const packageData = readFileSync(packageFile, "utf8");
      const data = JSON.parse(packageData);
      data.name = name;
      data.author = author;
      data.description = description;
      writeFileSync(packageFile, JSON.stringify(data, null, 2) + "\n");
      step("Project created successfully!");
      const installed = await installConfirm(targetDir);
      const command = await selectCmd(false);
      logger.log(`\n`);
      logger.info(`\tcd ${name}`);
      !installed && logger.info(`\t${command} install`);
      const scripts = getScripts(packageFile);
      for (const key in scripts) {
        logger.info(`\t${command} ${key}`);
      }
      logger.log(`\n`);
    } catch (error) {
      error && logger.error("Project creation failed: ", error);
    }
  });

program.parse(process.argv);
