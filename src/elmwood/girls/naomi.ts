import { Girl } from '@/elmwood/elmwood.ts'
import { selectChoice } from '@/elmwood/choices.ts'
import { SkillPriority } from '@/elmwood/types/skills.ts'

export const naomi = new Girl('Naomi', 'Naomi Edwards', 'naomi')

naomi.addChoices(
    ...[
        'e2ntalkx1',
        'e2ntalkx1b',
        'e2ntalkx1scholar',
        'e2ntalk2',
        'e2nex',
        'e22tl',
        'e2flecfinal',
        'e2panswer1a',
        'e3flec1',
        'e3flec3',
        'e3essay2',
        'e3vlec9',
        'e3nstudy1a',
        'e3nstudy1b',
        'e3nstudy2',
        'e3nstudy2c',
        'e3nstudy2b',
        'e3nstudy5c',
        'e3nstudy7b',
        'e3nkiss',
        'e3nkissx',
    ].map(id => selectChoice(id)),
)

naomi.addSkillRequirements(
    {
        skill: 'Scholar',
        neededBy: 'e1',
        priority: SkillPriority.RECOMMENDED,
    },
    {
        skill: 'Persuasion',
        neededBy: 'e2b',
        priority: SkillPriority.RECOMMENDED,
    },
    {
        skill: 'Scholar',
        neededBy: 'e3a',
        priority: SkillPriority.RECOMMENDED,
    },
    {
        skill: 'Persuasion',
        neededBy: 'e3b',
        priority: SkillPriority.STRONGLY_RECOMMENDED,
    },
    {
        skill: 'Deception',
        neededBy: 'e3b',
        priority: SkillPriority.RECOMMENDED,
    },
    {
        skill: 'Lie Detection',
        neededBy: 'e3b',
        priority: SkillPriority.RECOMMENDED,
    },
)
