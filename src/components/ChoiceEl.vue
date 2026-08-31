<script setup lang="ts">
import type { Girl, Choice } from '@/elmwood/elmwood.ts'
import { computed } from 'vue'

const props = defineProps<{
  choice: Choice
  girls: Girl[]
}>()

const possibleClasses = [
  'border-ashley',
  'border-chelsea',
  'border-chloe',
  'border-ella',
  'border-florence',
  'border-jordan',
  'border-katie',
  'border-lydia',
  'border-molly',
  'border-naomi',
  'border-nina',
  'border-paris',
  'border-saki',
  'border-selina',
  'border-tasha',
  'border-taylor',
  'border-veronika',
  'border-violet',
]

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
</script>

<template>
  <div class="max-w-md w-md rounded-3xl p-0.5 my-3 mx-2" :style="borderStyle">
    <div class="rounded-[calc(1.5rem-2px)] p-8 bg-background relative">
      <p class="font-bold relative" :class="{ '-top-3': choice.note }">{{ choice.optionName }}</p>
      <p class="text-sm italic absolute bottom-2 pr-8" v-if="choice.note">{{ choice.note }}</p>
      <p class="text-xs absolute top-[-14px] left-5 bg-background p-1">{{ choice.optionId }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>