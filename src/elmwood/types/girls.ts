type PrimaryGirl =
    | 'Ashley'
    | 'Chelsea'
    | 'Chloe'
    | 'Ella'
    | 'Dr. Riley'
    | 'Jordan'
    | 'Katie'
    | 'Lydia'
    | 'Molly'
    | 'Naomi'
    | 'Nina'
    | 'Paris'
    | 'Saki'
    | 'Selina'
    | 'Tasha'
    | 'Taylor'
    | 'Dr. Novotná'
    | 'Violet'

type SideGirl =
    | 'Kat'
    | 'Vivian'

export type GirlName = PrimaryGirl | SideGirl

export enum GirlStat {
    LOVE = 'love',
    LUST = 'lust',
}
