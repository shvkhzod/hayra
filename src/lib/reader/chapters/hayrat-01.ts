import type { ChapterText } from '../types.js';

export const hayrat01: ChapterText = {
  id: 'hayrat-01',
  num: '10',
  title: 'Avvalgi Hayrat',
  theme: 'Ruhning uyg‘onishi',
  intro:
    'Avvalgi hayrat — ruhning birinchi uygʻonishi. Tong otdi, ruh adam shomidan jon paygʻomini topdi va hayrat ichida olamga qadam qoʻydi.',
  source: '1989-yil Toshkent nashri.',
  glossary: [
    {
      id: 'soqiy',
      word: 'soqiy',
      modern: 'mayni quyuvchi',
      etymology: 'Arabchadan.',
      classical: 'Sufiy adabiyotda — ilohiy ishq mayini quyuvchi.'
    },
    {
      id: 'sabuh',
      word: 'sabuh',
      modern: 'tongning birinchi maysi',
      etymology: 'Arabchadan.',
      classical: 'Klassik nazmda — tong vaqtidagi ruhiy yengillik.'
    },
    {
      id: 'kilki-qazo',
      word: 'kilki qazo',
      modern: 'qazo qalami',
      etymology: 'Forscha "kilk" + arabcha "qazo".',
      classical: 'Allohning yozuvi — taqdir qalami.'
    },
    {
      id: 'shomi-adam',
      word: 'shomi adam',
      modern: 'yoʻqlik tuni',
      etymology: 'Forscha "shom" + arabcha "adam".',
      classical: 'Yaratilishdan oldingi yoʻqlik holati.',
      sufiTag: 'Fano'
    }
  ],
  couplets: [
    {
      id: 'c1',
      lineA: [
        'Subhdur, ey ',
        { text: 'soqiy', glossId: 'soqiy' },
        ', etib mehr fosh,'
      ],
      lineB: ['Tut manga bir jom nechukkim quyosh.'],
      interp: {
        short: 'Tongdir, ey soqiy — quyoshdek bir jom keltir.',
        long: 'Klassik tong duosi: ruhiy oʻyganishning ramzy boshlanishi. "Soqiy" — ilohiy ishq mayi quyuvchi; tongda undan jom — birinchi uygʻonish.'
      }
    },
    {
      id: 'c2',
      lineA: ['Tong qushi chun berdi payomi sabuh,'],
      lineB: [
        'Noʻsh etayin bir-ikki jomi ',
        { text: 'sabuh', glossId: 'sabuh' },
        '.'
      ],
      interp: {
        short: 'Tong qushi sabuh xabarini olib keldi — bir-ikki jom ichaylik.',
        long: 'Tong qushi — bulbul yoki hudhud — ruhiy xabarchi. "Sabuh" — tong mayi: ruhiy uygʻonishning birinchi tomchisi.'
      }
    },
    {
      id: 'c3',
      lineA: [
        'Yozdi falak toqiga ',
        { text: 'kilki qazo', glossId: 'kilki-qazo' },
        ','
      ],
      lineB: ['Oyati «Vash-shams» bila «Vaz-zuho».'],
      interp: {
        short: 'Qazo qalami osmon toqiga «Quyoshga qasam» va «Yorug‘likka qasam» oyatlarini yozdi.',
        long: 'Quron oyatlariga ishora: "Vash-shams" (91-sura) va "Vaz-zuho" (93-sura) — quyosh va yorug‘likka qasam. Tong — ilohiy yozuvning oʻzi.'
      }
    },
    {
      id: 'c4',
      lineA: [
        'Koʻz ochibon Xoja ',
        { text: 'adam', glossId: 'shomi-adam' },
        ' shomidin,'
      ],
      lineB: ['Jon topibon tong yeli paygʻomidin.'],
      interp: {
        short: 'Xoja yoʻqlik shomidan koʻz ochdi, tong yelidan jon paygʻomi keldi.',
        long: 'Faslning hal qiluvchi bayti: ruh "shomi adam" (yoʻqlik tuni) dan uygʻonadi. "Xoja" — bu yerda ruhning ramzy — adamdan vujudga oʻtmoqda. Tong yeli — Allohning paygʻomi.'
      }
    }
  ],
  closingEssay:
    'Avvalgi hayrat — ruhning yaratilish lahzasi. Adamdan (yoʻqlikdan) vujudga oʻtish: bu — birinchi hayratning oʻzi.\n\nNavoiy ruhni "Xoja" deb ataydi: yoʻlovchi, sayohatchi. Tong yeli unga jon paygʻomini keltiradi va ruh hayrat ichida olamga qadam qoʻyadi. Hayrat — qoʻrquv emas, balki yangi mavjudlikka uygʻonish lahzasi.'
};
