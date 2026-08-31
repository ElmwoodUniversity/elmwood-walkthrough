import { Girl } from '@/elmwood/elmwood.ts'
import { selectChoice } from '@/elmwood/choices.ts'
import { SkillPriority } from '@/elmwood/types/skills.ts'

export const chloe = new Girl('Chloe', 'Chloe Allan', 'chloe')

chloe.addChoices(
    ...[
        'joey1y',
        'e1joeystory',
        'e1joeytaykt',
        'e1joeyshirt',
        'e1joeycontinue',
        'e1joey4',
        'joey5',
        'e3ctalk',
        'e3ctalk2',
        'e3ctalk7',
    ].map(id => selectChoice(id)),
)

chloe.addSkillRequirements(
    {
            skill: 'Dexterity',
            neededBy: 'e3a',
            priority: SkillPriority.REQUIRED,
    },
    {
            skill: 'Oral Mastery',
            neededBy: 'e3a',
            priority: SkillPriority.BONUS,
    },
)
