import type { ChapterText } from '../types.js';

export const maqolat08: ChapterText = {
  id: 'maqolat-08',
  num: '20',
  title: 'Sakkizinchi Maqolat — Vafo haqida',
  theme: 'Vafo haqida',
  intro:
    'Vafo — eng noyob gavhar. Falak xazinasida har xil javohirlar bor, lekin "vafo gavhari" — anqodek nodir.',
  source: '1989-yil Toshkent nashri.',
  glossary: [
    {
      id: 'durj',
      word: 'durj',
      modern: 'qutish, javohir qutisi',
      etymology: 'Arabchadan.'
    },
    {
      id: 'javhar',
      word: 'javhar',
      modern: 'gavhar, qimmatbaho tosh',
      etymology: 'Arabchadan.'
    },
    {
      id: 'vafo',
      word: 'vafo gavhari',
      modern: 'vafo gavhari',
      etymology: 'Arabchadan.',
      classical: 'Bu yerda — sodiqlikning ramzy noyob jihati.'
    },
    {
      id: 'anqo',
      word: 'anqo',
      modern: 'afsonaviy qush',
      etymology: 'Arabchadan.',
      classical: 'Klassik adabiyotda — yetib boʻlmaydigan, koʻrinmaydigan narsa.'
    }
  ],
  couplets: [
    {
      id: 'c1',
      lineA: [
        'Charx toʻquz ',
        { text: 'durj', glossId: 'durj' },
        'ki zarkor erur,'
      ],
      lineB: ['Javfida yuz ming duri shahvor erur.'],
      interp: {
        short: 'Falak — toʻqqiz oltin qutidir; ichida yuz ming qimmatli marvarid.',
        long: 'Klassik kosmologiya: toʻqqiz osmon — toʻqqiz oltin quti. Har birida koʻplab javohir (yulduzlar). Lekin bularning hammasi vafo gavhari oldida ojiz.'
      }
    },
    {
      id: 'c2',
      lineA: [
        'Soʻrsa otin ahli safo ',
        { text: 'javhar', glossId: 'javhar' },
        'i,'
      ],
      lineB: [
        'Oh chekib deki, ',
        { text: 'vafo', glossId: 'vafo' },
        ' gavhari!'
      ],
      interp: {
        short: 'Pok ahli "qaysi gavhar?" deb soʻrasalar, oh chekib aytadilar: "vafo gavhari!"',
        long: 'Faslning hal qiluvchi javobi. "Ahli safo" — pok yoʻldoshlar — eng qadrli javharni izlaydilar. Ularning javobi: vafo. Hech bir oltin, hech bir yoqut buni almashtira olmaydi.'
      }
    },
    {
      id: 'c3',
      lineA: ['Bu duri noyob vafomu ekin,'],
      lineB: ['Gar ul emas, mehrigiyomu ekin?'],
      interp: {
        short: 'Bu noyob marvarid vafo emasmi? Yo "mehrigiyo" (sehr-davo gulimi)?',
        long: 'Vafo bilan "mehrigiyo" (sevgini uygʻotuvchi sehr-gul) muqoyasa qilinadi. Ikkalasi ham nodir — lekin keyingi bayt vafoni undan ham yuqoriga qoʻyadi.'
      }
    },
    {
      id: 'c4',
      lineA: [
        'Mehrigiyo demaki, ',
        { text: 'anqo', glossId: 'anqo' },
        'dur ul,'
      ],
      lineB: ['Javhari fardu duri yaktodur ul.'],
      interp: {
        short: 'Mehrigiyo dema — bu anqodir. Yagona javhar, yakka marvarid.',
        long: 'Eng oxirgi tashbih: vafo — anqo. Anqo — afsonaviy qush, hech kim koʻrmagan. Vafo ham shunday — har odamda yoʻq, lekin uni koʻrgan hech qachon unutmaydi.'
      }
    }
  ],
  closingEssay:
    'Sakkizinchi maqolat — vafoni eng noyob gavhar deb tasvirlaydi. Falak xazinalari ham, sehrli oʻtlar ham unga teng emas.\n\nNega vafo shu darajada qadrli? Chunki uni topish qiyin va uni saqlash undan ham qiyin. Vafo — bir kunlik emas, umrlik. Anqodek nodir; lekin uni topgan odam — eng buyuk boyligini topgan.'
};
