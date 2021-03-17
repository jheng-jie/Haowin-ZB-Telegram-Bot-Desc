import { createApp } from "vue"
import App from "./App.vue"

// router
import router from "./router"

// component
import Button from "/@/component/common/Button.vue"
import PlayBar from "/@/component/common/PlayBar.vue"
// @ts-ignore
import VueProgressBar from "@aacassandra/vue3-progressbar"

// app
createApp(App)
  .component("PlayBar", PlayBar)
  .component("Button", Button)
  .use(VueProgressBar, {
    color: "#ffb000",
    thickness: "3px",
    transition: {
      speed: "0.6s",
      opacity: "0.6s",
      termination: 300
    }
  })
  .use(router)
  .mount("#app")
