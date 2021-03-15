<template>
  <div class="flex-1 p-2 sm:p-5 text-center overflow-y-auto box-border">
    <!-- play btn -->
    <PlayBar class="h-16" v-model:play="play" v-model:time-scale="timeScale" v-model:pause="pause" />
    <!-- telegram message box -->
    <MessageBox :time-scale="timeScale" :play="play" :pause="pause" @complete="onComplete" :class="play ? 'full-height' : 'auto-height'">
      <MessageItem :self="true">
        <ScriptTag>/build</ScriptTag>
      </MessageItem>
      <MessageItem data-keyboard-remove="1" data-keyboard-touch="1">
        <UserTag>{{ name.self }}</UserTag> 打包的商戶
        <template v-slot:keyboard>
          <div class="grid grid-cols-3 text-sm">
            <div :class="{ 'ml-1': index !== 0 }" class="text-center cursor-pointer hover:bg-gray-300 truncate p-2 rounded bg-gray-200 mt-2 box-border" v-for="(item, index) in Object.keys(merchant)">
              {{ item }}
              <KeyboardTouch v-if="index === 1" />
            </div>
          </div>
        </template>
      </MessageItem>
      <MessageItem data-keyboard-remove="1" data-keyboard-touch="1">
        <UserTag>{{ name.self }}</UserTag> 請選擇邀請碼類型
        <template v-slot:keyboard>
          <div class="grid grid-cols-3 text-sm">
            <div class="text-center cursor-pointer hover:bg-gray-300 truncate p-2 rounded bg-gray-200 mt-2">固定邀請碼<KeyboardTouch /></div>
            <div class="ml-1 text-center cursor-pointer hover:bg-gray-300 truncate p-2 rounded bg-gray-200 mt-2">ShareInstall</div>
            <div class="ml-1 text-center cursor-pointer hover:bg-gray-300 truncate p-2 rounded bg-gray-200 mt-2">ShareTrace</div>
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
        <pre>{{ CheckResultMessage }}</pre>
      </MessageItem>
      <MessageItem data-remove-res="finish" data-keyboard-touch="1" data-delay="1500">
        <UserTag>{{ name.self }}</UserTag> 若確認無誤請選擇平台
        <template v-slot:keyboard>
          <div class="grid grid-cols-2 text-sm">
            <div class="col-span-2 cursor-pointer hover:bg-gray-300 transition-all truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center">Android<KeyboardTouch data-delay="1500" /></div>
            <div class="cursor-pointer hover:bg-gray-300 transition-all mr-1 truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center">iOS</div>
            <div class="cursor-pointer hover:bg-gray-300 transition-all truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center">AppStore</div>
            <div class="col-span-2 cursor-pointer hover:bg-gray-300 transition-all truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center">Android+iOS</div>
            <div class="col-span-2 cursor-pointer hover:bg-gray-300 transition-all truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center">Cancel</div>
          </div>
        </template>
      </MessageItem>
      <MessageItem data-remove-key="finish">
        🟢 操作成功，查看狀態請執行：<br />
        <ScriptTag>/queue_1000</ScriptTag> Android 打包狀態 <br />
        <MessageFile :filename="'*******.txt'" />
      </MessageItem>
    </MessageBox>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onDeactivated, toRefs } from "vue"
import { MessageBox, MessageItem, KeyboardTouch, UserTag, ScriptTag, MessageReply, MessageFile } from "/@/component/Telegram/"
import { name, merchant } from "/@/store/"

const CheckResultMessage = [
  "------------------------",
  "总代 ID:  saomaozb",
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
    // state
    const animate = reactive({
      play: false,
      pause: false,
      timeScale: 1
    })

    /**
     * @desc animate on complete
     */
    const onComplete = function () {
      animate.play = false
    }

    onDeactivated(() => {
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

<style lang="less" scoped>
.full-height {
  height: calc(100% - theme("height.16"));
}
.auto-height {
  height: auto;
}
</style>
