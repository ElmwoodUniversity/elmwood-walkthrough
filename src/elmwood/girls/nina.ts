import { Girl } from '@/elmwood/elmwood.ts'
import { selectChoice } from '@/elmwood/choices.ts'

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
    ].map(id => selectChoice(id)),
)
