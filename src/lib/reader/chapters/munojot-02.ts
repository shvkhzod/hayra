import type { ChapterText } from '../types.js';

/**
 * Ikkinchi Munojot — yaratish va sajda haqidagi duo.
 *
 * Couplet text: transliterated to modern Uzbek Latin from the 1989 Toshkent
 * (G‘afur G‘ulom nashriyoti) edition. The first six couplets that follow
 * the prose preface are reproduced here.
 *
 * Glosses, margin notes, and the closing essay are original editorial prose.
 */
export const munojot02: ChapterText = {
  id: 'munojot-02',
  num: '02',
  title: 'Ikkinchi Munojot',
  theme: 'Yaratilishning zuhuri',
  intro:
    'Ikkinchi munojot — yaratish va sajda haqidagi duo. Navoiy bu yerda asosiy fikrni qoʻyadi: borliqning manbai — Alloh, va koinot Uning oldida — kichik.',
  source: '1989-yil Toshkent nashri (G‘afur G‘ulom nomidagi nashriyot). Asl matn — 1483-yil, Hirot.',
  glossary: [
    {
      id: 'vujud',
      word: 'vujud',
      modern: 'borliq, mavjudlik',
      etymology: 'Arabchadan.',
      sufiTag: 'Borliq'
    },
    {
      id: 'fayyozi-jud',
      word: 'fayyozi jud',
      modern: 'saxovat manbai',
      etymology: 'Arabchadan: cheksiz lutf.',
      classical: 'Allohning karami — toʻxtovsiz fayz.'
    },
    {
      id: 'adam',
      word: 'adam',
      modern: 'yoʻqlik, nest',
      etymology: 'Arabchadan.',
      classical: 'Borliqdan oldingi "hech narsa." Sufiy adabiyotda muhim atama.',
      sufiTag: 'Fano'
    },
    {
      id: 'sojid',
      word: 'sojid',
      modern: 'sajda qiluvchi',
      etymology: 'Arabchadan.',
      classical: 'Masjud — sajda qilinuvchi (Alloh).'
    },
    {
      id: 'aflok',
      word: 'aflok',
      modern: 'osmonlar, falaklar',
      etymology: 'Arabchadan: "falak"ning koʻpligi.'
    },
    {
      id: 'sabuksang',
      word: 'sabuksang',
      modern: 'yengil tosh',
      etymology: 'Forschadan: "yengil" + "tosh".',
      classical: 'Falaklar Alloh oldida — yengil tosh kabi kichkina.'
    },
    {
      id: 'ijod-edom',
      word: 'ijod / eʼdom',
      modern: 'yaratish va yoʻq qilish',
      etymology: 'Arabchadan: ijod — vujudga keltirish, eʼdom — yoʻqlikka qaytarish.',
      classical: 'Bir-biriga zid ikki amal — Allohning ikkala qudrati.'
    },
    {
      id: 'shamsa',
      word: 'shamsa',
      modern: 'quyosh',
      etymology: 'Arabchadan.',
      classical: 'Bu yerda — osmon "gumbazi"ning markaziy bezagi.'
    }
  ],
  couplets: [
    {
      id: 'c1',
      lineA: [
        'Ey bori mavjudga sendin ',
        { text: 'vujud', glossId: 'vujud' },
        ','
      ],
      lineB: [
        'Balki vujud ahliga ',
        { text: 'fayyozi jud', glossId: 'fayyozi-jud' },
        '.'
      ],
      interp: {
        short:
          'Boshlanish duosi: barcha mavjudotning borligi Sendan. Karam manbai — Sen.',
        long:
          'Munojotning birinchi bayti yaratish dalili sifatida quriladi. "Sendin vujud" — borliqning manbai Alloh; "fayyozi jud" — saxovatning fayzi cheksiz. Bu ikki ibora keyingi baytlarning poydevori boʻlib xizmat qiladi.'
      }
    },
    {
      id: 'c2',
      lineA: [
        'Katmi ',
        { text: 'adam', glossId: 'adam' },
        'din neki mavjud oʻlub,'
      ],
      lineB: [
        { text: 'Sojid', glossId: 'sojid' },
        ' oʻlub, sen anga masjud oʻlub.'
      ],
      interp: {
        short:
          'Yoʻqlikdan vujudga kelgan har narsa — sajdada. Mavjudlikning oʻzi — Sen tomon ta\'zim.',
        long:
          'Yoʻqlik (adam) — sufiy adabiyotda muhim atama: borliqdan oldingi "hech narsa." Navoiy aytadi: shu yoʻqlikdan chiqqan har bir mavjud — sajda qilmoqda. Mavjudlikning oʻzi Allohga qaratilgan ta\'zimning bir shakli.'
      }
    },
    {
      id: 'c3',
      lineA: ['Kimki boshi sajdada — masjudisen,'],
      lineB: ['Kimki yuzi qiblada — maʼbudisen.'],
      interp: {
        short:
          'Sajda qiluvchining maqsadi — Sen. Qibla qaratilgan tomon — Sen. Har bir taʼzim Sen tomonga.',
        long:
          'Oldingi fikrning boshqacha ifodasi: kim sajda qilsa, Sen sajdaning maqsadisan; kim qiblaga yuzlansa, Sen ibodatning oʻzisan. Har bir diniy harakat — Allohga qaratilgan, undan boshqa hech kimga emas.'
      }
    },
    {
      id: 'c4',
      lineA: [
        'Munchaki ',
        { text: 'aflok', glossId: 'aflok' },
        ' ',
        { text: 'sabuksang', glossId: 'sabuksang' },
        ' erur,'
      ],
      lineB: ['Yo kurai xok kuhanlang erur.'],
      interp: {
        short:
          'Falaklar — yengil tosh; Yer — eski parcha. Sen oldida koinot — kichik.',
        long:
          'Koinotning kattaligi haqidagi obraz: aflok — yengil tosh, Yer kurasi — eski parcha. Inson koʻzi uchun ulkan, lekin Allohga nisbatan — hech narsa. "Sabuksang" va "kuhanlang" — ikki forsiy soʻz oʻyni: yengil va eski.'
      }
    },
    {
      id: 'c5',
      lineA: ['Sendin alar junbishu oromi ham,'],
      lineB: [
        'Oʻylaki, ',
        { text: 'ijodi', glossId: 'ijod-edom' },
        ' ham, eʼdomi ham.'
      ],
      interp: {
        short:
          'Hamma harakat va sukunat, yaratilish va halokat — Sendan.',
        long:
          'Falsafiy daʼvo: oʻzgaruvchanlik ham, mustahkamlik ham bir manbadan. Ijod (yaratish) va eʼdom (yoʻq qilish) — bir-biriga zid ikki amal, lekin ikkalasi ham Allohning qudrati. Hech narsa Undan tashqarida emas.'
      }
    },
    {
      id: 'c6',
      lineA: ['Gunbadi mino bila toqi sipehr,'],
      lineB: [
        'Kim anga shamʼ anjum erur, ',
        { text: 'shamsa', glossId: 'shamsa' },
        ' — mehr.'
      ],
      interp: {
        short:
          'Osmon — moviy gumbaz. Yulduzlar — uning shamlari, Quyosh — markazi.',
        long:
          'Osmon obrazi: "gunbadi mino" — moviy gumbaz, "toqi sipehr" — falak toqi. Shu gumbaz uchun yulduzlar — yorituvchi shamlar, quyosh esa markaziy bezak (shamsa). Klassik kosmologiya: koinot — bezatilgan ulkan saroy, va saroy ham — Sen tomonga ishora.'
      }
    }
  ],
  closingEssay:
    'Ikkinchi munojot — yaratish va sajda haqidagi duo. Bu yerda Navoiy bir necha asosiy fikrni bildiradi.\n\nBirinchi: borliqning manbai — Alloh. Hamma narsa Undan keladi, hamma narsa Uning lutfi tufayli mavjud.\n\nIkkinchi: sajda — faqat diniy marosim emas, balki mavjudlikning oʻz mantiqi. Yoʻqlikdan vujudga kelgan har narsa — sajdada turibdi. Sen sajda qilsang ham, qilmasang ham — sajdaning maqsadi Sen.\n\nUchinchi: koinot — kattadek koʻrinadi, lekin Alloh oldida — kichik. Falaklar yengil tosh, Yer eski parcha kabi. Bu obraz keyingi savol uchun zamin tayyorlaydi: agar koinot "kichik" boʻlsa, inson nima?\n\nBu yerda asos qoʻyilgan: borliqning markazida — Alloh, va inson — Sen tomonga harakatda.'
};
