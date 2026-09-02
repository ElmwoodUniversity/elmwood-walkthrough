import { Girl } from '@/elmwood/elmwood.ts'
import { selectChoice } from '@/elmwood/choices.ts'
import { SkillPriority } from '@/elmwood/types/skills.ts'

export const naomi = new Girl('Naomi', 'Naomi Edwards', 'naomi')

naomi.addChoices(
    ...[
        'e1chbye',
        'e1chbye1',
        'e1chbye1a',
        'e1leaveparty3',
        'e2ntalkx1',
        'e2ntalkx1b',
        'e2ntalkx1scholar',
        'e2ntalk2',
        'e2nex',
        'e22tl',
        'e2flecfinal', // "I had lunch with Naomi."
        'e2panswer1a',
        'e3flec1',
        'e3flec3',
        'e3essay2', // e3nstudy = True
        'e3vlec9',
        'e3nstudy1a',
        'e3nstudy1b',
        'e3nstudy2',
        'e3nstudy2c',
        'e3nstudy2b',
        'e3nstudy5c', // "You reassured Naomi about her enthusiasm in class."
        'e3nstudy7b',
        'e3nkiss', // "We kissed!" / "Naomi was my first kiss!"
        'e3nkissx',
        'e4flec3', // "We agreed to proofread each other's essays."
        'e4flec8', // e4nstudy = True
        'e4naomi11b',
        'e4naomi1d',
        'e4naomi2b', // "I thoroughly tested her knowledge for the exam."
        'e4naomi4a', // "We made a romantic bet for the first exam."
        'e4naomi5a', // "We flirted during our study session."
        'e4naomi6',
        'e4naomi7', // "I told her about my sexual experiences."
        'e4naomipa', // "I told her about Paris."
        'e4naomis', // "I told her about Selina."
        'e4naomily', // "I told her about Lydia."
        'e4naomiel', // "I told her about Ella."
        'e4naomich', // "I told her about Chelsea.", "We kissed and dry humped while I told her about my experiences."
        'e5ntalk1',
        'e5naomiplay', // "We made out and exchanged answers after the exam."
        'e5naomiplay1',
        'e5naomicuck', // "I treated her like a cuckquean and told her other girls are hotter."
        'e5naomiplaynocuck', // "I reassured her that she was just as hot as other girls."
        'e5naomicuck2',
        'e5naomicuckfinger',
    ].map(id => selectChoice(id)),
)

naomi.addSkillRequirements(
    {
        skill: 'Scholar',
        neededBy: 'e1',
        priority: SkillPriority.RECOMMENDED,
    },
    {
        skill: 'Persuasion',
        neededBy: 'e2b',
        priority: SkillPriority.RECOMMENDED,
    },
    {
        skill: 'Scholar',
        neededBy: 'e3a',
        priority: SkillPriority.RECOMMENDED,
    },
    {
        skill: 'Persuasion',
        neededBy: 'e3b',
        priority: SkillPriority.STRONGLY_RECOMMENDED,
    },
    {
        skill: 'Deception',
        neededBy: 'e3b',
        priority: SkillPriority.RECOMMENDED,
    },
    {
        skill: 'Lie Detection',
        neededBy: 'e3b',
        priority: SkillPriority.RECOMMENDED,
    },
    {
        skill: 'Persuasion',
        neededBy: 'e4b',
        priority: SkillPriority.RECOMMENDED,
    },
    {
        skill: 'Deception',
        neededBy: 'e4b',
        priority: SkillPriority.RECOMMENDED,
    },
    {
        skill: 'Oral Mastery',
        neededBy: 'e5b',
        priority: SkillPriority.BONUS,
    },
)
