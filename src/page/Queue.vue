<template>
  <div class="flex-1 p-2 sm:p-5 text-center overflow-y-auto box-border">
    <!--list-->
    <div v-show="!play" class="pt-3 sm:pt-0">
      <Button shadow="bg-blue-600" bg="bg-blue-500" class="mb-3 mx-1 inline-block" :class="{ active: showType === ShowTypes.details }" @click="showType = ShowTypes.details">列表及詳情</Button>
      <Button shadow="bg-blue-600" bg="bg-blue-500" class="mb-3 mx-1 inline-block" :class="{ active: showType === ShowTypes.log }" @click="showType = ShowTypes.log">日誌</Button>
      <Button shadow="bg-blue-600" bg="bg-blue-500" class="mb-3 mx-1 inline-block" :class="{ active: showType === ShowTypes.waiting }" @click="showType = ShowTypes.waiting">等待中的</Button>
      <Button shadow="bg-blue-600" bg="bg-blue-500" class="mb-3 mx-1 inline-block" :class="{ active: showType === ShowTypes.stop }" @click="showType = ShowTypes.stop">停止</Button>
    </div>
    <!--停止-->
    <MessageBox v-show="showType === ShowTypes.stop" :time-scale="timeScale" :play="play" :pause="pause" @complete="onComplete" :class="play ? 'h-full' : 'h-auto'">
      <MessageItem :self="true">
        <ScriptTag>/queue_889</ScriptTag>
      </MessageItem>
      <MessageItem data-keyboard-touch="1">
        <UserTag>{{ name.self }}</UserTag>
        <pre><code v-html="Building" /></pre>
        <template v-slot:keyboard-parent>
          <div class="grid text-sm grid-cols-2">
            <div class="cursor-pointer hover:bg-gray-300 transition-all truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center">參數</div>
            <div class="ml-1 cursor-pointer hover:bg-gray-300 transition-all truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center">
              停止
              <KeyboardTouch data-delay="1000" />
            </div>
          </div>
        </template>
      </MessageItem>
      <MessageItem data-keyboard-touch="1" data-delay="1000">
        <UserTag>{{ name.self }}</UserTag> 請確認是否停止打包
        <template v-slot:keyboard-parent>
          <div class="grid text-sm grid-cols-2">
            <div class="cursor-pointer hover:bg-gray-300 transition-all truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center">
              確認
              <KeyboardTouch data-delay="1000" />
            </div>
            <div class="ml-1 cursor-pointer hover:bg-gray-300 transition-all truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center">取消</div>
          </div>
        </template>
      </MessageItem>
      <MessageItem data-keyboard-touch="1" data-delay="1000">
        <UserTag>{{ name.self }}</UserTag> 🟢 <ScriptTag>/queue_889</ScriptTag> 停止成功
      </MessageItem>
    </MessageBox>
    <!--等待中的佇列-->
    <MessageBox v-show="showType === ShowTypes.waiting" :time-scale="timeScale" :play="play" :pause="pause" @complete="onComplete" :class="play ? 'h-full' : 'h-auto'">
      <MessageItem :self="true">
        <ScriptTag>/line_up</ScriptTag>
      </MessageItem>
      <MessageItem data-keyboard-touch="1" data-delay="1000">
        <UserTag>{{ name.self }}</UserTag>
        <pre><code v-html="QueueLineUp" /></pre>
      </MessageItem>
      <MessageItem :self="true" data-delay="1000">
        <ScriptTag>/queue_862</ScriptTag>
      </MessageItem>
      <MessageItem data-keyboard-touch="1" data-delay="1000">
        <UserTag>{{ name.self }}</UserTag>
        <pre><code v-html="QueueWaitDetails" /></pre>
        <template v-slot:keyboard-parent>
          <div class="grid text-sm">
            <div class="cursor-pointer hover:bg-gray-300 transition-all truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center">停止</div>
          </div>
        </template>
      </MessageItem>
    </MessageBox>
    <!--日誌-->
    <MessageBox v-show="showType === ShowTypes.log" :time-scale="timeScale" :play="play" :pause="pause" @complete="onComplete" :class="play ? 'h-full' : 'h-auto'">
      <MessageItem :self="true">
        <ScriptTag>/queue_857</ScriptTag>
      </MessageItem>
      <MessageItem data-keyboard-touch="1" data-delay="1000">
        <UserTag>{{ name.self }}</UserTag>
        <pre><code v-html="QueueDetails" /></pre>
        <template v-slot:keyboard-parent>
          <div class="grid grid-cols-2 text-sm">
            <div class="cursor-pointer hover:bg-gray-300 transition-all truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center">參數</div>
            <div class="ml-1 cursor-pointer hover:bg-gray-300 transition-all truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center">日誌 <KeyboardTouch data-delay="1000" /></div>
          </div>
        </template>
      </MessageItem>
      <MessageItem>
        <MessageFile filename="log_ZB-iOS-Build_885.txt" />
      </MessageItem>
    </MessageBox>
    <!--列表及詳情-->
    <MessageBox v-show="showType === ShowTypes.details" :time-scale="timeScale" :play="play" :pause="pause" @complete="onComplete" :class="play ? 'h-full' : 'h-auto'">
      <MessageItem :self="true">
        <ScriptTag>/queue</ScriptTag>
      </MessageItem>
      <MessageItem>
        <UserTag>{{ name.self }}</UserTag>
        <pre><code v-html="QueueList" /></pre>
      </MessageItem>
      <MessageItem :self="true" data-delay="2000">
        <ScriptTag>/queue_857</ScriptTag>
      </MessageItem>
      <MessageItem data-keyboard-touch="1" data-delay="1000">
        <UserTag>{{ name.self }}</UserTag>
        <pre><code v-html="QueueDetails" /></pre>
        <template v-slot:keyboard-parent>
          <div class="grid grid-cols-2 text-sm">
            <div class="cursor-pointer hover:bg-gray-300 transition-all truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center">
              參數
              <KeyboardTouch data-delay="1000" />
            </div>
            <div class="ml-1 cursor-pointer hover:bg-gray-300 transition-all truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center">日誌</div>
          </div>
        </template>
      </MessageItem>
      <MessageItem data-keyboard-touch="1" data-delay="1000">
        <UserTag>{{ name.self }}</UserTag>
        <pre><code v-html="QueueParams" /></pre>
      </MessageItem>
    </MessageBox>
  </div>
