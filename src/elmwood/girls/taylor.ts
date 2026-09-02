import { Girl } from '@/elmwood/elmwood.ts'
import { selectChoice } from '@/elmwood/choices.ts'
import { SkillPriority } from '@/elmwood/types/skills.ts'

export const taylor = new Girl('Taylor', 'Taylor Griffiths', 'taylor')

taylor.addChoices(
    ...[
        'intro9x',
        'intro14',
        'intro18', // "I told her that I'm a feminist"
        'intro20',
        'preselinaintrox',
        'preselinaintrox4',
        'selinaintro5a', // "I sided with Taylor and let her talk to Selina alone."
        'hotnaked1', // e1hotnaked = True
        'e1taydebrief1', // "I promised Taylor I'd attend the FemSoc sexual assault awareness event."
        'e3femsocattend', // e3femsocattend = True
        'e3femsoc2c',
        'e3kttalk1x',
        'e3kttalk4b',
        'e3ktkisshug',
        'e3jacket', // "I gave her my jacket."
        'e4tay2', // "She came to my room and we talked."
        'e4tay3',
        'e4tay3a',
        'e4tay3b',
        'e4tay3c', // "I told her that I met Milo."
        'e4tay5',
    ].map(id => selectChoice(id)),
)

taylor.addSkillRequirements(
    // TODO: Check when else Lie Detection is triggered with Taylor
    {
            skill: 'Lie Detection',
            neededBy: 'e4b',
            priority: SkillPriority.BONUS,
    },
)
