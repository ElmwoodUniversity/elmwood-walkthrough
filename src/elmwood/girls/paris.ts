import { Girl } from '@/elmwood/elmwood.ts'
import { selectChoice } from '@/elmwood/choices.ts'

export const paris = new Girl('Paris', 'Paris Carter', 'paris')

paris.addChoices(
    ...[
        'paris3',
        'paris7',
        'paris7y',
        'paris9y',
        'paris9x2',
        'paris13',
        'paris13x',
        'paris17',
        'e1paprize',
        'e1pakiss',
        'hotnaked1',
        'hottub2e',
        'e1pabye',
        'e1pabye1',
        'e2patext1',
        'e2patext1a',
        'e3patextdate1',
        'e3padate1a',
        'e3padate1c',
        'e3padate3',
        'e3padate4b',
        'e3padate6a',
        'e3padate8',
        'e3confront2',
        'e3padate10',
        'e3padate10a',
        'e3padate12',
    ].map(id => selectChoice(id)),
)
