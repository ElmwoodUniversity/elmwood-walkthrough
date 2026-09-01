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
        'e3femsocattend',
        'e3femsoc2c',
        'e3kttalk1x',
        'e3kttalk2b',
        'e3kttalk4b',
        'e3ktkisshug',
        'e4kttext',
        'e4ktcall1a',
        'e4ktcall1b',
        'e4ktcall1bvi',
        'e4ktcall1c',
    ].map(id => selectChoice(id)),
)
