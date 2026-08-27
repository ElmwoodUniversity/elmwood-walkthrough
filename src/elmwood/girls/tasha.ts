import { Girl } from '@/elmwood/elmwood.ts'
import { selectChoice } from '@/elmwood/choices.ts'

export const tasha = new Girl('Tasha', 'Tasha Berry', 'tasha')

tasha.addChoices(
    ...[

    ].map(id => selectChoice(id)),
)
