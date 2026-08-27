import { Girl } from '@/elmwood/elmwood.ts'
import { selectChoice } from '@/elmwood/choices.ts'

export const ella = new Girl('Ella', 'Ella Davies', 'ella')

ella.addChoices(
    ...[
        'intro9z2',
        'cheertalk3',
        'cheertalk4x',
        'cheertalk7all',
        'cheertalk8n',
        'cheerkissel',
        'cheerkisse2',
        'chelbj4',
        'lydbj3',
        'e1elbj1',
        'e1elbjcum',
        'hotnaked1',
        'hottub2e',
        'e1endhot2',
    ].map(id => selectChoice(id)),
)
