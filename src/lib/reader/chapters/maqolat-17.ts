import type { ChapterText } from '../types.js';

export const maqolat17: ChapterText = {
  id: 'maqolat-17',
  num: '29',
  title: 'Oʻn yettinchi Maqolat — Bahor va xazon haqida',
  theme: 'Bahor va xazon (yoshlik va qarilik)',
  intro:
    'Bahor va kuz haqida — lekin asl mazmun: yoshlik va qarilik. Bahor goʻzal, kuz achchiq. Inson umrining ikki vaqt-i.',
  source: '1989-yil Toshkent nashri.',
  glossary: [
    {
      id: 'hamal',
      word: 'Hamal',
      modern: 'qoʻy yulduz turkumi',
      etymology: 'Arabchadan.',
      classical: 'Bahor boshlanishi — quyosh Hamal burjiga oʻtadi.'
    },
    {
      id: 'mehr',
      word: 'mehr',
      modern: 'quyosh',
      etymology: 'Forschadan.'
    },
    {
      id: 'rayohin',
      word: 'rayohin',
      modern: 'rayhon-gullar',
      etymology: 'Arabchadan: "rayhon"ning koʻpligi.'
    },
    {
      id: 'goliya',
      word: 'gʻoliya',
      modern: 'qiymatli atir',
      etymology: 'Arabchadan.'
    }
  ],
  couplets: [
    {
      id: 'c1',
      lineA: [
        'Chun ',
        { text: 'Hamal', glossId: 'hamal' },
        ' ayvonini yorutti ',
        { text: 'mehr', glossId: 'mehr' },
        ','
      ],
      lineB: ['Dahrgʻa mehr ayladi zohir sipehr.'],
      interp: {
        short: 'Quyosh Hamal burjini yoritganda — falak dunyoga mehr koʻrsatdi.',
        long: 'Bahor astronomik tasvir bilan boshlanadi: quyosh Hamal yulduz turkumiga kiradi. Bu — yangi yilning birinchi kuni. Falak — dunyo bilan barcha narsani yangilashga turdi.'
      }
    },
    {
      id: 'c2',
      lineA: ['Esti nasimi sahari mushkpoʻsh,'],
      lineB: ['Bogʻda farroshligʻin qildi fosh.'],
      interp: {
        short: 'Tongning mushkli shamoli esdi — bogʻda farrosh xizmatini bajardi.',
        long: 'Tong shamoli — bogʻni tozalovchi farrosh. Tabiat har lahzaning oʻz xizmati bor: tong shamol, boʻlut suvchi, va shu yoʻsinda.'
      }
    },
    {
      id: 'c3',
      lineA: ['Bosh chiqara boshladilar bogʻdin,'],
      lineB: ['Bogʻ demaki, qaro tufrogʻdin.'],
      interp: {
        short: 'Bogʻdan — yoʻq, qora tuproqdan — bosh chiqara boshladilar.',
        long: 'Bogʻ koʻrinishda jonli, lekin baʼzan oʻzimiz uni yaratamiz. Bu yerda — qora tuproqdan jamol chiqishi: gullar yer ostidan koʻtariladilar. Yashil hayotning paydo boʻlishi.'
      }
    },
    {
      id: 'c4',
      lineA: ['Husnlari ishvau noz aylabon,'],
      lineB: [
        'Atrlarin ',
        { text: 'gʻoliya', glossId: 'goliya' },
        'soz aylabon.'
      ],
      interp: {
        short: 'Goʻzalliklari ishva-noz, atrlari — qiymatli gʻoliya kabi.',
        long: 'Gullar — bahor "shahidalari" — tashqi koʻrinishlari va hidlari bilan namoyon. Lekin bu — vaqtinchalik. Maqolat ohirida xazonga oʻtish kelishini eslatadi.'
      }
    }
  ],
  closingEssay:
    'Oʻn yettinchi maqolat — bahor va kuz haqida. Lekin uning ostidagi mavzu — yoshlik va qarilik.\n\nBahor — yoshlik: gullar koʻtarilib, hammasi yangilanadi. Lekin kuz — qarilik. Bahor abadiy emas. Maqolatning xulosasi: yoshlik vaqtida buni anglash kerak. Yoshlik — vaqt; qarilik — albatta keladi. Bahor goʻzalligi — kuzni eslatib turadi.'
};
