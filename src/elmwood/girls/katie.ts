import { Girl } from '@/elmwood/elmwood.ts'
import { selectChoice } from '@/elmwood/choices.ts'

export const katie = new Girl('Katie', 'Katie Gregg', 'katie')

katie.addChoices(
    ...[
        'intro3',
        'intro5v',
        'frenchlie2',
        'frenchdeeplie3',
        'frenchdeepestlie4', // "I convinced Katie I can speak French!"
        'intro6',
        'intro9x',
        'intro14',
        'intro18', // "I told her that I'm a feminist"
        'intro20',
        'preselinaintrox',
        'preselinaintrox1',
        'hotnaked1', // e1hotnaked = True
        'hottub2e',
        // 'e1taydebrief1',
        'e1ktbye',
        'e1ktbye2',
        'e3femsocattend',
        'e3femsoc2c',
        'e3kttalk1x',
        'e3kttalk2b',
        'e3kttalk4b', // "You had a great evening with Katie."
        'e3ktkisshug',
        'e4kttext', // "We arranged to have a phone call."
        'e4ktcall1a',
        'e4ktcall1b',
        'e4ktcall1bvi', // "I encouraged her to keep Violet's secret."
        'e4ktcall1c', // "We agreed to have a picnic."
    ].map(id => selectChoice(id)),
)
