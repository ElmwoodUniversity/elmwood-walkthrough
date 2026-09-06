<script setup lang="ts">
import type { Girl, Choice } from '@/elmwood/elmwood.ts'
import { computed } from 'vue'

const props = defineProps<{
  choice: Choice
  girls: Girl[]
}>()

const borderStyle = computed(() => {
  if (props.girls.length === 0) {
    return { background: '#ffffff' }
  }
  const colours = props.girls
      .map(girl => `var(--color-${girl.colour})`)
      .join(', ')

  if (props.girls.length === 1) {
    return {
      background: `var(--color-${props.girls[0]!.colour})`,
    }
  }

  return {
    background: `linear-gradient(to right, ${colours})`,
  }
})

const backgroundStyle = computed(() => {
  const opacity = '5%'
  if (props.girls.length === 0) {
    // return { background: '#ffffff0d' }
    return { background: `rgb(255, 255, 255, ${opacity})` }
  }
  const colours = props.girls
      .map(girl => `rgba(from var(--color-${girl.colour}) r g b / ${opacity})`)
      .join(', ')

  if (props.girls.length === 1) {
    return {
      background: `rgb(from var(--color-${props.girls[0]!.colour}) r g b / ${opacity})`,
    }
  }

  return {
    background: `linear-gradient(to right, ${colours})`,
  }
})
</script>

<template>
  <div class="max-w-md w-md rounded-3xl p-0.5 my-3 mx-2" :style="borderStyle">
    <div class="rounded-[calc(1.5rem-2px)] bg-background relative">
      <div class="w-full h-full p-8" :style="backgroundStyle">
        <p class="font-bold relative" :class="{ '-top-3': choice.note }">{{ choice.optionName }}</p>
        <p class="text-sm italic absolute bottom-2 pr-8" v-if="choice.note">{{ choice.note }}</p>
      </div>
      <p class="text-xs absolute top-[-14px] left-5 bg-background p-1">{{ choice.optionId }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>