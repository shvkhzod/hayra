import type { ChapterText } from '../types.js';

export const maqolat10: ChapterText = {
  id: 'maqolat-10',
  num: '22',
  title: 'Oʻninchi Maqolat — Rostliq haqida',
  theme: 'Rostliq (sidq) haqida',
  intro:
    'Toʻgʻrilik — vujud uyini koʻtarib turuvchi ustun. Toʻgʻri odam yoʻli toʻgʻri boʻlsa, falak egri boʻlsa ham, hechligini sezmaydi.',
  source: '1989-yil Toshkent nashri.',
  glossary: [
    {
      id: 'tuzlik',
      word: 'tuzlik',
      modern: 'toʻgʻrilik, sidq',
      etymology: 'Eski turkiydan.',
      classical: 'Bu yerda — ahloqiy toʻgʻrilik.'
    },
    {
      id: 'kajrav',
      word: 'kajrav',
      modern: 'egri yuruvchi',
      etymology: 'Forschadan.'
    },
    {
      id: 'pesha',
      word: 'pesha',
      modern: 'kasb, odat',
      etymology: 'Forschadan.'
    },
    {
      id: 'soz',
      word: 'soz',
      modern: 'tartibli, mukammal',
      etymology: 'Forschadan.'
    }
  ],
  couplets: [
    {
      id: 'c1',
      lineA: [
        'Har kishikim, ',
        { text: 'tuzlik', glossId: 'tuzlik' },
        ' erur ',
        { text: 'pesha', glossId: 'pesha' },
        'si,'
      ],
      lineB: [
        { text: 'Kajrav', glossId: 'kajrav' },
        ' esa charx, ne andeshasi?!'
      ],
      interp: {
        short: 'Toʻgʻrilik kasb qilgan odamga falak egri boʻlsa ham, qaygʻu yoʻq.',
        long: 'Faslning ochilish daʼvosi: ichki toʻgʻrilik tashqi sharoitdan qatʼi nazar qadrli. Falak (taqdir) egri yoʻl bersa ham, toʻgʻri odam yoʻlini tark etmaydi.'
      }
    },
    {
      id: 'c2',
      lineA: ['Oʻqki, tuz oʻldi tayoroni aning,'],
      lineB: ['Boʻlsa yer egri, ne ziyoni aning?'],
      interp: {
        short: 'Oʻqning uchishi toʻgʻri boʻlsa, yer egri boʻlsa ham — ziyon yoʻq.',
        long: 'Oʻq tashbihi: oʻqning oʻzi toʻgʻri uchadi. Yer (sirt) egri boʻlsa ham, oʻqning yoʻliga taʼsir qilmaydi. Toʻgʻri yoʻl — ichkaridan keladi.'
      }
    },
    {
      id: 'c3',
      lineA: ['Sham boʻyi tuz kelib ayvon aro,'],
      lineB: ['Shohidi bazm oʻldi shabiston aro.'],
      interp: {
        short: 'Shamning boʻyi toʻgʻri kelganda, bazmning shohidi — yotoqxona ichida.',
        long: 'Sham obrazi: toʻgʻri turgan sham — bazmning yulduzi. Egri sham — yorita olmaydi. Toʻgʻrilik — yorug‘likning sharti.'
      }
    },
    {
      id: 'c4',
      lineA: [
        'Tuz durur egri qili to ',
        { text: 'soz', glossId: 'soz' },
        ' erur,'
      ],
      lineB: ['Egri boʻlur emdiki, nosoz erur.'],
      interp: {
        short: 'Toʻgʻri qil — soz boʻlsagina shunday; nosoz boʻlsa — egri.',
        long: 'Musiqiy tashbih: cholgʻu soz boʻlsa, qillari toʻgʻri boʻladi. Sozdan chiqsa — egri. Insonning sozi — uning toʻgʻriligi.'
      }
    }
  ],
  closingEssay:
    'Oʻninchi maqolat — toʻgʻrilik haqida. Navoiy bir necha tashbih bilan bu fikrni mahkamlaydi: oʻq, sham, soz cholgʻu — hammasi toʻgʻrilikni talab qiladi.\n\nLekin asosiy fikr ichkarida: toʻgʻrilik — tashqi sharoitlardan qatʼiy nazar saqlanadigan ichki holat. Falak egri yoʻl bersa ham, toʻgʻri odam egri yurmaydi. Bu — keyingi maqolatga (Ilm) zaminni tayyorlaydi.'
};
