import type { ChapterText } from '../types.js';

export const hayrat03: ChapterText = {
  id: 'hayrat-03',
  num: '12',
  title: 'Uchinchi Hayrat',
  theme: 'Ruhning tanaga inishi',
  intro:
    'Uchinchi hayrat — ruh malakut olamidan tana mulkiga qaytadi. Hayrat oloviga yondi, fano shamolida soʻrildi va keyin Allohdan komil baqo topdi.',
  source: '1989-yil Toshkent nashri.',
  glossary: [
    {
      id: 'tavsani',
      word: 'tavsani gardun',
      modern: 'osmon oti',
      etymology: 'Forschadan.',
      classical: 'Klassik obrazi: osmon ot kabi yuradi.'
    },
    {
      id: 'mahmur',
      word: 'mahmur',
      modern: 'maydan oʻtgan, asab holatida',
      etymology: 'Arabchadan.'
    },
    {
      id: 'ghurbat',
      word: 'gʻurbat',
      modern: 'g‘aribiylik, vatandan uzoqlik',
      etymology: 'Arabchadan.'
    },
    {
      id: 'sun',
      word: 'sunʼ iligi',
      modern: 'yaratish qoʻli',
      etymology: 'Arabcha "sunʼ" (yaratish) + turkcha "ilik" (qoʻl).',
      classical: 'Allohning yaratuvchanligi — ramzy qoʻl.'
    }
  ],
  couplets: [
    {
      id: 'c1',
      lineA: ['Mehr chu mashriq sori urdi alam,'],
      lineB: ['Oldi jahon mamlakatin yakqalam.'],
      interp: {
        short: 'Quyosh sharqdan chiqib, jahon mamlakatini bir qalam bilan oldi.',
        long: 'Tongning kelishi: quyosh "yakqalam" — yaʼni bir qalam bilan — butun olamni egallaydi. Sayohatning oxiri yaqin.'
      }
    },
    {
      id: 'c2',
      lineA: ['Xojaki hayrat mayidan mast edi,'],
      lineB: ['Mastliq uyqusiga hamdast edi.'],
      interp: {
        short: 'Hayrat mayidan mast Xoja, uyquga hamdast.',
        long: 'Ruh hayrat mayidan mast — yaʼni hayrat ichidan toʻliq bekori boʻlgan. Bu mastlik fano holatining ifodasi.'
      }
    },
    {
      id: 'c3',
      lineA: [
        { text: 'Gʻurbat', glossId: 'ghurbat' },
        ' oʻti har dam oʻlub shuʼlazan,'
      ],
      lineB: ['Tushti xayoliga havoi vatan.'],
      interp: {
        short: 'Gʻurbat olovi har lahza yongan, vatan havosi xayoliga keldi.',
        long: 'Sufiy "gʻurbat" — ruhning oʻz manbaidan — Allohdan — uzoqligi. Vatan — bu yerda asl manba. Ruh qaytishni xohlaydi.'
      }
    },
    {
      id: 'c4',
      lineA: [
        { text: 'Sunʼ iligi', glossId: 'sun' },
        ' bolchigʻin aylab xamir,'
      ],
      lineB: ['Lutf ila aylab ani hayʼatpazir.'],
      interp: {
        short: 'Yaratish qoʻli loyni xamirdek qildi, lutf bilan unga shakl berdi.',
        long: 'Inson tanasining yaratilishi: loy ("balchiq") — xamir, undan tana shakli. Qoʻl — Allohning sunʼi (yaratish qudrati). Ruh shu tanaga inadi.'
      }
    }
  ],
  closingEssay:
    'Uchinchi hayrat — ruhning tanaga qaytishi. Avvalgi hayrat: yoʻqlikdan vujudga; ikkinchi: malakutga koʻtarilish; uchinchi: tanaga inish.\n\nLekin tanaga qaytish "fano" emas — Navoiy aytadi: tushganidan keyin "baqoyi komil" — komil baqo topadi. Yaʼni: ruh tanada qolgan boʻlsa ham, oʻzligi yoʻqolmaydi, balki Allohda mustahkamlanadi. Bu — uchta hayratning oxirgi xulosasi.'
};
