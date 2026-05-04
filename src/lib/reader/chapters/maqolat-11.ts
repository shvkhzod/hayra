import type { ChapterText } from '../types.js';

export const maqolat11: ChapterText = {
  id: 'maqolat-11',
  num: '23',
  title: 'Oʻn birinchi Maqolat — Ilm haqida',
  theme: 'Ilm haqida',
  intro:
    'Ilm haqida — lekin achchiq haqiqat bilan: olim xor, jahil aziz, deb. Lekin oxiri shu: gavhar yer ostida ham gavhar.',
  source: '1989-yil Toshkent nashri.',
  glossary: [
    {
      id: 'sitez',
      word: 'sitez',
      modern: 'urushish, kelishmovchilik',
      etymology: 'Forschadan.'
    },
    {
      id: 'razl',
      word: 'razl',
      modern: 'past, tubandagi',
      etymology: 'Arabchadan.'
    },
    {
      id: 'rifat',
      word: 'rifʼat',
      modern: 'yuksaklik',
      etymology: 'Arabchadan.'
    },
    {
      id: 'ganj',
      word: 'ganj',
      modern: 'xazina',
      etymology: 'Forschadan.',
      classical: 'Bu yerda — yer ostidagi maʼnaviy boylik.'
    }
  ],
  couplets: [
    {
      id: 'c1',
      lineA: [
        'Dahr ishi to xalq ila boʻlmish ',
        { text: 'sitez', glossId: 'sitez' },
        ','
      ],
      lineB: ['Xor durur olimu, johil — aziz.'],
      interp: {
        short: 'Dunyoning ishi xalqqa qarshi: olim xor, jahil — aziz.',
        long: 'Achchiq daʼvo: jamiyat olim va jahilni notoʻgʻri baholaydi. Bu — sitez (kelishmovchilik) holati. Lekin Navoiy buni rad etish uchun emas, balki tushuntirish uchun aytadi.'
      }
    },
    {
      id: 'c2',
      lineA: ['Toki jahon zulmni qilmish pisand,'],
      lineB: ['Yerga tushar meva, yigʻoch sarbaland.'],
      interp: {
        short: 'Dunyo zulmga moyil — meva yerga tushadi, daraxt esa baland turadi.',
        long: 'Tabiiy obraz: meva (qiymatli) yerga tushadi, daraxt baland qoladi. Bu — qadr sistemasining buzilganligi. Lekin meva qadrini yoʻqotmaydi.'
      }
    },
    {
      id: 'c3',
      lineA: [
        { text: 'Razl', glossId: 'razl' },
        'gʻa — ',
        { text: 'rifʼat', glossId: 'rifat' },
        ', bilik ahliga — ranj,'
      ],
      lineB: [
        'Togʻ uza xorovu, yer ostida — ',
        { text: 'ganj', glossId: 'ganj' },
        '.'
      ],
      interp: {
        short: 'Pastga yuksaklik, bilim ahliga — qaygʻu. Tog‘ ustida — toshlar, yer ostida — xazina.',
        long: 'Aniq qiyos: tashqi va ichki dunyolarning farqi. Tog‘ ustida — koʻrinmaydigan tashqi yuksaklik (toshlar, kavak), yer ostida — koʻrinmas ichki boylik (xazina). Olim — yer ostidagi xazinadek.'
      }
    },
    {
      id: 'c4',
      lineA: ['Yaxshigʻa andin gʻamu ozor erur,'],
      lineB: ['Bogʻda gul hamnafasi xor erur.'],
      interp: {
        short: 'Yaxshiga gʻam va azob keladi — bogʻda gulning hamnafasi tikan.',
        long: 'Eng aniq tashbih: gul va tikan bir bogʻda yashaydi. Yaxshilarning yonida ham yomonlar bor. Bu — hayotning qonuni; lekin gul gulligini yoʻqotmaydi.'
      }
    }
  ],
  closingEssay:
    'Oʻn birinchi maqolat — ilm haqida. Navoiy avval achchiq daʼvoni qoʻyadi: jamiyat olim va jahilni notoʻgʻri baholaydi.\n\nLekin oxiri tarzi optimistik: gavhar yer ostida ham gavhar; gul tikan yonida ham gul. Olim jamiyatda xor boʻlsa ham, ilmining oʻzi qadrli qoladi. Faslning xulosasi: tashqi qadrsizlik ichki qadrning aksini buzmaydi.'
};
