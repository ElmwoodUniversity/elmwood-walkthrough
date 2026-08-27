import { Girl } from '@/elmwood/elmwood.ts'
import { selectChoice } from '@/elmwood/choices.ts'

export const jordan = new Girl('Jordan', 'Jordan Chambers', 'jordan')

jordan.addChoices(
    ...[
        'joey1y',
        'e1joeystory',
        'e1joeytaykt',
        'e1joeyshirt',
        'e1joeycontinue',
        'e1joey4',
        'joey5',
    ].map(id => selectChoice(id)),
)
