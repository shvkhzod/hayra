import type { ChapterText } from '../types.js';

export const hayrat02: ChapterText = {
  id: 'hayrat-02',
  num: '11',
  title: 'Ikkinchi Hayrat',
  theme: 'Hayrat — borliq oldida',
  intro:
    'Ikkinchi hayrat — ruh malakut olamiga koʻtariladi va u yerda yana koʻp ajoyibotni koʻrib hayrat ichra qoladi.',
  source: '1989-yil Toshkent nashri.',
  glossary: [
    {
      id: 'mushkfishon',
      word: 'mushkfishon',
      modern: 'mushk sochuvchi',
      etymology: 'Forschadan.',
      classical: 'Yaxshi hidning ramzi.'
    },
    {
      id: 'kahkashon',
      word: 'kahkashon',
      modern: 'somon yoʻli, galaktika',
      etymology: 'Forschadan.'
    },
    {
      id: 'mushabbid',
      word: 'mushaʼbid',
      modern: 'sehrgar, ajoyibot koʻrsatuvchi',
      etymology: 'Arabchadan.'
    },
    {
      id: 'sipehr',
      word: 'sipehr',
      modern: 'osmon',
      etymology: 'Forschadan.'
    }
  ],
  couplets: [
    {
      id: 'c1',
      lineA: ['Turki Xoʻtan topti chu zebo jamol,'],
      lineB: [
        { text: 'Mushkfishon', glossId: 'mushkfishon' },
        ' boʻldi nasimi shamol.'
      ],
      interp: {
        short: 'Xoʻtan turkisi (oy) goʻzal yuzini koʻrsatdi — shamol mushk sochmoqda.',
        long: 'Xoʻtan — Markaziy Osiyodagi mushk va goʻzallik bilan mashhur shahar. Oyni Xoʻtan turkisiga oʻxshatish — klassik obraz. Tun — goʻzallikning ochilishi.'
      }
    },
    {
      id: 'c2',
      lineA: ['Toʻkdi jahon gulbuni bargi suman,'],
      lineB: ['Ochti falak bogʻchasi nastaran.'],
      interp: {
        short: 'Olam gulzori suman bargini toʻkdi, falak bogʻchasi nasrin guli ochdi.',
        long: 'Tun obrazi davom etadi: yulduzlar — gullar, osmon — bogʻ. Suman va nasrin — goʻzal, hushboʻy gullar. Olamning oʻzi — bir gulshan.'
      }
    },
    {
      id: 'c3',
      lineA: ['Bu kechakim yuz taab oʻldi anga,'],
      lineB: ['Bir-biridin bulʼajab oʻldi anga.'],
      interp: {
        short: 'Bu kecha unga yuzta charchov keldi — har biri ajoyibroq.',
        long: 'Hayrat ichidagi sayohat: har bir lahza yangi ajoyibot. Charchov — sayohatning ramzi; lekin bu yerda — quvonchli charchov.'
      }
    },
    {
      id: 'c4',
      lineA: [
        'Qildi chu ziynat bila bogʻi ',
        { text: 'sipehr', glossId: 'sipehr' },
        ','
      ],
      lineB: ['Axtarining har gulini rashki mehr.'],
      interp: {
        short: 'Osmon bogʻi ziynatlandi; har bir yulduzi — quyoshning rashki.',
        long: 'Klassik kosmologik obraz: yulduzlar quyoshning rashk obyektlari — chunki ular quyoshcha mukammal emas. Lekin malakut olamida hammasi nurli.'
      }
    }
  ],
  closingEssay:
    'Ikkinchi hayrat — malakut olamida. Birinchi hayrat — yoʻqlikdan vujudga oʻtish; ikkinchi — vujud ichidagi sayohat.\n\nRuh oʻzini koinotning kengligida koʻradi: yulduzlar, somon yoʻli, falak bogʻchasi. Har bir koʻrinish — ajoyibot, har bir ajoyibot — Allohning belgilaridan biri. Hayrat hech qachon tugamaydi, faqat chuqurroq boʻlaveradi.'
};
