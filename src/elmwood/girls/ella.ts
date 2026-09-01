import { Girl } from '@/elmwood/elmwood.ts'
import { selectChoice } from '@/elmwood/choices.ts'
import { SkillPriority } from '@/elmwood/types/skills.ts'

export const ella = new Girl('Ella', 'Ella Davies', 'ella')

ella.addChoices(
    ...[
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
        'e1chbye',
        'e1chbye1',
        'e1chbye1a',
        'e1leaveparty3',
        'e2lytext',
        'e2lytext2',
        'e2lysex3',
        'e2lysex4',
        'e2lysexsquirt',
        'e2lysexwatch',
        'e2eltalk1',
        'e2eltalk3c',
        'e2eltalk4a',
        'e2eltalk5b',
        'e2eldate0',
        'e2eldatemenu1',
        'e2eldatemenu2',
        'e2eldategym',
        'e2eldatemenu3',
        'e2eldateflirt',
        'e2elaftersex1', // el_fucked = True
        'e4bjcomp2',
        'e4pole1',
        'e4ellatalk',
        'e4ellatalk1b',
        'e4ellatalk1bx',
        'e4ellatalk1d',
        'e4ellatalk2',
        'e4ellatalk3',
        'e4eldate',
        'e4elsex',
    ].map(id => selectChoice(id)),
)

ella.addSkillRequirements(
    {
            skill: 'Dexterity',
            neededBy: 'e2b',
            priority: SkillPriority.BONUS,
    },
    {
            skill: 'Oral Mastery',
            neededBy: 'e2b',
            priority: SkillPriority.BONUS,
    },
    {
            skill: 'G-Spot Penetration',
            neededBy: 'e2b',
            priority: SkillPriority.BONUS,
    },
)
