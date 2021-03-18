import { reactive } from "vue"
import AvatarBot from "/@/asset/bot.png"
import AvatarSelf from "/@/asset/self.png"

// interface
import { Name, Avatar, Merchant, MenuItem } from "./interface"
export * from "./interface"

// 按鈕列表
export const menu = reactive<Array<MenuItem>>([
  { name: "Home", path: "/", active: false, desc: "首頁" } as MenuItem,
  { name: "IPA", path: "/ios-build", active: false, desc: "蘋果打包範例" } as MenuItem,
  { name: "APK", path: "/android-build", active: false, desc: "安卓打包範例" } as MenuItem,
  { name: "包名修改", path: "/param", active: false, desc: "參數修改範例" } as MenuItem
])

// 聊天對象名稱
export const name: Name = reactive<Name>({
  bot: "H5_Jie_Bot",
  self: "Haowin"
})

// 聊天對象大頭照
export const avatar: Avatar = reactive<Avatar>({
  bot: AvatarBot,
  self: AvatarSelf
})

// 商戶資訊
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
