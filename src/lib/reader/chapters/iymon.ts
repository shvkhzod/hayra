import type { ChapterText } from '../types.js';

/**
 * Avvalgi Maqolat — Iymon haqida.
 *
 * Couplet text: transliterated to modern Uzbek Latin from the 1989 Toshkent
 * (G‘afur G‘ulom nashriyoti) edition of «Hayrat ul-abror» — a public-domain
 * 1483 work by Alisher Navoiy. The first six couplets that follow the
 * prose preface are reproduced here as the prototype reading.
 *
 * Glosses, margin notes, and the closing essay are original editorial prose.
 */
export const iymon: ChapterText = {
  id: 'maqolat-01-iymon',
  num: '13',
  title: 'Avvalgi Maqolat — Iymon haqida',
  theme: 'Iymon haqida',
  intro:
    'Yigirma maqolatdan birinchisi. Navoiy bu yerda "inson kim?" degan savolni qoʻyadi va javob beradi — insonlikning belgisi soʻz emas, iymon.',
  source: '1989-yil Toshkent nashri (G‘afur G‘ulom nomidagi nashriyot). Asl matn — 1483-yil, Hirot.',
  glossary: [
    {
      id: 'erur',
      word: 'erur',
      modern: 'boʻladi, dir',
      etymology: 'Eski turkiy: "boʻlmoq" feʼli.'
    },
    {
      id: 'nishon',
      word: 'nishoni',
      modern: 'belgisi',
      etymology: 'Forschadan.'
    },
    {
      id: 'mantiqiy',
      word: 'mantiqiy',
      modern: 'mantiq olimi',
      classical: 'Insonni "gapiruvchi hayvon" deb taʼriflaydigan faylasuf.',
      sufiTag: 'Hikmat'
    },
    {
      id: 'haddi-tom',
      word: 'haddi tom',
      modern: 'mukammal taʼrif',
      etymology: 'Arabchadan: "toʻliq chegara".'
    },
    {
      id: 'xirom',
      word: 'xirom',
      modern: 'viqorli yurish',
      etymology: 'Forschadan.',
      classical: 'Bu yerda — koʻtarinki, mardona qadam.'
    },
    {
      id: 'gumon',
      word: 'gumon',
      modern: 'shubha',
      etymology: 'Forschadan.'
    },
    {
      id: 'mutafovit',
      word: 'mutafovit',
      modern: 'har xil, farqli',
      etymology: 'Arabchadan.',
      sufiTag: 'Maratib'
    },
    {
      id: 'kalom',
      word: 'kalomi',
      modern: 'soʻzi',
      classical: 'Bu yerda — Qurʼon.'
    }
  ],
  couplets: [
    {
      id: 'c1',
      lineA: [
        'Kimki jahon ahlida inson ',
        { text: 'erur', glossId: 'erur' },
        ','
      ],
      lineB: [
        'Bilki ',
        { text: 'nishoni', glossId: 'nishon' },
        ' anga iymon ',
        { text: 'erur', glossId: 'erur' },
        '.'
      ],
      interp: {
        short:
          'Faslning asosiy fikri: insonni inson qiladigan narsa — iymon.',
        long:
          'Birinchi bayt — faslning bosh fikri. Inson belgisi — iymon. Ikki misra oxirida takrorlangan "erur" shu fikrni mahkamlaydi: iymon insonga qoʻshimcha emas, balki uni inson qiladigan narsa. Iymonsiz — odam yoʻq.'
      }
    },
    {
      id: 'c2',
      lineA: [
        'Ulki ',
        { text: 'hadu rasm', glossId: 'haddi-tom' },
        ' qoʻyar ',
        { text: 'mantiqiy', glossId: 'mantiqiy' },
        ','
      ],
      lineB: ['Toki bu hayvoni bila notiqiy.'],
      interp: {
        short:
          'Mantiqshunoslar: "inson — gapiruvchi hayvon." Navoiy bu taʼrifni keltiradi — keyin uni rad etish uchun.',
        long:
          'Mantiq olamining mashhur taʼrifi: "inson — gapiruvchi hayvon." Hayvon — jinsi, soʻz — uni boshqa hayvonlardan ajratuvchi farq. Navoiy bu taʼrifni avval qabul qilgandek koʻrsatadi va keyingi baytlarda uni rad etadi.'
      }
    },
    {
      id: 'c3',
      lineA: [
        'Ikkisi insonga boʻlub ',
        { text: 'haddi tom', glossId: 'haddi-tom' },
        ','
      ],
      lineB: [
        'Zumrai inson aro aylar ',
        { text: 'xirom', glossId: 'xirom' },
        '.'
      ],
      interp: {
        short:
          'Mantiqning taʼrifi tugaydi: hayvon + soʻz = inson, va u jamiyatda viqor bilan yuradi.',
        long:
          'Mantiqning toʻliq taʼrifi: hayvon + soʻz = inson. Bu inson jamiyat ichida viqor bilan yuradi. "Xirom" soʻzi muhim: bu tashqi koʻrinish, ichki kamolot emas. Navoiy bu farqni keyingi baytlarda hal qiladi.'
      }
    },
    {
      id: 'c4',
      lineA: ['Navʼini notiq bila hayvon qilur,'],
      lineB: ['Notiqu hayvonini inson qilur.'],
      interp: {
        short:
          'Mantiqning xulosasi takrorlanadi. Navoiy uni rad etmaydi — formal jihatdan toʻgʻri.',
        long:
          'Navoiy mantiqqa qarshi emas. Taʼrif toʻgʻri. Lekin agar shu yetarli boʻlsa — axloq, ishq, qanoat, sahovat hammasi keraksiz boʻlib qoladi. Yigirma maqolat aynan shu fikrga qarshi yozilgan.'
      }
    },
    {
      id: 'c5',
      lineA: [
        'Sen dagʻi inson muni qilsang ',
        { text: 'gumon', glossId: 'gumon' },
        ','
      ],
      lineB: ['Bilki hamon sen-senu hayvon hamon.'],
      interp: {
        short:
          'Burilish nuqtasi. Navoiy oʻquvchiga toʻgʻridan murojaat qiladi: bu taʼrifga ishonsang, sen hali ham hayvonsan.'
,
        long:
          'Hal qiluvchi burilish. Navoiy "sen" deb oʻquvchiga toʻgʻridan murojaat qiladi. "Hamon" soʻzi ikki marta takrorlanadi: agar mantiqning taʼrifiga ishonsang, sen ham hayvon, hayvon ham hayvon — hech narsa oʻzgarmadi. Insonlikka boshqa narsa kerak.'
      }
    },
    {
      id: 'c6',
      lineA: [
        'Muniki inson ',
        { text: 'mutafovit', glossId: 'mutafovit' },
        ' erur,'
      ],
      lineB: [
        'Tengri ',
        { text: 'kalomi', glossId: 'kalom' },
        ' xabar andin berur.'
      ],
      interp: {
        short:
          'Xulosa: insonlar bir xil emas — Qurʼon shuni aytadi. Demak, mantiqning yaxlit taʼrifi yetmaydi.',
        long:
          'Navoiy Qurʼonga murojaat qiladi: insonlar bir-biridan farq qiladi. Demak, hammasini bir xil "gapiruvchi hayvon" deb yopib qoʻyadigan taʼrif yetishmaydi. Shu yerdan keyingi 19 maqolat — iymon, islom, adolat, karam, adab, qanoat — bu farqni tushuntiruvchi pogʻonalar sifatida boshlanadi.'
      }
    }
  ],
  closingEssay:
    'Bu fasl Hayrat ul-abrorning birinchi axloqiy bobi. Navoiy oʻquvchini bir savol bilan boshlaydi: "inson kim?"\n\nMantiqshunoslarning javobi: "gapiruvchi hayvon." Texnik jihatdan toʻgʻri taʼrif. Lekin Navoiy soʻraydi — yetarmi? Va Qurʼondan dalil olib keladi: insonlar bir-biridan farq qiladi. Demak, hammani bir xil deb yopadigan taʼrif yetishmaydi.\n\nFaslning ochilishida Navoiyning javobi: insonni inson qiladigan narsa — iymon. Soʻz emas, aql emas, viqor emas — iymon. Shu fikr keyingi 19 maqolatni birlashtirib turadi: yaxshilik, sahovat, qanoat, vafo, ishq, ilm — bularning hammasi iymondan oziqlanadi.\n\nShu sababdan birinchi maqolat — Iymon haqida — qolgan 19 ning kalitidir.'
};
