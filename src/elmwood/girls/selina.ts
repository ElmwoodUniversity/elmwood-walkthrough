import { Girl } from '@/elmwood/elmwood.ts'
import { selectChoice } from '@/elmwood/choices.ts'
import { SkillPriority } from '@/elmwood/types/skills.ts'

export const selina = new Girl('Selina', 'Selina Nelson', 'selina')

selina.addChoices(
    ...[
        'selinaintro3',
        'selinaintro5b', // "I sided with Selina and stayed in their conversation."
        'selinaintro6', // "I persuaded Taylor to let Selina stay at the party."
        'selinaintrokiss',
        'selinaintro12',
        'selinaintro12c',
        'e1ssex1', // s_fucked = True
        'e3stext',
        'e3stext1',
        'e3stalk',
        'e3stalk2c',
        'e3stalk3', // "We became friends with benefits!"
        'e3stalk4a',
        'e3stalk5',
        'e3ssex',
        'e4selina2', // "She sent me nudes."
        'e5selinatext', // "We studied together and had sex in my room."
        'e5selinatext1', // "You rejected her."
        'e5selina1a',
        'e5selinaquake', // e5selinaquake = True, "We fucked so hard that Molly, Saki, Tasha & Ashley orgasmed with the earthquake!"
    ].map(id => selectChoice(id)),
)

selina.addSkillRequirements(
    {
            skill: 'Earthquake',
            neededBy: 'e5b',
            priority: SkillPriority.BONUS,
    }
)
