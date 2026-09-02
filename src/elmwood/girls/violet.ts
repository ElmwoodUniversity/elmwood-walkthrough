import { Girl } from '@/elmwood/elmwood.ts'
import { selectChoice } from '@/elmwood/choices.ts'

export const violet = new Girl('Violet', 'Violet Middleton', 'violet')

violet.addChoices(
    ...[
        'vimeet1', // "I told her that she doesn't owe me anything."
        'preselinaintrox',
        'preselinaintrox3',
        'hottub1w',
        'hottub1y',
        'e2viextended',
        'e2vilakechat',
        'e2vilove', // "I told her I want to be more than friends."
        'e2lighthouse1',
        'e4vitext', // "We arranged to meet on Saturday."
        'e4vi2a', // "We flirted."
        'e4vi4',
        'e4vi7',
        'e4vikiss', // "Violet was my first kiss!"/"We kissed!"
    ].map(id => selectChoice(id)),
)
