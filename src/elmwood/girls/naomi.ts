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
        'e2panswer1',
    ].map(id => selectChoice(id)),
)

naomi.addSkillRequirements(
    {
        skill: 'Scholar',
        neededBy: 'e1',
        priority: SkillPriority.RECOMMENDED,
    },
)
