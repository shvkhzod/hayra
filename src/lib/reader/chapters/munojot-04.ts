import type { ChapterText } from '../types.js';

export const munojot04: ChapterText = {
  id: 'munojot-04',
  num: '04',
  title: 'Toʻrtinchi Munojot',
  theme: 'Karam dengizi',
  intro:
    'Toʻrtinchi munojot — Allohning kechirimi haqida. Gunohlar tog‘dek katta boʻlsa ham, Sening rahmating ulardan kengroq.',
  source: '1989-yil Toshkent nashri.',
  glossary: [
    {
      id: 'karam',
      word: 'karam',
      modern: 'saxiylik, lutf',
      etymology: 'Arabchadan.'
    },
    {
      id: 'koh-gunoh',
      word: 'koʻhi gunoh',
      modern: 'gunoh togʻi',
      etymology: 'Forscha "koʻh" (togʻ) + arabcha "gunoh".',
      classical: 'Inson xatolarining katta toʻplami.'
    },
    {
      id: 'jurm',
      word: 'jurm',
      modern: 'gunoh, xato',
      etymology: 'Arabchadan.'
    },
    {
      id: 'lutf',
      word: 'lutf',
      modern: 'mehr, marhamat',
      etymology: 'Arabchadan.'
    }
  ],
  couplets: [
    {
      id: 'c1',
      lineA: [
        'Ey ',
        { text: 'karam', glossId: 'karam' },
        'ing oldida ',
        { text: 'koʻhi gunoh', glossId: 'koh-gunoh' },
        ','
      ],
      lineB: ['Elga uchub oʻylaki bir parri koh.'],
      interp: {
        short: 'Sening saxovating oldida insonlar gunohi togʻdek — lekin shamolda uchayotgan somondek yengil.',
        long: 'Karam (saxovat) va gunoh togʻining qarama-qarshiligi. Inson koʻzida gunoh ulkan, lekin Allohning rahmati oldida — somon parchasidek arzimas. Yengillik — kechirimning oʻzidir.'
      }
    },
    {
      id: 'c2',
      lineA: ['Jumla jahon ahli xato qilsalar,'],
      lineB: [
        { text: 'Jurm', glossId: 'jurm' },
        ' bilan noma qaro qilsalar,'
      ],
      interp: {
        short: 'Hamma odamlar xato qilsa, gunoh bilan oʻz daftarini qoraytirsa ham —',
        long: 'Faraziy holat: jahon ahlining hammasi ham gunohga botgan deylik. Bu hipotetik vaziyatda Allohning rahmati nima boʻladi? Keyingi bayt javob beradi.'
      }
    },
    {
      id: 'c3',
      lineA: ['Nomani oq aylamak oson sanga,'],
      lineB: ['Kim yoʻq oʻshul amrda nuqson sanga.'],
      interp: {
        short: 'Daftarni yana oqartirish — Senga oson. Bu ishda Senga zarar yoʻq.',
        long: 'Allohning kechirimi cheksiz. Hammaning gunohini kechirish — Uning qudratiga zarar bermaydi. Kechirim — kuchsizlik emas, kuch alomati.'
      }
    },
    {
      id: 'c4',
      lineA: [
        { text: 'Lutf', glossId: 'lutf' },
        ' quyoshiga chu berding zuhur,'
      ],
      lineB: ['Mehr ila qilding bori zulmatni nur.'],
      interp: {
        short: 'Lutf quyoshini koʻtarganingda — barcha qorongʻulik nurga aylandi.',
        long: 'Quyosh va zulmat obraz-i. Lutf koʻtarilsa, hech qanday qorongʻulik qolmaydi. Kechirim — yorug‘likning oʻzi.'
      }
    }
  ],
  closingEssay:
    'Toʻrtinchi munojot — Allohning rahmati haqida. Navoiy bu yerda kechirimning miqyosini koʻrsatadi.\n\nGunoh — togʻdek, lekin saxovat undan ulkan. Insonning xatosi koʻp, lekin Allohning kechirimi cheksiz. Bu fikr Hayrat ul-abrorning butun axloqiy yoʻnalishini ochadi: gunohdan qoʻrqish emas, kechirimga ishonch — eʼtiqodning asosi.'
};
