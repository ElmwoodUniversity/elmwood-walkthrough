import { Girl } from '@/elmwood/elmwood.ts'
import { selectChoice } from '@/elmwood/choices.ts'

export const katie = new Girl('Katie', 'Katie Gregg', 'katie')

katie.addChoices(
    ...[
        'intro3',
        'intro5v',
        'frenchlie2',
        'frenchdeeplie3',
        'frenchdeepestlie4',
        'intro6',
        'intro9x',
        'intro9z2',
        'intro14',
        'intro18',
        'intro20',
        'preselinaintrox',
        'preselinaintrox1',
        'hotnaked1',
        'hottub2e',
        // 'e1taydebrief1',
        'e1ktbye',
        'e1ktbye2',
    ].map(id => selectChoice(id)),
)
