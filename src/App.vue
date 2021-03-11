<template>
  <!-- header -->
  <Header class="bg-yellow-100 relative z-50" />
  <!-- content -->
  <div class="flex-1 p-5 text-center overflow-y-auto box-border">
    <!-- router view -->
    <router-view v-slot="{ Component, route }">
      <keep-alive>
        <component :is="Component" :key="route.fullPath" v-if="route.meta.keepAlive" />
      </keep-alive>
      <component :is="Component" v-if="!route.meta.keepAlive" />
    </router-view>
  </div>
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
}
</style>
