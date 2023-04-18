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
var logger_1 = require("./utils/logger");
var child_process_1 = require("child_process");
var enquirer_1 = require("./utils/enquirer");
var config_1 = require("./config");
var pkg = require('../package.json');
var program = require('commander').program;
var path = require("path");
var fs = require("fs-extra");
program.name(pkg.name).version(pkg.version).description(pkg.description);
program
    .command("create <project-name>")
    .action(function (projectName) { return __awaiter(void 0, void 0, void 0, function () {
    var answers, name_1, description, author, targetDir, gitFile, packageFile, packageData, data, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                logger_1.default.info("\u5F00\u59CB\u521B\u5EFA\u9879\u76EE".concat(projectName, "..."));
                _a.label = 1;
            case 1:
                _a.trys.push([1, 8, , 9]);
                return [4 /*yield*/, (0, enquirer_1.promptQuestions)()];
            case 2:
                answers = _a.sent();
                name_1 = answers.name, description = answers.description, author = answers.author;
                targetDir = path.resolve(projectName);
                if (!fs.existsSync(targetDir)) return [3 /*break*/, 4];
                return [4 /*yield*/, (0, enquirer_1.selectAction)(projectName, targetDir)];
            case 3:
                _a.sent();
                _a.label = 4;
            case 4:
                logger_1.default.info("\u514B\u9686\u8FDC\u7A0B\u4ED3\u5E93\u4E2D...");
                (0, child_process_1.execSync)("git clone ".concat(config_1.gitPath, " ").concat(targetDir));
                gitFile = path.resolve(targetDir, ".git");
                return [4 /*yield*/, fs.remove(gitFile)];
            case 5:
                _a.sent();
                packageFile = path.resolve(targetDir, "package.json");
                packageData = fs.readFileSync(packageFile, 'utf8');
                data = JSON.parse(packageData);
                data.name = name_1;
                data.author = author;
                data.description = description;
                return [4 /*yield*/, fs.writeFileSync(packageFile, JSON.stringify(data, null, '\t') + '\n')];
            case 6:
                _a.sent();
                logger_1.default.success("项目创建成功!");
                return [4 /*yield*/, (0, enquirer_1.confirmInstall)(targetDir)];
            case 7:
                _a.sent();
                return [3 /*break*/, 9];
            case 8:
                error_1 = _a.sent();
                error_1 && logger_1.default.error("\u9879\u76EE\u521B\u5EFA\u5931\u8D25: ".concat(error_1));
                return [3 /*break*/, 9];
            case 9: return [2 /*return*/];
        }
    });
}); });
program.parse(process.argv);
