import type {
    SkillChoice,
    SkillName,
    SkillPlan,
    SkillPointEvent,
    SkillPointId,
    SkillRequirement,
    WalkthroughState,
} from '@/elmwood/types/skills.ts'
import type { ChoiceOptions, ChoiceSkill, ShowChoice } from '@/elmwood/types/choices.ts'
import { type GirlName, GirlStat } from '@/elmwood/types/girls.ts'


export const skillPointEvents: SkillPointEvent[] = [
    { id: 'e1', points: 30 },
    { id: 'e2a', points: 20 },
    { id: 'e2b', points: 10 },
    { id: 'e3a', points: 20 },
    { id: 'e3b', points: 20 },
    { id: 'e4a', points: 20 },
    { id: 'e4b', points: 10 },
]

export class Girl {
    public shortName: GirlName
    public longName: string
    public colour: string
    public choices: Choice[] = []
    public skillRequirements: SkillRequirement[] = []
    public skillRequirementPredicate: SkillChoice|undefined

    constructor(shortName: GirlName, longName: string, colour: string) {
        this.shortName = shortName
        this.longName = longName
        this.colour = colour
    }

    public addChoices(...choices: Choice[]): void {
        this.choices.push(...choices)
    }

    public addSkillRequirements(...requirements: SkillRequirement[]): void
    public addSkillRequirements(requirements: SkillChoice): void
    public addSkillRequirements(...requirements: SkillRequirement[]|[SkillChoice]): void {
        if (requirements.length === 0) {
            return
        }
        if (requirements.every(
            (requirement): requirement is SkillRequirement =>
                typeof requirement !== 'function'
        )) {
            this.skillRequirements.push(...requirements)
        } else {
            this.skillRequirementPredicate = requirements[0]
        }
    }

    public getSkillRequirements(selectedGirls: Girl[]): SkillRequirement[] {
        if (this.skillRequirementPredicate) {
            return this.skillRequirementPredicate(selectedGirls)
        }
        return this.skillRequirements
    }

    public static listIncludes(list: Girl[], ...names: GirlName[]): boolean {
        return names.every(name => list.map(girl => girl.shortName).includes(name))
    }

    public static listIncludesAny(list: Girl[], ...names: GirlName[]): boolean {
        return names.some(name => list.map(girl => girl.shortName).includes(name))
    }

    public static listIncludesNone(list: Girl[], ...names: GirlName[]): boolean {
        return names.every(name => !list.map(girl => girl.shortName).includes(name))
    }
}

export class Choice {
    public optionName: string
    public optionId: string
    public episode: number
    public note?: string
    public showPred?: ShowChoice
    public skill?: ChoiceSkill

    constructor(optionName: string, optionId: string, episode: number)
    constructor(optionName: string, optionId: string, episode: number, note: string)
    constructor(optionName: string, optionId: string, episode: number, showPred: ShowChoice)
    constructor(optionName: string, optionId: string, episode: number, note: string, showPred: ShowChoice)
    constructor(optionName: string, optionId: string, episode: number, note?: string|ShowChoice, showPred?: ShowChoice) {
        this.optionName = optionName
        this.optionId = optionId
        this.episode = episode
        if (note) {
            if (typeof note === 'string') {
                this.note = note
            } else {
                this.showPred = note
            }
        }
        if (showPred) {
            this.showPred = showPred
        }
    }

    public forSkill(name: SkillName, event: SkillPointId): this {
        this.skill = { name, event }
        return this
    }

    public doShow(girls: Girl[], choiceOptions: ChoiceOptions, state: WalkthroughState): boolean {
        if (this.skill) {
            return state.skillPlan[this.skill.event]?.includes(this.skill.name) ?? false
        }

        for (const girl of girls) {
            if (girl.choices.map(ch => ch.optionId).includes(this.optionId)) {
                if (this.showPred) {
                    return this.showPred(girls, choiceOptions, state)
                }
                return true
            }
        }
        return false
    }

    public isConflicting(girls: Girl[], conflictingChoices: Choice[][], choiceOptions: ChoiceOptions, state: WalkthroughState): boolean {
        for (const group of conflictingChoices) {
            const inGroup = group.map(ch => ch.optionId).includes(this.optionId)
            if (!inGroup) {
                continue
            }
            const activeChoices = group.filter(ch => ch.doShow(girls, choiceOptions, state))
            return activeChoices.length > 1
        }
        return false
    }

    public conflictingSize(girls: Girl[], conflictingChoices: Choice[][], choiceOptions: ChoiceOptions, state: WalkthroughState): number {
        for (const group of conflictingChoices) {
            const inGroup = group.map(ch => ch.optionId).includes(this.optionId)
            if (!inGroup) {
                continue
            }
            const activeChoices = group.filter(ch => ch.doShow(girls, choiceOptions, state))
            return activeChoices.length
        }
        return -1
    }
}
