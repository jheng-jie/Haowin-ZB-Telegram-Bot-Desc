<template>
  <div :class="shadow" class="select-none button select-none cursor-pointer rounded btn inline-block text-white relative px-4 py-1 shadow-md">
    <span class="opacity-0"><slot /></span>
    <!--Test-->
    <div :class="bg" class="top absolute rounded px-4 left-0 right-0 flex justify-center items-center py-1">
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
