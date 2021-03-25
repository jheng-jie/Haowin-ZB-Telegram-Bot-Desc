import { createWebHashHistory, createRouter, RouteRecordRaw } from "vue-router"

// page
import Home from "./page/Home.vue"

// paths
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "HOME",
    meta: {
      keepAlive: true,
      title: "Bot Build Desc"
    },
    component: Home
  },
  {
    path: "/ios-build",
    name: "IOS_BUILD",
    meta: {
      keepAlive: true,
      title: "iOS Build"
    },
    component: () => import("./page/iOSBuild.vue")
  },
  {
    path: "/android-build",
    name: "ANDROID_BUILD",
    meta: {
      keepAlive: true,
      title: "Android Build"
    },
    component: () => import("./page/AndroidBuild.vue")
  },
  {
    path: "/param",
    name: "SET_PARAMS",
    meta: {
      keepAlive: true,
      title: "Params Desc"
    },
    component: () => import("./page/Param.vue")
  },
  {
    path: "/json",
    name: "JSON_TOOL",
    meta: {
      keepAlive: true,
      title: "JSON Tool"
    },
    component: () => import("./page/JSONTool.vue")
  }
]

// router
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
