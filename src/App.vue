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
      <div class="sticky top-4">
        <div class="border-2 border-white rounded-3xl p-8">
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
        <div class="flex justify-around mt-4">
          <a href="https://www.patreon.com/c/WickedWare" target="_blank">
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" role="img"><title>Patreon</title><g transform="matrix(.47407 0 0 .47407 .383 .422)"><clipPath id="prefix__a"><path d="M0 0h1080v1080H0z"/></clipPath><g clip-path="url(#prefix__a)"><path d="M1033.05 324.45c-.19-137.9-107.59-250.92-233.6-291.7-156.48-50.64-362.86-43.3-512.28 27.2-181.1 85.46-237.99 272.66-240.11 459.36-1.74 153.5 13.58 557.79 241.62 560.67 169.44 2.15 194.67-216.18 273.07-321.33 55.78-74.81 127.6-95.94 216.01-117.82 151.95-37.61 255.51-157.53 255.29-316.38z" fill-rule="nonzero"/></g></g></svg>
          </a>
          <a href="https://discord.gg/na4eGjepug" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 365.467" role="img"><title>Discord</title><path d="M378.186 365.028s-15.794-18.865-28.956-35.099c57.473-16.232 79.41-51.77 79.41-51.77-17.989 11.846-35.099 20.182-50.454 25.885-21.938 9.213-42.997 14.917-63.617 18.866-42.118 7.898-80.726 5.703-113.631-.438-25.008-4.827-46.506-11.407-64.494-18.867-10.091-3.947-21.059-8.774-32.027-14.917-1.316-.877-2.633-1.316-3.948-2.193-.877-.438-1.316-.878-1.755-.878-7.898-4.388-12.285-7.458-12.285-7.458s21.06 34.659 76.779 51.331c-13.163 16.673-29.395 35.977-29.395 35.977C36.854 362.395 0 299.218 0 299.218 0 159.263 63.177 45.633 63.177 45.633 126.354-1.311 186.022.005 186.022.005l4.388 5.264C111.439 27.645 75.461 62.305 75.461 62.305s9.653-5.265 25.886-12.285c46.945-20.621 84.236-25.885 99.592-27.64 2.633-.439 4.827-.878 7.458-.878 26.763-3.51 57.036-4.387 88.624-.878 41.68 4.826 86.43 17.111 132.058 41.68 0 0-34.66-32.906-109.244-55.281l6.143-7.019s60.105-1.317 122.844 45.628c0 0 63.178 113.631 63.178 253.585 0-.438-36.854 62.739-133.813 65.81l-.001.001zm-43.874-203.133c-25.006 0-44.75 21.498-44.75 48.262 0 26.763 20.182 48.26 44.75 48.26 25.008 0 44.752-21.497 44.752-48.26 0-26.764-20.182-48.262-44.752-48.262zm-160.135 0c-25.008 0-44.751 21.498-44.751 48.262 0 26.763 20.182 48.26 44.751 48.26 25.007 0 44.75-21.497 44.75-48.26.439-26.763-19.742-48.262-44.75-48.262z"/></svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
