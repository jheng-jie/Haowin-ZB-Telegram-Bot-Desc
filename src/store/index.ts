import { reactive } from "vue"
import AvatarBot from "/@/asset/bot.png"
import AvatarSelf from "/@/asset/self.png"

// interface
import { Name, Avatar, Merchant, MenuItem, PlayStatus } from "./interface"
export * from "./interface"

// 按鈕列表
export const menu = reactive<Array<MenuItem>>([
  {
    name: "Home",
    path: "/",
    active: false,
    desc: "首頁"
  },
  {
    name: "iOS",
    path: "/build-ios",
    active: false,
    desc: "蘋果打包範例"
  },
  {
    name: "Android",
    path: "/build-android",
    active: false,
    desc: "安卓打包範例"
  },
  {
    name: "Set",
    path: "/set",
    active: false,
    desc: "參數修改範例"
  },
  {
    name: "Queue",
    path: "/queue",
    active: false,
    desc: "任務列表查看"
  },
  {
    name: "List",
    path: "/ls",
    active: false,
    desc: "查看資料夾"
  },
  {
    name: "JSON",
    path: "/json",
    active: false,
    desc: "JSON 轉換工具"
  },
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
  UMENG_KEY: "友盟 Key",
  SHARETRACE_KEY: "ShareTrace Key",
  SHAREINSTALL_KEY: "ShareInstall Key",
  SHAREINSTALL_VALUE: "ShareInstall Value",
  OPENINSTALL_KEY: "OpenInstall Key",
  TINSTALL_KEY: "TInstall Key",
  DEFAULT_CODE: "预设邀请吗",
  FORCE_INVITE_CODE: "强制邀请码"
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

// 播放動畫狀態
export const animate = reactive<PlayStatus>({
  play: false,
  pause: false,
  timeScale: 1
})