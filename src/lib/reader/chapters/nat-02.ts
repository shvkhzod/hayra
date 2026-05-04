import type { ChapterText } from '../types.js';

export const nat02: ChapterText = {
  id: 'nat-02',
  num: '06',
  title: 'Ikkinchi Naʼt',
  theme: 'Risolat — payg‘ambarlik',
  intro:
    'Ikkinchi naʼt — Payg‘ambarlik missiyasi haqida. Muhammadning kelishi bilan butlar yiqilib, koinot yangi yorug‘likka uygʻondi.',
  source: '1989-yil Toshkent nashri.',
  glossary: [
    {
      id: 'tiflzod',
      word: 'tiflzod',
      modern: 'yangi tugʻilgan bola',
      etymology: 'Arabcha "tifl" (bola) + forscha "zod" (tugʻilgan).'
    },
    {
      id: 'axtar',
      word: 'axtar',
      modern: 'yulduz',
      etymology: 'Forschadan.'
    },
    {
      id: 'kufr',
      word: 'kufr',
      modern: 'iymonsizlik, butparastlik',
      etymology: 'Arabchadan.'
    },
    {
      id: 'durri-yatim',
      word: 'durri yatim',
      modern: 'noyob marvarid',
      etymology: 'Arabcha "dur" (marvarid) + "yatim" (yagona).',
      classical: 'Klassik adabiyotda — payg‘ambarning epteti.'
    }
  ],
  couplets: [
    {
      id: 'c1',
      lineA: [
        'Ey koʻrunub gʻurra kibi ',
        { text: 'tiflzod', glossId: 'tiflzod' },
        ','
      ],
      lineB: ['Tifli raxing charxi qadimiynihod.'],
      interp: {
        short: 'Yangi oydek koʻrindingsang — yangi tugʻilgan bola. Lekin yuzing — qadimiy osmonning oʻzi.',
        long: 'Paradoks: zohirda yangi tugʻilgan bola, botinda — vaqt tashqarisidagi nur. Yangi oy obraz-i ("gʻurra") — yangiligini ham, eskilikni ham koʻrsatadi.'
      }
    },
    {
      id: 'c2',
      lineA: [
        { text: 'Axtar', glossId: 'axtar' },
        'ing ul tunki, tuluʼ aylabon,'
      ],
      lineB: ['Charx salomiga rukuʼ aylabon.'],
      interp: {
        short: 'Tugʻilgan tuningda yulduzing chiqib, osmon Senga taʼzim qildi.',
        long: 'Payg‘ambarning tugʻilishi — koinot hodisasi. Yulduzlar va osmon hatto Unga taʼzim qilishadi. Bu naʼtning markaziy obrazi: payg‘ambar — koinot ulchovi.'
      }
    },
    {
      id: 'c3',
      lineA: [
        { text: 'Kufr', glossId: 'kufr' },
        ' biyik togʻiga solib shikast,'
      ],
      lineB: ['Yerga boʻlub past butu butparast.'],
      interp: {
        short: 'Iymonsizlikning baland togʻini sindirding. Butlar va butparast yerga yiqildilar.',
        long: 'Tarixiy lahzaga ishora: Makkadagi butlarning yiqilishi. Obraz-tog‘: kufr — baland, lekin shu balandlikni payg‘ambar buzdi. "Yerga past" — eski tartibning quladigani.'
      }
    },
    {
      id: 'c4',
      lineA: ['Gavhari zotingga sadafsiz ne bim,'],
      lineB: [
        'Itti sadaf, chiqti chu ',
        { text: 'durri yatim', glossId: 'durri-yatim' },
        '.'
      ],
      interp: {
        short: 'Sening zotingga sadaf kerakmas. Sadaf yoʻqolib, noyob marvarid namoyon boʻldi.',
        long: '"Durri yatim" — Quronda payg‘ambar uchun ishlatilgan iboraga ishora. Sadaf — ramzy himoya: Sen ozod, sadafga muhtoj emassan. Senga sadaf kerak emas, lekin sadaf Senga ehtiyojli.'
      }
    }
  ],
  closingEssay:
    'Ikkinchi naʼt — payg‘ambarlikning amaliy zuhuri haqida. Birinchi naʼt nurning azaliy mavjudligini koʻrsatdi; bu naʼt esa bu nurning vaqt ichida amalga oshishini koʻrsatadi.\n\nPayg‘ambarning kelishi bilan koinot oʻzgaradi: butlar yiqiladi, kufr togʻi sinadi, va "noyob marvarid" — payg‘ambarning oʻzi — namoyon boʻladi. Naʼt nafaqat madh, balki tarixiy hodisaning teologik tasviri.'
};
