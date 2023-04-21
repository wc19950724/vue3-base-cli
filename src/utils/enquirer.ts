import { cyanBright, yellowBright } from "chalk";
import { execSync } from "child_process";
import { prompt } from "enquirer";
import { rimraf } from "rimraf";

import config from "../config";
import logger from "./logger";
import { command } from "./urils";

/** 项目配置询问 */
async function promptQuestions(name: string) {
  const answers = await prompt<Record<string, string>>([
    {
      type: "input",
      name: "name",
      message: cyanBright("项目名称:"),
      initial: () => name,
      validate: (input: string) => {
        const reg = /^(?:@[a-z0-9-*~][a-z0-9-*._~]*)?[a-z0-9-~][a-z0-9-._~]*$/;
        if (!reg.test(input)) {
          return "项目名称不符合规范: ^(?:@[a-z0-9-*~][a-z0-9-*._~]*)?[a-z0-9-~][a-z0-9-._~]*$";
        }
        return true;
      },
    },
    {
      type: "input",
      name: "description",
      message: cyanBright("项目描述:"),
      validate: (input: string) => {
        const reg = /^.{0,100}$/;
        if (!reg.test(input)) {
          return "项目描述不得超过100个字符";
        }
        return true;
      },
    },
    {
      type: "input",
      name: "author",
      message: cyanBright("作者:"),
      validate: (input: string) => {
        const reg = /^.{0,50}$/;
        if (!reg.test(input)) {
          return "作者不得超过50个字符";
        }
        return true;
      },
    },
  ]);
  return answers;
}

/** 删除同名项目确认 */
async function deleteConfirm(dirName: string, dirPath: string) {
  const { action } = await prompt<{ action: string }>([
    {
      type: "toggle",
      name: "action",
      message: yellowBright(`删除已有目录 <${dirName}>?`),
      initial: true,
      stdin: process.stdin,
    },
  ]);
  if (action) {
    logger.info(`删除目录'${dirName}'`);
    await rimraf(dirPath);
    return Promise.resolve();
  }
  return Promise.reject("已取消创建");
}

/** 安装依赖确认 */
async function installConfirm(dirName: string) {
  const { action } = await prompt<{ action: string }>([
    {
      type: "toggle",
      name: "action",
      message: cyanBright("安装项目依赖?"),
      initial: true,
      stdin: process.stdin,
    },
  ]);
  if (action) {
    // 执行安装依赖的操作
    process.chdir(dirName);
    try {
      execSync(`${command} install`, { stdio: "inherit" });
      logger.success("依赖安装成功!");
      return action;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  return false;
}

/** 输出操作提示 */
function operationTips(name: string, installed: string | boolean) {
  logger.log(`\r\n`);
  logger.info(`cd ${name}`);
  !installed && logger.info(`${command} install`);
  logger.info(`${command} ${config.startCommand}`);
  logger.log(`\r\n`);
}

export { deleteConfirm, installConfirm, operationTips, promptQuestions };
