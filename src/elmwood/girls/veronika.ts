import { Girl } from '@/elmwood/elmwood.ts'
import { selectChoice } from '@/elmwood/choices.ts'
import { SkillPriority } from '@/elmwood/types/skills.ts'

export const veronika = new Girl('Dr. Novotná', 'Dr. Veronika Novotná', 'veronika')

veronika.addChoices(
    ...[
        'e2vlecture1',
        'e2panswer1a',
        'e2panswer1b',
        'e2vertalk',
    ].map(id => selectChoice(id)),
)

veronika.addSkillRequirements(
    {
        skill: 'Scholar',
        neededBy: 'e2a',
        priority: SkillPriority.RECOMMENDED,
    },
)