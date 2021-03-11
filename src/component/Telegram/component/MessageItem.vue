<!--訊息框框-->
<template>
  <div :class="{ 'flex-row': !self, 'flex-row-reverse': self }" class="flex mb-5 relative" :data-self="self ? 1 : 0">
    <div class="w-11">
      <!-- thumb -->
      <img class="bg-cover w-11 h-11 rounded-full border-double border-4" :src="self ? avatar.self : avatar.bot" />
    </div>
    <div class="flex-1 overflow-x-auto box-border" :class="{ 'text-left pl-3 pr-14': !self, 'text-right pr-3 pl-14': self }">
      <!-- name -->
      <div class="font-bold text-sm">{{ self ? name.self : name.bot }}</div>
      <!-- message -->
      <div class="text-sm bg-gray-200 inline-block p-2 mt-2 rounded">
        <slot />
      </div>
      <slot name="keyboard" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { avatar, name } from "/@/store/"

export default defineComponent({
  props: {
    // 左邊消息
    self: Boolean
  },
  setup() {
    return {
      avatar,
      name
    }
  }
})
</script>
