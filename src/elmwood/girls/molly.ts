import { Girl } from '@/elmwood/elmwood.ts'
import { selectChoice } from '@/elmwood/choices.ts'

export const molly = new Girl('Molly', 'Molly Page', 'molly')

molly.addChoices(
    ...[
        'e2tdtruth1',
        'e2truth2',
        // 'e2ashspank',
        'e2truth2a',
        'e2truth2c',
        'e2tdturn',
        'e2tdshowdickoption',
        'e2tdshowdickoption2',
        'e2tdround8',
        'e2ordervibrator1',
        'e2ordervibrator2',
    ].map(id => selectChoice(id)),
)
