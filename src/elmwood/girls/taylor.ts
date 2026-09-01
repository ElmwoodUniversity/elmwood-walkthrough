import { Girl } from '@/elmwood/elmwood.ts'
import { selectChoice } from '@/elmwood/choices.ts'
import { SkillPriority } from '@/elmwood/types/skills.ts'

export const taylor = new Girl('Taylor', 'Taylor Griffiths', 'taylor')

taylor.addChoices(
    ...[
        'intro9x',
        'intro14',
        'intro18',
        'intro20',
        'preselinaintrox',
        'preselinaintrox4',
        'selinaintro5a',
        'hotnaked1',
        'e1taydebrief1',
        'e3femsocattend',
        'e3femsoc2c',
        'e3kttalk1x',
        'e3kttalk4b',
        'e3ktkisshug',
        'e3jacket',
        'e4tay2',
        'e4tay3',
        'e4tay3a',
        'e4tay3b',
        'e4tay3c',
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
