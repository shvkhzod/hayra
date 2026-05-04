import type { ChapterText } from '../types.js';

export const maqolat07: ChapterText = {
  id: 'maqolat-07',
  num: '19',
  title: 'Yettinchi Maqolat — Qanoat haqida',
  theme: 'Qanoat haqida',
  intro:
    'Qanoat — boylikning eng katta xazinasi. Ozga shukr qilgan — boy; har narsani xohlagan — gado.',
  source: '1989-yil Toshkent nashri.',
  glossary: [
    {
      id: 'gani',
      word: 'gʻani',
      modern: 'boy, beboshli',
      etymology: 'Arabchadan.'
    },
    {
      id: 'ganj',
      word: 'ganj',
      modern: 'xazina',
      etymology: 'Forschadan.'
    },
    {
      id: 'qoni',
      word: 'qoniʼ',
      modern: 'qanoatli',
      etymology: 'Arabchadan.'
    },
    {
      id: 'tome',
      word: 'tomeʼ',
      modern: 'tamagʻir, ochkoʻz',
      etymology: 'Arabchadan.'
    }
  ],
  couplets: [
    {
      id: 'c1',
      lineA: ['Kimgaki ish boʻldi qanoat fani,'],
      lineB: [
        'Bilki, ani qildi qanoat ',
        { text: 'gʻani', glossId: 'gani' },
        '.'
      ],
      interp: {
        short: 'Kimning ishi qanoat boʻlsa — uni qanoat boy qilgan.',
        long: 'Faslning birinchi daʼvosi. Boylik — pulda emas, qanoat odatlanishida. Bu — paradoksal: hech narsa yoʻq odam, qanoatli boʻlsa, eng boy.'
      }
    },
    {
      id: 'c2',
      lineA: [
        'Ganju tajammulni gʻino bilmagil,'
      ],
      lineB: [
        'Balki gʻino ',
        { text: 'ganj', glossId: 'ganj' },
        'i qanoatni bil.'
      ],
      interp: {
        short: 'Xazina va dabdabani boylik deb bilma. Boylikning xazinasi — qanoat.',
        long: 'Daʼvoning kuchli ifodasi: pul va dabdaba — soxta boylik. Asl xazina — qanoatning ichki holati.'
      }
    },
    {
      id: 'c3',
      lineA: [
        'Kulbada darveshki, ',
        { text: 'qoniʼ', glossId: 'qoni' },
        ' durur,'
      ],
      lineB: [
        'Foyiq erur shahgʻaki, ',
        { text: 'tomeʼ', glossId: 'tome' },
        ' durur.'
      ],
      interp: {
        short: 'Kulbadagi qanoatli darvish — tomagʻir shohdan ustun.',
        long: 'Eng aniq qiyos: darveshning kulbasi vs shohning saroyi. Lekin sifatlar oʻrnini almashtiradi — qanoatli darvish "foyiq" (ustun), tomeʼ shoh — past.'
      }
    },
    {
      id: 'c4',
      lineA: ['Mulk ila oʻzni demagil, arjumand,'],
      lineB: ['Mulki qanoat bila boʻl sarbaland.'],
      interp: {
        short: 'Mulkka tayanib oʻzingni ulugʻ deb sanama; qanoat mulki bilan baland boʻl.',
        long: 'Bilvosita oʻgit: "arjumand" (qadrli) boʻlish — mulkda emas. "Mulki qanoat" — qanoatning oʻzi mulkdek; lekin uning egasi — uni hech qachon yoʻqotmaydi.'
      }
    }
  ],
  closingEssay:
    'Yettinchi maqolat — qanoat haqida. Navoiy klassik formula bilan boshlaydi: qanoatli — boy, tamagʻir — gado.\n\nLekin bundan ham chuqurroq: qanoat oʻzi — bir xil mulk. Ozga shukr qilgan inson — yoʻqotishi mumkin boʻlmagan boylikni topgan. Bu — yettinchi maqolatning oxiri va sakkizinchining ochilishi: koʻngilning erkinligi.'
};
