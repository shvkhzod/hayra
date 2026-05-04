import type { ChapterText } from '../types.js';

export const maqolat09: ChapterText = {
  id: 'maqolat-09',
  num: '21',
  title: 'Toʻqqizinchi Maqolat — Ishq haqida',
  theme: 'Ishq haqida',
  intro:
    'Ishq — yaratilishning birinchi mayi. Inson tuprogʻi alast subhida ruh mayidan mast etilgan; uning kelishi — ishqdan.',
  source: '1989-yil Toshkent nashri.',
  glossary: [
    {
      id: 'subhi-alast',
      word: 'subhi alast',
      modern: 'alast tongi',
      etymology: 'Arabchadan.',
      classical: 'Quron 7:172 ga ishora: yaratilishdan oldingi ahd lahzasi. "Alastu birabbikum?"',
      sufiTag: 'Alast'
    },
    {
      id: 'ruh-mayi',
      word: 'ruh mayi',
      modern: 'ruh mayi',
      etymology: 'Forschadan.',
      classical: 'Sufiy obrazi: ilohiy ishqning birinchi tomchisi.'
    },
    {
      id: 'eram',
      word: 'Eram',
      modern: 'Eram bogʻi',
      etymology: 'Arabchadan.',
      classical: 'Quron 89:7 da tilga olingan — afsonaviy goʻzal bog‘.'
    },
    {
      id: 'huri-in',
      word: 'huri in',
      modern: 'jannat huri',
      etymology: 'Arabchadan.'
    }
  ],
  couplets: [
    {
      id: 'c1',
      lineA: [
        'Odami xokiyni chu ',
        { text: 'subhi alast', glossId: 'subhi-alast' },
        ','
      ],
      lineB: [
        'Ayladilar ',
        { text: 'ruh mayi', glossId: 'ruh-mayi' },
        ' birla mast.'
      ],
      interp: {
        short: 'Tuproqdan boʻlgan Odamni alast tongida ruh mayi bilan mast qildilar.',
        long: 'Ishqning ontologik kelib chiqishi: yaratilishdan oldingi ahd lahzasida. "Alastu birabbikum?" — "Men sizning Rabbingiz emasmanmi?" — degan savolga ruhlar "bali" deb javob bergandan boshlab, ishq insondadir.'
      }
    },
    {
      id: 'c2',
      lineA: ['Hikmat iligi bila tufrogʻini,'],
      lineB: [
        'Tuzdilar andoqki ',
        { text: 'Eram', glossId: 'eram' },
        ' bogʻini.'
      ],
      interp: {
        short: 'Hikmat qoʻli bilan uning loyini Eram bogʻidek tuzdilar.',
        long: 'Yaratilish lahzasi: Allohning hikmati Odam tuprogʻini Eram bogʻidek goʻzal qilib qurdi. Inson — koinotda eng aniq goʻzallik.'
      }
    },
    {
      id: 'c3',
      lineA: ['Qaysi Eram, ravzai xuldi barin,'],
      lineB: [
        'Ravza neki, jilvagahi ',
        { text: 'huri in', glossId: 'huri-in' },
        '.'
      ],
      interp: {
        short: 'Qaysi Eram? Yuksak xuld bogʻi. Yo undan ham ortiq — huri jilvalanish joyi.',
        long: 'Insonning ulugʻligi: u oddiy bog‘ emas, balki "ravzai xuld" — abadiy bog‘. Hatto huri-in ham unda jilvalanadilar. Inson tabiati — jannat darajasida yaratilgan.'
      }
    },
    {
      id: 'c4',
      lineA: ['Husnu jamol anda gumondin fuzun,'],
      lineB: ['Harne gumon aylasang ondin fuzun.'],
      interp: {
        short: 'Goʻzallik unda gumondan ortiq — har qanday tasavvurdan ortiq.',
        long: 'Insondagi husnu jamol — soʻzdan ortiq. Har qanday taxminni ham bosib oʻtadi. Faslning maqsadi: ishq nima uchun shu darajada qudratli? — chunki uning manbai (inson) shunchalik goʻzal.'
      }
    }
  ],
  closingEssay:
    'Toʻqqizinchi maqolat — ishq haqida. Navoiy ishqning kelib chiqishini yaratilishning birinchi lahzasiga olib boradi.\n\n"Subhi alast" — yaratilishdan oldingi ahd lahzasi. Aynan oʻsha lahzada inson "ruh mayi" bilan mast qilingan; ishq esa shu mastlikning oʻzi. Demak, ishq — keyin paydo boʻlgan emas, balki insonning oʻz qonidagi narsa. Insonni Eram bogʻidan goʻzalroq qilib yaratganlari — uni sevishga loyiq qilish uchun.'
};
