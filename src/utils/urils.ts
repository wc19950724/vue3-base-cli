import { execSync } from "child_process";

let command = "npm";
try {
  execSync("yarn --version", { stdio: "ignore" });
  command = "yarn";
} catch (error) {
  command = "npm";
}

const warningEmoji = "!"; // 警告
const errorEmoji = "x"; // 错误
const successEmoji = "√"; // 成功
const infoEmoji = "$"; // 信息

export { command, errorEmoji, infoEmoji, successEmoji, warningEmoji };
