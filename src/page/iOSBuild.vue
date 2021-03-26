<template>
  <div class="flex-1 p-2 sm:p-5 text-center overflow-y-auto box-border">
    <!-- telegram message box -->
    <MessageBox :time-scale="timeScale" :play="play" :pause="pause" @complete="onComplete" :class="play ? 'h-full' : 'h-auto'">
      <MessageItem :self="true">
        <ScriptTag>/build</ScriptTag>
      </MessageItem>
      <MessageItem data-keyboard-remove="1" data-keyboard-touch="1">
        <UserTag>{{ name.self }}</UserTag> 打包的商戶
        <template v-slot:keyboard>
          <div class="grid grid-cols-3 text-sm">
            <div :class="{ 'ml-1': index !== 0 }" class="text-center cursor-pointer hover:bg-gray-300 truncate p-2 rounded bg-gray-200 mt-2" v-for="(item, index) in Object.keys(merchant)">
              {{ item }}
              <KeyboardTouch v-if="index === 0" data-delay="1000" />
            </div>
          </div>
        </template>
      </MessageItem>
      <MessageItem data-keyboard-remove="1" data-keyboard-touch="1">
        <UserTag>{{ name.self }}</UserTag> 請選擇邀請碼類型
        <template v-slot:keyboard>
          <div class="grid grid-cols-2 text-sm">
            <div class="col-span-2 text-center cursor-pointer hover:bg-gray-300 truncate p-2 rounded bg-gray-200 mt-2">
              固定邀請碼
              <KeyboardTouch data-delay="1000" />
            </div>
            <div class="text-center cursor-pointer hover:bg-gray-300 truncate p-2 rounded bg-gray-200 mt-2">ShareInstall 無預設邀請碼</div>
            <div class="ml-1 text-center cursor-pointer hover:bg-gray-300 truncate p-2 rounded bg-gray-200 mt-2">ShareInstall</div>
            <div class="text-center cursor-pointer hover:bg-gray-300 truncate p-2 rounded bg-gray-200 mt-2">ShareTrace 無預設邀請碼</div>
            <div class="ml-1 text-center cursor-pointer hover:bg-gray-300 truncate p-2 rounded bg-gray-200 mt-2">ShareTrace</div>
            <div class="text-center cursor-pointer hover:bg-gray-300 truncate p-2 rounded bg-gray-200 mt-2">OpenInstall 無預設邀請碼</div>
            <div class="ml-1 text-center cursor-pointer hover:bg-gray-300 truncate p-2 rounded bg-gray-200 mt-2">OpenInstall</div>
            <div class="text-center cursor-pointer hover:bg-gray-300 truncate p-2 rounded bg-gray-200 mt-2">TInstall 無預設邀請碼</div>
            <div class="ml-1 text-center cursor-pointer hover:bg-gray-300 truncate p-2 rounded bg-gray-200 mt-2">TInstall</div>
          </div>
        </template>
      </MessageItem>
      <MessageItem data-remove-res="code">
        <UserTag>{{ name.self }}</UserTag> 請使用回覆此訊息的方式輸入邀請碼，逗號分隔
      </MessageItem>
      <MessageItem :self="true" data-remove-key="code" data-delay="1000">
        <MessageReply :name="name.bot"> {{ name.self }} 請使用回覆此訊息的方式輸入邀請碼，逗號分隔 </MessageReply>
        123456
      </MessageItem>
      <MessageItem data-remove-res="finish" data-delay="1500">
        <UserTag>{{ name.self }}</UserTag> 請確認資訊
        <pre><code v-html="CheckResultMessage" /></pre>
      </MessageItem>
      <MessageItem data-remove-res="finish" data-keyboard-touch="1" data-delay="1500">
        <UserTag>{{ name.self }}</UserTag> 若確認無誤請選擇平台
        <template v-slot:keyboard>
          <div class="grid grid-cols-2 text-sm">
            <div class="col-span-2 cursor-pointer hover:bg-gray-300 transition-all truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center">Android</div>
            <div class="cursor-pointer hover:bg-gray-300 transition-all mr-1 truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center">iOS <KeyboardTouch data-delay="1500" /></div>
            <div class="cursor-pointer hover:bg-gray-300 transition-all truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center">AppStore</div>
            <div class="col-span-2 cursor-pointer hover:bg-gray-300 transition-all truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center">Android+iOS</div>
            <div class="col-span-2 cursor-pointer hover:bg-gray-300 transition-all truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center">取消</div>
          </div>
        </template>
      </MessageItem>
      <MessageItem data-remove-key="finish">
        <UserTag>{{ name.self }}</UserTag> 🟢 操作成功 <ScriptTag>build_lovezb_20210325_133937.txt</ScriptTag>，查看狀態請執行：<br />
        <ScriptTag>/queue_1000</ScriptTag> iOS 打包狀態 <br />
      </MessageItem>
    </MessageBox>
  </div>
</template>

<script lang="ts">
import { defineComponent, onDeactivated, reactive, toRefs } from "vue"
import { MessageBox, MessageItem, KeyboardTouch, UserTag, ScriptTag, MessageReply, MessageFile } from "/@/component/Telegram/index"
import { name, merchant, animate } from "/@/store"

const CheckResultMessage = [
  "------------------------",
  "总代 ID:  <b>lovezb</b>",
  "APP 名称:  <b>**</b>",
  "Bundle ID:  <b>**</b>",
  "美颜 Key:  <b>**</b>",
  "腾讯云 Key:  <b>**</b>",
  "腾讯云 LICENSE URL:  <b>**</b>",
  "鉴权 Key:  <b>**</b>",
  "极光 Key:  <b>**</b>",
  "友盟 Key:  <b>**</b>",
  "强制邀请码:  <b>123456</b>",
  "邀請碼數量:  <b>1</b>",
  "------------------------"
].join("\n")

export default defineComponent({
  components: { MessageBox, MessageItem, KeyboardTouch, UserTag, ScriptTag, MessageReply, MessageFile },

  setup() {
    /**
     * @desc animate on complete
     */
    const onComplete = function (): void {
      animate.play = false
    }

    onDeactivated(function (): void {
      if (animate.play) animate.pause = true
    })

    return {
      // animate state
      ...toRefs(animate),
      // callback
      onComplete,
      // store
      name,
      merchant,
      // message
      CheckResultMessage
    }
  }
})
</script>
