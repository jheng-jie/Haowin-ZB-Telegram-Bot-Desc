<!--回復訊息樣式-->
<template>
  <div class="border-l-2 text-left pl-3 border-blue-600 mb-2">
    <UserTag>{{ name }}</UserTag>
    <br />
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import UserTag from "./UserTag.vue"

export default defineComponent({
  components: { UserTag },
  props: {
    // 名稱
    name: String
  }
})
</script>
