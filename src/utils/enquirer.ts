import logger from "./logger";
const enquirer = require("enquirer");
const fs = require("fs-extra");
import { execSync, spawn } from "child_process";

const questions = [
    {
      type: "input",
      name: "name",
      message: "请输入项目名称:",
      default: "base-vue3-ts",
      validate: (input: string) => {
        const reg = /^(?:@[a-z0-9-*~][a-z0-9-*._~]*)?[a-z0-9-~][a-z0-9-._~]*$/;
        if (!reg.test(input)) {
            return '项目名称不符合规范: ^(?:@[a-z0-9-*~][a-z0-9-*._~]*)?[a-z0-9-~][a-z0-9-._~]*$'
        }
        return true
      }
    },
    {
      type: "input",
      name: "description",
      message: "请输入项目描述:",
      default: "vue3+ts基础管理平台",
      validate: (input: string) => {
        const reg = /^.{0,100}$/;
        if (!reg.test(input)) {
            return '项目描述不得超过100个字符'
        }
        return true
      }
    },
    {
      type: "input",
      name: "author",
      message: "请输入作者:",
      default: "Wang 948533798@qq.com",
      validate: (input: string) => {
        const reg = /^.{0,50}$/
        if (!reg.test(input)) {
            return '作者不得超过50个字符'
        }
        return true
      }
    },
];

async function promptQuestions(index = 0, answers: Record<string, string> = {}) {
    while(index < questions.length && !answers[questions[index].name]) {
        const result = await enquirer.prompt(questions[index]);
        answers[questions[index].name] = result[questions[index].name]
        if (index < questions.length) {
            index++;
        }
    }
    return answers
}

const replaceOptions = [
    { message: '删除', value: 'delete' },
    { message: '取消', value: 'cancel' },
  ];
  

async function selectAction(dirName: string, dirPath: string) {
    const replaceAnswer = await enquirer.prompt({
        type: "select",
        name: "action",
        message: `当前目录'${dirName}'已存在, 是否删除?`,
        choices: replaceOptions

    });
    if (replaceAnswer.action === "delete") {
        logger.info(`正在删除目录'${dirName}'...`);
        await fs.remove(dirPath);
        return Promise.resolve()
    }
    return Promise.reject("已取消创建");
}

const confirmInstallOptions = [
    { message: '是', value: 'yes' },
    { message: '否', value: 'no' },
]

async function confirmInstall(dirName: string) {
    const { action } = await enquirer.prompt({
        type: 'select',
        name: 'action',
        message: '是否安装项目依赖?',
        choices: confirmInstallOptions,
    });
    switch (action) {
        case 'yes':
          // 执行安装依赖的操作
          process.chdir(dirName);
          try {
              execSync("yarn --version", { stdio: "ignore" });
              execSync('yarn install', { stdio: "inherit" });
          } catch (error) {
              execSync('npm install', { stdio: "inherit" });
          }
          logger.success('依赖安装成功!');
          break;
        case 'no':
          // 不执行任何操作
          break;
    }
}

export {
    promptQuestions,
    selectAction,
    confirmInstall
};
