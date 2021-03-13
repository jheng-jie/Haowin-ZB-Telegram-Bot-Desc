<template>
  <!-- header -->
  <Header class="bg-yellow-100 relative z-50" />
  <!-- router view -->
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
</template>

<script lang="ts">
import { defineComponent } from "vue"
import Header from "./component/common/Header.vue"

export default defineComponent({
  name: "App",
  components: {
    Header
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
  font-family: "Fredoka One", "Heiti TC", "Microsoft Yahei", cursive;
}

.fade-enter-active,
.fade-leave-active {
  transform: translateY(20px);
  transition: transform 0.35s ease, opacity 0.35s;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

.fade-leave-from,
.fade-enter-to {
  transform: translateY(0);
  opacity: 1;
}
</style>