</template>

<script lang="ts">
import { defineComponent, onDeactivated, ref, toRefs } from "vue"
import { MessageBox, MessageItem, KeyboardTouch, UserTag, ScriptTag, MessageReply, MessageFile } from "/@/component/Telegram/index"
import { name, animate } from "/@/store"

const QueueList: string = [
  "🟢 <b>/queue_862</b>  成功 ZB » Rsync #206 Rsync",
  "🟢 <b>/queue_861</b>  成功 ZB » Rsync #205 Rsync",
  "🟢 <b>/queue_860</b>  成功 ZB » Rsync #204 Rsync",
  "🟢 <b>/queue_857</b>  成功 ZB » ZB-Android-Build #259 Android",
  "🟢 <b>/queue_856</b>  成功 ZB » ZB-Android-Build #258 Android",
  "🟢 <b>/queue_855</b>  成功 ZB » ZB-Android-Build #257 Android",
  "⚪ <b>/queue_854</b>  已取消 ZB » ZB-Android-Build #256 Android",
  "⚪ <b>/queue_853</b>  已取消 ZB » ZB-Android-Build #255 Android",
  "🟢 <b>/queue_851</b>  成功 ZB » Rsync #203 Rsync",
  "🟢 <b>/queue_850</b>  成功 ZB » Rsync #202 Rsync",
  "🟢 <b>/queue_849</b>  成功 ZB » ZB-iOS-Build #291 iOS",
  "🟢 <b>/queue_848</b>  成功 ZB » Rsync #201 Rsync",
  "🟢 <b>/queue_847</b>  成功 ZB » Rsync #200 Rsync",
  "🟢 <b>/queue_846</b>  成功 ZB » ZB-iOS-Build #290 iOS",
  "🟢 <b>/queue_845</b>  成功 ZB » ZB-iOS-Build #289 iOS",
  "⚪ <b>/queue_844</b>  已取消 ZB » ZB-iOS-Build #288 iOS",
  "🔴 <b>/queue_843</b>  失敗 ZB » ZB-Android-Build #254 Android",
  "🟢 <b>/queue_842</b>  成功 ZB » ZB-Android-Build #253 Android",
  "🟢 <b>/queue_841</b>  成功 ZB » Rsync #199 Rsync",
  "🟢 <b>/queue_840</b>  成功 ZB » Rsync #198 Rsync"
].join("\n")

