import { Girl } from '@/elmwood/elmwood.ts'
import { selectChoice } from '@/elmwood/choices.ts'
import { SkillPriority } from '@/elmwood/types/skills.ts'

export const lydia = new Girl('Lydia', 'Lydia Blackburn', 'lydia')

lydia.addRecommendedGirls('Chelsea', 'Ella')

lydia.addChoices(
    ...[
        'openlyd3',
        'openlyd7',
        'cheertalk3',
        'cheertalk4x', // "She did the splits on my lap."
        'cheertalk5o2',
        'cheertalk5x',
        'cheertalk7all',
        'cheertalk8n',
        'cheerkisslyd',
        'chelbj4',
        'lydbj3', // "She sucked my dick in the bathroom!"
        'e1lybjcum',
        'e1elbj1',
        'hotnaked1', // e1hotnaked = True
        'hottub2e',
        'hottub2e1',
        'hottubz2',
        'hottubz4', // ly_fucked = True, "I fucked Lydia in the hot tub and I came inside her!"
        'e1lyjoke',
        'e1endhot2',
        'e1nearend1',
        'e2lytext',
        'e2lytext2', // e2lysex = True
        'e2lysex3',
        'e2lysex4', // ly_fucked = True, "I fucked Lydia on her sofa."
        'e2lysexsquirt', // lydia_squirt = True, "You told Lydia you like squirting."
        'e4bjcomp2', // "Lydia, Ella and Chelsea had a second BJ competition."
        'e4pole1', // "We had a squirting lesson with Chelsea & Ella.", "I made her squirt!", "She taught me how to make other girls squirt!", gush = True
        'e4postelsex1', // "I cuddled Lydia after fucking Ella."
    ].map(id => selectChoice(id)),
)

lydia.addSkillRequirements(
    {
        skill: 'Ripped',
        neededBy: 'e1',
        priority: SkillPriority.REQUIRED,
    },
)
