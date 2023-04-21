import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  output: {
    file: "lib/cli.js",
    format: "cjs",
    banner: "#!/usr/bin/env node", // 添加 Node.js 环境运行的标识
  },
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfig: "tsconfig.json",
    }),
    terser(),
    babel({
      babelHelpers: "bundled",
      exclude: ["node_modules/**", "lib/**"],
      presets: ["@babel/preset-env"],
    }),
    json(),
  ],
};
