import { Girl } from '@/elmwood/elmwood.ts'
import { selectChoice } from '@/elmwood/choices.ts'
import { SkillPriority, type SkillRequirement } from '@/elmwood/types/skills.ts'

export const tasha = new Girl('Tasha', 'Tasha Berry', 'tasha')

tasha.addChoices(
    ...[
        'e1leaveparty1',
        'twinsmeet1',
        'twinsmeet1y',
        'twinsmeet8d',
        'e2tashleyyoga',
        'e2tashleyyoga2',
        'e2tashleyyoga2a',
        'e2twinyogacomp1',
        'e2twinyogacomp2',
        'e2postpatext',
        'e2td1',
        'e2ashneck',
        'e2ashnecklong',
        'e2truth2',
        'e2truth2a',
        'e2truth2d', // "I told Tasha I have a crush on her AND Ashley in Truth or Dare!"
        'e2tdshowdickoption',
        'e2tdshowdickoption2',
        'e2tdround7',
        'e2twinhj2',
        'e2twinhj4', // "I let her measure my dick!"
        'e2twinhj7',
        'e3gym1',
        'e3gym2',
        'e3gym3',
        'e3gym3b',
        'e3gym3c',
        'e3gym5',
        'e3gym6',
        'e3gym7',
        'e3gym10',
        'e3gym11',
        'e3gym12',
        'e3gym13',
        'e3gym14',
        'e3gym15', // "We flirted in the gym!"
        'e3massage1a', // "I convincingly lied about hanging out with a friend."
        'e3massage1b', // "I lied that I wasn't seeing Paris later."
        'e3massage1c',
        'e3massage1d',
        'e3massage2c',
        'e3tashleykiss', // "I kissed Tasha and Ashley!"
        'e3massage3',
        'e3massage4',
        'e3massage5',
        'e3massage6', // "I fingered them both!"
        'e3massagedx', // "I made them cum simultaneously!"
        'e3confront2', // "I convincingly lied about being just friends with Paris."
        'e4montash',
        'e4montash1', // "I lied about Kat & Chelsea."
        'e4montash4', // "We cuddled and watched a film."
        'e4montash5', // "We made out."
        'e4ninanight',
        'e4montash6', // "We cuddled and fell asleep together."
        'e4halloleave1a',
        'e4halloleave1b', // "I knocked Lewis out." (else "I threatened Lewis.")
        'e4witchdecision', // "I choose the cuddles and romance."
    ].map(id => selectChoice(id)),
)

tasha.addSkillRequirements(girls => {
    const requirements: SkillRequirement[] = []
    if (Girl.listIncludes(girls, 'Paris')) {
        requirements.push({
            skill: 'Deception',
            neededBy: 'e3b',
            priority: SkillPriority.REQUIRED,
        })
    }
    requirements.push(
        {
            skill: 'Ripped',
            neededBy: 'e3b',
            priority: SkillPriority.RECOMMENDED,
        },
        {
            skill: 'Oral Mastery',
            neededBy: 'e3b',
            priority: SkillPriority.STRONGLY_RECOMMENDED,
        },
        {
            skill: 'Warrior',
            neededBy: 'e3b',
            priority: SkillPriority.BONUS,
        },
        {
            skill: 'Warrior',
            neededBy: 'e4b',
            priority: SkillPriority.STRONGLY_RECOMMENDED,
        },
    )

    return requirements
})
