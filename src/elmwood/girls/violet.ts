import { Girl } from '@/elmwood/elmwood.ts'
import { selectChoice } from '@/elmwood/choices.ts'

export const violet = new Girl('Violet', 'Violet Middleton', 'violet')

violet.addChoices(
    ...[
        'vimeet1',
        'preselinaintrox',
        'preselinaintrox3',
        'hottub1w',
        'hottub1y',
    ].map(id => selectChoice(id)),
)
