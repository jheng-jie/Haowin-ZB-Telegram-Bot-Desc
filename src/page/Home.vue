<template>
  <div class="flex-1 p-2 sm:p-5 text-center overflow-y-auto box-border">
    <div class="max-w-2xl w-full mx-auto bg-white shadow-sm rounded p-2 sm:p-5 mt-3">
      <h1 class="text-center font-bold py-3">打包機器人簡易說明及範例</h1>
      <h3 class="text-center text-red-500 mb-3">＊ 請使用主流瀏覽器瀏覽此網頁 ＊</h3>
      <div class="grid grid-cols-2">
        <div class="pt-3 text-right px-2"><Button shadow="bg-yellow-600" bg="bg-yellow-500" @click="$router.push('/ios-build')">iOS</Button></div>
        <div class="pt-3 text-left px-2">蘋果打包範例</div>
        <div class="pt-3 text-right px-2"><Button shadow="bg-yellow-600" bg="bg-yellow-500" @click="$router.push('/android-build')">Android</Button></div>
        <div class="pt-3 text-left px-2">安卓打包範例</div>
        <div class="pt-3 text-right px-2"><Button shadow="bg-yellow-600" bg="bg-yellow-500" @click="$router.push('/param')">Param</Button></div>
        <div class="pt-3 text-left px-2">參數修改範例</div>
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
