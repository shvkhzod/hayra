import type { ChapterText } from '../types.js';

export const nat05: ChapterText = {
  id: 'nat-05',
  num: '09',
  title: 'Beshinchi Naʼt',
  theme: 'Meʼroj — tunlik sayri',
  intro:
    'Beshinchi naʼt — Meʼroj kechasi haqida. Payg‘ambar bir tunda Makkadan Quddusga, undan osmonlarga koʻtarildi.',
  source: '1989-yil Toshkent nashri.',
  glossary: [
    {
      id: 'koinot',
      word: 'koinot',
      modern: 'olam, borliq',
      etymology: 'Arabchadan.'
    },
    {
      id: 'aynul-hayot',
      word: 'aynul-hayot',
      modern: 'hayot bulogʻi',
      etymology: 'Arabchadan.',
      classical: 'Klassik adabiyotda — abadiy hayot manbai.'
    },
    {
      id: 'shabiston',
      word: 'shabistoni uns',
      modern: 'do‘stlik tunligi',
      etymology: 'Forscha "shabiston" (yotoqxona) + arabcha "uns" (yaqinlik).',
      classical: 'Sufiy obrazi: Alloh bilan yaqinlikning ichki maydoni.'
    },
    {
      id: 'qosidi-qudsiy',
      word: 'qosidi qudsiy',
      modern: 'muqaddas elchi',
      etymology: 'Arabchadan.',
      classical: 'Bu yerda — Jabroil farishta.'
    }
  ],
  couplets: [
    {
      id: 'c1',
      lineA: [
        'Bir kecha zulmatqa qolib ',
        { text: 'koinot', glossId: 'koinot' },
        ','
      ],
      lineB: [
        'Mehr nihon oʻylaki ',
        { text: 'aynul-hayot', glossId: 'aynul-hayot' },
        '.'
      ],
      interp: {
        short: 'Bir tunda butun olam qorongʻulik bagʻrida edi, quyosh — yashirin hayot bulogʻidek.',
        long: 'Meʼroj kechasi tasviri boshlanadi. Quyosh ("mehr") yashirin — yaʼni tun oʻzi gʻoyibdir. Hayot bulogʻining yashirinligi — payg‘ambarning ichki sayohatining ramzy.'
      }
    },
    {
      id: 'c2',
      lineA: ['Tun qilibon gardini anbarsirisht,'],
      lineB: ['Butratibon yerga nasimi bixisht.'],
      interp: {
        short: 'Tun chang-tuprogʻini anbar bilan aralashtirib, jannat shamolini yerga sochmoqda.',
        long: 'Tun ortib boradi, lekin u oddiy tun emas — anbar va jannat shamollari aralashgan tun. Bu — moʻjiza tunining ramziy bezagi.'
      }
    },
    {
      id: 'c3',
      lineA: [
        'Bu kecha ul sarvi gulistoni uns,'
      ],
      lineB: [
        'Ravshan etib shamʼi ',
        { text: 'shabistoni uns', glossId: 'shabiston' },
        '.'
      ],
      interp: {
        short: 'Bu kecha — Sen, doʻstlik bogʻining sarvi — uns shabistonining shamini yondirding.',
        long: 'Sufiy "uns" — yaqinlikning ichki holati. Payg‘ambarning ruhiy makonida shamʼ yonadi: Meʼrojga ichki tayyorgarlik tashqi sayrdan oldin.'
      }
    },
    {
      id: 'c4',
      lineA: [
        { text: 'Qosidi qudsiy', glossId: 'qosidi-qudsiy' },
        ' chu salom aylabon,'
      ],
      lineB: ['Haq soridin arzi payom aylabon.'],
      interp: {
        short: 'Muqaddas elchi (Jabroil) salom keltirib, Haqning xabarini yetkazdi.',
        long: 'Meʼrojning boshlanishi: Jabroil keladi va Allohning daʼvatini yetkazadi. Payg‘ambarning vaslga uzlatishi — bu lahzada koinot toʻxtab turadi.'
      }
    }
  ],
  closingEssay:
    'Beshinchi naʼt — Meʼroj kechasi haqida. Bu — naʼtning eng intim qismi: payg‘ambarning Allohga eng yaqin lahzasi.\n\nNavoiy bu kechani ramzy obraz bilan tasvirlaydi: tun anbar bilan, jannat shamoli bilan, hayot bulogʻining yashirinligi bilan. Tashqi sayohat (Makkadan Quddusga, undan osmonlarga) ichki sayohat — uns shabistoniga kirish — bilan boshlanadi. Meʼroj zohirda jismoniy, botinda — qalb sayri.'
};
