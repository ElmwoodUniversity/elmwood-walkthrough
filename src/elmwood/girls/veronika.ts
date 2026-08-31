import { Girl } from '@/elmwood/elmwood.ts'
import { selectChoice } from '@/elmwood/choices.ts'

export const veronika = new Girl('Dr. Novotná', 'Dr. Veronika Novotná', 'veronika')

veronika.addChoices(
    ...[
        'e2vlecture1',
        'e2panswer1',
        'e2vertalk',
    ].map(id => selectChoice(id)),
)
