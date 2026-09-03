import { Girl } from '@/elmwood/elmwood.ts'
import { selectChoice } from '@/elmwood/choices.ts'
import { SkillPriority } from '@/elmwood/types/skills.ts'

export const taylor = new Girl('Taylor', 'Taylor Griffiths', 'taylor')

taylor.addRecommendedGirls('Katie', 'Violet')

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
        'e5taytext', // "We arranged to have coffee."
        'e5taycoffee3', // "She asked me to write to her.", "We arranged a lunch date."
        'e5taydate2',
        'e5taydate4c',
        'e5taydate8', // "We kissed!"
    ].map(id => selectChoice(id)),
)

taylor.addSkillRequirements(
    // TODO: Check when else Lie Detection is triggered with Taylor
    {
            skill: 'Lie Detection',
            neededBy: 'e4b',
            priority: SkillPriority.BONUS,
    },
    {
            skill: 'Lie Detection',
            neededBy: 'e5b',
            priority: SkillPriority.BONUS,
    },
)
