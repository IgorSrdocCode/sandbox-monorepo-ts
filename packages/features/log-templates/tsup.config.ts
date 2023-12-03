import { defineConfig, Options } from "tsup";
import { config } from "@packages/tsup-config";

export default defineConfig((options: Options) => ({
  ...config,
  ...options,
}));
