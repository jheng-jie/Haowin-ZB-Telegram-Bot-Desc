<!--訊息的容器-->
<template>
  <div ref="parent" class="content bg-white rounded-2xl p-4 mx-auto box-border shadow-sm" :class="{ 'h-full overflow-y-auto': animate }">
    <!-- GSAP -->
    <component :is="item" v-for="(item, index) in list.value" :key="index" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, onMounted, reactive, ref, onUnmounted } from "vue"
import { TimelineLite, Power1 } from "gsap/src/all.js"

export default defineComponent({
  props: {
    animate: Boolean
  },
  setup({ animate }, { slots, emit }) {
    // slot container
    const list: Array<VNode> = reactive([])

    // slot parent
    const parent = ref(null)

    // gsap time line object
    const TimeLine: TimelineLite = new TimelineLite({
      pause: true,
      yoyo: true,
      onComplete: () => emit("complete"),
      onStart: () => emit("start")
    })

    /**
     * @desc get all child
     */
    onBeforeMount(() => (list.value = slots.default()))

    /**
     * @desc destroyed
     */
    onUnmounted(() => TimeLine.kill())

    /**
     * @desc animate init
     */
    const init = function () {
      // parent element
      const dom = parent.value
      // remove cache
      const removeCallback: object = {}

      for (let index = 0; index < dom.children.length; ++index) {
        const child = dom.children[index]
        // popup
        const self = child.getAttribute("data-self") === "1"
        TimeLine.fromTo(child, { display: "none", x: self ? 30 : -30, opacity: 0 }, { display: "", opacity: 1, duration: 0.3, x: 0, delay: 0.3 })
        // scroll
        const scroll = child.getAttribute("data-scroll") === "1"
        if (scroll) {
          TimeLine.to(dom, {
            duration: 0.3,
            delay: 0.3,
            onStart: function () {
              this.vars.scrollTop = dom.scrollHeight - dom.offsetHeight - dom.scrollTop
              this.vars.startScrollTop = dom.scrollTop
            },
            onUpdate: function () {
              dom.scrollTop = this.vars.startScrollTop + this.vars.scrollTop * (1 / 0.3) * this.time()
            }
          })
        }
        // remove key
        const removeKey = child.getAttribute("data-remove-key")
        if (removeKey && Array.isArray(removeCallback[removeKey])) {
          removeCallback[removeKey].map(dom => TimeLine.to(dom, { opacity: 0, duration: 0.3, x: -30, display: "none", delay: 0.35 }))
        }
        // remove res
        const removeRes = child.getAttribute("data-remove-res")
        if (removeRes) {
          !Array.isArray(removeCallback[removeRes]) && (removeCallback[removeRes] = [])
          removeCallback[removeRes].push(child)
        }
        // keyboard touch
        const enableTouch = child.getAttribute("data-keyboard-touch") === "1"
        if (enableTouch) {
          const touch = child.querySelector(".keyboard-touch")
          if (touch) {
            TimeLine.fromTo(touch, { display: "none", opacity: 0 }, { display: "", opacity: 1, duration: 0.2, delay: 0.35 })
            TimeLine.fromTo(touch, { scale: 1 }, { scale: 0.85, duration: 0.1, ease: Power1.easeOut })
            TimeLine.to(touch, { scale: 0.85, duration: 0.1, ease: Power1.easeOut })
            TimeLine.to(touch, { scale: 1, duration: 0.1, ease: Power1.easeOut })
            TimeLine.to(touch, { opacity: 0, duration: 0.1 })
          }
        }
        // remove keyboard
        const removeKeyboard = child.getAttribute("data-keyboard-remove") === "1"
        if (removeKeyboard) TimeLine.to(child, { opacity: 0, duration: 0.3, x: -30, display: "none", delay: 0.35 })
      }

      return TimeLine
    }

    /**
     * @desc show animate
     */
    onMounted(() => {
      animate && init().play()
    })

    return {
      list,
      parent
    }
  }
})
</script>

<style scoped lang="less">
.content {
  width: 600px;
}
.slider {
  width: 600px;
  appearance: none;
}
</style>
