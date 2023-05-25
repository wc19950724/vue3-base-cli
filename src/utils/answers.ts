import prompts from "prompts";
import { rimraf } from "rimraf";

import { cmdInstalled, getCmds, run, step } from "@/utils";

/** 项目配置询问 */
const promptQuestions = async (name: string) => {
  const answers = await prompts([
    {
      type: "text",
      name: "name",
      message: "Project name:",
      initial: name,
      validate: (input: string) => {
        const reg = /^(?:@[a-z0-9-*~][a-z0-9-*._~]*)?[a-z0-9-~][a-z0-9-._~]*$/;
        if (!reg.test(input)) {
          return "The project name does not meet the specifications: ^(?:@[a-z0-9-*~][a-z0-9-*._~]*)?[a-z0-9-~][a-z0-9-._~]*$";
        }
        return true;
      },
    },
    {
      type: "text",
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
      type: "text",
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
  if (Object.keys(answers).length !== 3) return null;
  return answers;
};

/** 删除同名项目确认 */
const deleteConfirm = async (dirName: string, dirPath: string) => {
  const { action } = await prompts([
    {
      type: "toggle",
      name: "action",
      message: `Delete existing directory <${dirName}>?`,
      initial: "Y",
      active: "Yes",
      inactive: "no",
    },
  ]);
  if (action) {
    step(`Delete directory: '${dirName}'`);
    await rimraf(dirPath);
    return Promise.resolve();
  }
  return Promise.reject("Cancelled creation");
};

/** 安装依赖确认 */
const installConfirm = async (dirName: string) => {
  const { yes } = await prompts([
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
};

/** 选择node命令工具 */
const selectCmd = async (needSelection = true) => {
  let command = "npm";
  const cmds = getCmds();
  if (cmds.length === 1) {
    command = cmds[0];
  } else if (cmds.length > 1) {
    if (needSelection) {
      const { result } = await prompts({
        type: "select",
        name: "result",
        message: "Select cmd type",
        choices: cmds.map((cmd) => ({
          value: cmd,
          title: cmd,
        })),
      });
      command = result;
    } else {
      command = `(${cmds.join(" | ")})`;
    }
  }
  return command;
};

export { deleteConfirm, installConfirm, promptQuestions, selectCmd };
