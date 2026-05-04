import type { ChapterText } from '../types.js';

/**
 * Avvalgi Munojot — Allohning birligi haqida.
 *
 * Couplet text: transliterated to modern Uzbek Latin from the 1989 Toshkent
 * (G‘afur G‘ulom nashriyoti) edition. The first six couplets that follow
 * the prose preface are reproduced here.
 *
 * Glosses, margin notes, and the closing essay are original editorial prose.
 */
export const munojot01: ChapterText = {
  id: 'munojot-01',
  num: '01',
  title: 'Avvalgi Munojot',
  theme: 'Allohning birligi haqida',
  intro:
    'Hayrat ul-abrorning ochilish duosi. Navoiy bu yerda asosiy daʼvoni qoʻyadi: Alloh vaqt va makon tashqarisida — boshlanish yoʻq, oxir yoʻq.',
  source: '1989-yil Toshkent nashri (G‘afur G‘ulom nomidagi nashriyot). Asl matn — 1483-yil, Hirot.',
  glossary: [
    {
      id: 'mabda',
      word: 'mabdaʼ',
      modern: 'boshlanish, manba',
      etymology: 'Arabchadan.'
    },
    {
      id: 'azal',
      word: 'azal',
      modern: 'pre-eternity, vaqtdan oldingi davr',
      etymology: 'Arabchadan.',
      classical: 'Borliqdan oldingi cheksiz "vaqt." Allohga xos.',
      sufiTag: 'Vahdat'
    },
    {
      id: 'lamyazal',
      word: 'lamʼyazal',
      modern: 'soʻnmas, hech qachon kamaymaydigan',
      etymology: 'Arabchadan.'
    },
    {
      id: 'bidoyat-nihoyat',
      word: 'bidoyat / nihoyat',
      modern: 'boshlanish va tugash',
      etymology: 'Arabchadan.'
    },
    {
      id: 'ayn',
      word: 'ayn',
      modern: 'aynan oʻzi, mohiyati',
      etymology: 'Arabchadan: "koʻz" yoki "oʻzlik".',
      classical: 'Sufiy adabiyotda — narsaning oʻz mohiyati.',
      sufiTag: 'Vahdat'
    },
    {
      id: 'nihon',
      word: 'nihon',
      modern: 'yashirin, koʻrinmas',
      etymology: 'Forschadan.'
    },
    {
      id: 'jilva',
      word: 'jilva',
      modern: 'koʻrinish, namoyon boʻlish',
      etymology: 'Arabchadan.',
      classical: 'Sufiy adabiyotda — Allohning oʻzini koʻrsatishi (tajalli).',
      sufiTag: 'Tajalli'
    },
    {
      id: 'nozir-manzur',
      word: 'nozir / manzur',
      modern: 'koʻruvchi va koʻringan',
      etymology: 'Arabchadan.',
      classical: 'Sufiy obraz: ikkalasi ham bir.'
    }
  ],
  couplets: [
    {
      id: 'c1',
      lineA: [
        'Ey sanga ',
        { text: 'mabdaʼda', glossId: 'mabda' },
        ' abaddek ',
        { text: 'azal', glossId: 'azal' },
        ','
      ],
      lineB: [
        'Zoti qadiming abadiy ',
        { text: 'lamʼyazal', glossId: 'lamyazal' },
        '.'
      ],
      interp: {
        short:
          'Allohning zoti vaqtdan tashqarida — boshlanishida ham, tugashida ham abadiy. Uning nuri hech qachon kamaymaydi.',
        long:
          'Munojotning ochilishi: Alloh — vaqt qonunlariga boʻysunmaydi. "Mabdaʼda abaddek azal" — boshlanishida abadiyatdek pre-eternity. "Lamʼyazal" — hech soʻnmas. Bu falsafiy daʼvo keyingi baytlarning poydevoridir.'
      }
    },
    {
      id: 'c2',
      lineA: [
        'Ne boʻlub avvalda ',
        { text: 'bidoyat', glossId: 'bidoyat-nihoyat' },
        ' sanga,'
      ],
      lineB: [
        'Ne kelib oxirda ',
        { text: 'nihoyat', glossId: 'bidoyat-nihoyat' },
        ' sanga.'
      ],
      interp: {
        short:
          'Yana qaytadan: Alloh uchun na boshlanish bor, na tugash. Vaqt — Uning ichida.',
        long:
          'Birinchi fikrning kuchaytirilgan ifodasi. Boshlanish va tugash — vaqt qonunlari, lekin Alloh ulardan tashqarida. Navoiy bu fikrni uch marta qaytaradi (1–3 baytlar) — markaziy daʼvo shu yerda.'
      }
    },
    {
      id: 'c3',
      lineA: ['Avval oʻzung, oxiru mobayn oʻzung,'],
      lineB: [
        'Borchaga Xoliq, boriga ',
        { text: 'ayn', glossId: 'ayn' },
        ' oʻzung.'
      ],
      interp: {
        short:
          'Sen birinchi, oxirgi va oraliqsang. Hammaning yaratuvchisi va hamma narsaning oʻzisang.',
        long:
          'Toʻliq formula: avval, oxir, oraliq — hammasi U. Yaratilishni ham U qiladi, mavjudlikning aynan oʻzi ham U. "Ayn" soʻzi muhim: vahdat ul-vujud (borliq birligi) — sufiy adabiyotning markaziy atamasi shu tushunchani anglatadi.'
      }
    },
    {
      id: 'c4',
      lineA: [
        'Andaki bor erdi ',
        { text: 'nihon', glossId: 'nihon' },
        ' bu jahon,'
      ],
      lineB: [
        'Balki ',
        { text: 'nihon', glossId: 'nihon' },
        ' dogʻi jahondek ',
        { text: 'nihon', glossId: 'nihon' },
        '.'
      ],
      interp: {
        short:
          'Yaratilishdan oldin: dunyo yashirin edi, yashirinligi ham xuddi dunyodek yashirin edi.',
        long:
          'Yaratilishdan oldingi holatning chuqur obraz bilan tasviri. Dunyo yashirinlikdan ham yashirin edi — yaʼni hech kim koʻrmagan, hatto Alloh ham hali oshkor qilmagan. Bu obraz keyingi baytni tayyorlaydi: boʻshliqdan koʻrinishga oʻtish.'
      }
    },
    {
      id: 'c5',
      lineA: ['Sen edingu bas, yana mavjud yoʻq,'],
      lineB: [
        { text: 'Jilva', glossId: 'jilva' },
        ' qilib oʻzungga oʻz husnung oʻq.'
      ],
      interp: {
        short:
          'Sen yolgʻiz mavjud edingsang. Oʻz goʻzalligingni oʻzingga koʻrsatdingsang.',
        long:
          'Sufiy tafakkurning markaziy obrazi: yaratilishdan oldin Alloh yolgʻiz mavjud edi va oʻz goʻzalligini oʻziga koʻrsatdi. "Jilva" — Sufiy adabiyotda "tajalli" — Allohning oʻzini namoyon qilishi. Bu fikr Ibn Arabiyning falsafasiga borib taqaladi.'
      }
    },
    {
      id: 'c6',
      lineA: [
        { text: 'Nozir', glossId: 'nozir-manzur' },
        ' oʻzung erdingu ',
        { text: 'manzur', glossId: 'nozir-manzur' },
        ' oʻzung,'
      ],
      lineB: ['Ishqinga xush, husnunga magʻrur oʻzung.'],
      interp: {
        short:
          'Sen koʻruvchi va koʻringan ham edingsang. Sevging va goʻzalliging — Sen ichida.',
        long:
          'Avvalgi baytning davomi: koʻruvchi va koʻringan — bir narsa. Sevuvchi va sevilgan ham. Bu — vahdat ul-vujud doktrinasining sheʼriy ifodasi: ikki narsa emas, faqat bir. Yaratilish — shu birning oʻzini koʻrsatishidir.'
      }
    }
  ],
  closingEssay:
    'Avvalgi munojot — Hayrat ul-abrorning ochilish duosi. Navoiy oʻzini va kitobini Allohga bagʻishlaydi.\n\nAsosiy fikr: Alloh vaqt va makon tashqarisida. Boshlanish yoʻq, oxir yoʻq, oraliq ham yoʻq — barcha vaqtlar Uning ichida.\n\nBu munojotda Navoiy sufiy adabiyotning markaziy doktrinasiga ishora qiladi: vahdat ul-vujud (borliq birligi). Yaratilishdan oldin Alloh oʻzini oʻziga koʻrsatdi. Koʻruvchi va koʻringan, sevuvchi va sevilgan — bir narsa. Yaratilish — shu sirning oshkor boʻlishi.\n\nShu sababdan munojot duo bilan boshlanadi: "Ey sanga mabdaʼda abaddek azal." Hayrat ul-abror — shu fikrning teran sheʼriy davomidir.'
};
