<template>
  <div class="flex-1 p-2 sm:p-5 text-center overflow-y-auto box-border">
    <!--list-->
    <div v-show="!play" class="mb-3">
      <Button shadow="bg-blue-600" bg="bg-blue-500" class="mx-1 inline-block" :class="{ active: showType === ShowTypes.list }" @click="showType = ShowTypes.list">看列表</Button>
      <Button shadow="bg-blue-600" bg="bg-blue-500" class="mx-1 inline-block" :class="{ active: showType === ShowTypes.delete }" @click="showType = ShowTypes.delete">刪除檔案</Button>
      <Button shadow="bg-blue-600" bg="bg-blue-500" class="mx-1 inline-block" :class="{ active: showType === ShowTypes.folder }" @click="showType = ShowTypes.folder">刪除資料夾</Button>
    </div>
    <!--刪資料夾-->
    <MessageBox v-show="showType === ShowTypes.folder" :time-scale="timeScale" :play="play" :pause="pause" @complete="onComplete" :class="play ? 'h-full' : 'h-auto'">
      <MessageItem data-remove-res="remove" data-keyboard-touch="1">
        <UserTag>{{ name.self }}</UserTag>
        <pre><code v-html="ListApkDir" /></pre>
        <template v-slot:keyboard-parent>
          <div class="grid grid-cols-2 text-sm">
            <div class="cursor-pointer hover:bg-gray-300 transition-all truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center">📁 quanqiu.gaowu</div>
            <div class="ml-1 cursor-pointer hover:bg-gray-300 transition-all truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center">📁 oujin.jin</div>
            <div class="cursor-pointer hover:bg-gray-300 transition-all truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center">
              🗑️ 删除
              <KeyboardTouch data-delay="1000" />
            </div>
            <div class="ml-1 cursor-pointer hover:bg-gray-300 transition-all truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center">❌ 關閉</div>
          </div>
        </template>
      </MessageItem>
      <MessageItem data-keyboard-remove="1" data-keyboard-touch="1" data-delay="1000">
        <UserTag>{{ name.self }}</UserTag
        ><br />
        🗑️ 請選擇刪除類型
        <template v-slot:keyboard>
          <div class="grid grid-cols-2 text-sm">
            <div class="col-span-2 cursor-pointer hover:bg-gray-300 transition-all truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center">🗑️全部刪除(📁📱)</div>
            <div class="cursor-pointer hover:bg-gray-300 transition-all truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center">
              🗑️ 刪除 📁 quanqiu.gaowu
              <KeyboardTouch data-delay="1000" />
            </div>
            <div class="ml-1 cursor-pointer hover:bg-gray-300 transition-all truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center">🗑️ 刪除 📁 oujin.jin</div>
            <div class="col-span-2 cursor-pointer hover:bg-gray-300 transition-all truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center">取消</div>
          </div>
        </template>
      </MessageItem>
      <MessageItem data-delay="1000" data-keyboard-remove="1" data-keyboard-touch="1">
        🗑️ 二次確認，預計刪除 <ScriptTag>/apk/</ScriptTag> 內的 <ScriptTag>/quanqiu.gaowu</ScriptTag> 夾下所有檔案
        <template v-slot:keyboard-parent>
          <div class="grid grid-cols-2 text-sm">
            <div class="cursor-pointer hover:bg-gray-300 transition-all truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center">
              確認
              <KeyboardTouch data-delay="1000" />
            </div>
            <div class="ml-1 cursor-pointer hover:bg-gray-300 transition-all truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center">取消</div>
          </div>
        </template>
      </MessageItem>
      <MessageItem data-remove-key="remove">
        <UserTag>{{ name.self }}</UserTag> 🟢 刪除成功 <ScriptTag>delete_skyzhibo_20210325_181211.txt</ScriptTag>，執行 <ScriptTag>/sync</ScriptTag> 同步
      </MessageItem>
      <MessageItem data-remove-res="remove" data-keyboard-touch="1">
        <UserTag>{{ name.self }}</UserTag>
        <pre><code v-html="ListApkDirRemove" /></pre>
        <template v-slot:keyboard-parent>
          <div class="grid grid-cols-2 text-sm">
            <div class="col-span-2 cursor-pointer hover:bg-gray-300 transition-all truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center">📁 quanqiu.gaowu</div>
            <div class="cursor-pointer hover:bg-gray-300 transition-all truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center">🗑️ 删除</div>
            <div class="ml-1 cursor-pointer hover:bg-gray-300 transition-all truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center">❌ 關閉</div>
          </div>
        </template>
      </MessageItem>
    </MessageBox>
    <!--刪除檔案-->
    <MessageBox v-show="showType === ShowTypes.delete" :time-scale="timeScale" :play="play" :pause="pause" @complete="onComplete" :class="play ? 'h-full' : 'h-auto'">
      <MessageItem data-remove-res="remove" data-keyboard-touch="1">
        <UserTag>{{ name.self }}</UserTag>
        <pre><code v-html="ListBundleDir" /></pre>
        <template v-slot:keyboard-parent>
          <div class="flex text-sm">
            <div v-for="index in 5" class="cursor-pointer hover:bg-gray-300 transition-all truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center" :class="{ 'ml-1': index !== 1 }">
              {{ index === 1 ? `《1》` : index }}
            </div>
          </div>
          <div class="flex text-sm">
            <div class="cursor-pointer hover:bg-gray-300 transition-all truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center">上一層</div>
            <div class="ml-1 cursor-pointer hover:bg-gray-300 transition-all truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center">
              🗑️ 删除
              <KeyboardTouch data-delay="1000" />
            </div>
            <div class="ml-1 cursor-pointer hover:bg-gray-300 transition-all truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center">❌ 關閉</div>
          </div>
        </template>
      </MessageItem>
      <MessageItem data-keyboard-remove="1" data-keyboard-touch="1" data-delay="1000">
        <UserTag>{{ name.self }}</UserTag
        ><br />
        🗑️ 請選擇刪除類型
        <template v-slot:keyboard>
          <div class="grid grid-cols-2 text-sm">
            <div class="cursor-pointer hover:bg-gray-300 transition-all truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center">🗑️全部刪除(📁📱)</div>
            <div class="ml-1 cursor-pointer hover:bg-gray-300 transition-all truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center">
              🗑️只刪除檔案(📱)
              <KeyboardTouch data-delay="1000" />
            </div>
            <div class="col-span-2 cursor-pointer hover:bg-gray-300 transition-all truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center">取消</div>
          </div>
        </template>
      </MessageItem>
      <MessageItem data-delay="1000" data-keyboard-remove="1" data-keyboard-touch="1">
        🗑️ 二次確認，預計刪除 <ScriptTag>/apk/quanqiu.gaowu</ScriptTag> 內的資料夾以外所有檔案
        <template v-slot:keyboard-parent>
          <div class="grid grid-cols-2 text-sm">
            <div class="cursor-pointer hover:bg-gray-300 transition-all truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center">
              確認
              <KeyboardTouch data-delay="1000" />
            </div>
            <div class="ml-1 cursor-pointer hover:bg-gray-300 transition-all truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center">取消</div>
          </div>
        </template>
      </MessageItem>
      <MessageItem data-remove-key="remove">
        <UserTag>{{ name.self }}</UserTag> 🟢 刪除成功 <ScriptTag>delete_skyzhibo_20210325_175759.txt</ScriptTag>，執行 <ScriptTag>/sync</ScriptTag> 同步
      </MessageItem>
      <MessageItem data-remove-res="remove" data-keyboard-touch="1">
        <UserTag>{{ name.self }}</UserTag>
        <pre><code v-html="ListRemoveResult" /></pre>
        <template v-slot:keyboard-parent>
          <div class="flex text-sm">
            <div class="cursor-pointer hover:bg-gray-300 transition-all truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center">❌ 關閉</div>
          </div>
        </template>
      </MessageItem>
    </MessageBox>
    <!--看列表-->
    <MessageBox v-show="showType === ShowTypes.list" :time-scale="timeScale" :play="play" :pause="pause" @complete="onComplete" :class="play ? 'full-height' : 'auto-height'">
      <MessageItem :self="true">
        <ScriptTag>/ls</ScriptTag>
      </MessageItem>
      <MessageItem data-keyboard-remove="1" data-keyboard-touch="1">
        <UserTag>{{ name.self }}</UserTag>
        <pre><code v-html="ListRootDir" /></pre>
        <template v-slot:keyboard-parent>
          <div class="grid grid-cols-2 text-sm">
            <div class="cursor-pointer hover:bg-gray-300 transition-all truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center">📁 ipa</div>
            <div class="ml-1 cursor-pointer hover:bg-gray-300 transition-all truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center">📁 apk<KeyboardTouch data-delay="1000" /></div>
            <div class="cursor-pointer hover:bg-gray-300 transition-all truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center">🗑️ 删除</div>
            <div class="ml-1 cursor-pointer hover:bg-gray-300 transition-all truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center">❌ 關閉</div>
          </div>
        </template>
      </MessageItem>
      <MessageItem data-keyboard-remove="1" data-keyboard-touch="1">
        <UserTag>{{ name.self }}</UserTag>
        <pre><code v-html="ListApkDir" /></pre>
        <template v-slot:keyboard-parent>
          <div class="grid grid-cols-2 text-sm">
            <div class="cursor-pointer hover:bg-gray-300 transition-all truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center">
              📁 quanqiu.gaowu
              <KeyboardTouch data-delay="1000" />
            </div>
            <div class="ml-1 cursor-pointer hover:bg-gray-300 transition-all truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center">📁 oujin.jin</div>
            <div class="cursor-pointer hover:bg-gray-300 transition-all truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center">🗑️ 删除</div>
            <div class="ml-1 cursor-pointer hover:bg-gray-300 transition-all truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center">❌ 關閉</div>
          </div>
        </template>
      </MessageItem>
      <MessageItem data-keyboard-touch="1">
        <UserTag>{{ name.self }}</UserTag>
        <pre><code v-html="ListBundleDir" /></pre>
        <template v-slot:keyboard-parent>
          <div class="flex text-sm">
            <div v-for="index in 5" class="cursor-pointer hover:bg-gray-300 transition-all truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center" :class="{ 'ml-1': index !== 1 }">
              {{ index === 1 ? `《1》` : index }}
            </div>
          </div>
          <div class="flex text-sm">
            <div class="cursor-pointer hover:bg-gray-300 transition-all truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center">上一層</div>
            <div class="ml-1 cursor-pointer hover:bg-gray-300 transition-all truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center">🗑️ 删除</div>
            <div class="ml-1 cursor-pointer hover:bg-gray-300 transition-all truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center">❌ 關閉</div>
          </div>
        </template>
      </MessageItem>
    </MessageBox>
  </div>
