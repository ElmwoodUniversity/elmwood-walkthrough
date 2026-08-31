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
        'e3flofli',
        'e3flofli1',
        'e3flofli3',
        'e3flofli3a',
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
)
