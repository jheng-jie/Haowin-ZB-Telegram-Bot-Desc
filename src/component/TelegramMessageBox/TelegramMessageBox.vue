<template>
  <div class="">
    <!-- render slot -->
    <transition-group name="fade" tag="div" class="content mx-auto bg-white rounded-2xl shadow-sm p-3">
      <component v-show="show" :is="item" v-for="(item, index) in list.value" :key="index" :style="{ transitionDelay: `${index * 100}ms` }" />
    </transition-group>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, onMounted, reactive, ref } from "vue"
import TelegramMessageItem from "./TelegramMessageItem.vue"

export default defineComponent({
  components: { TelegramMessageItem },
  setup(props, { slots }) {
    const list: Array<VNode> = reactive([])
    const show = ref(false)

    /**
     * @desc get all child
     */
    onBeforeMount(() => {
      list.value = slots.default()
    })

    /**
     * @desc show animate
     */
    onMounted(() => {
      show.value = true
    })

    return {
      list,
      show
    }
  }
})
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transform: translateY(20px);
  transition: transform 0.5s ease, opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

.fade-leave-from,
.fade-enter-to {
  transform: translateY(0);
  opacity: 1;
}
</style>

<style scoped>
.content {
  width: 600px;
}
</style>
