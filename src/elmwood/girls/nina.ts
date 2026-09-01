import { Girl } from '@/elmwood/elmwood.ts'
import { selectChoice } from '@/elmwood/choices.ts'
import { SkillPriority } from '@/elmwood/types/skills.ts'

export const nina = new Girl('Nina', 'Nina', 'nina')

nina.addChoices(
    ...[
        'e2vlecture1',
        'e2ninatalk2',
        'e2infiltration0',
        'e2infiltration1',
        'e2infiltration2',
        'e2infiltration3',
        'e2infiltration4',
        'e2infiltration5',
        'e2infiltration6',
        'e2nisex',
        'e4ninaday2a',
        'e4ninaday2axa',
        'e4infil6',
        'e4flagua',
        'e4flagar',
        'e4flagus',
        'e4flagbe',
        'e4flagin',
        'e4flagza',
        'e4flagcz',
        'e4flagit',
        'e4flagfr',
        'e4flagca',
        'e4flagch',
        'e4flages',
        'e4flagbr',
        'e4flagcn',
        'e4flagau',
        'e4niseduce',
        'e4nisex',
    ].map(id => selectChoice(id)),
)

nina.addSkillRequirements(
)
