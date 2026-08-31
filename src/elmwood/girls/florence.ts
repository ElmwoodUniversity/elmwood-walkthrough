import { Girl } from '@/elmwood/elmwood.ts'
import { selectChoice } from '@/elmwood/choices.ts'

export const florence = new Girl('Dr. Riley', 'Dr. Florence Riley', 'florence')

florence.addChoices(
    ...[
        'intro9z2b',
        'e2flecfinalskill',
        'e2flotalk',
        'e2vlecture1',
    ].map(id => selectChoice(id)),
)
