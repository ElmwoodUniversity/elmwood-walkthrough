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
        'e2viextended',
        'e2vilakechat',
        'e2vilove',
        'e2lighthouse1',
    ].map(id => selectChoice(id)),
)
