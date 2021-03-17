<!--訊息的容器-->
<template>
  <div ref="parent" class="max-w-2xl w-full bg-white rounded sm:rounded-2xl p-2 sm:p-4 mx-auto box-border shadow-sm" :class="{ 'h-full overflow-y-auto': play }">
    <!-- GSAP -->
    <component :is="item" v-for="(item, index) in list" :key="index" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, onMounted, reactive, ref, onUnmounted, watchEffect, VNode } from "vue"
import gsap from "gsap"
import throttle from "lodash-es/throttle"
// @ts-ignore
import { TimelineLite, Power1, CSSPlugin } from "gsap/src/all.js"

export default defineComponent({
  props: {
    play: Boolean,
    pause: Boolean,
    timeScale: Number
  },
  setup(props, { slots, emit }) {
    gsap.registerPlugin(CSSPlugin)

    // slot container
    const list = reactive<Array<VNode>>([])

    // slot parent
    const parent = ref<HTMLElement>()

    // gsap time line object
    const TimeLine: TimelineLite = new TimelineLite({
      pause: true,
      yoyo: true,
      onUpdate: throttle(
        () => {
          const dom = parent.value
          if (!dom) return
          const { scrollHeight = 0, offsetHeight = 0, scrollTop = 0 } = dom
          const less = scrollHeight - offsetHeight
          if (less > 0 && scrollTop !== less) dom.scrollTop = less
        },
        500,
        {
          leading: false,
          trailing: true
        }
      ),
      onComplete: () => emit("complete"),
      onStart: () => emit("start")
    })

    /**
     * @desc get all child
     */
    onBeforeMount(() => slots.default && slots.default().map(child => list.push(child)))

    /**
     * @desc destroyed
     */
    onUnmounted(() => TimeLine.kill())

    /**
     * @desc on play
     */
    watchEffect(() => {
      const { play } = props
      TimeLine.progress(!play ? 1 : 0)
      if (play) TimeLine.play()
      else TimeLine.pause()
    })

    /**
     * @desc on pause
     */
    watchEffect(() => {
      const { pause } = props
      if (!pause) TimeLine.play()
      else TimeLine.pause()
    })

    /**
     * @desc on time scale change
     */
    watchEffect(() => {
      const { timeScale } = props
      TimeLine.timeScale(timeScale)
    })

    /**
     * @desc animate init
     */
    const init = function () {
      // parent element
      const dom: HTMLElement | undefined = parent.value
      if (!dom) return

      // remove cache
      const removeCallback: any = {}
      const remove: Array<HTMLElement> = []

      for (let index = 0; index < dom.children.length; ++index) {
        const child: HTMLElement = dom.children[index] as HTMLElement
        const delay = parseInt(child.getAttribute("data-delay") || "")
        // popup
        const self = child.getAttribute("data-self") === "1"
        TimeLine.fromTo(child, { display: "none", x: self ? 30 : -30, opacity: 0 }, { display: "", opacity: 1, duration: 0.3, x: 0, delay: isNaN(delay) ? 0.5 : delay * 0.001 })
        // remove key
        const removeKey = child.getAttribute("data-remove-key")
        if (removeKey && Array.isArray(removeCallback[removeKey])) {
          removeCallback[removeKey].map((dom: HTMLElement) => TimeLine.to(dom, { opacity: 0, duration: 0.3, x: -30, display: "none", delay: 0.5 }))
          remove.push.apply(remove, removeCallback[removeKey])
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
            const delay = parseInt(touch.getAttribute("data-delay") || "")
            TimeLine.fromTo(touch, { display: "none", opacity: 0 }, { display: "", opacity: 1, duration: 0.2, delay: isNaN(delay) ? 0.5 : delay * 0.001 })
            TimeLine.fromTo(touch, { scale: 1 }, { scale: 0.85, duration: 0.1, ease: Power1.easeOut })
            TimeLine.to(touch, { scale: 0.85, duration: 0.1, ease: Power1.easeOut })
            TimeLine.to(touch, { scale: 1, duration: 0.1, ease: Power1.easeOut })
          }
        }
        // remove keyboard
        const removeKeyboard = child.getAttribute("data-keyboard-remove") === "1"
        if (removeKeyboard) {
          TimeLine.to(child, { opacity: 0, duration: 0.3, x: -30, display: "none", delay: 0.5 })
          remove.push(child)
        }
      }
      TimeLine.to(remove, { opacity: 1, duration: 0.3, display: "", delay: 5, x: 0 })

      if (props.play) {
        TimeLine.play()
      } else {
        TimeLine.progress(1)
      }

      return TimeLine
    }

    /**
     * @desc show animate
     */
    onMounted(() => {
      init()
    })

    return {
      list,
      parent
    }
  }
})
</script>
