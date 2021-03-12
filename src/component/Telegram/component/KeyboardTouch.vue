<!--點擊按鈕的手指-->
<template>
  <div class="keyboard-touch" />
</template>

<style lang="less">
.keyboard-touch {
  display: inline-block;
  position: absolute;
  background-image: url("../../../asset/touch.png");
  background-size: cover;
  width: 32px;
  height: 32px;
  z-index: 10;
  animation: anime 0.5s infinite;
  transform: translateX(-24px);
}
</style>
