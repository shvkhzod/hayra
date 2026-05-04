import type { ChapterText } from '../types.js';

export const maqolat16: ChapterText = {
  id: 'maqolat-16',
  num: '28',
  title: 'Oʻn oltinchi Maqolat — Xudnamo muxannaslar haqida',
  theme: 'Riyokorlik haqida',
  intro:
    'Xudnamo (oʻzini koʻrsatuvchi) muxannaslar haqida. Tashqi shahsut va kibr; ichkarida — boʻshlik. Eng yomon turi: din nomidan oʻzini koʻrsatish.',
  source: '1989-yil Toshkent nashri.',
  glossary: [
    {
      id: 'jalodat',
      word: 'jalodat',
      modern: 'shijoat, jasurlik',
      etymology: 'Arabchadan.',
      classical: 'Bu yerda — soxta shijoat, namoyishkorona jasurlik.'
    },
    {
      id: 'kibr',
      word: 'kibr',
      modern: 'manmanlik',
      etymology: 'Arabchadan.'
    },
    {
      id: 'ujb',
      word: 'ujb',
      modern: 'oʻzidan xursandlik, oʻz qiyofasiga ehtirom',
      etymology: 'Arabchadan.',
      sufiTag: 'Nafs'
    },
    {
      id: 'palang',
      word: 'palang',
      modern: 'qoplon',
      etymology: 'Forschadan.'
    }
  ],
  couplets: [
    {
      id: 'c1',
      lineA: [
        'Ey surubon ayni ',
        { text: 'jalodat', glossId: 'jalodat' },
        ' aro,'
      ],
      lineB: ['Raxshini maydoni shujoat aro,'],
      interp: {
        short: 'Sen — shijoat maydonida, otini namoyish bilan haydab yurgan.',
        long: 'Maqolatning boshi: tashqi shijoat namoyishi. Otini "raxsh" deb atash — Rustam afsonasiga ishora; lekin ushbu odam Rustam emas, faqat namoyishchi.'
      }
    },
    {
      id: 'c2',
      lineA: ['Koʻrmayin azbas tutub oʻzin biyik,'],
      lineB: ['Oʻz boshidin koʻkka degin toʻrt ilik.'],
      interp: {
        short: 'Hech narsa koʻrmay oʻzini balandga qoʻyadi — boshidan koʻkka qadar toʻrt qoʻl masofa qolgan.',
        long: 'Eng aniq kibr tasviri: hech qancha narsa koʻrmagan, lekin oʻzini osmon yaqinida his qiladi. Toʻrt qoʻl masofa — bu kibrning realistik chegarasi.'
      }
    },
    {
      id: 'c3',
      lineA: [
        { text: 'Kibr', glossId: 'kibr' },
        ' eʼtibon el bila feʼlin durang,'
      ],
      lineB: [
        'Qullai zulm uzra nechukkim ',
        { text: 'palang', glossId: 'palang' },
        '.'
      ],
      interp: {
        short: 'Manmanlik bilan elga ishi rang-barang — zulm tepasida qoploni-misol.',
        long: 'Kibr ichida zulm bor. Bu odam — "palang" (qoplon) zulmin qoʻrqitishi sifatida. Lekin haqiqiy kuch emas, faqat tashqi qiyofa.'
      }
    },
    {
      id: 'c4',
      lineA: [
        { text: 'Ujb', glossId: 'ujb' },
        ' ila har qoshi uchida girih,'
      ],
      lineB: ['Oʻylaki har yon qulogʻida zirih.'],
      interp: {
        short: 'Oʻzidan xursandlik bilan har qoshi uchida tugun — quloqlarining har tomonida zirih.',
        long: '"Ujb" — oʻzini ulugʻ koʻrish, eng achchiq nafs holati. Tashqi koʻrinishi: qoshi uchida tugun, qulogʻida zirih (chigili). Bularning hammasi — namoyish; ostida boʻshlik.'
      }
    }
  ],
  closingEssay:
    'Oʻn oltinchi maqolat — eng achchiq tanqid. Navoiy oʻzini koʻrsatuvchilarni — xudnamo muxannaslarni — chizib chiqaradi: tashqi shijoat, ichki boʻshlik.\n\nKibr va ujb yonma-yon yashaydi. Bu odam koʻrinishda qoplon — aslida tovuq. Eng kuchli zarba: bu vasf hatto din vakillariga ham tegishli — kim oʻzini diniy "oliy" deb koʻrsatsa. Maqolatning xulosasi: namoyish bilan ichki haqiqat hech qachon mos kelmaydi.'
};
