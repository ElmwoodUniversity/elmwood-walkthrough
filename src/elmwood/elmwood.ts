export class Girl {
    public shortName: string
    public longName: string
    public colour: string
    public choices: Choice[] = []

    constructor(shortName: string, longName: string, colour: string) {
        this.shortName = shortName
        this.longName = longName
        this.colour = colour
    }

    public addChoices(...choices: Choice[]): void {
        this.choices.push(...choices)
    }

    public static listIncludes(list: Girl[], ...names: string[]): boolean {
        return names.every(name => list.map(girl => girl.shortName).includes(name))
    }

    public static listIncludesAny(list: Girl[], ...names: string[]): boolean {
        return names.some(name => list.map(girl => girl.shortName).includes(name))
    }

    public static listIncludesNone(list: Girl[], ...names: string[]): boolean {
        return names.every(name => !list.map(girl => girl.shortName).includes(name))
    }
}

export interface ChoiceOptions {
    includeSideGirls: boolean
    includeUnselectedForScenes: boolean
}

type ShowChoice = (selectedGirls: Girl[], opts: ChoiceOptions) => boolean

export class Choice {
    public optionName: string
    public optionId: string
    public episode: number
    public note?: string
    public showPred?: ShowChoice

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

    public doShow(girls: Girl[], choiceOptions: ChoiceOptions): boolean {
        for (const girl of girls) {
            if (girl.choices.map(ch => ch.optionId).includes(this.optionId)) {
                if (this.showPred) {
                    return this.showPred(girls, choiceOptions)
                }
                return true
            }
        }
        return false
    }

    public isConflicting(girls: Girl[], conflictingChoices: Choice[][], choiceOptions: ChoiceOptions): boolean {
        for (const group of conflictingChoices) {
            const inGroup = group.map(ch => ch.optionId).includes(this.optionId)
            if (!inGroup) {
                continue
            }
            const activeChoices = group.filter(ch => ch.doShow(girls, choiceOptions))
            return activeChoices.length > 1
        }
        return false
    }

    public conflictingSize(girls: Girl[], conflictingChoices: Choice[][], choiceOptions: ChoiceOptions): number {
        for (const group of conflictingChoices) {
            const inGroup = group.map(ch => ch.optionId).includes(this.optionId)
            if (!inGroup) {
                continue
            }
            const activeChoices = group.filter(ch => ch.doShow(girls, choiceOptions))
            return activeChoices.length
        }
        return -1
    }
}
