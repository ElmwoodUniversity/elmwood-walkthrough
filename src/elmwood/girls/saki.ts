import { Girl } from '@/elmwood/elmwood.ts'
import { selectChoice } from '@/elmwood/choices.ts'
import { SkillPriority } from '@/elmwood/types/skills.ts'

export const saki = new Girl('Saki', 'Saki Kishimoto', 'saki')

saki.addRecommendedGirls('Ashley', 'Molly', 'Tasha')

saki.addChoices(
    ...[
        'e2sameet5x',
        'e2wakeup2y', // "I told Saki about who was at the FemSoc party."
        'ie2sameet11a',
        'ie2sameet11b',
        'twinsmeet4',
        'twinsmeet4a',
        'e2tdtruth1',
        'e2tdsakissplayer', // "We kissed during Truth or Dare." / "Saki was my first kiss!"
        'e2truth2',
        'e2truth2a',
        'e2truth2b', // "I told Saki I have a crush on her in Truth or Dare!"
        'e2tdround5', // "I dared Saki to flash her tits in Truth or Dare."
        'e2tdshowdickoption',
        'e2tdshowdickoption2',
        'e2sanight2', // "We kissed again later that night."
        'e3saki3c',
        'e3saki4',
        'e3sakibanana',
        'e3sakibanana1', // "I taught her how to give a bj on a banana."
        'e3sakibanana1a',
        'e3sakicorruption', // "I corrupted her and introduced her to the basics of submission."
        'e4saki1',
        'e4saki3',
        'e4saki4',
        'e4sacorrupt', // "I fingered her."
        'e4safinger', // "I fingered her."
        'e4saownership', // "I taught her that I own her orgasms."
        'e4sacumx',
        'e5saki3',
        'e5saki3a',
        'e5saki4a',
        'e5saki4b', // "I corrupted her and let her suck my dick."
        'e5sakiobedience',
        'e5sakiobedience2', // "I trained her to kneel on command."
        'e5sakiobedience3a', // "I gave her permission to touch herself and cum."
        'e5sakiobedience3a', // "I didn't give her my permission to cum."
    ].map(id => selectChoice(id)),
)

saki.addSkillRequirements(
    {
        skill: 'Corruption',
        neededBy: 'e3b',
        priority: SkillPriority.STRONGLY_RECOMMENDED,
    },
    {
        skill: 'Corruption',
        neededBy: 'e4b',
        priority: SkillPriority.STRONGLY_RECOMMENDED,
    },
    {
        skill: 'Dexterity',
        neededBy: 'e4b',
        priority: SkillPriority.RECOMMENDED,
    },
    {
        skill: 'Ownership',
        neededBy: 'e4b',
        priority: SkillPriority.RECOMMENDED,
    },
    {
        skill: 'Corruption',
        neededBy: 'e5b',
        priority: SkillPriority.STRONGLY_RECOMMENDED,
    },
    {
        skill: 'Ownership',
        neededBy: 'e5b',
        priority: SkillPriority.RECOMMENDED,
    },
)
