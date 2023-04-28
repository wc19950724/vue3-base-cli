import { prompt } from "enquirer";
import { rimraf } from "rimraf";

import { cmdInstalled, getCmds, run, step } from "./utils";

/** 项目配置询问 */
async function promptQuestions(name: string) {
  const answers = await prompt<Record<string, string>>([
    {
      type: "input",
      name: "name",
      message: "Project name:",
      initial: () => name,
      validate: (input: string) => {
        const reg = /^(?:@[a-z0-9-*~][a-z0-9-*._~]*)?[a-z0-9-~][a-z0-9-._~]*$/;
        if (!reg.test(input)) {
          return "The project name does not meet the specifications: ^(?:@[a-z0-9-*~][a-z0-9-*._~]*)?[a-z0-9-~][a-z0-9-._~]*$";
        }
        return true;
      },
    },
    {
      type: "input",
      name: "description",
      message: "description:",
      validate: (input: string) => {
        const reg = /^.{0,100}$/;
        if (!reg.test(input)) {
          return "The description must not exceed 100 characters";
        }
        return true;
      },
    },
    {
      type: "input",
      name: "author",
      message: "author:",
      validate: (input: string) => {
        const reg = /^.{0,50}$/;
        if (!reg.test(input)) {
          return "The author must not exceed 50 characters";
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
      message: `Delete existing directory <${dirName}>?`,
      initial: true,
      stdin: process.stdin,
    },
  ]);
  if (action) {
    step(`Delete directory: '${dirName}'`);
    await rimraf(dirPath);
    return Promise.resolve();
  }
  return Promise.reject("Cancelled creation");
}

/** 安装依赖确认 */
async function installConfirm(dirName: string) {
  const { yes } = await prompt<{ yes: string }>([
    {
      type: "confirm",
      name: "yes",
      message: "install packages?",
      initial: true,
    },
  ]);
  if (!yes) return false;
  // 执行安装依赖的操作
  process.chdir(dirName);
  const command = await selectCmd();
  const isInstalled = await cmdInstalled(command);
  if (!isInstalled) {
    await run("npm", ["install", "-g", command]);
  }
  step(`${command} version`);
  await run(command, ["--version"]);
  try {
    await run(command, ["install", "--prefer-offline"]);
  } catch (error) {
    await run(command, ["install"]);
  }
  step("Dependency installation successful!");
  return true;
}

/** 选择node命令工具 */
async function selectCmd(needSelection = true) {
  let command = "npm";
  const cmds = getCmds();
  if (cmds.length === 1) {
    command = cmds[0];
  } else if (cmds.length > 1) {
    if (needSelection) {
      const { result } = await prompt<{
        result: string;
      }>({
        type: "select",
        name: "result",
        message: "Select cmd type",
        choices: cmds,
      });
      command = result;
    } else {
      command = `(${cmds.join(" | ")})`;
    }
  }
  return command;
}

export { deleteConfirm, installConfirm, promptQuestions, selectCmd };
