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
        'e4cereal2', // "I decided to nominate myself for course rep.", "I nominated myself for course rep."
        'e4vnom1b',
        'e4vnom1c',
        'e4vnom1d',
        'e4vnom2b',
        'e4vnom3e',
        'e4vnom3c',
        'e4vnom4a', // "We talked about her research.", "We flirted!"
        'e4vnom4b',
    ].map(id => selectChoice(id)),
)

veronika.addSkillRequirements(
    {
        skill: 'Scholar',
        neededBy: 'e2a',
        priority: SkillPriority.RECOMMENDED,
    },
    {
        skill: 'Persuasion',
        neededBy: 'e4b',
        priority: SkillPriority.STRONGLY_RECOMMENDED,
    },
    {
        skill: 'MILF Expert',
        neededBy: 'e4b',
        priority: SkillPriority.RECOMMENDED,
    },
)