<template>
  <div>
    <div class="shadow-sm text-center">
      <h1 class="cursor-pointer pt-3 text-center text-3xl font-bold text-yellow-500" @click="$router.push('/')">Telegram Bot</h1>
      <div class="relative top-2 flex-nowrap justify-center pt-4 overflow-x-auto sm:flex">
        <Button shadow="bg-yellow-600" bg="bg-yellow-500" class="mx-1 inline-block sm:hidden" @click="showMenu = true"><i class="fas fa-bars" /></Button>
        <Button
          :style="$route.path === btn.path && btn.path !== '/' ? { display: 'inline-block' } : {}"
          shadow="bg-yellow-600"
          bg="bg-yellow-500"
          @click="() => onClick(btn)"
          class="mx-1 hidden sm:inline-block"
          :class="{ active: btn.active }"
          v-for="(btn, index) in menu"
          :key="index"
        >
          {{ btn.name }}
        </Button>
      </div>
    </div>
    <transition name="fade">
      <div v-show="showMenu" class="fixed w-full h-full z-50 top-0 bottom-0 bg-yellow-100 flex flex-col items-center justify-center">
        <Button shadow="bg-yellow-600" bg="bg-yellow-500" @click="() => onClick(btn) & (showMenu = false)" class="my-4 block" :class="{ active: btn.active }" v-for="(btn, index) in menu" :key="index">
          {{ btn.name }}
        </Button>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, watchEffect, ref } from "vue"
import { useRouter, useRoute, Router, RouteLocationNormalizedLoaded } from "vue-router"
import { menu } from "/@/store/index"

export default defineComponent({
  setup() {
    const showMenu = ref<boolean>(false)

    // router
    const router: Router = useRouter()
    const route: RouteLocationNormalizedLoaded = useRoute()

    /**
     * @desc on btn click
     */
    const onClick = function (target: LinkItem): void {
      if (target.active && target.path === "/") return
      else if (target.active) {
        target.active = false
        router.push("/")
        return
      }
      // un active
      menu.map(item => (item.active = false))
      // active
      target.active = true
      // router
      router.push(target.path)
    }

    watchEffect((): void => {
      // un active
      menu.map(item => (item.active = false))
      // find target
      const find = menu.find(target => target.path === route.path)
      if (!find) return
      // active
      find.active = true
    })

    return {
      menu,
      showMenu,
      onClick
    }
  }
})
</script>

<style scoped lang="less">
@ShadowColor: theme("colors.yellow[600]");

h1 {
  .text-shadow-loop(@i, @index) when (@index > 0) {
    // Loop-de-loop.
    .text-shadow-loop(@i, @index - 1);
    // The '+' after 'text-shadow' concatenates with comma.
    text-shadow+: 0 @i * @index 0 @ShadowColor;
  }
  .text-shadow-loop(1px, 5);
}
</style>
