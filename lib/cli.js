#!/usr/bin/env

"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve2, reject) => {
    var fulfilled = (value) => {
      try {
        step2(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step2(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step2 = (x) => x.done ? resolve2(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step2((generator = generator.apply(__this, __arguments)).next());
  });
};

// node_modules/.pnpm/picocolors@1.0.0/node_modules/picocolors/picocolors.js
var require_picocolors = __commonJS({
  "node_modules/.pnpm/picocolors@1.0.0/node_modules/picocolors/picocolors.js"(exports2, module2) {
    var tty = require("tty");
    var isColorSupported = !("NO_COLOR" in process.env || process.argv.includes("--no-color")) && ("FORCE_COLOR" in process.env || process.argv.includes("--color") || process.platform === "win32" || tty.isatty(1) && process.env.TERM !== "dumb" || "CI" in process.env);
    var formatter = (open, close, replace = open) => (input) => {
      let string = "" + input;
      let index = string.indexOf(close, open.length);
      return ~index ? open + replaceClose(string, close, replace, index) + close : open + string + close;
    };
    var replaceClose = (string, close, replace, index) => {
      let start = string.substring(0, index) + replace;
      let end = string.substring(index + close.length);
      let nextIndex = end.indexOf(close);
      return ~nextIndex ? start + replaceClose(end, close, replace, nextIndex) : start + end;
    };
    var createColors = (enabled = isColorSupported) => ({
      isColorSupported: enabled,
      reset: enabled ? (s) => `\x1B[0m${s}\x1B[0m` : String,
      bold: enabled ? formatter("\x1B[1m", "\x1B[22m", "\x1B[22m\x1B[1m") : String,
      dim: enabled ? formatter("\x1B[2m", "\x1B[22m", "\x1B[22m\x1B[2m") : String,
      italic: enabled ? formatter("\x1B[3m", "\x1B[23m") : String,
      underline: enabled ? formatter("\x1B[4m", "\x1B[24m") : String,
      inverse: enabled ? formatter("\x1B[7m", "\x1B[27m") : String,
      hidden: enabled ? formatter("\x1B[8m", "\x1B[28m") : String,
      strikethrough: enabled ? formatter("\x1B[9m", "\x1B[29m") : String,
      black: enabled ? formatter("\x1B[30m", "\x1B[39m") : String,
      red: enabled ? formatter("\x1B[31m", "\x1B[39m") : String,
      green: enabled ? formatter("\x1B[32m", "\x1B[39m") : String,
      yellow: enabled ? formatter("\x1B[33m", "\x1B[39m") : String,
      blue: enabled ? formatter("\x1B[34m", "\x1B[39m") : String,
      magenta: enabled ? formatter("\x1B[35m", "\x1B[39m") : String,
      cyan: enabled ? formatter("\x1B[36m", "\x1B[39m") : String,
      white: enabled ? formatter("\x1B[37m", "\x1B[39m") : String,
      gray: enabled ? formatter("\x1B[90m", "\x1B[39m") : String,
      bgBlack: enabled ? formatter("\x1B[40m", "\x1B[49m") : String,
      bgRed: enabled ? formatter("\x1B[41m", "\x1B[49m") : String,
      bgGreen: enabled ? formatter("\x1B[42m", "\x1B[49m") : String,
      bgYellow: enabled ? formatter("\x1B[43m", "\x1B[49m") : String,
      bgBlue: enabled ? formatter("\x1B[44m", "\x1B[49m") : String,
      bgMagenta: enabled ? formatter("\x1B[45m", "\x1B[49m") : String,
      bgCyan: enabled ? formatter("\x1B[46m", "\x1B[49m") : String,
      bgWhite: enabled ? formatter("\x1B[47m", "\x1B[49m") : String
    });
    module2.exports = createColors();
    module2.exports.createColors = createColors;
  }
});

// src/cli.ts
var import_cac = require("cac");
var import_fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));
var import_rimraf2 = require("rimraf");

// src/config.ts
var gitPath = "https://github.com/wc19950724/vue3-base.git";

