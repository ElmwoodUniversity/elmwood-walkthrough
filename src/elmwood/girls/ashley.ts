import { Girl } from '@/elmwood/elmwood.ts'
import { selectChoice } from '@/elmwood/choices.ts'

export const ashley = new Girl('Ashley', 'Ashley Berry', 'ashley')

ashley.addChoices(
    ...[
        'twinsmeet1',
        'twinsmeet1y',
        'twinsmeet8d',
        'e2tashleyyoga',
        'e2tashleyyoga2',
        'e2tashleyyoga2a',
        'e2twinyogacomp1',
        'e2twinyogacomp2',
        'e2td1',
        'e2ashneck',
        'e2ashnecklong',
        'e2truth2',
        'e2truth2a',
        'e2truth2d',
        'e2tdshowdickoption',
        'e2tdshowdickoption2',
        'e2tdround7',
        'e2twinhj2',
        'e2twinhj4',
        'e2twinhj7',
    ].map(id => selectChoice(id)),
)
