import type { ChapterText } from '../types.js';

export const maqolat04: ChapterText = {
  id: 'maqolat-04',
  num: '16',
  title: 'Toʻrtinchi Maqolat — Xirqapoʻshlar haqida',
  theme: 'Xirqapoʻshlar (darvishlar) haqida',
  intro:
    'Xirqa kiyganlar haqida — lekin tanqidiy ohangda. Navoiy haqiqiy darvish va riyoiy darvishni ajratadi: koʻp xirqa kiygan har kim — chinakam darvish emas.',
  source: '1989-yil Toshkent nashri.',
  glossary: [
    {
      id: 'xirqaposh',
      word: 'xirqapoʻsh',
      modern: 'xirqa kiygan',
      etymology: 'Forschadan.',
      classical: 'Sufiy yoʻlining tashqi belgisi.',
      sufiTag: 'Faqr'
    },
    {
      id: 'zikr',
      word: 'zikr',
      modern: 'Allohni eslash',
      etymology: 'Arabchadan.',
      sufiTag: 'Zikr'
    },
    {
      id: 'riyo',
      word: 'riyo',
      modern: 'koʻrsatishlik, riyokorlik',
      etymology: 'Arabchadan.'
    },
    {
      id: 'talbis',
      word: 'talbis',
      modern: 'aldash, niqoblash',
      etymology: 'Arabchadan.'
    }
  ],
  couplets: [
    {
      id: 'c1',
      lineA: [
        'Ey boʻlubon sanʼat ila ',
        { text: 'xirqapoʻsh', glossId: 'xirqaposh' },
        ','
      ],
      lineB: [
        'Shomu sahar ',
        { text: 'zikr', glossId: 'zikr' },
        ' ila solib xurush.'
      ],
      interp: {
        short: 'Sanʼat (hiyla-nayrang) bilan xirqa kiyib, ertayu kech zikr bilan shovqin koʻtaradigan.',
        long: '"Sanʼat" bu yerda salbiy maʼno — soxta mahorat. Tashqi xirqa va baland zikr — lekin sof emas. Maqolat eng boshidan kim haqida ekanini ochiq aytadi.'
      }
    },
    {
      id: 'c2',
      lineA: ['Xirqa uza baxyaki har yon chekib,'],
      lineB: [
        'Zuhdu ',
        { text: 'riyo', glossId: 'riyo' },
        ' vuslalaridin tikib.'
      ],
      interp: {
        short: 'Xirqa ustida har tomonga tikilgan baxya — zuhd va riyo paxtalari bilan tikilgan.',
        long: 'Xirqa — yamoqlangan kiyim — sufiy faqrning ramzi. Lekin bu xirqa boshqa narsa: zuhd (taqvo) va riyo (koʻrsatishlik) bir-biriga tikilgan. Ikkalasi qoʻshilsa — soxtalik.'
      }
    },
    {
      id: 'c3',
      lineA: ['Ruqʼai davri bu murakkaʼda koʻp,'],
      lineB: ['Barcha diram ostigʻa tikmakka joʻb.'],
      interp: {
        short: 'Bu yamoq xirqada juda koʻp boʻlak — har biri tanga ostiga yashirish uchun tikilgan.',
        long: 'Eng achchiq tanqid: xirqa "zohid" boʻlib koʻrinishi uchun emas, balki pul yigʻishni yashirish uchun ishlatiladi. Yamogʻlar — tanga uchun "kissalar".'
      }
    },
    {
      id: 'c4',
      lineA: [
        'Ipalar anga rishtai ',
        { text: 'talbis', glossId: 'talbis' },
        ' oʻlub,'
      ],
      lineB: ['Igna anga siblati iblis oʻlub.'],
      interp: {
        short: 'Iplar — aldash arqoni; igna — iblis tigʻi.',
        long: 'Tashbih davom etadi: tikuv asboblari ham riyoning quroliga aylangan. Iblisning ishi — niqoblash; bu xirqapoʻshning igna-ipi shu ishga xizmat qiladi.'
      }
    }
  ],
  closingEssay:
    'Toʻrtinchi maqolat — sufiy hayotning eng achchiq tanqidi. Navoiy darvishlikning oʻzini emas, balki uning riyoiy ishlovini fosh qiladi.\n\nXirqa — faqrning ramzi — soxta darvishlarning qoʻlida pul yigʻish vositasiga aylangan. Bu — har davrda takrorlanadigan muammo: dindorlik niqobi ostida moddiy maqsad. Navoiy aytadi: chinakam darvish — xirqa kiymasidan ham mumkin; soxta darvish — yuz xirqada ham yashiringan.'
};
