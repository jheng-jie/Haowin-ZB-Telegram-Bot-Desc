import { defineAsyncComponent } from "vue"
import { createWebHashHistory, createRouter, RouteRecordRaw } from "vue-router"

// page
import Home from "./page/Home.vue"

// paths
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "HOME",
    meta: {
      keepAlive: true
    },
    component: Home
  },
  {
    path: "/ios-build",
    name: "IOS_BUILD",
    meta: {
      keepAlive: true
    },
    component: defineAsyncComponent(() => import("./page/iOSBuild.vue"))
  },
  {
    path: "/android-build",
    name: "ANDROID_BUILD",
    meta: {
      keepAlive: true
    },
    component: defineAsyncComponent(() => import("./page/AndroidBuild.vue"))
  },
  {
    path: "/param",
    name: "QA",
    meta: {
      keepAlive: true
    },
    component: defineAsyncComponent(() => import("./page/Param.vue"))
  }
]

// router
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
