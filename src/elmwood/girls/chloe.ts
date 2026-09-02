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
        'joey5', // "We became friends."
        'e3ctalk',
        'e3ctalk2',
        'e3ctalk7', // "I gave her great advice on how to finger Jordan."
        'e4ctext', // "We arranged to hang out at a sports bar."
        'e4joey2saki',
        'e4joey3a',
        'e4joey3b',
        'e4joey3c',
        'e4joey4', // "We had a great time!"
        'e5ctext1', // "We arranged to go for drinks."
        'e5joeydrinks',
        'e5joskate4', // "We had a threesome for Chloe's birthday!", "Chloe seemed to be jealous that I made Jordan cum."
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
