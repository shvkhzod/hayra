import type { ChapterText } from '../types.js';

export const maqolat14: ChapterText = {
  id: 'maqolat-14',
  num: '26',
  title: 'Oʻn toʻrtinchi Maqolat — Falak makri haqida',
  theme: 'Dunyoning aldoq tabiati',
  intro:
    'Bu maqolat dunyoning makri haqida. Falak — sirtdan goʻzal qutidir, ichkarisidan zahar. Yulduzlar koʻrinishida — gavhar; aslida — yo‘qolib boruvchi soya.',
  source: '1989-yil Toshkent nashri.',
  glossary: [
    {
      id: 'shubadasanj',
      word: 'shuʼbadasanj',
      modern: 'sehrgar, ko‘zboʻyamachi',
      etymology: 'Arabchadan.'
    },
    {
      id: 'fireb',
      word: 'fireb',
      modern: 'aldash',
      etymology: 'Forschadan.'
    },
    {
      id: 'fusun',
      word: 'fusun',
      modern: 'sehr, jodu',
      etymology: 'Forschadan.'
    },
    {
      id: 'tosboz',
      word: 'tosboz',
      modern: 'koʻzboʻyamachi, fokuschi',
      etymology: 'Forschadan.'
    }
  ],
  couplets: [
    {
      id: 'c1',
      lineA: [
        'Charx erur ',
        { text: 'shuʼbadasanj', glossId: 'shubadasanj' },
        ', ey koʻngul,'
      ],
      lineB: [
        'Topma ',
        { text: 'fireb', glossId: 'fireb' },
        'i bila ranj, ey koʻngul.'
      ],
      interp: {
        short: 'Falak — sehrgar; uning aldovi bilan qaygʻu topma, ey koʻngil.',
        long: 'Maqolatning boshlovi: dunyo (falak) — koʻzboʻyamachi. Uning ishlari — fireb. Koʻngilga ogohlantiruv: bu makrga bogʻlanma.'
      }
    },
    {
      id: 'c2',
      lineA: ['Shuʼbadasi vahmu gumondin fuzun,'],
      lineB: [
        'Shuʼbadadin dogʻi fuzunroq ',
        { text: 'fusun', glossId: 'fusun' },
        '.'
      ],
      interp: {
        short: 'Sehri vahm va gumondan ortiq; sehrdan ham ortiq jodusi.',
        long: 'Falakning aldovi qatlam-qatlam: zohirda sehr, ostida jodu. Hech qaysi tushuncha unga toʻliq mos kelmaydi.'
      }
    },
    {
      id: 'c3',
      lineA: [
        'Charx urubon rev ila nayrang soz,'
      ],
      lineB: [
        'Oʻylaki koʻk xirqa bila ',
        { text: 'tosboz', glossId: 'tosboz' },
        '.'
      ],
      interp: {
        short: 'Falak hiyla bilan oʻyin koʻrsatadi — koʻk xirqa kiygan koʻzboʻyamachidek.',
        long: '"Tosboz" — koʻchada tosga (yumaloq idishga) tosh tashlab fokus koʻrsatuvchi. Falak ham xuddi shu — uning xirqasi koʻk osmon, yumaloqchasi — quyosh va oy.'
      }
    },
    {
      id: 'c4',
      lineA: ['Mashʼali xur birlaki, davron qilib,'],
      lineB: ['Tos aro oʻt xirqada pinhon qilib.'],
      interp: {
        short: 'Quyosh mashʼali bilan davr aylanadi — olov tosga yashirib qoʻyilgan.',
        long: 'Sehrgarning quroli — quyosh. U tosning ichida olovni yashirib, davr boʻylab koʻrsatadi. Lekin bu — fokus, hech narsa haqiqiy emas.'
      }
    }
  ],
  closingEssay:
    'Oʻn toʻrtinchi maqolat — dunyoning aldovi haqida. Navoiy uni "shuʼbadasanj" deb ataydi: koʻzboʻyamachi.\n\nFalak ko‘rinadi va goʻzal koʻrinadi, lekin uning ichida zahar. Yulduzlar — gavhar emas, soya. Quyosh — mashʼal emas, fokus oʻyini. Bu ogohlantirish keyingi maqolat (Xudnamo muxannaslar) bilan bogʻlanadi: dunyoga aldanmaslik — riyokorlikning birinchi belgisi.'
};
