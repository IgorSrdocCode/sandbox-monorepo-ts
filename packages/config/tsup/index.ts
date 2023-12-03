import { Options } from "tsup";

export const config: Options = {
  treeshake: true,
  clean: true,
  entry: ["src/**/*.ts"],
  format: ["esm", "cjs"],
  dts: true,
  external: ["react"],
};
