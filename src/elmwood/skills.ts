import type {
    Skill,
    SkillName,
    SkillPlan,
    SkillPointId,
    SkillRequirement, SkillRequirementCandidate,
    SkillRequirementGroup,
} from '@/elmwood/types/skills.ts'
import { type Girl, skillPointEvents } from '@/elmwood/elmwood.ts'

const __skill = <N extends SkillName>(name: N, cost: number, ...prerequisites: SkillName[]): Record<N, Skill> =>
    ({ [name]: { name, cost, prerequisites } } as unknown as Record<N, Skill>)

export const skills: Record<SkillName, Skill> = {
    ...__skill('Scholar', 20),
    ...__skill('Persuasion', 20, 'Scholar'),
    ...__skill('Deception', 20, 'Persuasion'),
    ...__skill('Lie Detection', 20, 'Deception'),

    ...__skill('Ripped', 20),
    ...__skill('Warrior', 20, 'Ripped'),
    ...__skill('Earthquake', 50, 'Warrior', 'G-Spot Penetration'),

    ...__skill('Dexterity', 20),
    ...__skill('Oral Mastery', 20, 'Dexterity'),
    ...__skill('G-Spot Penetration', 20, 'Oral Mastery'),
    ...__skill('Anal Orgasms', 20, 'G-Spot Penetration'),

    ...__skill('Daddy', 20),
    ...__skill('Corruption', 20, 'Daddy'),
    ...__skill('Ownership', 30, 'Corruption'),

    ...__skill('MILF Enthusiast', 10),
    ...__skill('MILF Enjoyer', 20, 'MILF Enthusiast'),
    ...__skill('MILF Expert', 30, 'MILF Enjoyer'),
    ...__skill('MILF Domination', 0, 'Ownership', 'MILF Expert'),

    ...__skill('Warm Cum', 10),
    ...__skill('Soothing Cum', 20, 'Warm Cum'),
    ...__skill('Joint Orgasm', 30, 'Soothing Cum'),
    ...__skill('Potent Cum', 0, 'MILF Expert', 'Joint Orgasm'),

    ...__skill('Pineapple Juice', 10),
    ...__skill('Delicious Cum', 20, 'Pineapple Juice'),
    ...__skill('Cum Drunk', 30, 'Delicious Cum'),

    ...__skill('Beautiful Cum', 10),
    ...__skill('Artistic Cum', 20, 'Beautiful Cum'),
    ...__skill('Cum Selfie', 30, 'Artistic Cum'),
    ...__skill('Cum Addiction', 0, 'Cum Drunk', 'Cum Selfie'),

    ...__skill('Luminosity', 30),
    ...__skill('Benevolence', 20, 'Luminosity'),
    ...__skill('True Love\'s Kiss', 50, 'Benevolence'),
    ...__skill('Harmony', 70, 'True Love\'s Kiss'),

    ...__skill('Nocturnal', 30, 'True Love\'s Kiss'),
    ...__skill('Dark Temptation', 30, 'Nocturnal'),
    ...__skill('Blind Lust', 40, 'Dark Temptation'),
    ...__skill('Eclipse', 50, 'Blind Lust'),
    ...__skill('Devil\'s Kiss', 50, 'Blind Lust'),
}

function getRequirementOptions(requirement: SkillRequirement): SkillName[][] {
    if ('skill' in requirement) {
        return [[requirement.skill]]
    }
    if (requirement.group === 'all') {
        return [requirement.skills]
    }
    return requirement.skills.map(skill => [skill])
}

function requirementIsSatisfied(requirement: SkillRequirement, alreadyBought: Set<SkillName>): boolean {
    if ('skill' in requirement) {
        return alreadyBought.has(requirement.skill)
    }
    if (requirement.group === 'all') {
        return requirement.skills.every(skill => alreadyBought.has(skill))
    }
    return requirement.skills.some(skill => alreadyBought.has(skill))
}

function getMissingSkills(targetSkills: SkillName[], alreadyBought: Set<SkillName>): SkillName[] {
    const result: SkillName[] = []
    const seen = new Set<SkillName>()

    for (const target of targetSkills) {
        for (const skill of getRequiredSkills(target)) {
            if (!alreadyBought.has(skill) && !seen.has(skill)) {
                seen.add(skill)
                result.push(skill)
            }
        }
    }

    return result
}

function getSkillCost(skillNames: SkillName[]): number {
    return skillNames.reduce(
        (total, skill) => total + skills[skill].cost,
        0,
    )
}

