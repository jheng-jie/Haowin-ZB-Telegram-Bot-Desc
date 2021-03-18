import { reactive } from "vue"
import AvatarBot from "/@/asset/bot.png"
import AvatarSelf from "/@/asset/self.png"

// interface
import { Name, Avatar, Merchant, MenuItem } from "./interface"
export * from "./interface"

// 按鈕列表
export const menu = reactive<Array<MenuItem>>([
  {
    name: "Home",
    path: "/",
    active: false,
    desc: "首頁"
  } as MenuItem,
  {
    name: "iOS",
    path: "/ios-build",
    active: false,
    desc: "蘋果打包範例"
  } as MenuItem,
  {
    name: "Android",
    path: "/android-build",
    active: false,
    desc: "安卓打包範例"
  } as MenuItem,
  {
    name: "Set",
    path: "/param",
    active: false,
    desc: "參數修改範例"
  } as MenuItem,
  {
    name: "JSON",
    path: "/json",
    active: false,
    desc: "JSON 轉換工具"
  } as MenuItem,
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

// 打包参数
export const params: any = reactive({
  PLATFORM: "总代 ID",
  APP_NAME: "APP 名称",
  APPLICATION_ID: "Bundle ID",
  MHUI_KEY: "美颜 Key",
  TX_KEY: "腾讯云 Key",
  TX_LICENSE: "腾讯云 LICENSE URL",
  SCDN_KEY: "鉴权 Key",
  JPUSH_KEY: "极光 Key",
  UMENG_KEY: "友盟 Key"
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
