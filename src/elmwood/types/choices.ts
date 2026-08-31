import { Girl } from '@/elmwood/elmwood.ts'
import type { SkillName, SkillPointId, WalkthroughState } from '@/elmwood/types/skills.ts'

export interface ChoiceOptions {
    includeSideGirls: boolean
    includeUnselectedForScenes: boolean
}

export interface ChoiceSkill {
    name: SkillName
    event: SkillPointId
}

export type ShowChoice = (selectedGirls: Girl[], opts: ChoiceOptions, state: WalkthroughState) => boolean

