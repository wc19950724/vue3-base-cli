import { blueBright, greenBright, redBright, yellowBright } from "chalk";

import { errorEmoji, infoEmoji, successEmoji, warningEmoji } from "./urils";

function error(...args: any[]) {
  console.log(
    `${redBright(errorEmoji)}${redBright(" -- ")}${redBright(args)}${redBright(
      " -- "
    )}`
  );
}

function warn(...args: any[]) {
  console.log(
    `${yellowBright(warningEmoji)}${yellowBright(" -- ")}${yellowBright(
      args
    )}${yellowBright(" -- ")}`
  );
}

function info(...args: any[]) {
  console.log(
    `${blueBright(infoEmoji)}${blueBright(" -- ")}${blueBright(
      args
    )}${blueBright(" -- ")}`
  );
}

function success(...args: any[]) {
  console.log(
    `${greenBright(successEmoji)}${greenBright(" -- ")}${greenBright(
      args
    )}${greenBright(" -- ")}`
  );
}

function log(...args: any[]) {
  console.log(blueBright(args));
}

export default {
  error,
  warn,
  info,
  success,
  log,
};
