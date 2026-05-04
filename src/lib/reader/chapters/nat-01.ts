import type { ChapterText } from '../types.js';

export const nat01: ChapterText = {
  id: 'nat-01',
  num: '05',
  title: 'Avvalgi Naʼt',
  theme: 'Payg‘ambarning azaliy nuri',
  intro:
    'Birinchi naʼt — Payg‘ambar Muhammadning azaliy nuri haqida. Bu nur yaratilishdan oldin paydo boʻlgan va Odamdan boshlab har bir avlodga oʻtgan.',
  source: '1989-yil Toshkent nashri.',
  glossary: [
    {
      id: 'lama',
      word: 'lamʼa',
      modern: 'yoritish, chaqnash',
      etymology: 'Arabchadan.'
    },
    {
      id: 'zuhur',
      word: 'zuhur',
      modern: 'paydo boʻlish, oshkor boʻlish',
      etymology: 'Arabchadan.',
      sufiTag: 'Tajalli'
    },
    {
      id: 'sabqatnamo',
      word: 'sabqatnamo',
      modern: 'oldindan koʻrsatuvchi, koʻrsatkich',
      etymology: 'Arabcha "sabq" + forscha "namo".',
      classical: 'Bu yerda — Odam Muhammad nuriga koʻrsatkich boʻlgan.'
    },
    {
      id: 'partav',
      word: 'partav',
      modern: 'nur, yorugʻlik',
      etymology: 'Forschadan.'
    }
  ],
  couplets: [
    {
      id: 'c1',
      lineA: [
        'Ey qilibon ',
        { text: 'lamʼai', glossId: 'lama' },
        ' nurung ',
        { text: 'zuhur', glossId: 'zuhur' },
        ','
      ],
      lineB: ['Andaki ne soya bor erdi, ne nur.'],
      interp: {
        short: 'Yaratilishdan oldin na nur, na soya bor edi — Sening nurung birinchi yorishgan.',
        long: 'Klassik sufiy tasavvur: Muhammad nuri (nur-i Muhammadiy) — yaratilishning birinchi nuri. Hech narsa yoʻq paytda ham bu nur paydo boʻlgan, va undan keyin koinot quyildi.'
      }
    },
    {
      id: 'c2',
      lineA: ['Nurunga tob ikki jahondin burun,'],
      lineB: ['Harne yoʻq ondin burun, ondin burun.'],
      interp: {
        short: 'Sening nuring ikki jahondan oldin yorishgan. Undan oldin hech narsa yoʻq edi.',
        long: 'Pre-eternallik daʼvosi takrorlanadi: bu nur vaqtdan oldin. "Ondin burun, ondin burun" — ikki marta takrorlash bayt vaznida ham, mazmunda ham — vaqt tashqarisidagilik mahkamlanadi.'
      }
    },
    {
      id: 'c3',
      lineA: [
        'Boʻldi sanga Odam ',
        { text: 'sabqatnamo', glossId: 'sabqatnamo' },
        ','
      ],
      lineB: ['Avval oʻgʻul, soʻngra gar oʻlsa ato.'],
      interp: {
        short: 'Odam Senga oldindan koʻrsatkich boʻlgan: avval — bola, keyin — ota.',
        long: 'Paradoksal formula: Odam Atoning oldindan koʻrsatuvchi boʻlsa ham, Muhammad nuri "azaliy" — yaʼni vaqt oldida. Shuning uchun bola avval (Muhammad), ota keyin (Odam). Vaqt va manoning farqi.'
      }
    },
    {
      id: 'c4',
      lineA: ['Ayladi chun odami xoki zuhur,'],
      lineB: [
        'Soldi anga ',
        { text: 'partav', glossId: 'partav' },
        'in ul pok nur.'
      ],
      interp: {
        short: 'Sen "tuproqdan" Odamni yaratding — va shu pok nurning partavini unga soldingsang.',
        long: 'Yaratilish lahzasi: Odam tuproqdan yasalgan, lekin Muhammad nurining yorugʻ partavi unga oʻtkazilgan. Shu nur keyingi avlodlarga — bola-otadan ota-bolagacha — uzatilib boradi.'
      }
    }
  ],
  closingEssay:
    'Avvalgi naʼt — Muhammad nurining azaliy mavjudligi haqida. Navoiy klassik sufiy tasavvurni qabul qiladi: bu nur yaratilishdan oldin bor edi.\n\nBu nur Odamga, undan keyingi avlodlarga oʻtib kelgan va oxir-oqibat Muhammadning oʻzida toʻliq oshkor boʻldi. Naʼt — payg‘ambarni vasf qilish — Hayrat ul-abrorda bu vasf shaklda emas, balki ontologik darajada amalga oshadi: payg‘ambar — yaratilishning oʻzaki nuri.'
};
