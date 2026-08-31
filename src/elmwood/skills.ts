import type { Skill, SkillName, SkillPlan } from '@/elmwood/types/skills.ts'
import { type Girl, skillPointEvents } from '@/elmwood/elmwood.ts'
import type { ChoiceOptions } from '@/elmwood/types/choices.ts'

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

export function additionalCost(skillName: SkillName, alreadyBought: Set<SkillName>): number {
    const required = getRequiredSkills(skillName)

    return [...required]
        .filter(name => !alreadyBought.has(name))
        .reduce((total, name) => total + skills[name].cost, 0)
}

export function buildSkillPlan(girls: Girl[]): SkillPlan {
    const plan: SkillPlan = {}
    const alreadyBought = new Set<SkillName>()
    let availablePoints = 0

    const requirements = girls
        .flatMap(girl => girl.skillRequirements)
        .sort((a, b) => {
            if (a.priority !== b.priority) {
                return b.priority - a.priority
            }

            // for equal priority, earlier deadline first
            return (
                skillPointEvents.findIndex(ev => ev.id === a.neededBy) -
                    skillPointEvents.findIndex(ev => ev.id === b.neededBy)
            )
        })

    for (let eventIndex = 0; eventIndex < skillPointEvents.length; eventIndex++) {
        const event = skillPointEvents[eventIndex]
        if (!event) continue

        availablePoints += event.points
        plan[event.id] = []

        for (const requirement of requirements) {
            // Already completely satisfied
            if (alreadyBought.has(requirement.skill)) {
                continue
            }

            const deadlineIndex = skillPointEvents.findIndex(
                ev => ev.id === requirement.neededBy
            )

            // This requirement is no longer useful
            if (deadlineIndex < eventIndex) {
                continue
            }

            const requiredSkills = getRequiredSkills(requirement.skill)

            for (const skillName of requiredSkills) {
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
