<template>
  <div>
    <div class="shadow-sm text-center">
      <h1 class="cursor-pointer pt-3 text-center text-3xl font-bold text-yellow-500" @click="$router.push('/')">Telegram Bot</h1>
      <div class="relative top-2 flex-nowrap justify-center pt-4 overflow-x-auto sm:flex">
        <Button shadow="bg-yellow-600" bg="bg-yellow-500" class="mx-1 inline-block sm:hidden" @click="menu = true"><i class="fas fa-bars" /></Button>
        <Button
          :style="$route.path === btn.path && btn.path !== '/' ? { display: 'inline-block' } : {}"
          shadow="bg-yellow-600"
          bg="bg-yellow-500"
          @click="() => onClick(btn)"
          class="mx-1 hidden sm:inline-block"
          :class="{ active: btn.active }"
          v-for="(btn, index) in list"
          :key="index"
        >
          {{ btn.name }}
        </Button>
      </div>
    </div>
    <transition name="fade">
      <div v-show="menu" class="fixed w-full h-full z-50 top-0 bottom-0 bg-yellow-100 flex flex-col items-center justify-center">
        <Button shadow="bg-yellow-600" bg="bg-yellow-500" @click="() => onClick(btn) & (menu = false)" class="my-4 block" :class="{ active: btn.active }" v-for="(btn, index) in list" :key="index">
          {{ btn.name }}
        </Button>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, watchEffect, ref } from "vue"
import { useRouter, useRoute, Router, RouteLocationNormalizedLoaded } from "vue-router"

interface LinkItem {
  name: string
  path: string
  active: boolean
}

export default defineComponent({
  setup() {
    const menu = ref<boolean>(false)

    // router
    const router: Router = useRouter()
    const route: RouteLocationNormalizedLoaded = useRoute()

    // btn list
    const list: Array<LinkItem> = reactive([
      { name: "Home", path: "/", active: false },
      { name: "iOS", path: "/ios-build", active: false },
      { name: "Android", path: "/android-build", active: false },
      { name: "Params", path: "/param", active: false }
    ])

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
      list.map(item => (item.active = false))
      // active
      target.active = true
      // router
      router.push(target.path)
    }

    watchEffect((): void => {
      // un active
      list.map(item => (item.active = false))
      // find target
      const find = list.find(target => target.path === route.path)
      if (!find) return
      // active
      find.active = true
    })

    return {
      list,
      menu,
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
