<template>
  <TelegramMessageBox>
    <TelegramMessageItem :self="true"> /build </TelegramMessageItem>
    <TelegramMessageItem>
      <span class="text-blue-700 font-bold">{{ name.self }}</span> 打包的商戶
      <template v-slot:keyboard>
        <div class="flex text-sm w-8/12">
          <div
            :class="{ 'ml-1': index !== 0, touch: index === 0 }"
            class="cursor-pointer hover:bg-gray-300 transition-all overflow-ellipsis flex-1 p-2 rounded bg-gray-200 mt-2 text-center"
            v-for="(item, index) in Object.keys(merchant)"
          >
            {{ item }}
          </div>
        </div>
      </template>
    </TelegramMessageItem>
    <TelegramMessageItem :self="true"> </TelegramMessageItem>
    <TelegramMessageItem> </TelegramMessageItem>
  </TelegramMessageBox>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { TelegramMessageBox, TelegramMessageItem } from "/@/component/TelegramMessageBox/"
import { name, merchant } from "/@/store/"

export default defineComponent({
  components: { TelegramMessageBox, TelegramMessageItem },
  setup() {
    return {
      name,
      merchant
    }
  }
})
</script>

<style>
@keyframes anime {
  0% {
    transform: scale(0.95);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(0.95);
  }
}
</style>

<style lang="less">
.touch {
  position: relative;
  transition: transform 0.3s;

  &::after {
    content: "";
    position: absolute;
    background-image: url("./src/asset/touch.png");
    background-size: cover;
    width: 32px;
    height: 32px;
    z-index: 10;
    animation: anime 0.5s infinite;
  }
}
</style>
