import fs from "node:fs";
import path from "node:path";

import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

const files = ["release"];

const pkgPath = path.resolve(process.cwd(), "package.json");
const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));
const external = [...Object.keys(pkg.dependencies || {})];

export default files.map((name) => ({
  input: `scripts/${name}.ts`,
  output: {
    file: `scripts/${name}.cjs`,
    format: "cjs",
    banner: "#!/usr/bin/env node",
  },
  plugins: [
    typescript({
      tsconfig: "./tsconfig.json",
      compilerOptions: {
        module: "ESNext",
      },
    }),
    resolve(),
    commonjs(),
  ],
  external,
}));
