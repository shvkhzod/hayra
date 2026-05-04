import type { ChapterText } from '../types.js';

export const maqolat12: ChapterText = {
  id: 'maqolat-12',
  num: '24',
  title: 'Oʻn ikkinchi Maqolat — Qalam haqida',
  theme: 'Qalam va yozuv haqida',
  intro:
    'Qalam haqida — Allohning oʻzi yaratgan eng qadimiy mavjudot. Lavh va qalam — koinotning birinchi ikki narsasi.',
  source: '1989-yil Toshkent nashri.',
  glossary: [
    {
      id: 'matbu',
      word: 'matbuʼ',
      modern: 'tabiatga xush, yoqimli',
      etymology: 'Arabchadan.'
    },
    {
      id: 'minqor',
      word: 'minqor',
      modern: 'tumshuq',
      etymology: 'Arabchadan.',
      classical: 'Qalam tumshugʻi — uchini bildiradi.'
    },
    {
      id: 'lavh',
      word: 'Lavh',
      modern: 'lavhi mahfuz',
      etymology: 'Arabchadan.',
      classical: 'Quron 85:22 ga ishora — saqlangan lavha.'
    },
    {
      id: 'xoma',
      word: 'xoma',
      modern: 'qalam',
      etymology: 'Forschadan.'
    }
  ],
  couplets: [
    {
      id: 'c1',
      lineA: [
        'Ul ne ajab paykari ',
        { text: 'matbuʼ', glossId: 'matbu' },
        ' erur,'
      ],
      lineB: ['Kim uni xush, diqqati masnuʼ erur.'],
      interp: {
        short: 'Ne ajoyib yoqimli vujud — uni eshitish xush, diqqat bilan ishlangan.',
        long: 'Qalamning portreti boshlanadi: matbuʼ — yoqimli, masnuʼ — yasalgan. Yaratuvchi qoʻlining mukammal ishi.'
      }
    },
    {
      id: 'c2',
      lineA: ['Qushdek oʻlub vazʼu namudor anga,'],
      lineB: [
        'Nukta sochib har sori ',
        { text: 'minqor', glossId: 'minqor' },
        ' anga.'
      ],
      interp: {
        short: 'Qushdek koʻrinishga ega; tumshug‘i har tomonga nukta sochmoqda.',
        long: 'Qalam — qush kabi: uchi tumshug‘ida; uning yozish harakati — qushning tumshug‘i bilan donni terishidek. Lekin u dona emas, "nukta" (yozuv nuqtasi) sochadi.'
      }
    },
    {
      id: 'c3',
      lineA: [
        'Dema aso, balki ani ',
        { text: 'xoma', glossId: 'xoma' },
        ' de,'
      ],
      lineB: ['Noʻgin aning naqshgari noma de.'],
      interp: {
        short: 'Asoy dema — qalam degil. Uning uchi — yozuvning naqsh chizuvchisi.',
        long: '"Aso" — Musoning hassasiga ishora ham (sehrli tayoq). Lekin Navoiy aytadi: bu sehrli emas, balki "xoma" — yozish quroli. Va uning uchi naqsh chizadi: bu sehrdan kuchliroq.'
      }
    },
    {
      id: 'c4',
      lineA: [
        'Arsh uza Kursi boʻlubon joygir,'
      ],
      lineB: [
        { text: 'Lavh', glossId: 'lavh' },
        ' uza qalam iqomatpazir.'
      ],
      interp: {
        short: 'Arsh ustida Kursi joylashgan, Lavh ustida — qalam.',
        long: 'Klassik kosmologiya: Arsh, Kursi, Lavh va Qalam — Allohning birinchi yaratgan narsalari. Qalam Lavhga yozadi — koinotning birinchi yozuvi shu yerda boshlangan.'
      }
    }
  ],
  closingEssay:
    'Oʻn ikkinchi maqolat — qalam haqida. Navoiy qalamni nafaqat yozuv quroli, balki koinotning birinchi mavjudotlaridan biri sifatida tasvirlaydi.\n\nQalam — qushdek goʻzal, ammo nukta sochuvchi; aso emas, balki "xoma"; va u Lavhga yozadi — koinotning oʻz tarixi shu yerda boshlangan. Yozuv — yaratishning birinchi shakli. Hayrat ul-abrorning oʻzi shu qalam izidan keldi.'
};
