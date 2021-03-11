<template>
  <!-- play btn -->
  <div class="h-16" v-show="!animate">
    <img @click="animate = true" alt="play" class="mx-auto w-12 h-12 cursor-pointer mb-3 shadow-md rounded-full transition-transform transform hover:scale-110" :src="PlayButtonImage" />
  </div>
  <!-- telegram message box -->
  <MessageBox :animate="animate" @start="onStart" @complete="onComplete" :key="animate ? 'animate' : 'null'">
    <MessageItem :self="true">
      <ScriptTag>/build</ScriptTag>
    </MessageItem>
    <MessageItem data-keyboard-remove="1" data-keyboard-touch="1">
      <UserTag>{{ name.self }}</UserTag> 打包的商戶
      <template v-slot:keyboard>
        <div class="grid grid-cols-3 text-sm">
          <div :class="{ 'ml-1': index !== 0 }" class="text-center cursor-pointer hover:bg-gray-300 overflow-ellipsis p-2 rounded bg-gray-200 mt-2" v-for="(item, index) in Object.keys(merchant)">
            {{ item }}
            <KeyboardTouch v-if="index === 0" />
          </div>
        </div>
      </template>
    </MessageItem>
    <MessageItem data-keyboard-remove="1" data-keyboard-touch="1">
      <UserTag>{{ name.self }}</UserTag> 請選擇邀請碼類型
      <template v-slot:keyboard>
        <div class="grid grid-cols-3 text-sm">
          <div class="text-center cursor-pointer hover:bg-gray-300 overflow-ellipsis p-2 rounded bg-gray-200 mt-2">
            固定邀請碼
            <KeyboardTouch />
          </div>
          <div class="ml-1 text-center cursor-pointer hover:bg-gray-300 overflow-ellipsis p-2 rounded bg-gray-200 mt-2">ShareInstall</div>
          <div class="ml-1 text-center cursor-pointer hover:bg-gray-300 overflow-ellipsis p-2 rounded bg-gray-200 mt-2">ShareTrace</div>
        </div>
      </template>
    </MessageItem>
    <MessageItem data-remove-res="code">
      <UserTag>{{ name.self }}</UserTag> 請使用回覆此訊息的方式輸入邀請碼，逗號分隔
    </MessageItem>
    <MessageItem :self="true" data-remove-key="code">
      <MessageReply :name="name.bot"> {{ name.self }} 請使用回覆此訊息的方式輸入邀請碼，逗號分隔 </MessageReply>
      123456
    </MessageItem>
    <MessageItem data-scroll="1" data-remove-res="finish">
      <UserTag>{{ name.self }}</UserTag> 請確認資訊
      <pre>{{ CheckResultMessage }}</pre>
    </MessageItem>
    <MessageItem data-scroll="1" data-remove-res="finish" data-keyboard-touch="1">
      <UserTag>{{ name.self }}</UserTag> 若確認無誤請選擇平台
      <template v-slot:keyboard>
        <div class="grid grid-cols-2 text-sm">
          <div class="col-span-2 cursor-pointer hover:bg-gray-300 transition-all overflow-ellipsis flex-1 p-2 rounded bg-gray-200 mt-2 text-center">Android</div>
          <div class="cursor-pointer hover:bg-gray-300 transition-all mr-1 overflow-ellipsis flex-1 p-2 rounded bg-gray-200 mt-2 text-center">iOS <KeyboardTouch /></div>
          <div class="cursor-pointer hover:bg-gray-300 transition-all overflow-ellipsis flex-1 p-2 rounded bg-gray-200 mt-2 text-center">AppStore</div>
          <div class="col-span-2 cursor-pointer hover:bg-gray-300 transition-all overflow-ellipsis flex-1 p-2 rounded bg-gray-200 mt-2 text-center">Android+iOS</div>
          <div class="col-span-2 cursor-pointer hover:bg-gray-300 transition-all overflow-ellipsis flex-1 p-2 rounded bg-gray-200 mt-2 text-center">Cancel</div>
        </div>
      </template>
    </MessageItem>
    <MessageItem data-scroll="1" data-remove-key="finish">
      🟢 操作成功，查看狀態請執行：<br />
      <ScriptTag>/queue_1000</ScriptTag> iOS 打包狀態 <br />
      <MessageFile :filename="'*******.txt'" />
    </MessageItem>
  </MessageBox>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import { MessageBox, MessageItem, KeyboardTouch, UserTag, ScriptTag, MessageReply, MessageFile } from "/@/component/Telegram/"
import { name, merchant } from "/@/store/"
import PlayButtonImage from "/@/asset/play.png"

const CheckResultMessage = [
  "------------------------",
  "总代 ID:  **",
  "APP 名称:  **",
  "Bundle ID:  **",
  "美颜 Key:  **",
  "腾讯云 Key:  **",
  "腾讯云 LICENSE URL:  **",
  "鉴权 Key:  **",
  "极光 Key:  **",
  "友盟 Key:  **",
  "强制邀请码:  123456",
  "------------------------"
].join("\n")

export default defineComponent({
  components: { MessageBox, MessageItem, KeyboardTouch, UserTag, ScriptTag, MessageReply, MessageFile },

  setup() {
    const animate = ref(false)

    /**
     * @desc animate on start
     */
    const onStart = function () {}

    /**
     * @desc animate on complete
     */
    const onComplete = function () {
      setTimeout(() => (animate.value = false), 2000)
    }

    return {
      // state
      animate,
      // callback
      onStart,
      onComplete,
      // store
      name,
      merchant,
      // message
      CheckResultMessage,
      // image
      PlayButtonImage
    }
  }
})
</script>
