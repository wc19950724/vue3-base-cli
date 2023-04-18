const chalk = require('chalk');

function error (...args: any[]) {
	console.log(chalk.red(args));
}

function warn (...args: any[]) {
	console.log(chalk.yellow(args));
}

function info (...args: any[]) {
	console.log(chalk.blue(args));
}

function success (...args: any[]) {
	console.log(chalk.green(args));
}

export default {
	error,
	warn,
	info,
	success,
}