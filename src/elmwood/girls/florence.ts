import { Girl } from '@/elmwood/elmwood.ts'
import { selectChoice } from '@/elmwood/choices.ts'

export const florence = new Girl('Dr. Riley', 'Dr. Florence Riley', 'florence')

florence.addChoices(
    ...[

    ].map(id => selectChoice(id)),
)
