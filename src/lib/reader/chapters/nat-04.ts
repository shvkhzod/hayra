import type { ChapterText } from '../types.js';

export const nat04: ChapterText = {
  id: 'nat-04',
  num: '08',
  title: 'Toʻrtinchi Naʼt',
  theme: 'Payg‘ambarlik osmoni',
  intro:
    'Toʻrtinchi naʼt — payg‘ambarning butlarni sindirishi va dinning qoʻrgʻonini koʻtarishi haqida.',
  source: '1989-yil Toshkent nashri.',
  glossary: [
    {
      id: 'butfikan',
      word: 'butfikan',
      modern: 'butsindiruvchi',
      etymology: 'Forscha "but" + "fikan" (sindiruvchi).'
    },
    {
      id: 'butshikan',
      word: 'butshikan',
      modern: 'butlarni qulatuvchi',
      etymology: 'Forschadan.'
    },
    {
      id: 'raxna',
      word: 'raxna',
      modern: 'tirqish, yorilish',
      etymology: 'Forschadan.',
      classical: 'Bu yerda — dinga raxna; iymonsizlikning yorilishi.'
    },
    {
      id: 'ansor',
      word: 'ansor',
      modern: 'yordamchilar',
      etymology: 'Arabchadan.',
      classical: 'Madinaning musulmonlari, payg‘ambarni qoʻllab-quvvatlaganlar.'
    }
  ],
  couplets: [
    {
      id: 'c1',
      lineA: [
        'Boʻldi vale manzaradin ',
        { text: 'butfikan', glossId: 'butfikan' },
        ','
      ],
      lineB: [
        'Soʻngra nabi Haq evida ',
        { text: 'butshikan', glossId: 'butshikan' },
        '.'
      ],
      interp: {
        short: 'Avval shaxsiy holatda — keyin payg‘ambar sifatida — butlarni sindirding.',
        long: 'Ikki bosqich: avval payg‘ambar oʻz koʻngil ichkarisida butlarni sindirgan ("manzaradin butfikan"), keyin Kaʼba ichida xalq oldida ("Haq evida butshikan"). Ichki tozalik — tashqi harakatdan oldin.'
      }
    },
    {
      id: 'c2',
      lineA: [
        'Dinga yetib ',
        { text: 'raxna', glossId: 'raxna' },
        ' chu kuffordin,'
      ],
      lineB: [
        'Saddiga nusrat koʻrub ',
        { text: 'ansor', glossId: 'ansor' },
        'din.'
      ],
      interp: {
        short: 'Iymonsizlik dindan tirqish ochib turganda, ansor dinning qoʻrgʻonini mustahkamlamoqda.',
        long: 'Tarixiy lahzaga ishora: payg‘ambar Madinaga koʻchganda, ansor (Madina musulmonlari) dinni qoʻllab-quvvatlagan. Shu bilan dindagi raxna — yorilish — yopildi.'
      }
    },
    {
      id: 'c3',
      lineA: ['Nutq aro chun panji islomga quvvat,'],
      lineB: ['Kufr qoʻlu panjasini ranja bil.'],
      interp: {
        short: 'Sening soʻzing — islomning besh panja qoʻliga kuch berdi. Iymonsizlikning panjasi esa qiynalib qoldi.',
        long: 'Panja obrazi: islom besh panja (besh ustun) qoʻliga ega, kufr — keyingi panjada. Soʻz qaysi panjani kuchaytirganini koʻrsatadi.'
      }
    },
    {
      id: 'c4',
      lineA: ['Maʼrifating maʼrifat ahliga zod,'],
      lineB: ['Risolating din yoʻliga sanad.'],
      interp: {
        short: 'Sening bilim — bilim ahli uchun ozuqa. Risolating — din yoʻliga dalil.',
        long: 'Maʼrifat (bilim, taniqlik) — ahli ulom uchun ozuqa beradi; risolat (payg‘ambarlik missiyasi) — din yoʻlining ehromli dalili. Soʻz va missiya birlashadi.'
      }
    }
  ],
  closingEssay:
    'Toʻrtinchi naʼt — dinning qurilishi haqida. Payg‘ambar avval ichki, keyin tashqi: avval oʻzini, keyin xalqni butlardan tozalaydi.\n\nDin qoʻrgʻoni faqat payg‘ambarning oʻzi bilan qurilmaydi — ansor (yordamchilar) ham kerak. Bu — jamiyat va shaxs hamkorligining birinchi modeli.'
};
