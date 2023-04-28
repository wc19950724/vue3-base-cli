import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

import { execa } from "execa";

import logger from "./logger";

export const getCmds = () => {
  const cmds: string[] = [];
  if (existsSync("package-lock.json")) {
    cmds.push("npm");
  } else if (existsSync("yarn.lock")) {
    cmds.push("yarn");
  } else if (existsSync("pnpm-lock.yaml")) {
    cmds.push("pnpm");
  }
  return cmds;
};

export const getScripts = (pkgPath: string) => {
  const packageData = readFileSync(resolve(pkgPath), "utf8");
  const data = JSON.parse(packageData);
  return data.scripts || {};
};

export const run = (bin: string, args: string[], opts = {}) => {
  try {
    return execa(bin, args, { stdio: "inherit", ...opts });
  } catch (error) {
    return Promise.reject(error);
  }
};

export const step = (msg: string) => logger.success("\n", msg);

export async function cmdInstalled(cmd: string) {
  try {
    // 使用 execa 执行 pnpm 命令，如果 pnpm 已经全局安装，则命令执行成功。
    const { stdout } = await run("which", [cmd], { stdout: "ignore" });
    return !!stdout; // 返回 true 表示已经安装了 pnpm。
  } catch (error) {
    return false; // 返回 false 表示没有安装 pnpm。
  }
}
