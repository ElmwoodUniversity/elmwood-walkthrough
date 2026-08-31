import { Girl } from '@/elmwood/elmwood.ts'
import { selectChoice } from '@/elmwood/choices.ts'
import { SkillPriority } from '@/elmwood/types/skills.ts'

export const lydia = new Girl('Lydia', 'Lydia Blackburn', 'lydia')

lydia.addChoices(
    ...[
        'openlyd3',
        'openlyd7',
        'cheertalk3',
        'cheertalk4x',
        'cheertalk5o2',
        'cheertalk5x',
        'cheertalk7all',
        'cheertalk8n',
        'cheerkisslyd',
        'chelbj4',
        'lydbj3',
        'e1lybjcum',
        'e1elbj1',
        'hotnaked1',
        'hottub2e',
        'hottub2e1',
        'hottubz2',
        'e1lyjoke',
        'e1endhot2',
        'e1nearend1',
        'e2lytext',
        'e2lytext2',
        'e2lysex3',
        'e2lysex4',
        'e2lysexsquirt',
    ].map(id => selectChoice(id)),
)

lydia.addSkillRequirements(
    {
        skill: 'Ripped',
        neededBy: 'e1',
        priority: SkillPriority.REQUIRED,
    },
)
