import { createWebHashHistory, createRouter } from "vue-router"

// page
import iOS_Build from "./page/ios-build/Index.vue"
import Android_Build from "./page/android-build/Index.vue"
import QA from "./page/param/Index.vue"

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: () => "/ios-build"
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
        // keepAlive: true
      },
      component: QA
    }
  ]
})

export default router
