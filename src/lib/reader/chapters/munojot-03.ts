import type { ChapterText } from '../types.js';

export const munojot03: ChapterText = {
  id: 'munojot-03',
  num: '03',
  title: 'Uchinchi Munojot',
  theme: 'Adamga qaytish',
  intro:
    'Uchinchi munojot — yaratish va halokat haqida. Alloh yoʻqni borga, borni yoʻqqa aylantiradi: ikkalasi ham bir qoʻlda.',
  source: '1989-yil Toshkent nashri.',
  glossary: [
    {
      id: 'qahr',
      word: 'qahr',
      modern: 'gʻazab, qudrat',
      etymology: 'Arabchadan.',
      classical: 'Lutf bilan paro: Allohning ikki sifati.'
    },
    {
      id: 'shior',
      word: 'shior',
      modern: 'belgi, alomat',
      etymology: 'Arabchadan.'
    },
    {
      id: 'aflok',
      word: 'aflok',
      modern: 'osmonlar',
      etymology: 'Arabchadan: "falak"ning koʻpligi.'
    },
    {
      id: 'sharif',
      word: 'sharif',
      modern: 'aziz, yuksak',
      etymology: 'Arabchadan.'
    }
  ],
  couplets: [
    {
      id: 'c1',
      lineA: [
        'Ey qilibon ',
        { text: 'qahr', glossId: 'qahr' },
        ' ila lutfung ',
        { text: 'shior', glossId: 'shior' },
        ','
      ],
      lineB: ['Borni yoʻq aylamaku yoʻqni bor.'],
      interp: {
        short: 'Lutf va qahr — Sening ikki belgang. Sen yoʻqni borga, borni yoʻqqa aylantirasan.',
        long: 'Munojotning ochilishi: yaratish va halokat — bir qudratning ikki tomoni. Bu yerda "qahr" gʻazabni emas, balki yoʻqlikka qaytaruvchi qudratni anglatadi. Lutf bilan teng-baravar.'
      }
    },
    {
      id: 'c2',
      lineA: ['Yoʻq edilar har neki — bor aylading,'],
      lineB: ['Fahmu xirad boriga yor aylading.'],
      interp: {
        short: 'Hech narsa yoʻq edi — Sen yaratding. Aql va idrok ham — Sening tuhfang.',
        long: 'Yaratishning soʻzma-soʻz tasviri: yoʻqlikdan vujudga. Aql va idrok ham yaratilgan — yaʼni Allohga taqdim qilingan, Undan kelgan.'
      }
    },
    {
      id: 'c3',
      lineA: [
        'Ham toʻquz ',
        { text: 'aflok', glossId: 'aflok' },
        'ni chekting rafeʼ,'
      ],
      lineB: ['Ham kurai xokni yoyding vaseʼ.'],
      interp: {
        short: 'Toʻqqiz osmonni baland qilding, Yer kurasini keng yoyding.',
        long: 'Klassik kosmologiya: toʻqqiz falak (osmon qatlami). Sen ularni "rafeʼ" — yuksak, "vaseʼ" — keng qilib oʻlchading. Koinotning miqyosi — Sening qaroring.'
      }
    },
    {
      id: 'c4',
      lineA: ['Borchasini garchi latif aylading,'],
      lineB: [
        'Borchadin insonni ',
        { text: 'sharif', glossId: 'sharif' },
        ' aylading.'
      ],
      interp: {
        short: 'Hammasini goʻzal yaratding — lekin insonni eng yuksakka koʻtarding.',
        long: 'Asosiy fikr: yaratishda barcha narsa "latif" (nozik, goʻzal), lekin inson — "sharif" (azizroq, yuksakroq). Inson koinotning markazi sifatida belgilangan.'
      }
    }
  ],
  closingEssay:
    'Uchinchi munojot ikki fikrni qoʻshib turadi: bir tomondan — yaratish (yoʻqdan bor qilish), boshqa tomondan — insonning yuksakligi.\n\nNavoiy aytadi: koinot keng, osmonlar baland, yer kuralari yoyilgan — lekin bularning hammasi insonga muxtas. Inson — yaratilgan barcha narsalardan azizroq. Bu fikr keyingi maqolatlarda davom etadi: agar inson "sharif" boʻlsa, undan nima talab qilinadi?'
};
