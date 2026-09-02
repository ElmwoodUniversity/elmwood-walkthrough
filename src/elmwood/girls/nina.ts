import { Girl } from '@/elmwood/elmwood.ts'
import { selectChoice } from '@/elmwood/choices.ts'
import { SkillPriority } from '@/elmwood/types/skills.ts'

export const nina = new Girl('Nina', 'Nina', 'nina')

nina.addChoices(
    ...[
        'e2vlecture1',
        'e2ninatalk2', // "I told Nina I was interested in her plan."
        'e2infiltration0',
        'e2infiltration1', // "We snuck into the psychology building to cheat on the first exam!"
        'e2infiltration2', // "I scanned my card when we broke into Dr. Novotná's office."
        'e2infiltration3', // "We snuck through Dr. Novotná's lecture room."
        'e2infiltration4', // "Nina stole Dr. Novotná's keycard!"
        'e2infiltration5', // "We took photos of the exam!"
        'e2infiltration6',
        'e2nisex', // "We had sex in Dr. Novotná's office!"
        'e4ninaday2a',
        'e4ninaday2axa',
        'e4infil6',
        'e4flagua',
        'e4flagar',
        'e4flagus',
        'e4flagbe',
        'e4flagin',
        'e4flagza',
        'e4flagcz',
        'e4flagit',
        'e4flagfr',
        'e4flagca',
        'e4flagch',
        'e4flages',
        'e4flagbr',
        'e4flagcn',
        'e4flagau',
        'e4niseduce',
        'e4nisex', // "We had sex in the staff lounge!"
    ].map(id => selectChoice(id)),
)

nina.addSkillRequirements(
)
