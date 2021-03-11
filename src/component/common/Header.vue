<template>
  <div class="shadow-sm">
    <h1 class="pt-3 pb-4 text-center text-3xl font-bold text-yellow-500">Telegram Bot</h1>
    <div class="text-center relative top-2">
      <Button shadow="bg-yellow-600" bg="bg-yellow-500" @click="() => onClick(btn)" class="mx-1" :class="{ active: btn.active }" v-for="(btn, index) in list" :key="index">{{ btn.name }}</Button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, watchEffect } from "vue"
import { useRouter, useRoute } from "vue-router"

interface LinkItem {
  name: string
  path: string
  active: boolean
}

export default defineComponent({
  setup() {
    // router
    const router = useRouter()
    const route = useRoute()

    // btn list
    const list: Array<LinkItem> = reactive([
      { name: "蘋果打包", path: "/ios-build", active: false },
      { name: "安卓打包", path: "/android-build", active: false },
      { name: "常見問題", path: "/qa", active: false }
    ])

    /**
     * @desc on btn click
     */
    const onClick = function (target: LinkItem) {
      if (target.active) return
      // un active
      list.map(item => (item.active = false))
      // active
      target.active = true
      // router
      router.push(target.path)
    }

    watchEffect(() => {
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
      onClick
    }
  }
})
</script>

<style scoped lang="less">
@ShadowColor: #d97707;

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
