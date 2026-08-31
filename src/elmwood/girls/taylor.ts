import { Girl } from '@/elmwood/elmwood.ts'
import { selectChoice } from '@/elmwood/choices.ts'

export const taylor = new Girl('Taylor', 'Taylor Griffiths', 'taylor')

taylor.addChoices(
    ...[
        'intro9x',
        'intro14',
        'intro18',
        'intro20',
        'preselinaintrox',
        'preselinaintrox4',
        'selinaintro5a',
        'hotnaked1',
        'e1taydebrief1',
        'e3femsocattend',
        'e3femsoc2c',
        'e3kttalk1x',
        'e3kttalk4b',
        'e3ktkisshug',
        'e3jacket',
    ].map(id => selectChoice(id)),
)
