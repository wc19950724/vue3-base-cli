import { execSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

import { CmdType } from "@/types";
import { logger } from "@/utils";

/** 获取node命令 */
export const getCmds = () => {
  const cmds: CmdType[] = [];
  if (existsSync("package-lock.json")) {
    cmds.push("npm");
  } else if (existsSync("yarn.lock")) {
    cmds.push("yarn");
  } else if (existsSync("pnpm-lock.yaml")) {
    cmds.push("pnpm");
  }
  return cmds;
};

/** 获取命令脚本 */
export const getScripts = (pkgPath: string) => {
  const packageData = readFileSync(resolve(pkgPath), "utf8");
  const data = JSON.parse(packageData);
  return data.scripts || {};
};

/** 终端运行函数 */
export const run = (
  bin: string,
  args: string[],
  opts?: Parameters<typeof execSync>[1]
) => {
  try {
    const stdout = execSync(`${bin} ${args.join(" ")}`, {
      stdio: "inherit",
      ...opts,
      encoding: "utf-8",
    });
    if (stdout && opts?.stdio !== "pipe") {
      logger.log(stdout);
    }
    return stdout;
  } catch (error) {
    return Promise.reject(error);
  }
};

/** 执行步骤log */
export const step = (msg: string) => logger.success(`\n${msg}`);

/** 校验node命令是否已安装 */
export const cmdInstalled = async (cmd: string) => {
  try {
    // 使用 execa 执行 pnpm 命令，如果 pnpm 已经全局安装，则命令执行成功。
    const stdout = await run("which", [cmd], { stdio: "ignore" });
    return !!stdout; // 返回 true 表示已经安装了 pnpm。
  } catch (error) {
    return false; // 返回 false 表示没有安装 pnpm。
  }
};
