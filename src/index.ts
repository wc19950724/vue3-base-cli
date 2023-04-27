import { existsSync, readFileSync, writeFileSync } from "node:fs";

import { execSync } from "child_process";
import { program } from "commander";
import { resolve } from "path";
import { rimraf } from "rimraf";

import config from "./config";
import {
  deleteConfirm,
  installConfirm,
  operationTips,
  promptQuestions,
} from "./utils/enquirer";
import logger from "./utils/logger";

const pkgPath = resolve(process.cwd(), "package.json");
const pkg = JSON.parse(readFileSync(pkgPath, "utf-8"));
program.name(pkg.name).version(pkg.version).description(pkg.description);

program.command("create <project-name>").action(async (projectName: string) => {
  logger.info(`开始创建项目${projectName}`);
  try {
    const answers = await promptQuestions(projectName);

    const { name, description, author } = answers;
    const targetDir = resolve(projectName); // 生成项目的目录

    // Check if target directory exists
    if (existsSync(targetDir)) {
      await deleteConfirm(projectName, targetDir);
    }
    logger.info(`克隆远程仓库`);
    execSync(`git clone ${config.gitPath} ${targetDir}`, { stdio: "inherit" });
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
    writeFileSync(packageFile, JSON.stringify(data, null, "\t") + "\n", {
      flag: "w+",
    });

    logger.success("项目创建成功!");
    let installed: string | boolean = false;
    try {
      installed = await installConfirm(targetDir);
    } catch (error) {
      error && logger.error(`项目创建失败: ${error}`);
    }
    operationTips(projectName, installed);
  } catch (error) {
    error && logger.error(`项目创建失败: ${error}`);
  }
  process.exit(1);
});

program.parse(process.argv);
