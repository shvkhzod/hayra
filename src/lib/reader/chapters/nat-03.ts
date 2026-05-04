import type { ChapterText } from '../types.js';

export const nat03: ChapterText = {
  id: 'nat-03',
  num: '07',
  title: 'Uchinchi Naʼt',
  theme: 'Madhi rasul',
  intro:
    'Uchinchi naʼt — payg‘ambar nutqi va Qurʼon haqida. Uning soʻzi — moʻjiza, har bir bayti — ilohiy tartib.',
  source: '1989-yil Toshkent nashri.',
  glossary: [
    {
      id: 'ejoz',
      word: 'eʼjoz',
      modern: 'moʻjiza qudrati',
      etymology: 'Arabchadan.',
      classical: 'Quron va payg‘ambar nutqining moʻjizaviy xususiyati.'
    },
    {
      id: 'mujiz',
      word: 'muʼjiz',
      modern: 'moʻjizaviy',
      etymology: 'Arabchadan.'
    },
    {
      id: 'fasohat',
      word: 'fasohat',
      modern: 'soʻz mahorati, ravonlik',
      etymology: 'Arabchadan.'
    },
    {
      id: 'jomi-quran',
      word: 'jomii Qurʼon',
      modern: 'Qurʼonni jamlovchi',
      etymology: 'Arabcha "jomeʼ" — toʻplovchi.',
      classical: 'Payg‘ambarning sifati: U Qurʼonni dunyoga keltirgan.'
    }
  ],
  couplets: [
    {
      id: 'c1',
      lineA: [
        'Ey nafasing moyai ',
        { text: 'eʼjoz', glossId: 'ejoz' },
        ' oʻlub,'
      ],
      lineB: ['Ruhi qudus nutqunga hamroz oʻlub.'],
      interp: {
        short: 'Sening nafasing — moʻjiza qudrati. Muqaddas Ruh nutqingga hamroh.',
        long: 'Payg‘ambarning nutqi — ilohiy mahsul. "Ruhi qudus" — Jabroil; payg‘ambar bilan vahiy oraligʻidagi koʻprik. Soʻz va moʻjiza birlashadi.'
      }
    },
    {
      id: 'c2',
      lineA: [
        'Gohi takallum sanga ',
        { text: 'muʼjiz', glossId: 'mujiz' },
        ' kalom,'
      ],
      lineB: ['Nazmi kaloming bori muʼjiz nizom,'],
      interp: {
        short: 'Soʻzlaganingda — soʻz moʻjiza, nazming — moʻjizaviy tartib.',
        long: 'Hatto oddiy nutqi ham moʻjiza darajasida. Nazming (nizom) — ilohiy tartibga ergashadi. Bu — payg‘ambarlik dalili.'
      }
    },
    {
      id: 'c3',
      lineA: ['Nutq aro chun zohir oʻlub muʼjizing,'],
      lineB: [
        'Ahli ',
        { text: 'fasohat', glossId: 'fasohat' },
        ' boʻlubon ojizing.'
      ],
      interp: {
        short: 'Soʻzingda moʻjiza koʻringanda, fasohat ahli oʻzini ojiz topdilar.',
        long: 'Klassik dalil: arab fasihatchilari Qurʼonga teng narsa keltira olmadilar. Bu — payg‘ambarlikning eng kuchli isboti.'
      }
    },
    {
      id: 'c4',
      lineA: ['Sunbulidek borcha parishon edi,'],
      lineB: [
        { text: 'Jomiʼ', glossId: 'jomi-quran' },
        ' anga jomii Qurʼon edi.'
      ],
      interp: {
        short: 'Olam — soʻzsiz tarqoq edi. Senga keldi — Qurʼonni jamlading.',
        long: 'Olam parishon — tarqoq, manosiz. Payg‘ambar Qurʼonni keltirgach, hamma narsa "jomeʼ" — yagona tartibga keldi. Soʻz koinotni tartiblaydi.'
      }
    }
  ],
  closingEssay:
    'Uchinchi naʼt payg‘ambarlikning eng aniq nishonasi — Qurʼon haqida. Navoiy aytadi: payg‘ambarning nutqi oddiy soʻz emas; har bir nafas, har bir bayt — moʻjiza.\n\nFasohat ahli — soʻz ustalarining oʻzi — bu moʻjiza oldida ojiz qoldi. Olam tarqoq edi; Qurʼon kelishi bilan tartibga keldi. Naʼt — payg‘ambarni va Uning soʻzini bir butun deb tan olish.'
};
