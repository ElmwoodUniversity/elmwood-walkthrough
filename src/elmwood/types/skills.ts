import { Choice, Girl } from '@/elmwood/elmwood.ts'
import type { ChoiceOptions } from '@/elmwood/types/choices.ts'

export type SkillName =
    | 'Scholar' | 'Persuasion' | 'Deception' | 'Lie Detection'
    | 'Ripped' | 'Warrior' | 'Earthquake'
    | 'Dexterity' | 'Oral Mastery' | 'G-Spot Penetration' | 'Anal Orgasms'
    | 'Daddy' | 'Corruption' | 'Ownership'
    | 'MILF Enthusiast' | 'MILF Enjoyer' | 'MILF Expert' | 'MILF Domination'
    | 'Warm Cum' | 'Soothing Cum' | 'Joint Orgasm' | 'Potent Cum'
    | 'Pineapple Juice' | 'Delicious Cum' | 'Cum Drunk'
    | 'Beautiful Cum' | 'Artistic Cum' | 'Cum Selfie' | 'Cum Addiction'
    | 'Luminosity' | 'Benevolence' | 'True Love\'s Kiss' | 'Harmony'
    | 'Nocturnal' | 'Dark Temptation' | 'Blind Lust' | 'Eclipse' | 'Devil\'s Kiss'

export interface Skill {
    name: SkillName
    cost: number
    prerequisites: SkillName[]
}

export enum SkillPriority {
    BONUS = 1,
    RECOMMENDED,
    STRONGLY_RECOMMENDED,
    REQUIRED
}

export type SkillPointId =
    | 'e1'
    | 'e2a' | 'e2b'
    | 'e3a' | 'e3b'
    | 'e4a' | 'e4b'
    | 'e5a' | 'e5b'

export interface SkillPointEvent {
    id: SkillPointId
    points: number
}

interface SkillRequirementSingle {
    skill: SkillName
    neededBy: SkillPointId
    priority: SkillPriority
}

interface SkillRequirementGroup {
    skills: SkillName[]
    neededBy: SkillPointId
    priority: SkillPriority
    group: 'all' | 'any'
}

export type SkillRequirement =
    | SkillRequirementSingle
    | SkillRequirementGroup

export type SkillPlan = Partial<Record<SkillPointId, SkillName[]>>

export interface WalkthroughState {
    skillPlan: SkillPlan
    shownChoices: Choice[]
}

export type SkillChoice = (selectedGirls: Girl[]) => SkillRequirement[]
