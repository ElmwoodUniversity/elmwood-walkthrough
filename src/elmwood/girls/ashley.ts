import { Girl } from '@/elmwood/elmwood.ts'
import { selectChoice } from '@/elmwood/choices.ts'

export const ashley = new Girl('Ashley', 'Ashley Berry', 'ashley')

ashley.addChoices(
    ...[

    ].map(id => selectChoice(id)),
)
