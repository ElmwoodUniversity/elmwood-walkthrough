import { Girl } from '@/elmwood/elmwood.ts'
import { selectChoice } from '@/elmwood/choices.ts'

export const violet = new Girl('Violet', 'Violet Middleton', 'violet')

violet.addRecommendedGirls('Katie', 'Taylor')

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
        'e4vi2', // "I asked her to sign me up for the HW tournament."
        'e4vi2a', // "We flirted."
        'e4vi4',
        'e4vi7',
        'e4vikiss', // "Violet was my first kiss!"/"We kissed!"
        'e5vitext1', // "You made plans to see her again."
        'e5viflat10', // "We signed up for the HW tournament.
        'e5tournament1a',
        // if won: "I qualified for the tournament."
        // if lost: "I failed to qualify for the tournament."
    ].map(id => selectChoice(id)),
)
