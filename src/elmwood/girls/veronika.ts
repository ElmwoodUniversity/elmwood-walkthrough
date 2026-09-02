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
        'e5vlec2a', // courserep = True
        'e5veronikaoffice1b',
        'e5veronikaoffice2', // "I earned her respect and said I could call her Veronika in private."
        'e5veronikaoffice2x', // "I couldn't persuade her to give us a break in her lectures."
        'e5veronikaoffice3b', // "I negotiated a 10 minute break for the class."
        'e5veronikaoffice3c', // "I negotiated a 15 minute break for the class."
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
    {
        skill: 'Scholar',
        neededBy: 'e5a',
        priority: SkillPriority.STRONGLY_RECOMMENDED,
    },
    {
        skill: 'Persuasion',
        neededBy: 'e5a',
        priority: SkillPriority.STRONGLY_RECOMMENDED,
    },
    {
        skill: 'Corruption',
        neededBy: 'e5b',
        priority: SkillPriority.STRONGLY_RECOMMENDED,
    },
    {
        skill: 'Ownership',
        neededBy: 'e5b',
        priority: SkillPriority.RECOMMENDED,
    },
    {
        skill: 'Dexterity',
        neededBy: 'e5b',
        priority: SkillPriority.RECOMMENDED,
    },
)
