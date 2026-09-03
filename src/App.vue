<script setup lang="ts">
import type { Girl } from '@/elmwood/elmwood.ts'
import { choices } from '@/elmwood/choices.ts'
import { girls, sideGirls } from '@/elmwood/girls'
import type { ChoiceOptions } from '@/elmwood/types/choices.ts'
import { computed, ref } from 'vue'
import Episode from '@/components/Episode.vue'
import { buildSkillPlan } from '@/elmwood/skills.ts'

const selectedGirls = ref<Girl[]>([])
const choiceOptions = ref<ChoiceOptions>({
  includeSideGirls: true,
  includeUnselectedForScenes: true,
  forceRecommendedGroups: false,
})
const episodes = choices.map(ch => ch.episode).reduce((prev: number[], cur: number) => {
  if (!prev.includes(cur)) prev.push(cur)
  return prev
}, [])

const toggleGirl = (girl: Girl): void => {
  if (choiceOptions.value.forceRecommendedGroups) {
    selectedGirls.value.splice(0)
  }

  const index = selectedGirls.value.findIndex(g => g.shortName === girl.shortName)

  if (index === -1) {
    selectedGirls.value.push(girl)
  } else {
    selectedGirls.value.splice(index, 1)
  }

  if (choiceOptions.value.forceRecommendedGroups) {
    selectedGirls.value.push(...girl.recommendedGirls.map(name => [...girls, ...sideGirls].find(g => g.shortName === name)!))
  }
}

const toggleForceRecommendedGroups = () => {
  if (choiceOptions.value.forceRecommendedGroups) {
    choiceOptions.value.forceRecommendedGroups = false
  } else {
    choiceOptions.value.forceRecommendedGroups = true
    selectedGirls.value.splice(0)
  }
}

const isSelectedGirl = (girl: Girl) =>
    !!selectedGirls.value.find(g => g.shortName === girl.shortName)

const incompatibleGirls = computed(() => {
  const incompatibilities: Girl[][] = []
  for (const girl of selectedGirls.value) {
    if (!girl.incompatibleGirls.length) {
      continue
    }

    const incompatible = [girl]
    for (const g2 of selectedGirls.value) {
      if (girl.incompatibleGirls.includes(g2.shortName)) {
        incompatible.push(g2)
      }
    }
    if (incompatible.length > 1) {
      incompatibilities.push(incompatible)
    }
  }
  return incompatibilities
})

const skillPlan = computed(() => buildSkillPlan(selectedGirls.value))

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
  'text-kat',
  'text-vivian',
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
              <p v-if="choiceOptions.forceRecommendedGroups">When you select a girl, their recommended girls will also get selected.</p>
            </div>
          </div>
        </div>
        <div v-else-if="incompatibleGirls.length > 0" class="w-full flex justify-center col-span-12">
          <div class="max-w-md w-fit rounded-3xl p-0.5 my-4 mx-2 bg-red-600">
            <div class="rounded-[calc(1.5rem-2px)] p-8 bg-background relative">
              <p class="font-bold">{{ incompatibleGirls.length }} of your selections are incompatible with each other.</p>
              <ul>
                <li v-for="incompatibility in incompatibleGirls">{{ incompatibility.slice(1).map(g => g.shortName).join(', ') }} {{ incompatibility.length == 2 ? 'is' : 'are' }} incompatible with {{ incompatibility[0]!.shortName }}</li>
              </ul>
            </div>
          </div>
        </div>
        <template v-for="episode in episodes" v-else>
          <Episode :episode="episode" :selected-girls="selectedGirls"
                   :choice-options="choiceOptions" :skill-plan="skillPlan" />
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
        <p class="text-lg border-b border-white text-white mb-2">Side Girls</p>
        <ul class="mb-4">
          <li v-for="girl in sideGirls" @click="toggleGirl(girl)" class="cursor-pointer"
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
          <li class="cursor-pointer"
              :class="{ 'font-bold': choiceOptions.forceRecommendedGroups }"
              @click="toggleForceRecommendedGroups()">Force recommended groups</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
