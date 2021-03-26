<template>
  <div class="flex-1 p-5 text-center overflow-y-auto box-border">
    <!--tool-->
    <div class="mb-3 bg-white rounded shadow-sm max-w-2xl mx-auto">
      <h1 class="py-3 font-bold text-2xl">生成 JSON 工具</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        <template v-for="(val, key) in params" :key="key">
          <div class="mb-2 pr-3 flex justify-center sm:justify-end items-center">
            {{ val }}
          </div>
          <div class="mb-2 mr-2 text-left">
            <input class="border rounded pl-2 py-1 w-full" type="text" v-model="result[key]" />
          </div>
        </template>
      </div>
      <div class="mb-2 mt-1">
        <Button shadow="bg-red-600" bg="bg-red-500" class="mx-1 inline-block" @click="onClearClick">
          <i class="fas fa-trash"></i>
        </Button>
        <Button shadow="bg-blue-600" bg="bg-blue-500" class="mx-1 inline-block" @click="onCopy">
          <i class="fas fa-copy"></i>
        </Button>
      </div>
      <div class="box-border px-2">
        <textarea ref="textarea" class="border rounded w-full p-2" cols="30" rows="10" @focus="$event.target.select()" @click="$event.target.select()">{{ JSON.stringify(format, null, 4) }}</textarea>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, onUnmounted, watch, ref } from "vue"
import { params } from "/@/store"
import ElMessageBox from "element-plus/lib/el-message-box"
import ElNotification from "element-plus/lib/el-notification"
import "element-plus/lib/theme-chalk/el-notification.css"
import "element-plus/lib/theme-chalk/el-message-box.css"
import "element-plus/lib/theme-chalk/el-icon.css"

export default defineComponent({
  setup() {
    const result = reactive<any>({ ...params })
    const format = reactive<any>({})
    const textarea = ref<HTMLTextAreaElement>()

    /**
     * @desc 清除內容
     */
    const onClear = function (): void {
      // clear
      for (let key in result) if (key in result) result[key] = ""
    }

    /**
     * @desc 複製
     */
    const onCopy = function (): void {
      document.execCommand("copy")
    }

    /**
     * @desc on copy
     */
    const copyEvent = function (e: ClipboardEvent) {
      if (!textarea.value || !e.clipboardData) return
      textarea.value.select()
      e.clipboardData.setData("text/plain", textarea.value.value)
      e.preventDefault()
      ElNotification({
        title: "成功",
        message: "複製成功",
        type: "success"
      })
    }

    /**
     * @desc init
     */
    onMounted(() => {
      onClear()
      document.addEventListener("copy", copyEvent)
    })

    /**
     * @desc destroyed
     */
    onUnmounted(() => document.removeEventListener("copy", copyEvent))

    /**
     * @desc on result change
     */
    watch(result, () => {
      for (let key in format) delete format[key]
      for (let key in result) {
        if (result[key].trim().length === 0) continue
        format[key] = result[key].trim()
      }
    })

    return {
      textarea,
      format,
      params,
      result,
      onCopy,
      onClear,
      onClearClick: () => {
        ElMessageBox({
          title: "確認刪除嗎？",
          distinguishCancelAndClose: true,
          showCancelButton: true,
          confirmButtonText: "確定",
          cancelButtonText: "取消"
        }).then(onClear)
      }
    }
  }
})
</script>
