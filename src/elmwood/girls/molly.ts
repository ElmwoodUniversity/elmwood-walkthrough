import { Girl } from '@/elmwood/elmwood.ts'
import { selectChoice } from '@/elmwood/choices.ts'
import { SkillPriority } from '@/elmwood/types/skills.ts'

export const molly = new Girl('Molly', 'Molly Page', 'molly')

molly.addChoices(
    ...[
        'e2tdtruth1',
        'e2truth2',
        // 'e2ashspank',
        'e2truth2a',
        'e2truth2c',
        'e2tdturn',
        'e2tdshowdickoption',
        'e2tdshowdickoption2',
        'e2tdround8',
        'e2ordervibrator1',
        'e2ordervibrator2',
        'e4dd2',
        'e4cook2',
    ].map(id => selectChoice(id)),
)

molly.addSkillRequirements(
    {
            skill: 'Persuasion',
            neededBy: 'e4b',
            priority: SkillPriority.REQUIRED,
    },
)
