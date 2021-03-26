<template>
  <div class="flex-1 p-2 sm:p-5 text-center overflow-y-auto box-border">
    <div class="max-w-2xl w-full mx-auto bg-white shadow-sm rounded p-2 sm:p-5 mt-3">
      <h1 class="text-center font-bold py-3">打包機器人簡易說明及範例</h1>
      <h3 class="text-center text-red-500 mb-3">＊ 請使用主流瀏覽器瀏覽此網頁 ＊</h3>
      <div class="grid grid-cols-2 mb-3">
        <div class="col-span-2 border border-dashed border-2 mt-4 mb-3" />
        <template v-for="item in menu" :key="item.path">
          <div v-show="item.path !== '/'" class="pt-3 text-right px-2"><Button shadow="bg-yellow-600" bg="bg-yellow-500" @click="$router.push(item.path)">{{ item.name }}</Button></div>
          <div v-show="item.path !== '/'" class="pt-3 text-left px-2">{{ item.desc }}</div>
        </template>
        <div class="col-span-2 border border-dashed border-2 mt-4 mb-3" />
        <div class="pt-3 text-right px-2"><Button shadow="bg-red-600" bg="bg-red-500"><i class="fas fa-stop" /></Button></div>
        <div class="pt-3 text-left px-2">取消播放</div>
        <div class="pt-3 text-right px-2"><Button shadow="bg-red-600" bg="bg-red-500"><i class="fas fa-play" /></Button></div>
        <div class="pt-3 text-left px-2">播放模擬訊息</div>
        <div class="pt-3 text-right px-2"><Button shadow="bg-red-600" bg="bg-red-500"><i class="fas fa-forward" /></Button></div>
        <div class="pt-3 text-left px-2">加速</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { menu } from "/@/store"
</script>