</template>

<script lang="ts">
import { defineComponent, onDeactivated, reactive, toRefs, ref } from "vue"
import { MessageBox, MessageItem, KeyboardTouch, UserTag, ScriptTag, MessageReply, MessageFile } from "/@/component/Telegram/index"
import { name, animate } from "/@/store"

const ListRootDir: string = ["--------- 《 數量: 2 位置: <b>/</b> 》 ---------", "📁 <b>ipa</b>", "📁 <b>apk</b>", "---------------------------------------"].join("\n")

const ListApkDir: string = ["-------- 《 數量: 2 位置: <b>/apk</b> 》 --------", "📁 <b>quanqiu.gaowu</b>", "📁 <b>oujin.jin</b>", "----------------------------------------"].join("\n")

const ListApkDirRemove: string = ["-------- 《 數量: 1 位置: <b>/apk</b> 》 --------", "📁 <b>oujin.jin</b>", "----------------------------------------"].join("\n")

const ListBundleDir: string = [
  "---《 數量: 140 位置: <b>/apk/quanqiu.gaowu</b> 》 ---",
  "📱 <b>skyzhibo_d30a19a9b9a2496e_v1.19.0.apk</b>",
  "📱 <b>skyzhibo_c0ccdfe66db6bbff_v1.19.0.apk</b>",
  "📱 <b>skyzhibo_awgk77_v1.19.0.apk</b>",
  "📱 <b>skyzhibo_2GOLGT_v1.19.0.apk</b>",
  "📱 <b>...</b>",
  "----------------------------------------------"
].join("\n")

const ListRemoveResult: string = ["---《 數量: 0 位置: <b>/apk/quanqiu.gaowu</b> 》 ---", "-------------------------------------------"].join("\n")

enum ShowTypes {
  list = 0x01,
  delete = 0x02,
  folder = 0x03
}
// H5-Jie 🟢 刪除成功 delete_saomaozb_20210325_133320.txt，執行 /sync 同步

export default defineComponent({
  components: { MessageBox, MessageItem, KeyboardTouch, UserTag, ScriptTag, MessageReply, MessageFile },

  setup() {
    // show type
    const showType = ref(ShowTypes.list)

    /**
     * @desc animate on complete
     */
    const onComplete = function (): void {
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
      showType,
      name,
      // constant
      ListRootDir,
      ListApkDir,
      ListApkDirRemove,
      ListBundleDir,
      ListRemoveResult,
      ShowTypes
    }
  }
})
</script>
