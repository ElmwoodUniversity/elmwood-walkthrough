import { Girl } from '@/elmwood/elmwood.ts'
import { selectChoice } from '@/elmwood/choices.ts'

export const saki = new Girl('Saki', 'Saki Kishimoto', 'saki')

saki.addChoices(
    ...[

    ].map(id => selectChoice(id)),
)
