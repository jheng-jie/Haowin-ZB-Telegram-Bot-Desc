<template>
  <div :class="shadow" class="transition duration-300 text-sm select-none button select-none cursor-pointer rounded btn inline-block text-white relative px-4 shadow-md h-7">
    <span class="opacity-0">
      <slot />
    </span>
    <div :class="bg" class="transition duration-300 top absolute rounded px-4 left-0 right-0 flex justify-center items-center h-7">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  props: {
    shadow: String,
    bg: String
  }
})
</script>

<style scoped lang="less">
.button {
  .top {
    top: -8px;
    transition: top 0.3s;
  }
  &:hover .top {
    top: -10px;
  }
  &.active {
    .top {
      top: -2px;
    }
  }
}
</style>
