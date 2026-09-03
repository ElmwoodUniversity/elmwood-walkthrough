import { Girl } from '@/elmwood/elmwood.ts'
import { selectChoice } from '@/elmwood/choices.ts'

export const chelsea = new Girl('Chelsea', 'Chelsea Porter', 'chelsea')

chelsea.addRecommendedGirls('Lydia', 'Ella', 'Kat')

chelsea.addChoices(
    ...[
        'cheertalk3',
        'cheertalk4x', // "She did the splits on my lap."
        'cheertalk6x',
        'cheertalk7all',
        'cheertalk8n',
        'cheerkissch',
        'chelbj4', // bjcomp = True, "She sucked my dick in the bathroom!"
        'e1chbjcum',
        'lydbj3',
        'e1elbj1',
        'hotnaked1', // e1hotnaked = True
        'hottub2e',
        'e1endhot2',
        'e1chbye',
        'e1chbye1',
        'e1chbye1a',
        'e1leaveparty3', // ch_fucked = True
        'e1chsex2', // "I took her home and we had sex."
        'e1chforeplay2',
        'e2lytext',
        'e2lytext2',
        'e2lysex3',
        'e2lysex4',
        'e2lysexsquirt',
        'e3chtext1',
        'e3chtext2',
        'e3chtext3', // "I agreed to go on a double date with Kat and Ross."
        'e3satwake3',
        'e3ddate5',
        'e3ddate7',
        'e3ddatekatleaves',
        'e3ddate8',
        'e3ddate9',
        'e3ddate10a',
        'e3ddate11a',
        'e3ddate90',
        'e3ddate110', // "I had a threesome with Chelsea and Kat!"
        'e4bjcomp2', // "Lydia, Ella and Chelsea had a second BJ competition."
        'e4pole1', // "We had a squirting lesson with Lydia & Ella.", "I made her squirt for the first time!"
    ].map(id => selectChoice(id)),
)
