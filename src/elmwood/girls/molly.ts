import { Girl } from '@/elmwood/elmwood.ts'
import { selectChoice } from '@/elmwood/choices.ts'

export const molly = new Girl('Molly', 'Molly Page', 'molly')

molly.addChoices(
    ...[

    ].map(id => selectChoice(id)),
)
