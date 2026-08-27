import { Girl } from '@/elmwood/elmwood.ts'
import { selectChoice } from '@/elmwood/choices.ts'

export const selina = new Girl('Selina', 'Selina Nelson', 'selina')

selina.addChoices(
    ...[
        'selinaintro3',
        'selinaintro5b',
        'selinaintro6',
        'selinaintrokiss',
        'selinaintro12',
        'selinaintro12c',
        'e1ssex1',
    ].map(id => selectChoice(id)),
)
