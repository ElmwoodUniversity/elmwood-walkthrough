import { Girl } from '@/elmwood/elmwood.ts'
import { selectChoice } from '@/elmwood/choices.ts'

export const saki = new Girl('Saki', 'Saki Kishimoto', 'saki')

saki.addChoices(
    ...[
        'e2sameet5x',
        'e2wakeup2y',
        'ie2sameet11a',
        'ie2sameet11b',
        'twinsmeet4',
        'twinsmeet4a',
        'e2tdtruth1',
        'e2tdsakissplayer',
        'e2truth2',
        'e2truth2a',
        'e2truth2b',
        'e2tdround5',
        'e2tdshowdickoption',
        'e2tdshowdickoption2',
        'e2sanight2',
    ].map(id => selectChoice(id)),
)
