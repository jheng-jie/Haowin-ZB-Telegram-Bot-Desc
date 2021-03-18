import { reactive } from "vue"
import AvatarBot from "/@/asset/bot.png"
import AvatarSelf from "/@/asset/self.png"

// interface
import { Name, Avatar, Merchant } from "./interface"

export const name: Name = reactive<Name>({
  bot: "H5_Jie_Bot",
  self: "Haowin"
})

export const avatar: Avatar = reactive<Avatar>({
  bot: AvatarBot,
  self: AvatarSelf
})

export const merchant: Merchant = reactive<Merchant>({
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
