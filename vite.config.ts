import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
const { resolve } = require("path")

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Haowin-ZB-Telegram-Bot-Desc/",
  plugins: [vue()],
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      "/@": resolve(__dirname, "./src")
    }
  }
})
