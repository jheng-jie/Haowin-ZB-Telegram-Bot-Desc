<!--訊息框框-->
<template>
  <div
    :data-keyboard-touch="dataKeyboardTouch"
    :data-remove-res="dataRemoveRes"
    :data-keyboard-remove="dataKeyboardRemove"
    :data-delay="dataDelay"
    :class="{ 'flex-row': !self, 'flex-row-reverse': self }" class="flex mb-5 relative message-box" :data-self="self ? 1 : 0"
  >
    <div class="w-11 hidden sm:inline-block">
      <!-- thumb -->
      <img class="bg-cover w-11 h-11 rounded-full border-double border-4" :src="self ? avatar.self : avatar.bot" />
    </div>
    <div class="flex-1 overflow-x-auto box-border" :class="{ 'text-left pl-0 sm:pl-3 pr-3 sm:pr-14': !self, 'text-right pr-0 sm:pr-3 pl-3 sm:pl-14': self }">
      <!-- name -->
      <div class="font-bold text-sm">{{ self ? name.self : name.bot }}</div>
      <!-- message -->
      <div class="text-sm inline-block mt-2">
        <div class="p-2 bg-gray-200 rounded">
          <slot />
        </div>
        <div class="bg-white">
          <slot name="keyboard-parent" />
        </div>
      </div>
      <slot name="keyboard" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { avatar, name } from "/@/store"

export default defineComponent({
  props: {
    // 左邊消息
    self: Boolean,
    // 手指
    dataKeyboardTouch: String,
    // 自動刪除
    dataKeyboardRemove: String,
    // 待刪除 key
    dataRemoveRes: String,
    // 延遲
    dataDelay: Number,
  },
  setup() {
    return {
      avatar,
      name
    }
  }
})
</script>

<style scoped lang="less">
@BlueColor: theme("colors.blue[700]");

.message-box::v-deep {
  pre {
    code {
      b {
        color: @BlueColor;
        cursor: pointer;
      }
    }
  }
}
</style>