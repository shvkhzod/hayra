import type { ChapterText } from '../types.js';

export const maqolat05: ChapterText = {
  id: 'maqolat-05',
  num: '17',
  title: 'Beshinchi Maqolat — Karam haqida',
  theme: 'Karam (saxiylik) haqida',
  intro:
    'Karam — saxovat. Tanga koʻpaysa-yu, qoʻl ushlasa — qadrini yoʻqotadi. Tanga oʻtkinchi, saxovat — abadiy.',
  source: '1989-yil Toshkent nashri.',
  glossary: [
    {
      id: 'kisvat',
      word: 'kisvati karam',
      modern: 'saxovat libosi',
      etymology: 'Arabchadan.'
    },
    {
      id: 'siymfishon',
      word: 'siymfishon',
      modern: 'kumush sochuvchi',
      etymology: 'Forscha "siym" (kumush) + "fishon" (sochuvchi).'
    },
    {
      id: 'afsar',
      word: 'afsar',
      modern: 'toj',
      etymology: 'Forschadan.'
    },
    {
      id: 'jud',
      word: 'jud',
      modern: 'saxovat, lutf',
      etymology: 'Arabchadan.',
      classical: 'Karam bilan parodash atama.'
    }
  ],
  couplets: [
    {
      id: 'c1',
      lineA: [
        'Ey tushub egninga ',
        { text: 'kisvati karam', glossId: 'kisvat' },
        ','
      ],
      lineB: ['Qolmayin ilgingda diram qiymati.'],
      interp: {
        short: 'Egningga saxovat libosi tushgan — qoʻlingda tanganing qiymati qolmasin.',
        long: 'Maqolat ochilishi: saxovat — bu shunchaki sovgʻa berish emas, balki tanganing qiymatini qoʻldan qoʻyish. Saxiy odam tanga ushlay olmaydi.'
      }
    },
    {
      id: 'c2',
      lineA: [
        'Panjang oʻlub ',
        { text: 'siymfishon', glossId: 'siymfishon' },
        'liqqa fosh,'
      ],
      lineB: ['Mashriqu magʻribda nechukkim quyosh.'],
      interp: {
        short: 'Sening qoʻling kumush sochuvchidir — sharqu gʻarbga quyoshdek.',
        long: 'Klassik tashbih: saxiy qoʻl — quyosh kabi. Quyosh nurini hamma joyga teng qaratadi; saxiy qoʻl — kumushni shunday teng tarqatadi.'
      }
    },
    {
      id: 'c3',
      lineA: [
        'Boshing uza judu saxo ',
        { text: 'afsar', glossId: 'afsar' },
        'i,'
      ],
      lineB: ['Afsaring ustida karam gavhari.'],
      interp: {
        short: 'Boshingda saxovat va saxo toji, tojing ustida — karam gavhari.',
        long: 'Saxovatning eng yuqori darajasi: hatto toj ustida ham karam — eng qimmatli gavhar. Saxiy odamning ulugʻligi — moddiy emas, axloqiy.'
      }
    },
    {
      id: 'c4',
      lineA: [
        'Iki qoʻlung Qulzumu Ummoni ',
        { text: 'jud', glossId: 'jud' },
        ','
      ],
      lineB: ['Har biriga ulchaki imkoni jud.'],
      interp: {
        short: 'Ikki qoʻling — saxovatning Qulzum va Ummon dengizlari. Har biri — toʻla saxovat imkoni.',
        long: '"Qulzum" va "Ummon" — Qizil dengiz va Hind okeani — klassik dunyoda eng katta dengiz nomlari. Saxiy qoʻl — bu dengizlardek toʻla, toshib turadi.'
      }
    }
  ],
  closingEssay:
    'Beshinchi maqolat — karam haqida. Navoiy saxovatni ikki tomondan tushuntiradi: pulni qoʻldan qoʻyish va boshqalarga teng tarqatish.\n\nSaxiy odam — tanganing qiymatiga bogʻlanib qolmaydi. Uning qoʻli quyosh kabi — hammaga ochiq. Lekin asosiy xulosa: karam tojdan ham yuqori. Sulton — koʻp narsaga ega, lekin saxiy boʻlmasa, toj uning boshida boʻsh metalldek qoladi.'
};
