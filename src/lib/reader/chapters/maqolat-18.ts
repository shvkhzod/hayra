import type { ChapterText } from '../types.js';

export const maqolat18: ChapterText = {
  id: 'maqolat-18',
  num: '30',
  title: 'Oʻn sakkizinchi Maqolat — Falak gʻamxonasi haqida',
  theme: 'Dunyo — gʻamxona',
  intro:
    'Dunyo aql ahliga zindon, hammomdek issiq, nodonga — manzil. Lekin Navoiy oʻgit beradi: bir gʻam yetadi, ikki gʻam yema.',
  source: '1989-yil Toshkent nashri.',
  glossary: [
    {
      id: 'dahr',
      word: 'dahr',
      modern: 'olam, dunyo',
      etymology: 'Arabchadan.'
    },
    {
      id: 'shefta',
      word: 'shefta',
      modern: 'oshiq, bogʻlangan',
      etymology: 'Forschadan.'
    },
    {
      id: 'jafo',
      word: 'jafo',
      modern: 'azob, zulm',
      etymology: 'Arabchadan.'
    },
    {
      id: 'sahl',
      word: 'sahl',
      modern: 'oson',
      etymology: 'Arabchadan.'
    }
  ],
  couplets: [
    {
      id: 'c1',
      lineA: [
        { text: 'Dahr', glossId: 'dahr' },
        'ki hush ahliga zindon erur,'
      ],
      lineB: [
        'Boʻlgʻon anga ',
        { text: 'shefta', glossId: 'shefta' },
        ' nodon erur.'
      ],
      interp: {
        short: 'Dunyo aql ahliga zindon — unga oshiq boʻlgan — nodon.',
        long: 'Maqolatning ochilishi: aql ahli dunyoni ham koʻrib turadi, ham bilib turadi. Bunga oshiq boʻlish — aql darajasiga toʻgʻri kelmaydi.'
      }
    },
    {
      id: 'c2',
      lineA: ['Boisa gʻaming joninga solma alam,'],
      lineB: ['Bir gʻam erur bas, yemagil ikki gʻam.'],
      interp: {
        short: 'Gʻam keladi — joninga azob qoʻshma. Bir gʻam yetadi, ikki gʻamga oʻtma.',
        long: 'Donolik oʻgiti: gʻam tabiiy keladi, lekin uni "ichish" — ikki gʻam yaratish. Birinchi gʻam — voqea; ikkinchi — uning oldida tushkunligimiz. Ikkinchisini tark qilish mumkin.'
      }
    },
    {
      id: 'c3',
      lineA: [
        'Necha ',
        { text: 'jafo', glossId: 'jafo' },
        ' yetsa falakdin unut.'
      ],
      lineB: [
        'Har nechakim, kulli erur ',
        { text: 'sahl', glossId: 'sahl' },
        ' tut.'
      ],
      interp: {
        short: 'Falakdan necha azob kelsa unut. Har biri ham — oson deb hisobla.',
        long: 'Stoik oʻgit: oʻtgan gʻam — oʻtganda, uni qaytarib oʻylash — ikkinchi azob. "Sahl tut" (oson deb hisobla) — ichki erkinlikka kalit.'
      }
    },
    {
      id: 'c4',
      lineA: ['Shod ani bil dahrda kim gʻam emas,'],
      lineB: ['Dahr ishi chun gʻam yegali arzimas.'],
      interp: {
        short: 'Dunyoda gʻam ichida boʻlmagan — shod. Dunyo ishi gʻam yeyishga arzimaydi.',
        long: 'Maqolatning xulosasi: dunyo bilan tinch munosabat — uning gʻamiga teng emaslikni anglash. Dunyo "gʻamxona" — lekin u arzimaydi.'
      }
    }
  ],
  closingEssay:
    'Oʻn sakkizinchi maqolat — dunyo "gʻamxona" deb taʼriflanadi. Lekin Navoiy unga qarshi tushuvchi pozitsiyada emas, balki donolik bilan munosabatda boʻlishni oʻrgatadi.\n\nGʻam keladi — bu tabiiy. Lekin uni ikkilantirish — ixtiyoriy. Bir gʻam yetadi. Aql ahli dunyoda zindonchidek — lekin zindon ichida ham ozod boʻla oladi. Faslning donoligi: ichki tinchlik — tashqi sharoit emas.'
};
