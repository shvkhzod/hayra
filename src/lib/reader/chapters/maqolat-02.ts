import type { ChapterText } from '../types.js';

export const maqolat02: ChapterText = {
  id: 'maqolat-02',
  num: '14',
  title: 'Ikkinchi Maqolat — Islom haqida',
  theme: 'Islom haqida',
  intro:
    'Iymondan keyin keladigan qadam — islom. Iymon ichki, islom — uning amaliy ifodasi. Beshta arkon — bu yoʻlning poydevori.',
  source: '1989-yil Toshkent nashri.',
  glossary: [
    {
      id: 'yazdon',
      word: 'Yazdoni pok',
      modern: 'pok Tangri',
      etymology: 'Forscha "Yazdon" — Alloh.'
    },
    {
      id: 'asnom',
      word: 'asnom',
      modern: 'butlar',
      etymology: 'Arabchadan: "sanam"ning koʻpligi.'
    },
    {
      id: 'salomat',
      word: 'salomat',
      modern: 'sogʻ-omon, najot',
      etymology: 'Arabchadan.'
    },
    {
      id: 'xamsi-muborak',
      word: 'xamsi muborak',
      modern: 'muborak besh narsa',
      etymology: 'Arabchadan: islomning besh arkoni.'
    }
  ],
  couplets: [
    {
      id: 'c1',
      lineA: [
        'Olam aro xalqni ',
        { text: 'Yazdoni pok', glossId: 'yazdon' },
        ','
      ],
      lineB: ['Ahli najot etti-yu ahli halok.'],
      interp: {
        short: 'Pok Tangri olam ichida xalqni ikkiga ajratdi: najot ahli va halokat ahli.',
        long: 'Asosiy ajralish: insoniyat ikki yoʻlga boʻlinadi. Yoʻl tanlash — har bir kishining oʻz ishi, lekin Alloh ikkala yoʻlni ham yaratgan.'
      }
    },
    {
      id: 'c2',
      lineA: [
        'Bu birisin obidi ',
        { text: 'asnom', glossId: 'asnom' },
        ' bil,'
      ],
      lineB: ['Ul birisin zumrai islom bil.'],
      interp: {
        short: 'Birinchisi — butga sajda qiluvchilar; ikkinchisi — islom guruhi.',
        long: 'Ikki yoʻlning aniq ifodasi: butparastlar va musulmonlar. Lekin "zumra" (guruh) soʻzi — islom hammaga emas, faqat bir guruhga xos ekanini koʻrsatadi.'
      }
    },
    {
      id: 'c3',
      lineA: ['Kufr eli yoʻl topti malornat sori,'],
      lineB: [
        'Zumrai islom ',
        { text: 'salomat', glossId: 'salomat' },
        ' sori.'
      ],
      interp: {
        short: 'Iymonsizlar yoʻli — malorat (oʻkinch) tomonga; islomning yoʻli — salomat.',
        long: '"Salomat" va "islom" oʻzaro qarindosh soʻzlar (arabcha "s-l-m" ildizidan). Islom — salomatlik, najot tomonga olib boruvchi yoʻl.'
      }
    },
    {
      id: 'c4',
      lineA: [
        'Besh yasamish Tengri taborak ani,'
      ],
      lineB: [
        'Desa boʻlur ',
        { text: 'xamsi muborak', glossId: 'xamsi-muborak' },
        ' ani.'
      ],
      interp: {
        short: 'Tangri uni beshta arkon bilan qurgan: muborak beshta narsa.',
        long: 'Islomning besh arkoni: shahodat, namoz, zakot, ruza, haj. Navoiy bularni "xamsi muborak" deb ataydi — muborak besh narsa. Keyingi baytlar har birini batafsil koʻrsatadi.'
      }
    }
  ],
  closingEssay:
    'Ikkinchi maqolat — iymondan amalga oʻtish. Iymon — koʻngilda, islom — uning tashqi ifodasi.\n\nNavoiy aytadi: insoniyat ikki yoʻlga boʻlingan, lekin tanlov ochiq. Islom yoʻli — salomatlik tomon. Va bu yoʻl beshta arkon bilan tortilgan: shahodat, namoz, zakot, ruza, haj. Birinchi maqolatda iymon belgilangan; ikkinchisida — uning amaliy yoʻli koʻrsatilgan.'
};
