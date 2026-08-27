import { Girl } from '@/elmwood/elmwood.ts'
import { selectChoice } from '@/elmwood/choices.ts'

export const veronika = new Girl('Dr. Novotná', 'Dr. Veronika Novotná', 'veronika')

veronika.addChoices(
    ...[

    ].map(id => selectChoice(id)),
)
