import { Girl } from '@/elmwood/elmwood.ts'
import { selectChoice } from '@/elmwood/choices.ts'
import { SkillPriority } from '@/elmwood/types/skills.ts'

export const molly = new Girl('Molly', 'Molly Page', 'molly')

molly.addRecommendedGirls('Ashley', 'Saki', 'Tasha')

molly.addChoices(
    ...[
        'e2tdtruth1',
        'e2truth2',
        // 'e2ashspank', // "Molly seemed flustered when I spanked Ashley."
        'e2truth2a',
        'e2truth2c', // "I told Molly I have a crush on her in Truth or Dare!"
        'e2tdturn',
        'e2tdshowdickoption',
        'e2tdshowdickoption2',
        'e2tdround8', // "I covered for Molly in Truth or Dare"
        'e2ordervibrator1',
        'e2ordervibrator2', // "I ordered a copy of my dick as a vibrator for her!"
        'e4dd2', // "I shut down her bratty behaviour and didn't let her shout at me."
        'e4cook2', // "I cooked dinner for her."
        'e5molly1b', // "She apologised and we cooked together."
        'e5cook4a', // "I helped her wash up."
    ].map(id => selectChoice(id)),
)

molly.addSkillRequirements(
    {
            skill: 'Persuasion',
            neededBy: 'e4b',
            priority: SkillPriority.REQUIRED,
    },
)
