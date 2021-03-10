<template>
  <!-- header -->
  <Header class="bg-yellow-100" />
  <!-- content -->
  <div class="flex-1 pt-5 px-3 text-center overflow-y-auto">
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
