<template>
  <!--header-->
  <Header class="bg-yellow-100 relative z-50" />
  <!--router view-->
  <router-view v-slot="{ Component, route }">
    <transition name="fade" mode="out-in">
      <keep-alive>
        <component :is="Component" :key="route.fullPath" v-if="route.meta.keepAlive" />
      </keep-alive>
    </transition>
    <transition name="fade" mode="out-in">
      <component :is="Component" v-if="!route.meta.keepAlive" />
    </transition>
  </router-view>
  <!--progress bar-->
  <vue-progress-bar />
</template>

<script lang="ts">
import { defineComponent } from "vue"
import Header from "./component/common/Header.vue"

export default defineComponent({
  name: "App",
  components: {
    Header
  },
  mounted() {
    const routerCache: any = {}
    this.$router.beforeEach(to => {
      if (!routerCache[to.path]) this.$Progress.start()
    })
    this.$router.afterEach(to => {
      if (!routerCache[to.path]) {
        routerCache[to.path] = 1
        this.$Progress.finish()
      }
    })
  }
})
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

html,
body {
  width: 100%;
  height: 100%;
  /* google, mac, microsoft */
  font-family: "Exo", "Heiti TC", "Microsoft Yahei", cursive;
}

.fade-enter-active,
.fade-leave-active {
  transform: translateY(10px);
  transition: transform 0.25s ease, opacity 0.25s;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateY(10px);
  opacity: 0;
}

.fade-leave-from,
.fade-enter-to {
  transform: translateY(0);
  opacity: 1;
}
</style>
