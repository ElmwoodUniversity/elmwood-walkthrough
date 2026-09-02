import { Girl } from '@/elmwood/elmwood.ts'
import { selectChoice } from '@/elmwood/choices.ts'
import { SkillPriority } from '@/elmwood/types/skills.ts'

export const ella = new Girl('Ella', 'Ella Davies', 'ella')

ella.addChoices(
    ...[
        'cheertalk3',
        'cheertalk4x', // "She essentially gave me a lap dance."
        'cheertalk7all',
        'cheertalk8n',
        'cheerkissel',
        'cheerkisse2',
        'chelbj4',
        'lydbj3',
        'e1elbj1', // "She sucked my dick in the bathroom!"
        'e1elbjcum',
        'hotnaked1', // e1hotnaked = True
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
        'e2lysexwatch', // "Ella watched me and Lydia have sex!"
        'e2eltalk1',
        'e2eltalk3c',
        'e2eltalk4a',
        'e2eltalk5b', // "Ella agreed to go on a date with me"
        'e2eldate0',
        'e2eldatemenu1',
        'e2eldatemenu2',
        'e2eldategym',
        'e2eldatemenu3',
        'e2eldateflirt', // "We had a great date!"
        'e2elaftersex1', // el_fucked = True, "I told her she was better in bed than Lydia."
        'e4bjcomp2', // "Lydia, Ella and Chelsea had a second BJ competition."
        'e4pole1', // "We had a squirting lesson with Lydia & Chelsea.", "She couldn't squirt."
        'e4ellatalk',
        'e4ellatalk1b',
        'e4ellatalk1bx',
        'e4ellatalk1d',
        'e4ellatalk2',
        'e4ellatalk3',
        'e4eldate', // "We went out to the cinema."
        'e4elsex', // "We had sex while Lydia watched!"
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
