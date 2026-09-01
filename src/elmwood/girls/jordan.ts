import { Girl } from '@/elmwood/elmwood.ts'
import { selectChoice } from '@/elmwood/choices.ts'
import { SkillPriority } from '@/elmwood/types/skills.ts'

export const jordan = new Girl('Jordan', 'Jordan Chambers', 'jordan')

jordan.addChoices(
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
        'e4ctext',
        'e4joey2saki',
        'e4joey3a',
        'e4joey3b',
        'e4joey3c',
        'e4joey4',
    ].map(id => selectChoice(id)),
)

jordan.addSkillRequirements(
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
