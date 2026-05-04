import type { ChapterText } from '../types.js';

export const maqolat06: ChapterText = {
  id: 'maqolat-06',
  num: '18',
  title: 'Oltinchi Maqolat — Adab haqida',
  theme: 'Adab va kamtarinlik haqida',
  intro:
    'Adab — kamtarinlik va xizmat. Egilgan qomat — yoʻlning shartidir; kibr koʻzni koʻr qiladi.',
  source: '1989-yil Toshkent nashri.',
  glossary: [
    {
      id: 'nishast',
      word: 'nishast',
      modern: 'oʻtirish, joylashish',
      etymology: 'Forschadan.'
    },
    {
      id: 'kibr',
      word: 'kibr',
      modern: 'manmanlik, takabburlik',
      etymology: 'Arabchadan.'
    },
    {
      id: 'tavozu',
      word: 'tavozuʼ',
      modern: 'kamtarinlik',
      etymology: 'Arabchadan.',
      classical: 'Adabning asosi.'
    },
    {
      id: 'charx',
      word: 'charx',
      modern: 'osmon, falak',
      etymology: 'Forschadan.',
      classical: 'Klassik adabiyotda — falak ham tavozuʼ qiladi.'
    }
  ],
  couplets: [
    {
      id: 'c1',
      lineA: [
        'Ey talab uyida ',
        { text: 'nishast', glossId: 'nishast' },
        ' aylagan,'
      ],
      lineB: ['Qaddini xizmat yuki past aylagan.'],
      interp: {
        short: 'Ey talab uyida oʻtirgan, qomatini xizmat yuki ostida pastlatgan.',
        long: 'Adabning birinchi tasviri: talabgor (yoʻlovchi) qomatini egadi. Egilgan qomat — taʼlim olishga tayyor.'
      }
    },
    {
      id: 'c2',
      lineA: ['El yoʻlida gard oʻlubon dard ila,'],
      lineB: [
        { text: 'Kibr', glossId: 'kibr' },
        ' koʻzin koʻr etib ul gard ila.'
      ],
      interp: {
        short: 'Xalq yoʻlida changga aylanding va shu chang bilan kibr koʻzini koʻr qilding.',
        long: 'Kichik boʻlish — manmanlikka davo. "Gard" (chang) — past, oddiy; lekin u kibrning koʻrinishini buzadi. Kichikiylik — koʻruv vositasi.'
      }
    },
    {
      id: 'c3',
      lineA: ['Lek bu yoʻl qatʼida sharti talab,'],
      lineB: [
        'Bilki ',
        { text: 'tavozuʼ', glossId: 'tavozu' },
        ' bila kelmish adab.'
      ],
      interp: {
        short: 'Bu yoʻlning sharti talab — bil: adab tavozuʼ bilan keladi.',
        long: 'Faslning markaziy daʼvosi. Adab — qoidaviy emas, balki ichki holat. Uning yoʻli — kamtarinlik. Tavozuʼ — adabning kaliti.'
      }
    },
    {
      id: 'c4',
      lineA: [
        { text: 'Charx', glossId: 'charx' },
        ' tavozuʼ uza to xam durur,'
      ],
      lineB: ['Tobii amri bori olam durur.'],
      interp: {
        short: 'Falak ham tavozuʼ ostida egilgan — shuning uchun butun olam unga boʻyin egadi.',
        long: 'Kuchli tashbih: hatto osmon ham egilgan ("xam durur"). Aynan shu sababdan koinot uning amriga boʻyin egadi. Eyilish — kuch.'
      }
    }
  ],
  closingEssay:
    'Oltinchi maqolat — adab va kamtarinlik haqida. Adab — soʻzlash uslubi emas, balki ichki holat.\n\nNavoiy aytadi: adab — tavozuʼ bilan keladi. Egilgan qomat, kichik koʻngil — taʼlim olishning sharti. Falak ham egilgan — shuning uchun olam unga boʻyin egadi. Bu — paradoksning mantiqi: pastlik, oxir-oqibat, eng yuqori darajadir.'
};
