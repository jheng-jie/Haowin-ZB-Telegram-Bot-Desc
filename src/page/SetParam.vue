<template>
  <div class="flex-1 p-2 sm:p-5 text-center overflow-y-auto box-border">
    <!--list-->
    <div v-show="!play" class="pt-3 sm:pt-0">
      <Button shadow="bg-blue-600" bg="bg-blue-500" class="mb-3 mx-1 inline-block" :class="{ active: showType === ShowTypes.key }" @click="showType = ShowTypes.key">單一設定</Button>
      <Button shadow="bg-blue-600" bg="bg-blue-500" class="mb-3 mx-1 inline-block" :class="{ active: showType === ShowTypes.json }" @click="showType = ShowTypes.json">進階設定</Button>
    </div>
    <!--單一設定-->
    <MessageBox v-show="showType === ShowTypes.key" :time-scale="timeScale" :play="play" :pause="pause" @complete="onComplete" :class="play ? 'h-full' : 'h-auto'">
      <MessageItem :self="true">
        <ScriptTag>/set</ScriptTag>
      </MessageItem>
      <MessageItem data-keyboard-remove="1" data-keyboard-touch="1">
        <UserTag>{{ name.self }}</UserTag> 設定的商戶
        <template v-slot:keyboard>
          <div class="grid grid-cols-3 text-sm">
            <div :class="{ 'ml-1': index !== 0 }" class="text-center cursor-pointer hover:bg-gray-300 truncate p-2 rounded bg-gray-200 mt-2" v-for="(item, index) in Object.keys(merchant)">
              {{ item }}
              <KeyboardTouch v-if="index === 2" data-delay="1000" />
            </div>
          </div>
        </template>
      </MessageItem>
      <MessageItem data-keyboard-remove="1" data-keyboard-touch="1">
        <UserTag>{{ name.self }}</UserTag> 請選擇要修改的參數，匹量設置請選擇進階設定
        <template v-slot:keyboard>
          <div class="grid grid-cols-6 text-sm">
            <div class="col-span-3 text-center cursor-pointer hover:bg-gray-300 truncate p-2 rounded bg-gray-200 mt-2">APP 名称 <KeyboardTouch data-delay="1000" /></div>
            <div class="ml-1 col-span-3 text-center cursor-pointer hover:bg-gray-300 truncate p-2 rounded bg-gray-200 mt-2">Bundle ID</div>
            <div class="col-span-3 text-center cursor-pointer hover:bg-gray-300 truncate p-2 rounded bg-gray-200 mt-2">腾讯云 Key</div>
            <div class="ml-1 col-span-3 text-center cursor-pointer hover:bg-gray-300 truncate p-2 rounded bg-gray-200 mt-2">腾讯云 LICENSE</div>
            <div class="col-span-2 text-center cursor-pointer hover:bg-gray-300 truncate p-2 rounded bg-gray-200 mt-2">鋻权 Key</div>
            <div class="ml-1 col-span-2 text-center cursor-pointer hover:bg-gray-300 truncate p-2 rounded bg-gray-200 mt-2">极光 Key</div>
            <div class="ml-1 col-span-2 text-center cursor-pointer hover:bg-gray-300 truncate p-2 rounded bg-gray-200 mt-2">友盟 Key</div>
            <div class="col-span-6 text-center cursor-pointer hover:bg-gray-300 truncate p-2 rounded bg-gray-200 mt-2">進階：匹量修改 JSON 格式</div>
          </div>
        </template>
      </MessageItem>
      <MessageItem data-remove-res="code">
        <UserTag>{{ name.self }}</UserTag> 请使用回覆此訊息的方式输入APP 名称<br />
        目前值為: asd
      </MessageItem>
      <MessageItem :self="true" data-remove-key="code" data-delay="1500">
        <MessageReply :name="name.bot">
          {{ name.self }} <UserTag>{{ name.self }}</UserTag> 请使用回覆此訊息的方式输入APP 名称 目前值為: asd
        </MessageReply>
        test
      </MessageItem>
      <MessageItem data-remove-res="finish">
        <pre class="text-left"><code>{{ BasicSetOutputJSON }}</code></pre>
      </MessageItem>
      <MessageItem data-remove-res="finish" data-keyboard-touch="1" data-delay="1500">
        <UserTag>{{ name.self }}</UserTag> 請確認設定資訊
        <template v-slot:keyboard>
          <div class="grid grid-cols-2 text-sm">
            <div class="cursor-pointer hover:bg-gray-300 transition-all truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center">確認<KeyboardTouch data-delay="1500" /></div>
            <div class="cursor-pointer hover:bg-gray-300 transition-all ml-1 truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center">取消</div>
          </div>
        </template>
      </MessageItem>
      <MessageItem data-remove-key="finish">
        <UserTag>{{ name.self }}</UserTag> 🟢 <ScriptTag>set_skyzhibo_20210325_143744.txt</ScriptTag> 商戶 skyzhibo 資訊修改成功
      </MessageItem>
    </MessageBox>
    <!--進階設定-->
    <MessageBox v-show="showType === ShowTypes.json" :time-scale="timeScale" :play="play" :pause="pause" @complete="onComplete" :class="play ? 'h-full' : 'h-auto'">
      <MessageItem :self="true">
        <ScriptTag>/set</ScriptTag>
      </MessageItem>
      <MessageItem data-keyboard-remove="1" data-keyboard-touch="1">
        <UserTag>{{ name.self }}</UserTag> 設定的商戶
        <template v-slot:keyboard>
          <div class="grid grid-cols-3 text-sm">
            <div :class="{ 'ml-1': index !== 0 }" class="text-center cursor-pointer hover:bg-gray-300 truncate p-2 rounded bg-gray-200 mt-2" v-for="(item, index) in Object.keys(merchant)">
              {{ item }}
              <KeyboardTouch v-if="index === 2" data-delay="1000" />
            </div>
          </div>
        </template>
      </MessageItem>
      <MessageItem data-keyboard-remove="1" data-keyboard-touch="1">
        <UserTag>{{ name.self }}</UserTag> 請選擇要修改的參數，匹量設置請選擇進階設定
        <template v-slot:keyboard>
          <div class="grid grid-cols-6 text-sm">
            <div class="col-span-3 text-center cursor-pointer hover:bg-gray-300 truncate p-2 rounded bg-gray-200 mt-2">APP 名称</div>
            <div class="ml-1 col-span-3 text-center cursor-pointer hover:bg-gray-300 truncate p-2 rounded bg-gray-200 mt-2">Bundle ID</div>
            <div class="col-span-3 text-center cursor-pointer hover:bg-gray-300 truncate p-2 rounded bg-gray-200 mt-2">腾讯云 Key</div>
            <div class="ml-1 col-span-3 text-center cursor-pointer hover:bg-gray-300 truncate p-2 rounded bg-gray-200 mt-2">腾讯云 LICENSE</div>
            <div class="col-span-2 text-center cursor-pointer hover:bg-gray-300 truncate p-2 rounded bg-gray-200 mt-2">鋻权 Key</div>
            <div class="ml-1 col-span-2 text-center cursor-pointer hover:bg-gray-300 truncate p-2 rounded bg-gray-200 mt-2">极光 Key</div>
            <div class="ml-1 col-span-2 text-center cursor-pointer hover:bg-gray-300 truncate p-2 rounded bg-gray-200 mt-2">友盟 Key</div>
            <div class="col-span-6 text-center cursor-pointer hover:bg-gray-300 truncate p-2 rounded bg-gray-200 mt-2">
              進階：匹量修改 JSON 格式
              <KeyboardTouch data-delay="1000" />
            </div>
          </div>
        </template>
      </MessageItem>
      <MessageItem data-remove-res="code">
        <UserTag>{{ name.self }}</UserTag> 请使用回覆此訊息的方式输入 JSON 格式參考 <ScriptTag>/get</ScriptTag> <ScriptTag>/params</ScriptTag>
      </MessageItem>
      <MessageItem :self="true" data-remove-key="code" data-delay="1500">
        <MessageReply :name="name.bot"> {{ name.self }} 请使用回覆此訊息的方式输入 JSON 格式參考 /get /params </MessageReply>
        <pre class="text-left"><code>{{ InputJSON }}</code></pre>
      </MessageItem>
      <MessageItem data-remove-res="finish" data-delay="1500">
        <pre class="text-left"><code>{{ OutputJSON }}</code></pre>
      </MessageItem>
      <MessageItem data-remove-res="finish" data-keyboard-touch="1" data-delay="1500">
        <UserTag>{{ name.self }}</UserTag> 請確認設定資訊
        <template v-slot:keyboard>
          <div class="grid grid-cols-2 text-sm">
            <div class="cursor-pointer hover:bg-gray-300 transition-all truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center">確認<KeyboardTouch data-delay="1500" /></div>
            <div class="cursor-pointer hover:bg-gray-300 transition-all ml-1 truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center">取消</div>
          </div>
        </template>
      </MessageItem>
      <MessageItem data-remove-key="finish">
        <UserTag>{{ name.self }}</UserTag> 🟢 <ScriptTag>set_skyzhibo_20210325_143744.txt</ScriptTag> 商戶 skyzhibo 資訊修改成功
      </MessageItem>
    </MessageBox>
  </div>
