<!--檔案下載樣式-->
<template>
  <div class="flex justify-center items-center pr-2 mt-2 box-border">
    <div class="w-14 p-2 box-border">
      <img class="w-full h-full" :src="DownloadImage" alt="download" />
    </div>
    <div class="flex-1">
      <div>{{ filename }}</div>
      <div>
        <span class="text-gray-500">987B</span> -
        <span class="cursor-pointer text-blue-700 font-bold">Download</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import UserTag from "./UserTag.vue"
import DownloadImage from "/@/asset/download.png"

export default defineComponent({
  components: { UserTag },
  props: {
    // 檔案名稱
    filename: String
  },
  data() {
    return {
      DownloadImage
    }
  }
})
</script>
