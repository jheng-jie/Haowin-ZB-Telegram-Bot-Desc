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
    path: "/build-ios",
    name: "IOS_BUILD",
    meta: {
      keepAlive: true,
      title: "iOS Build"
    },
    component: () => import("./page/iOSBuild.vue")
  },
  {
    path: "/build-android",
    name: "ANDROID_BUILD",
    meta: {
      keepAlive: true,
      title: "Android Build"
    },
    component: () => import("./page/AndroidBuild.vue")
  },
  {
    path: "/set",
    name: "SET_PARAMS",
    meta: {
      keepAlive: true,
      title: "Set Params Desc"
    },
    component: () => import("./page/SetParam.vue")
  },
  {
    path: "/ls",
    name: "LIST",
    meta: {
      keepAlive: true,
      title: "List"
    },
    component: () => import("./page/List.vue")
  },
  {
    path: "/queue",
    name: "QUEUE",
    meta: {
      keepAlive: true,
      title: "Queue"
    },
    component: () => import("./page/Queue.vue")
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
