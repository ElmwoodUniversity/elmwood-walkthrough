import { Girl } from '@/elmwood/elmwood.ts'
import { selectChoice } from '@/elmwood/choices.ts'
import { SkillPriority } from '@/elmwood/types/skills.ts'

export const saki = new Girl('Saki', 'Saki Kishimoto', 'saki')

saki.addChoices(
    ...[
        'e2sameet5x',
        'e2wakeup2y',
        'ie2sameet11a',
        'ie2sameet11b',
        'twinsmeet4',
        'twinsmeet4a',
        'e2tdtruth1',
        'e2tdsakissplayer',
        'e2truth2',
        'e2truth2a',
        'e2truth2b',
        'e2tdround5',
        'e2tdshowdickoption',
        'e2tdshowdickoption2',
        'e2sanight2',
        'e3saki3c',
        'e3saki4',
        'e3sakibanana',
        'e3sakibanana1',
        'e3sakibanana1a',
        'e3sakicorruption',
        'e4saki1',
        'e4saki3',
        'e4saki4',
        'e4sacorrupt',
        'e4safinger',
        'e4saownership',
        'e4sacumx',
    ].map(id => selectChoice(id)),
)

saki.addSkillRequirements(
    {
            skill: 'Corruption',
            neededBy: 'e3b',
            priority: SkillPriority.STRONGLY_RECOMMENDED,
    },
    {
            skill: 'Corruption',
            neededBy: 'e4b',
            priority: SkillPriority.STRONGLY_RECOMMENDED,
    },
    {
            skill: 'Dexterity',
            neededBy: 'e4b',
            priority: SkillPriority.RECOMMENDED,
    },
    {
            skill: 'Ownership',
            neededBy: 'e4b',
            priority: SkillPriority.RECOMMENDED,
    },
)
