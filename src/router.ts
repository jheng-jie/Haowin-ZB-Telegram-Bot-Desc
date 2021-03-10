import { createWebHashHistory, createRouter } from "vue-router"

// page
import iOS_Build from "./page/ios-build/Index.vue"
import Android_Build from "./page/android-build/Index.vue"
import QA from "./page/qa/Index.vue"

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
      component: iOS_Build
    },
    {
      path: "/android-build",
      name: "ANDROID_BUILD",
      component: Android_Build
    },
    {
      path: "/qa",
      name: "QA",
      component: QA
    }
  ]
})

export default router