function getMinimumRequirementCost(requirements: SkillRequirement[], alreadyBought: Set<SkillName>): number {
    const memo = new Map<string, number>()

    const recurse = (index: number, currentBought: Set<SkillName>): number => {
        if (index >= requirements.length) {
            return 0
        }

        const key = `${index}|${[...currentBought].sort().join(',')}`

        const cached = memo.get(key)

        if (cached !== undefined) {
            return cached
        }

        const requirement = requirements[index]!

        if (requirementIsSatisfied(requirement, currentBought)) {
            const result = recurse(index + 1, currentBought)
            memo.set(key, result)
            return result
        }

        let bestCost = Infinity

        for (const option of getRequirementOptions(requirement)) {
            const missingSkills = getMissingSkills(option, currentBought)

            const immediateCost = getSkillCost(missingSkills)

            const nextBought = new Set(currentBought)

            for (const skill of missingSkills) {
                nextBought.add(skill)
            }

            const totalCost = immediateCost + recurse(index + 1, nextBought)

            bestCost = Math.min(bestCost, totalCost)
        }

        memo.set(key, bestCost)
        return bestCost
    }

    return recurse(0, alreadyBought)
}

function getAnyRequirementCandidates(
    requirement: SkillRequirementGroup,
    requirementIndex: number,
    requirements: SkillRequirement[],
    bought: Set<SkillName>,
    eventIndex: number,
): SkillRequirementCandidate[] {
    const futureRequirements = requirements.filter(
        (other, index) =>
            index !== requirementIndex &&
            getSkillPointEventIndex(other.neededBy) >= eventIndex
    )

    const priorityRequirements = futureRequirements.filter(
        other => other.priority >= requirement.priority
    )

    return getRequirementOptions(requirement)
        .map(option => {
            const missingSkills = getMissingSkills(option, bought)
            const immediateCost = getSkillCost(missingSkills)

            const projectedBought = new Set(bought)

            for (const skill of missingSkills) {
                projectedBought.add(skill)
            }

            const priorityProjectedCost = getMinimumRequirementCost(
                priorityRequirements,
                projectedBought,
            )

            const totalProjectedCost = getMinimumRequirementCost(
                futureRequirements,
                projectedBought,
            )

            return {
                skills: missingSkills,
                immediateCost,
                priorityCost: immediateCost + priorityProjectedCost,
                totalCost: immediateCost + totalProjectedCost,
            }
        })
        .sort((a, b) =>
            a.priorityCost - b.priorityCost ||
            a.totalCost - b.totalCost ||
            a.immediateCost - b.immediateCost
        )
}

export function getRequiredSkills(skillName: SkillName, result = new Set<SkillName>()): Set<SkillName> {
    if (result.has(skillName)) {
        return result
    }

    for (const prerequisite of skills[skillName].prerequisites) {
        getRequiredSkills(prerequisite, result)
    }
    result.add(skillName)

    return result
}

function getSkillPointEventIndex(id: SkillPointId): number {
    return skillPointEvents.findIndex(event => event.id === id)
}

function buildRequiredSkillPlan(selectedGirls: Girl[]): SkillPlan {
    const plan: SkillPlan = {}
    const alreadyBought = new Set<SkillName>()
    let availablePoints = 0

    const requirements = selectedGirls
        .flatMap(girl => girl.getSkillRequirements(selectedGirls))
        .sort((a, b) => {
            if (a.priority !== b.priority) {
                return b.priority - a.priority
            }

            // for equal priority, earlier deadline first
            return (
                getSkillPointEventIndex(a.neededBy) - getSkillPointEventIndex(b.neededBy)
            )
        })

    for (let eventIndex = 0; eventIndex < skillPointEvents.length; eventIndex++) {
        const event = skillPointEvents[eventIndex]
        if (!event) continue

        availablePoints += event.points
        plan[event.id] = []

        for (let requirementIndex = 0; requirementIndex < requirements.length; requirementIndex++) {
            const requirement = requirements[requirementIndex]!

            // Already completely satisfied
            if (requirementIsSatisfied(requirement, alreadyBought)) {
                continue
            }

            const deadlineIndex = skillPointEvents.findIndex(
                ev => ev.id === requirement.neededBy
            )

            // This requirement is no longer useful
            if (deadlineIndex < eventIndex) {
                continue
            }

            let skillsToBuy: SkillName[] | undefined

            /*
             * ANY group:
             *
             * Project the long-term cost of every branch rather
             * than simply choosing the cheapest one right now.
             */
            if ('group' in requirement && requirement.group === 'any') {
                const candidates = getAnyRequirementCandidates(
                    requirement,
                    requirementIndex,
                    requirements,
                    alreadyBought,
                    eventIndex,
                )

                const bestCandidate = candidates[0]

                if (!bestCandidate) {
                    continue
                }

                if (bestCandidate.immediateCost <= availablePoints) {
                    // Globally preferred branch is affordable now
                    skillsToBuy = bestCandidate.skills
                } else if (deadlineIndex === eventIndex) {
                    // Can no longer afford the preferred branch.
                    // Fall back to the best branch we CAN afford.
                    const affordableCandidate = candidates.find(
                        candidate => candidate.immediateCost <= availablePoints,
                    )

                    if (affordableCandidate) {
                        skillsToBuy = affordableCandidate.skills
                    }
                }
            } else {
                // Single and ALL requirements are atomic
                const [option] = getRequirementOptions(requirement)

                const missingSkills = getMissingSkills(option!, alreadyBought)

                const cost = getSkillCost(missingSkills)

                if (cost <= availablePoints) {
                    skillsToBuy = missingSkills
                }
            }

            if (!skillsToBuy) {
                continue
            }

            for (const skillName of skillsToBuy) {
                if (alreadyBought.has(skillName)) {
                    continue
                }

                const cost = skills[skillName].cost

                // Can't afford the next step in this chain yet
                if (cost > availablePoints) {
                    break
                }

                plan[event.id]!.push(skillName)
                alreadyBought.add(skillName)
                availablePoints -= cost
            }
        }
    }

    return plan
}

