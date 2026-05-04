import type { ChapterText } from '../types.js';

export const maqolat15: ChapterText = {
  id: 'maqolat-15',
  num: '27',
  title: 'Oʻn beshinchi Maqolat — Jahl mayi haqida',
  theme: 'Johillik (jahl mayi) haqida',
  intro:
    'Johillik — eng achchiq may. Inson uni hisobsiz ichadi va keyin oʻzini sezmaydigan boʻladi. Lekin oxirida — qaytmas hisob.',
  source: '1989-yil Toshkent nashri.',
  glossary: [
    {
      id: 'jahl',
      word: 'jahl mayi',
      modern: 'johillik mayi',
      etymology: 'Arabchadan.',
      classical: 'Klassik adabiyotda — johillikning mast etuvchi taʼsiri.'
    },
    {
      id: 'jaholat',
      word: 'jaholat',
      modern: 'bilimsizlik, johillik',
      etymology: 'Arabchadan.'
    },
    {
      id: 'gaflat',
      word: 'gʻaflat',
      modern: 'beparvolik, esladmaslik',
      etymology: 'Arabchadan.',
      sufiTag: 'Gʻaflat'
    },
    {
      id: 'ehtisob',
      word: 'ehtisob',
      modern: 'hisob-kitob',
      etymology: 'Arabchadan.',
      classical: 'Bu yerda — Allohning hisobi.'
    }
  ],
  couplets: [
    {
      id: 'c1',
      lineA: ['Ey tarabing jomgʻa hamdastlik,'],
      lineB: [
        { text: 'Jahl', glossId: 'jahl' },
        ' xumoridin ishing mastlik.'
      ],
      interp: {
        short: 'Tarabing jomga hamroh, ishing — johillik xumoridan mastlik.',
        long: 'Maqolatning ochilishi: yashash uslubi — mastlik. Lekin bu yerda may — alkogol emas, balki "jahl xumori" — johillikning bor sezgini boʻgʻib qoʻyadigan taʼsiri.'
      }
    },
    {
      id: 'c2',
      lineA: ['Oʻksumayin ayshi mudoming sening,'],
      lineB: [
        'Jomi ',
        { text: 'jaholat', glossId: 'jaholat' },
        ' bila koming sening.'
      ],
      interp: {
        short: 'Aysing toʻxtamaydi — johillik jomi bilan kayfing.',
        long: 'Maishiy hayotning aniq tasviri: ish va kayf yon-yonda yuradi, oraga johillik kiradi. "Aysh mudom" — toʻxtamas xayrlik — bu yerda salbiy xususiyat.'
      }
    },
    {
      id: 'c3',
      lineA: ['Fisqu fujur ilgi chu ogʻzing ochib,'],
      lineB: [
        'Kup kibi ',
        { text: 'gʻaflat', glossId: 'gaflat' },
        ' mayidin kaf sochib.'
      ],
      interp: {
        short: 'Buzuqlik qoʻli ogʻzingni ochadi, gʻaflat mayidan kupdek koʻpik sochasan.',
        long: '"Kup" — sopol may idishi. Inson kupga oʻxshaydi: ichida koʻpchimaydigan, sezadigan hech narsa qolmagan. Faqat tashqi koʻrinish.'
      }
    },
    {
      id: 'c4',
      lineA: ['Buki mayi jahl ichasen behisob,'],
      lineB: [
        'Boʻlgusi bir kun sanga bu ',
        { text: 'ehtisob', glossId: 'ehtisob' },
        '.'
      ],
      interp: {
        short: 'Johillik mayini hisobsiz ichmoqdasan — lekin bir kun bu hisob keladi.',
        long: 'Maqolatning xulosasi: hisobsiz mastlik — hisob bilan tugaydi. Bu — oxirat ehtisobi. "Hisobsiz" ichish — vaqtinchalik, hisob — abadiy.'
      }
    }
  ],
  closingEssay:
    'Oʻn beshinchi maqolat — johillik haqida. Navoiy "jahl mayi" obrazi orqali oddiy mastlik emas, balki bilim va sezgilarni boʻgʻib qoʻyuvchi holatni tasvirlaydi.\n\nMast odam oʻzini sezmaydi; mast johil ham — oʻzini va atrofini sezmaydi. Lekin oxirida ehtisob keladi: hisobsiz ichilgan har bir jom kayfning toʻlovini talab qiladi. Maqolatning ogohlantiruvi: johillik — eng achchiq mast etuvchi.'
};
