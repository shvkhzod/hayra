import type { ChapterText } from '../types.js';

export const maqolat13: ChapterText = {
  id: 'maqolat-13',
  num: '25',
  title: 'Oʻn uchinchi Maqolat — Sahobnafrasonlar haqida',
  theme: 'Saxovat ahli haqida',
  intro:
    'Bulut ahli — saxovat egalari. Bulut yomg‘ir bilan yer yuzini sug‘organi kabi, saxiy odam ham boshqalarga foyda olib keladi.',
  source: '1989-yil Toshkent nashri.',
  glossary: [
    {
      id: 'sahob',
      word: 'sahob',
      modern: 'bulut',
      etymology: 'Arabchadan.',
      classical: 'Saxovat ramzi.'
    },
    {
      id: 'siympoš',
      word: 'siympoʻsh',
      modern: 'kumush kiygan',
      etymology: 'Forschadan.'
    },
    {
      id: 'jola',
      word: 'jola',
      modern: 'doʻl, qattiq yomg‘ir',
      etymology: 'Forschadan.'
    },
    {
      id: 'naf',
      word: 'nafʼ',
      modern: 'foyda',
      etymology: 'Arabchadan.'
    }
  ],
  couplets: [
    {
      id: 'c1',
      lineA: [
        'Ey boʻlubon subh kibi ',
        { text: 'siympoʻsh', glossId: 'siympoš' },
        ','
      ],
      lineB: ['Mehring oʻlub om nechukkim quyosh.'],
      interp: {
        short: 'Tongdek kumush kiygan, mehring quyoshdek hammaga teng.',
        long: 'Saxovat ahlining ochilish vasfi. Tong qoʻshini kumushdek, lekin mehri quyosh kabi — hammaga teng yetadi. Saxovat — tanlash emas, yoyish.'
      }
    },
    {
      id: 'c2',
      lineA: ['Subh kibi xalq yuziga kulub,'],
      lineB: ['Charx kibi el boshigʻa evrulub.'],
      interp: {
        short: 'Tongdek xalqqa kuladi, falak kabi xalq atrofida aylanadi.',
        long: 'Saxovat ahli — kelishuvchi, ochiq. U xalqdan oʻzini ajratmaydi, balki ular bilan birga aylanadi. Bu — siyosiy yoki diniy elita emas, balki ish va yaqinlikning ahli.'
      }
    },
    {
      id: 'c3',
      lineA: [
        { text: 'Jola', glossId: 'jola' },
        ' kibi xora agar yogʻdik,'
      ],
      lineB: ['Boshni nihon aylamayin togʻdek.'],
      interp: {
        short: 'Doʻldek tosh yogʻsa ham, togʻdek bosh yashirmas.',
        long: 'Mardlik motivi: sa-xovat ahli ozor topganda yashirinmaydi. Togʻdek mahkam turadi. Saxovat — yoqimli paytlarda emas, balki qiyinchilik paytlarida koʻrinadi.'
      }
    },
    {
      id: 'c4',
      lineA: [
        { text: 'Nafʼ', glossId: 'naf' },
        'in el virdi duo joningga,'
      ],
      lineB: ['«Yamkusu fil-arzi» sening shoningga.'],
      interp: {
        short: 'Foydang ko‘pligi — el duosi sening jonimga; "yer yuzida qoladigan" ham — sen.',
        long: 'Qurʼondan ishora — Raʼd surasi 13:17 ga: "Insonlarga foyda keltiradigan narsa yer yuzida qoladi." Saxovat ahli — aynan shu — yer yuzida qoladigan, foydali narsa.'
      }
    }
  ],
  closingEssay:
    'Oʻn uchinchi maqolat — saxovat ahli haqida. Bulut tashbihi orqali Navoiy maxsus tipni tasvirlaydi: foyda olib keluvchi, lekin oʻzini koʻrsatmaydigan inson.\n\nBulut tomchi ekib oʻtadi; tomchi yerni tirik qiladi. Saxovat ahli ham shunday — kelmas-koʻrinmas, lekin keyingi natija turaveradi. Quron oyatining xulosasi: foydali narsa qoladi, qoʻgʻursin koʻpik esa yoʻqoladi.'
};
