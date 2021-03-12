import { createWebHashHistory, createRouter } from "vue-router"

// page
import iOS_Build from "./page/iOSBuild.vue"
import Android_Build from "./page/AndroidBuild.vue"
import Param from "./page/Param.vue"
import Home from "./page/Home.vue"

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
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
      component: iOS_Build
    },
    {
      path: "/android-build",
      name: "ANDROID_BUILD",
      meta: {
        keepAlive: true
      },
      component: Android_Build
    },
    {
      path: "/param",
      name: "QA",
      meta: {
        keepAlive: true
      },
      component: Param
    }
  ]
})

export default router