// src/utils/answers.ts
var import_prompts = __toESM(require("prompts"));
var import_rimraf = require("rimraf");
var promptQuestions = (name) => __async(void 0, null, function* () {
  const answers = yield (0, import_prompts.default)([
    {
      type: "text",
      name: "name",
      message: "Project name:",
      initial: name,
      validate: (input) => {
        const reg = /^(?:@[a-z0-9-*~][a-z0-9-*._~]*)?[a-z0-9-~][a-z0-9-._~]*$/;
        if (!reg.test(input)) {
          return "The project name does not meet the specifications: ^(?:@[a-z0-9-*~][a-z0-9-*._~]*)?[a-z0-9-~][a-z0-9-._~]*$";
        }
        return true;
      }
    },
    {
      type: "text",
      name: "description",
      message: "description:",
      validate: (input) => {
        const reg = /^.{0,100}$/;
        if (!reg.test(input)) {
          return "The description must not exceed 100 characters";
        }
        return true;
      }
    },
    {
      type: "text",
      name: "author",
      message: "author:",
      validate: (input) => {
        const reg = /^.{0,50}$/;
        if (!reg.test(input)) {
          return "The author must not exceed 50 characters";
        }
        return true;
      }
    }
  ]);
  if (Object.keys(answers).length !== 3)
    return null;
  return answers;
});
var deleteConfirm = (dirName, dirPath) => __async(void 0, null, function* () {
  const { action } = yield (0, import_prompts.default)([
    {
      type: "toggle",
      name: "action",
      message: `Delete existing directory <${dirName}>?`,
      initial: "Y",
      active: "Yes",
      inactive: "no"
    }
  ]);
  if (action) {
    step(`Delete directory: '${dirName}'`);
    yield (0, import_rimraf.rimraf)(dirPath);
    return Promise.resolve();
  }
  return Promise.reject("Cancelled creation");
});
var installConfirm = (dirName) => __async(void 0, null, function* () {
  const { yes } = yield (0, import_prompts.default)([
    {
      type: "confirm",
      name: "yes",
      message: "install packages?",
      initial: true
    }
  ]);
  if (!yes)
    return false;
  process.chdir(dirName);
  const command = yield selectCmd();
  const isInstalled = yield cmdInstalled(command);
  if (!isInstalled) {
    yield run("npm", ["install", "-g", command]);
  }
  step(`${command} version`);
  yield run(command, ["--version"]);
  try {
    yield run(command, ["install", "--prefer-offline"]);
  } catch (error2) {
    yield run(command, ["install"]);
  }
  step("Dependency installation successful!");
  return true;
});
var selectCmd = (needSelection = true) => __async(void 0, null, function* () {
  let command = "npm";
  const cmds = getCmds();
  if (cmds.length === 1) {
    command = cmds[0];
  } else if (cmds.length > 1) {
    if (needSelection) {
      const { result } = yield (0, import_prompts.default)({
        type: "select",
        name: "result",
        message: "Select cmd type",
        choices: cmds.map((cmd) => ({
          value: cmd,
          title: cmd
        }))
      });
      command = result;
    } else {
      command = `(${cmds.join(" | ")})`;
    }
  }
  return command;
});

// src/utils/logger.ts
var logger_exports = {};
__export(logger_exports, {
  default: () => logger_default,
  error: () => error,
  gray: () => gray,
  info: () => info,
  log: () => log,
  success: () => success,
  warn: () => warn
});
var import_picocolors = __toESM(require_picocolors());
var error = (msg) => {
  console.log(import_picocolors.default.red(msg));
};
var warn = (msg) => {
  console.log(import_picocolors.default.yellow(msg));
};
var info = (msg) => {
  console.log(import_picocolors.default.blue(msg));
};
var success = (msg) => {
  console.log(import_picocolors.default.green(msg));
};
var log = (...arg) => {
  console.log(...arg);
};
var gray = (msg) => {
  console.log(import_picocolors.default.gray(msg));
};
var logger_default = {
  error,
  warn,
  info,
  success,
  log,
  gray
};

