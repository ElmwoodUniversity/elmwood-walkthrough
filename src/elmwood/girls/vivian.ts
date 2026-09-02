import { Girl } from '@/elmwood/elmwood.ts'
import { selectChoice } from '@/elmwood/choices.ts'

export const vivian = new Girl('Vivian', 'Vivian', 'vivian')

vivian.addChoices(
    ...[

    ].map(id => selectChoice(id)),
)
