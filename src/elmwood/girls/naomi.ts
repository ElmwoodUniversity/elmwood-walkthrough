import { Girl } from '@/elmwood/elmwood.ts'
import { selectChoice } from '@/elmwood/choices.ts'

export const naomi = new Girl('Naomi', 'Naomi Edwards', 'naomi')

naomi.addChoices(
    ...[

    ].map(id => selectChoice(id)),
)
