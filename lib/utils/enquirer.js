"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.confirmInstall = exports.selectAction = exports.promptQuestions = void 0;
var logger_1 = require("./logger");
var enquirer = require("enquirer");
var fs = require("fs-extra");
var child_process_1 = require("child_process");
var questions = [
    {
        type: "input",
        name: "name",
        message: "请输入项目名称:",
        default: "base-vue3-ts",
        validate: function (input) {
            var reg = /^(?:@[a-z0-9-*~][a-z0-9-*._~]*)?[a-z0-9-~][a-z0-9-._~]*$/;
            if (!reg.test(input)) {
                return '项目名称不符合规范: ^(?:@[a-z0-9-*~][a-z0-9-*._~]*)?[a-z0-9-~][a-z0-9-._~]*$';
            }
            return true;
        }
    },
    {
        type: "input",
        name: "description",
        message: "请输入项目描述:",
        default: "vue3+ts基础管理平台",
        validate: function (input) {
            var reg = /^.{0,100}$/;
            if (!reg.test(input)) {
                return '项目描述不得超过100个字符';
            }
            return true;
        }
    },
    {
        type: "input",
        name: "author",
        message: "请输入作者:",
        default: "Wang 948533798@qq.com",
        validate: function (input) {
            var reg = /^.{0,50}$/;
            if (!reg.test(input)) {
                return '作者不得超过50个字符';
            }
            return true;
        }
    },
];
function promptQuestions(index, answers) {
    if (index === void 0) { index = 0; }
    if (answers === void 0) { answers = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(index < questions.length && !answers[questions[index].name])) return [3 /*break*/, 2];
                    return [4 /*yield*/, enquirer.prompt(questions[index])];
                case 1:
                    result = _a.sent();
                    answers[questions[index].name] = result[questions[index].name];
                    if (index < questions.length) {
                        index++;
                    }
                    return [3 /*break*/, 0];
                case 2: return [2 /*return*/, answers];
            }
        });
    });
}
exports.promptQuestions = promptQuestions;
var replaceOptions = [
    { message: '删除', value: 'delete' },
    { message: '取消', value: 'cancel' },
];
function selectAction(dirName, dirPath) {
    return __awaiter(this, void 0, void 0, function () {
        var replaceAnswer;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, enquirer.prompt({
                        type: "select",
                        name: "action",
                        message: "\u5F53\u524D\u76EE\u5F55'".concat(dirName, "'\u5DF2\u5B58\u5728, \u662F\u5426\u5220\u9664?"),
                        choices: replaceOptions
                    })];
                case 1:
                    replaceAnswer = _a.sent();
                    if (!(replaceAnswer.action === "delete")) return [3 /*break*/, 3];
                    logger_1.default.info("\u6B63\u5728\u5220\u9664\u76EE\u5F55'".concat(dirName, "'..."));
                    return [4 /*yield*/, fs.remove(dirPath)];
                case 2:
                    _a.sent();
                    return [2 /*return*/, Promise.resolve()];
                case 3: return [2 /*return*/, Promise.reject("已取消创建")];
            }
        });
    });
}
exports.selectAction = selectAction;
var confirmInstallOptions = [
    { message: '是', value: 'yes' },
    { message: '否', value: 'no' },
];
function confirmInstall(dirName) {
    return __awaiter(this, void 0, void 0, function () {
        var action;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, enquirer.prompt({
                        type: 'select',
                        name: 'action',
                        message: '是否安装项目依赖?',
                        choices: confirmInstallOptions,
                    })];
                case 1:
                    action = (_a.sent()).action;
                    switch (action) {
                        case 'yes':
                            // 执行安装依赖的操作
                            process.chdir(dirName);
                            try {
                                (0, child_process_1.execSync)("yarn --version", { stdio: "ignore" });
                                (0, child_process_1.execSync)('yarn install', { stdio: "inherit" });
                            }
                            catch (error) {
                                (0, child_process_1.execSync)('npm install', { stdio: "inherit" });
                            }
                            logger_1.default.success('依赖安装成功!');
                            break;
                        case 'no':
                            // 不执行任何操作
                            break;
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.confirmInstall = confirmInstall;
