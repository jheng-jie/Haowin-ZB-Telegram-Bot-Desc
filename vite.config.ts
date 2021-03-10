// @ts-ignore
import { defineConfig } from "vite"
// @ts-ignore
import vue from "@vitejs/plugin-vue"
// @ts-ignore
const { resolve } = require("path")

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // @ts-ignore
      "/@": resolve(__dirname, "src")
    }
  }
})
