import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
const { resolve } = require("path")

// https://vitejs.dev/config/
export default defineConfig({
  base: "vite-tg-build-bot/",
  plugins: [vue()],
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      "/@": resolve(__dirname, "./src")
    }
  },
  build: {
    outDir: "docs"
  }
})
