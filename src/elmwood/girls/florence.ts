import { Girl } from '@/elmwood/elmwood.ts'
import { selectChoice } from '@/elmwood/choices.ts'
import { SkillPriority } from '@/elmwood/types/skills.ts'

export const florence = new Girl('Dr. Riley', 'Dr. Florence Riley', 'florence')

florence.addChoices(
    ...[
        'e2flotalk',
        'e2vlecture1',
        'e3ftalk',
        'e3floessayq0',
        'e3floessayq1',
        'e3floessayq2',
        'e3flost',
        'e3flostx',
        'e3flostx2',
        'e3floof',
        'e3flofli', // "I discovered that she has a long distance boyfriend."
        'e3flofli1', // "I learnt about her boyfriend."
        'e3flofli3',
        'e3flofli3a', // "We flirted and I was very charming."
        'e4cereal2',
        'e4floflowers2', // "I decided to pursue Florence despite her boyfriend.", "I gave her some pink roses."
        'e5vlec2a', // courserep = True
        'e5flooffice2',
        'e5flooffice2a',
        'e5flooffice2x',
        'e5flooffice4', // "We flirted and I massaged her head and shoulders!"
    ].map(id => selectChoice(id)),
)

florence.addSkillRequirements(
    {
        skill: 'Persuasion',
        neededBy: 'e2b',
        priority: SkillPriority.RECOMMENDED,
    },
    {
        skill: 'Deception',
        neededBy: 'e3b',
        priority: SkillPriority.RECOMMENDED,
    },
    {
        skill: 'MILF Enthusiast',
        neededBy: 'e3b',
        priority: SkillPriority.STRONGLY_RECOMMENDED,
    },
    {
        skill: 'MILF Enjoyer',
        neededBy: 'e3b',
        priority: SkillPriority.RECOMMENDED,
    },
    {
        skill: 'Lie Detection',
        neededBy: 'e3b',
        priority: SkillPriority.BONUS,
    },
    {
        skill: 'Persuasion',
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
        skill: 'Lie Detection',
        neededBy: 'e5b',
        priority: SkillPriority.BONUS,
    },
    {
        skill: 'MILF Enjoyer',
        neededBy: 'e5b',
        priority: SkillPriority.RECOMMENDED,
    },
)
