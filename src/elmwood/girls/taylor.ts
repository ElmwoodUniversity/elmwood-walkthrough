import { Girl } from '@/elmwood/elmwood.ts'
import { selectChoice } from '@/elmwood/choices.ts'

export const taylor = new Girl('Taylor', 'Taylor Griffiths', 'taylor')

taylor.addChoices(
    ...[
        'intro9x',
        'intro9z2',
        'intro14',
        'intro18',
        'intro20',
        'preselinaintrox',
        'preselinaintrox4',
        'selinaintro5a',
        'hotnaked1',
        'e1taydebrief1',
    ].map(id => selectChoice(id)),
)