</template>

<script lang="ts">
import { defineComponent, onDeactivated, reactive, ref, toRefs } from "vue"
import { MessageBox, MessageItem, KeyboardTouch, UserTag, ScriptTag, MessageReply, MessageFile } from "/@/component/Telegram/index"
import { name, merchant, animate } from "/@/store"

const InputJSON: string = [`{`, `  "APP_NAME": "這是 APP 名稱",`, `  "APPLICATION_ID": "這是 Bundle ID",`, `  "TX_KEY": "這是騰訊密鑰",`, `  "TX_LICENSE": "這是騰訊憑證地址"`, `}`].join("\n")
const OutputJSON: string = [
  `{`,
  `  "PLATFORM": "skyzhibo",`,
  `  "APP_NAME": "這是 APP 名稱",`,
  `  "APPLICATION_ID": "這是 Bundle ID",`,
  `  "MHUI_KEY": "**",`,
  `  "TX_KEY": "這是騰訊密鑰",`,
  `  "TX_LICENSE": "這是騰訊憑證地址",`,
  `  "SCDN_KEY": "**",`,
  `  "JPUSH_KEY": "**",`,
  `  "UMENG_KEY": "**",`,
  `  "GATEWAY": [`,
  `    "**",`,
  `    "**",`,
  `    "**"`,
  `  ]`,
  `}`
].join("\n")

const BasicSetOutputJSON: string = [
  `{`,
  `  "PLATFORM": "skyzhibo",`,
  `  "APP_NAME": "test",`,
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
  `  ]`,
  `}`
].join("\n")

enum ShowTypes {
  key = 0x01,
  json = 0x02
}

export default defineComponent({
  components: { MessageBox, MessageItem, KeyboardTouch, UserTag, ScriptTag, MessageReply, MessageFile },

  setup() {
    // show type
    const showType = ref(ShowTypes.key)

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
      showType,
      name,
      merchant,
      // message
      InputJSON,
      OutputJSON,
      BasicSetOutputJSON,
      ShowTypes
    }
  }
})
</script>
