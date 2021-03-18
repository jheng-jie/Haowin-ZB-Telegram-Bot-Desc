<template>
  <div class="flex justify-center items-center">
    <!--stop button-->
    <Button :shadow="play ? 'bg-red-600' : 'bg-gray-600'" :bg="play ? 'bg-red-500' : 'bg-gray-500'" @click="play = false" class="mr-1">
      <i class="fas fa-stop" />
    </Button>

    <!--play button-->
    <Button :shadow="'bg-red-600'" :bg="'bg-red-500'" class="mr-1" :class="{ active: play }" @click="onPlayClick">
      <i :class="{ 'fa-play': !play || pause, 'fa-pause': play && !pause }" class="fas" />
    </Button>

    <!--fast forward button-->
    <Button :shadow="play ? 'bg-red-600' : 'bg-gray-600'" :bg="play ? 'bg-red-500' : 'bg-gray-500'" :class="{ active: play && timeScale !== 1 }" @click="onTimeScaleClick">
      <i class="fas fa-forward" v-if="timeScale !== 3" />
      <i class="fas fa-fast-forward" v-if="timeScale === 3" />
    </Button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, watch, toRefs } from "vue"

interface Props {
  play: boolean
  pause: boolean
  timeScale: number
}

export default defineComponent({
  props: {
    play: Boolean,
    pause: Boolean,
    timeScale: Number
  },
  setup(props, { emit }) {
    const { play = false, timeScale = 1, pause = false } = props
    const inputValue = reactive({
      play,
      pause,
      timeScale
    }) as Props

    watch(
      () => inputValue.play,
      value => emit("update:play", value)
    )

    watch(
      () => inputValue.pause,
      value => emit("update:pause", value)
    )

    watch(
      () => inputValue.timeScale,
      value => emit("update:timeScale", value)
    )

    watch(
      () => props.play,
      value => {
        inputValue.play = value
      }
    )

    watch(
      () => props.pause,
      value => {
        inputValue.pause = value
      }
    )

    watch(
      () => props.timeScale,
      (value: any) => {
        inputValue.timeScale = value as number
      }
    )

    /**
     * @desc fast forward
     */
    const onTimeScaleClick = function (): void {
      if (inputValue.timeScale === 1) {
        inputValue.timeScale = 2
      } else if (inputValue.timeScale === 2) {
        inputValue.timeScale = 3
      } else {
        inputValue.timeScale = 1
      }
    }

    /**
     * @desc on play click
     */
    const onPlayClick = function (): void {
      if (!inputValue.play) {
        inputValue.play = true
        inputValue.pause = false
        return
      }
      inputValue.pause = !inputValue.pause
    }

    return {
      ...toRefs(inputValue),
      onTimeScaleClick,
      onPlayClick
    }
  }
})
</script>
