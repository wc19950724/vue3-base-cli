const nodeResolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const babel = require("@rollup/plugin-babel");
const typescript = require("@rollup/plugin-typescript");
const terser = require("@rollup/plugin-terser");

const { defineConfig } = require("rollup");

module.exports = defineConfig({
  input: "src/index.ts",
  output: {
    file: "lib/cli.js",
    format: "cjs",
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    typescript(),
    babel({
      babelHelpers: "bundled",
      exclude: ["node_modules/**"],
      presets: ["@babel/preset-env"],
    }),
    terser(),
  ],
});
