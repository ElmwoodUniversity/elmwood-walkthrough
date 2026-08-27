import { Girl } from '@/elmwood/elmwood.ts'
import { selectChoice } from '@/elmwood/choices.ts'

export const nina = new Girl('Nina', 'Nina', 'nina')

nina.addChoices(
    ...[

    ].map(id => selectChoice(id)),
)
