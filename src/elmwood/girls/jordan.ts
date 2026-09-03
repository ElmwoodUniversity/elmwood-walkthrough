import { Girl } from '@/elmwood/elmwood.ts'
import { selectChoice } from '@/elmwood/choices.ts'
import { SkillPriority } from '@/elmwood/types/skills.ts'

export const jordan = new Girl('Jordan', 'Jordan Chambers', 'jordan')

jordan.addRecommendedGirls('Chloe')

jordan.addChoices(
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
        'e3ctalk7',
        'e4ctext', // "We arranged to hang out at a sports bar."
        'e4joey2saki', // "I asked Jordan about El Mysterioso."
        'e4joey3a',
        'e4joey3b',
        'e4joey3c',
        'e4joey4', // "We had a great time!"
        'e5ctext1', // "We arranged to go for drinks."
        'e5joeydrinks', // "She asked to meet me at the skatepark."
        'e5joskate4', // "I agreed to be Chloe's birthday present.", "We had a threesome for Chloe's birthday!", "Jordan loved the threesome after she was dreading it."
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
