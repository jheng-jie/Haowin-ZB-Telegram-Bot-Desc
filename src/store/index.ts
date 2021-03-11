import { reactive } from "vue"

import AvatarBot from "/@/asset/bot.png"
import AvatarSelf from "/@/asset/self.png"

const name = reactive({
  bot: "H5_Jie_Bot",
  self: "Haowin"
})

const avatar = reactive({
  bot: AvatarBot,
  self: AvatarSelf
})

const merchant = reactive({
  lovezb: {
    PLATFORM: "lovezb",
    APP_NAME: "**",
    APPLICATION_ID: "**",
    MHUI_KEY: "**",
    TX_KEY: "**",
    TX_LICENSE: "**",
    SCDN_KEY: "**",
    JPUSH_KEY: "**",
    UMENG_KEY: "**",
    GATEWAY: ["http://**", "http://**", "http://**"]
  },
  saomaozb: {
    PLATFORM: "saomaozb",
    APP_NAME: "**",
    APPLICATION_ID: "**",
    MHUI_KEY: "**",
    TX_KEY: "**",
    TX_LICENSE: "**",
    SCDN_KEY: "**",
    JPUSH_KEY: "**",
    UMENG_KEY: "**",
    GATEWAY: ["http://**", "http://**", "http://**"]
  },
  skyzhibo: {
    PLATFORM: "skyzhibo",
    APP_NAME: "**",
    APPLICATION_ID: "**",
    MHUI_KEY: "**",
    TX_KEY: "**",
    TX_LICENSE: "**",
    SCDN_KEY: "**",
    JPUSH_KEY: "**",
    UMENG_KEY: "**",
    GATEWAY: ["http://**", "http://**", "http://**"]
  }
})

export { name, avatar, merchant }
