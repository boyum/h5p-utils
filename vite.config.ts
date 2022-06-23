import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "index.ts"),
      name: "h5p-utils",
      fileName: format => `h5p-utils.${format}.js`,
      formats: ["cjs", "es"],
    },
  },
});
