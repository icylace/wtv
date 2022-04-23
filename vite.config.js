// https://vitejs.dev/config/#shared-options
// https://rollupjs.org/guide/en/#configuration-files

import { defineConfig } from "vite"

const { resolve } = require("path")

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "./src/lib/wtv.ts"),
      name: "wtv",
    },
  },
})
