import logger from './utils/logger';
import { execSync } from "child_process";
import { confirmInstall, promptQuestions, selectAction } from './utils/enquirer';
import { gitPath } from './config'

const pkg = require('../package.json');
const { program } = require('commander');
const path = require("path");
const fs = require("fs-extra");

program.name(pkg.name).version(pkg.version).description(pkg.description);

program
  .command("create <project-name>")
  .action(async (projectName: string) => {
    logger.info(`开始创建项目${projectName}...`);
    try {

    const answers = await promptQuestions()

      const { name, description, author } = answers;
      const targetDir = path.resolve(projectName); // 生成项目的目录
  
      // Check if target directory exists
      if (fs.existsSync(targetDir)) {
        await selectAction(projectName, targetDir)
      }
      logger.info(`克隆远程仓库中...`);
      execSync(`git clone ${gitPath} ${targetDir}`)
      // Delete .git
      const gitFile = path.resolve(targetDir, ".git");
      await fs.remove(gitFile);
      // Update package.json
      const packageFile = path.resolve(targetDir, "package.json");
      const packageData = fs.readFileSync(packageFile, 'utf8');
      const data = JSON.parse(packageData);
      data.name = name;
      data.author = author;
      data.description = description;
      await fs.writeFileSync(packageFile, JSON.stringify(data, null, '\t') + '\n');
  
      logger.success("项目创建成功!");
      await confirmInstall(targetDir)
    } catch (error) {
      error && logger.error(`项目创建失败: ${error}`);
    }
  });

program.parse(process.argv);