const QueueLineUp: string = ["🔵 <b>/queue_862</b> 等待中/排隊中 ZB-Android-Build", "🔵 <b>/queue_861</b> 等待中/排隊中 ZB-Android-Build", "🔵 <b>/queue_860</b> 等待中/排隊中 ZB-Android-Build"].join(
  "\n"
)

const QueueWaitDetails: string = ["佇列: <b>/queue_862</b>", "狀態: 🔵 <b>等待中/排隊中</b>", "專案: <b>ZB » ZB-Android-Build #259 Android</b>", "日期: <b>2021/03/26 03:14:03</b>"].join("\n")

const QueueDetails: string = ["佇列: <b>/queue_857</b>", "狀態: 🟢 <b>成功</b>", "專案: <b>ZB » ZB-Android-Build #259 Android</b>", "日期: <b>2021/03/26 03:14:03</b>"].join("\n")

const QueueParams: string = [
  `{`,
  `  "PLATFORM": "lovezb",`,
  `  "APP_NAME": "直播",`,
  `  "APPLICATION_ID": "**",`,
  `  "MHUI_KEY": "**",`,
  `  "TX_KEY": "**",`,
  `  "TX_LICENSE": "**",`,
  `  "SCDN_KEY": "**",`,
  `  "JPUSH_KEY": "**",`,
  `  "UMENG_KEY": "**",`,
  `  "GATEWAY": [`,
  `    "**",`,
  `    "**",`,
  `    "**"`,
  `  ],`,
  `  "CODE_TYPE": "",`,
  `  "SHARETRACE_KEY": "",`,
  `  "SHAREINSTALL_KEY": "",`,
  `  "SHAREINSTALL_VALUE": "",`,
  `  "OPENINSTALL_KEY": "",`,
  `  "TINSTALL_KEY": "",`,
  `  "DEFAULT_CODE": "",`,
  `  "FORCE_INVITE_CODE": ""`,
  `}`
].join("\n")

const Building: string = ["佇列: <b>/queue_889</b>", "狀態: 🔵 <b>打包中</b>", "專案: ZB » ZB-Android-Build #262 Android", "日期: 2021/03/26 14:52:39"].join("\n")

enum ShowTypes {
  details = 0x01,
  log = 0x02,
  waiting = 0x03,
  stop = 0x04
}

export default defineComponent({
  components: { MessageBox, MessageItem, KeyboardTouch, UserTag, ScriptTag, MessageReply, MessageFile },

  setup() {
    // show type
    const showType = ref(ShowTypes.details)

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
      // state
      ...toRefs(animate),
      showType,
      name,
      // callback
      onComplete,
      // constant
      QueueList,
      QueueWaitDetails,
      QueueDetails,
      QueueParams,
      QueueLineUp,
      Building,
      ShowTypes
    }
  }
})
</script>