// src/utils/utils.ts
var import_node_child_process = require("child_process");
var import_node_fs = require("fs");
var import_node_path = require("path");
var getCmds = () => {
  const cmds = [];
  if ((0, import_node_fs.existsSync)("package-lock.json")) {
    cmds.push("npm");
  } else if ((0, import_node_fs.existsSync)("yarn.lock")) {
    cmds.push("yarn");
  } else if ((0, import_node_fs.existsSync)("pnpm-lock.yaml")) {
    cmds.push("pnpm");
  }
  return cmds;
};
var getScripts = (pkgPath) => {
  const packageData = (0, import_node_fs.readFileSync)((0, import_node_path.resolve)(pkgPath), "utf8");
  const data = JSON.parse(packageData);
  return data.scripts || {};
};
var run = (bin, args, opts) => {
  try {
    const stdout = (0, import_node_child_process.execSync)(`${bin} ${args.join(" ")}`, __spreadProps(__spreadValues({
      stdio: "inherit"
    }, opts), {
      encoding: "utf-8"
    }));
    if (stdout && (opts == null ? void 0 : opts.stdio) !== "pipe") {
      logger_exports.log(stdout);
    }
    return stdout;
  } catch (error2) {
    return Promise.reject(error2);
  }
};
var step = (msg) => logger_exports.success(`
${msg}`);
var cmdInstalled = (cmd) => __async(void 0, null, function* () {
  try {
    const stdout = yield run("which", [cmd], { stdio: "ignore" });
    return !!stdout;
  } catch (error2) {
    return false;
  }
});

// src/cli.ts
var cli = () => __async(exports, null, function* () {
  const pkgPath = import_path.default.resolve(__dirname, "..", "package.json");
  const pkg = JSON.parse(import_fs.default.readFileSync(pkgPath, "utf-8"));
  const program = (0, import_cac.cac)(pkg.name);
  program.command("create <project-name>").option("-g, --git", "git clone url").action((projectName, options) => __async(exports, null, function* () {
    try {
      console.log("projectName:", projectName);
      console.log("options:", options);
      let questionResult;
      try {
        questionResult = yield promptQuestions(projectName);
        if (!questionResult)
          return;
      } catch (error2) {
        return;
      }
      const targetDir = import_path.default.join(process.cwd(), projectName);
      if (import_fs.default.existsSync(targetDir)) {
        try {
          yield deleteConfirm(projectName, targetDir);
        } catch (error2) {
          return;
        }
      }
      step("Clone remote warehouse...");
      yield run("git", ["clone", options.git || gitPath, targetDir]);
      const gitFile = import_path.default.join(targetDir, ".git");
      yield (0, import_rimraf2.rimraf)(gitFile);
      const packageFile = import_path.default.join(targetDir, "package.json");
      const packageData = import_fs.default.readFileSync(packageFile, "utf8");
      const data = JSON.parse(packageData);
      data.name = questionResult.name;
      data.author = questionResult.author;
      data.description = questionResult.description;
      import_fs.default.writeFileSync(packageFile, JSON.stringify(data, null, 2) + "\n");
      step("Project created successfully!");
      let installed, command;
      try {
        installed = yield installConfirm(targetDir);
        command = yield selectCmd(false);
      } catch (error2) {
        return;
      }
      logger_exports.log(`
`);
      logger_exports.info(`	cd ${questionResult.name}`);
      !installed && logger_exports.info(`	${command} install`);
      const scripts = getScripts(packageFile);
      for (const key in scripts) {
        logger_exports.info(`	${command} ${key}`);
      }
      logger_exports.log(`
`);
    } catch (error2) {
      if (error2 instanceof Error) {
        logger_exports.error(`${error2.name}: ${error2.message}`);
      } else {
        logger_exports.log(error2);
      }
    }
  }));
  program.help();
  program.version(pkg.version);
  program.parse(process.argv);
});
cli().catch((err) => {
  if (err instanceof Error) {
    logger_exports.error(`${err.name}: ${err.message}`);
  } else {
    logger_exports.log(err);
  }
});
