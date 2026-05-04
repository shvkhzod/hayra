import type { ChapterText } from '../types.js';

export const maqolat03: ChapterText = {
  id: 'maqolat-03',
  num: '15',
  title: 'Uchinchi Maqolat — Salotin haqida',
  theme: 'Salotin (sultonlar va adolat) haqida',
  intro:
    'Sultonlar haqida. Hokimlik kimga berilsa — adolat ham unga yuk. Quron amri: "Allohga adolatni va ezgulikni amr qiladi."',
  source: '1989-yil Toshkent nashri.',
  glossary: [
    {
      id: 'rifat',
      word: 'rifʼat',
      modern: 'yuksaklik, mavqe',
      etymology: 'Arabchadan.'
    },
    {
      id: 'xurshed',
      word: 'xurshedi mulk',
      modern: 'mulk quyoshi',
      etymology: 'Forscha "xurshed" — quyosh.'
    },
    {
      id: 'mehr',
      word: 'mehr',
      modern: 'quyosh',
      etymology: 'Forschadan.'
    },
    {
      id: 'tugro',
      word: 'tugʻro',
      modern: 'sulton muhri, hujjat belgisi',
      etymology: 'Turkchadan.',
      classical: 'Sulton hujjatining oʻziga xos belgi-imzo.'
    }
  ],
  couplets: [
    {
      id: 'c1',
      lineA: [
        'Ey falak avjidin oʻtub ',
        { text: 'rifʼat', glossId: 'rifat' },
        'ing,'
      ],
      lineB: ['Oyu quyoshdin cholinib navbating.'],
      interp: {
        short: 'Sening yuksakliging falak avjidan ham ortiq, oy va quyosh seni navbatga qoʻyadilar.',
        long: 'Sulton vasfining boshlanishi: mavqe falakdan ham yuksak. Lekin bu — tushovsiz madhlash emas; navbatchi bayt sulton vazifasini eslatib oʻtadi.'
      }
    },
    {
      id: 'c2',
      lineA: ['Taxting oʻlub davlati jovidi mulk,'],
      lineB: [
        'Sayoi chatring aro ',
        { text: 'xurshedi mulk', glossId: 'xurshed' },
        '.'
      ],
      interp: {
        short: 'Taxting — abadiy davlat, chataring sayasi ostida — mulk quyoshi.',
        long: 'Klassik sulton madhi: chater (soyabon, chodir) sulton sayasining ramzi. Uning sayasi shu darajada katta-ki, mulk quyoshi ham ostida turadi.'
      }
    },
    {
      id: 'c3',
      lineA: [
        { text: 'Mehr', glossId: 'mehr' },
        ' boʻlub soyanishining sening,'
      ],
      lineB: ['Oy yuzida muxri nigining sening.'],
      interp: {
        short: 'Quyosh — sening soyalanishing, oyning yuzi — sening muhring.',
        long: 'Hatto osmon jismlari sulton xizmatida. Oy — yuzida sulton muhri bor; quyosh — soyalanish manbai. Sulton qudratining koinot miqyosidagi tasviri.'
      }
    },
    {
      id: 'c4',
      lineA: ['Xutbai johing qadar insho qilib,'],
      lineB: [
        '«Yaʼmuru bil-adl» ila ',
        { text: 'tugʻro', glossId: 'tugro' },
        ' qilib.'
      ],
      interp: {
        short: 'Mavqeingning xutbasini yozdi, "adolatni amr qiladi" oyati bilan tugʻroladi.',
        long: 'Burilish: madh ostida — talab. Quron 16:90 ga ishora ("Inna-llāha yaʼmuru bil-ʼadli wal-iḥsān"). Sulton qudratining tugʻrosi (asosiy hujjati) — adolat. Maqolatning markaziy fikri shu yerda.'
      }
    }
  ],
  closingEssay:
    'Uchinchi maqolat — sultonlar haqida, lekin oddiy madh emas. Navoiy sulton vasfini boshlaydi, lekin ohirida muhim talab keladi: adolat.\n\nQuron amri: "Alloh adolatni va ezgulikni amr qiladi." Sulton qudrati naqadar katta boʻlsa ham, uning haqiqiy "tugʻro"si — adolat hujjati. Adolatsiz hokimlik — koʻrinishda hokimlik, mohiyatda — kufrning bir koʻrinishi.'
};