function skillPlanIsEmpty(plan: SkillPlan): boolean {
    return Object.values(plan)
        .every(skills => !skills?.length)
}

function getAvailablePointsAtEvent(plan: SkillPlan, throughEventIndex: number): number {
    let points = 0

    for (let i = 0; i <= throughEventIndex; i++) {
        const event = skillPointEvents[i]!

        points += event.points

        for (const skillName of plan[event.id] ?? []) {
            points -= skills[skillName].cost
        }
    }

    return points
}

function getSafeSparePoints(plan: SkillPlan, fromEventIndex: number): number {
    let availablePoints = 0
    let minimumBalance = Infinity

    for (let i = 0; i < skillPointEvents.length; i++) {
        const event = skillPointEvents[i]!

        availablePoints += event.points

        for (const skillName of plan[event.id] ?? []) {
            availablePoints -= skills[skillName].cost
        }

        if (i >= fromEventIndex) {
            minimumBalance = Math.min(minimumBalance, availablePoints)
        }
    }

    return Math.max(0, minimumBalance)
}

const fallbackSkills: SkillName[] = [
    'Warm Cum',
    'Soothing Cum',
    'Joint Orgasm',
    'Pineapple Juice',
    'Delicious Cum',
    'Cum Drunk',
    'Beautiful Cum',
    'Artistic Cum',
    'Cum Selfie',
    'Cum Addiction',
]

function addFallbacks(selectedGirls: Girl[], plan: SkillPlan): SkillPlan {
    if (selectedGirls.length !== 1) {
        // return plan
    }

    const alreadyBought = new Set<SkillName>()
    const noNormalSkills = skillPlanIsEmpty(plan)

    for (let eventIndex = 0; eventIndex < skillPointEvents.length; eventIndex++) {
        const event = skillPointEvents[eventIndex]!

        // Record skills already scheduled at this event
        for (const skillName of plan[event.id] ?? []) {
            alreadyBought.add(skillName)
        }

        let safePoints: number = noNormalSkills
            ? getAvailablePointsAtEvent(plan, eventIndex)
            : getSafeSparePoints(plan, eventIndex)

        if (safePoints <= 0) {
            continue
        }

        for (const fallback of fallbackSkills) {
            if (alreadyBought.has(fallback)) {
                continue
            }

            const missingSkills = [...getRequiredSkills(fallback)]
                .filter(skill => !alreadyBought.has(skill))

            const cost = missingSkills.reduce((total, skill) =>
                total + skills[skill].cost, 0)

            if (cost > safePoints) {
                // break = unlock fallback skills in order
                // continue = always unlock next affordable fallback skill
                break
            }

            plan[event.id] ??= []

            for (const skill of missingSkills) {
                plan[event.id]!.push(skill)
                alreadyBought.add(skill)
            }

            // Recalculate before trying another fallback
            safePoints = getSafeSparePoints(plan, eventIndex)

            if (safePoints <= 0) {
                break
            }
        }
    }

    return plan
}

export function buildSkillPlan(selectedGirls: Girl[]): SkillPlan {
    const plan = buildRequiredSkillPlan(selectedGirls)

    return addFallbacks(selectedGirls, plan)
}
