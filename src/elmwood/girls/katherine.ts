import { Girl } from '@/elmwood/elmwood.ts'
import { selectChoice } from '@/elmwood/choices.ts'

export const katherine = new Girl('Kat', 'Katherine', 'kat')

katherine.addChoices(
    ...[
        'e1chbye',
        'e1chbye1',
        'e1chbye1a',
        'e1leaveparty3',
        'e3chtext1',
        'e3chtext2',
        'e3chtext3',
        'e3satwake3',
        'e3ddate7',
        'e3ddate8',
        'e3ddate9',
        'e3ddate10a',
        'e3ddate11a',
        'e3ddate90',
        'e3ddate110',
    ].map(id => selectChoice(id)),
)
