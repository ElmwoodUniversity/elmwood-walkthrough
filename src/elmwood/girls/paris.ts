import { Girl } from '@/elmwood/elmwood.ts'
import { selectChoice } from '@/elmwood/choices.ts'
import { SkillPriority } from '@/elmwood/types/skills.ts'

export const paris = new Girl('Paris', 'Paris Carter', 'paris')

paris.addChoices(
    ...[
        'paris3',
        'paris7',
        'paris7y',
        'paris9y',
        'paris9x2',
        'paris13',
        'paris13x',
        'paris17',
        'e1paprize',
        'e1pakiss',
        'hotnaked1', // e1hotnaked = True
        'hottub2e',
        'e1pabye',
        'e1pabye1', // "I asked her to come home with me but she declined."
        'e2patext1', // "Paris agreed to go on a date with me"
        'e2patext1a',
        'e3patextdate1', // "We went on a date."
        'e3padate1a',
        'e3padate1c',
        'e3padate3',
        'e3padate4b',
        'e3padate6a',
        'e3padate8', // "We continued our date in my room."
        'e3confront2',
        'e3padate10',
        'e3padate10a',
        'e3padate12', // "We got intimate with each other." & "We had a great date!"
        'e4patext1', // "I texted her and we talked about going on a second date."
        'e5patext1', // "We arranged a second date."
        'e5papresex1',
        'e5pafingerslow',
        'e5parisquake', // e5parisquake = True, "We fucked so hard that Molly and Saki orgasmed with the earthquake!"
    ].map(id => selectChoice(id)),
)

paris.addSkillRequirements(
    {
            skill: 'Earthquake',
            neededBy: 'e5b',
            priority: SkillPriority.BONUS,
    },
)
