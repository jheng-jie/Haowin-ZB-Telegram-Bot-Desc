import { createApp } from "vue"
import App from "./App.vue"

// router
import router from "./router"

// app
const container = createApp(App)
container.use(router).mount("#app")

// component
import Button from "/@/component/common/Button.vue"
// @ts-ignore
container.component("Button", Button)