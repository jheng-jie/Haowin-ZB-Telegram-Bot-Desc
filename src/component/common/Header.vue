<template>
  <div class="shadow-sm">
    <h1 class="pt-3 pb-4 text-center text-3xl font-bold text-yellow-500">Telegram Bot</h1>
    <div class="text-center">
      <div
        @click="() => onClick(btn)"
        :class="{ active: btn.active }"
        v-for="(btn, index) in list"
        :key="index"
        class="select-none cursor-pointer px-4 py-1 mx-2 btn inline-block bg-yellow-500 text-white"
      >
        {{ btn.name }}
      </div>
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
@Height: 6px;
@PressHeight: 4px;
@ShadowColor: #bb7704;

.btn {
  border-radius: 5px;
  box-shadow: 0 @Height 0 @ShadowColor;
  position: relative;
  top: 0;
  transition: top 0.3s, box-shadow 0.3s;

  &:hover {
    top: -2px;
    box-shadow: 0 @Height + 2 0 @ShadowColor;
  }

  &.active {
    top: @PressHeight;
    box-shadow: 0 @Height - @PressHeight 0 @ShadowColor;
  }

  .cursor-range {
    position: absolute;
  }
}

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
