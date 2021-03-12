import { createApp } from "vue"
import App from "./App.vue"

// router
import router from "./router"

// component
import Button from "/@/component/common/Button.vue"
import PlayBar from "/@/component/common/PlayBar.vue"

// app
createApp(App)
  .component("PlayBar", PlayBar)
  .component("Button", Button)
  .use(router)
  .mount("#app")
