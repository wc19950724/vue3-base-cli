import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import externals from "rollup-plugin-node-externals";

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
    externals(),
  ],
};
