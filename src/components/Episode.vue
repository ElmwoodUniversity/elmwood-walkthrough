<script setup lang="ts">
import ChoiceEl from '@/components/ChoiceEl.vue'
import type { Girl } from '@/elmwood/elmwood.ts'
import { choices, conflictingChoices } from '@/elmwood/choices.ts'
import type { ChoiceOptions } from '@/elmwood/types/choices.ts'
import type { SkillPlan } from '@/elmwood/types/skills.ts'

defineProps<{
  episode: number
  selectedGirls: Girl[]
  choiceOptions: ChoiceOptions
  skillPlan: SkillPlan
}>()
</script>

<template>
  <div class="col-span-12">
    <h2 class="text-elmwood text-xl font-bold relative bg-background top-[14px] left-5 px-1 inline-block">Episode {{ episode }}</h2>
    <div class="grid grid-cols-12 rounded-3xl border-2 border-elmwood py-2">
      <template v-for="choice in choices.filter(ch => ch.episode === episode)">
        <div v-if="choice.doShow(selectedGirls, choiceOptions, { skillPlan })" class="w-full flex justify-center"
             :class="{
                    'col-span-3': choice.conflictingSize(selectedGirls, conflictingChoices, choiceOptions, { skillPlan }) === 4,
                    'col-span-4': choice.conflictingSize(selectedGirls, conflictingChoices, choiceOptions, { skillPlan }) === 3,
                    'col-span-6': choice.conflictingSize(selectedGirls, conflictingChoices, choiceOptions, { skillPlan }) === 2,
                    'col-span-12': !choice.isConflicting(selectedGirls, conflictingChoices, choiceOptions, { skillPlan }),
                    }">
          <ChoiceEl :choice="choice"
                    :girls="selectedGirls.filter(girl => girl.choices.map(ch => ch.optionId).includes(choice.optionId))" />
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>

</style>