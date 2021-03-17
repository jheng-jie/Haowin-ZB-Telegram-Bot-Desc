import { reactive } from "vue"
import AvatarBot from "/@/asset/bot.png"
import AvatarSelf from "/@/asset/self.png"

export interface Name {
  bot: string,
  self: string
}

export const name: Name = reactive<Name>({
  bot: "H5_Jie_Bot",
  self: "Haowin"
})

export interface Avatar {
  bot: string
  self: string
}

export const avatar: Avatar = reactive<Avatar>({
  bot: AvatarBot,
  self: AvatarSelf
})

export interface Merchant {
  readonly lovezb: any
  readonly saomaozb: any
  readonly skyzhibo: any
}

/**
 * @type Merchant
 */
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

export default {}