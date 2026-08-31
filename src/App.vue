<script setup lang="ts">
import type { Girl, ChoiceOptions } from '@/elmwood/elmwood.ts'
import { choices } from '@/elmwood/choices.ts'
import { girls } from '@/elmwood/girls'
import { ref } from 'vue'
import Episode from '@/components/Episode.vue'

const selectedGirls = ref<Girl[]>([])
const choiceOptions = ref<ChoiceOptions>({
  includeSideGirls: false,
  includeUnselectedForScenes: true
})
const episodes = choices.map(ch => ch.episode).reduce((prev: number[], cur: number) => {
  if (!prev.includes(cur)) prev.push(cur)
  return prev
}, [])

const toggleGirl = (girl: Girl): void => {
  const index = selectedGirls.value.findIndex(g => g.shortName === girl.shortName)

  if (index === -1) {
    selectedGirls.value.push(girl)
  } else {
    selectedGirls.value.splice(index, 1)
  }
}

const isSelectedGirl = (girl: Girl) =>
    !!selectedGirls.value.find(g => g.shortName === girl.shortName)

const preloadedClasses = [
  'text-ashley',
  'text-chelsea',
  'text-chloe',
  'text-ella',
  'text-florence',
  'text-jordan',
  'text-katie',
  'text-lydia',
  'text-molly',
  'text-naomi',
  'text-nina',
  'text-paris',
  'text-saki',
  'text-selina',
  'text-tasha',
  'text-taylor',
  'text-veronika',
  'text-violet',
]
</script>

<template>
  <div class="grid grid-cols-5 gap-6 w-7xl">
    <div class="col-span-4">
      <div class="grid grid-cols-12">
        <div v-if="selectedGirls.length === 0" class="w-full flex justify-center col-span-12">
          <div class="max-w-md w-sm rounded-3xl p-0.5 my-4 mx-2 bg-white">
            <div class="rounded-[calc(1.5rem-2px)] p-8 bg-background relative">
              <p class="font-bold">Select girls to create your path</p>
            </div>
          </div>
        </div>
        <template v-for="episode in episodes" v-else>
          <Episode :episode="episode" :selected-girls="selectedGirls" :choice-options="choiceOptions" />
        </template>
      </div>
    </div>
    <div>
      <div class="border-2 border-white rounded-3xl p-8 sticky top-4">
        <p class="text-lg border-b border-white text-white mb-2">Girls</p>
        <ul class="mb-4">
          <li v-for="girl in girls" @click="toggleGirl(girl)" class="cursor-pointer"
              :class="{ 'font-bold': isSelectedGirl(girl), [`text-${girl.colour}`]: isSelectedGirl(girl) }">
            {{ girl.shortName }}
          </li>
        </ul>
        <p class="text-lg border-b border-white text-white mb-2">Options</p>
        <ul class="mb-4">
          <li class="cursor-pointer"
              :class="{ 'font-bold': choiceOptions.includeSideGirls }"
              @click="choiceOptions.includeSideGirls = !choiceOptions.includeSideGirls">Include Side Girls</li>
          <li class="cursor-pointer"
              :class="{ 'font-bold': choiceOptions.includeUnselectedForScenes }"
              @click="choiceOptions.includeUnselectedForScenes = !choiceOptions.includeUnselectedForScenes">Include Unselected for Scenes</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
