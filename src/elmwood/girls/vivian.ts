import { Girl } from '@/elmwood/elmwood.ts'
import { selectChoice } from '@/elmwood/choices.ts'
import { SkillPriority } from '@/elmwood/types/skills.ts'

export const vivian = new Girl('Vivian', 'Vivian', 'vivian')

vivian.addRecommendedGirls('Saki', 'Dr. Novotná')

vivian.addChoices(
    ...[
        'e5ethan1',
        'e5ethan4', // "I told Ethan I was interested in his plan."
        'e5vivcall1', // "I arranged to meet Vivian."
        'e5vivian2', // "I trained Vivian to kneel and be obedient."
        'e5vivian9',
    ].map(id => selectChoice(id)),
)

vivian.addSkillRequirements(
    {
        skill: 'Lie Detection',
        neededBy: 'e5b',
        priority: SkillPriority.BONUS,
    },
    {
        skill: 'Corruption',
        neededBy: 'e5b',
        priority: SkillPriority.STRONGLY_RECOMMENDED,
    },
    {
        skill: 'MILF Enjoyer',
        neededBy: 'e5b',
        priority: SkillPriority.STRONGLY_RECOMMENDED,
    },
)
