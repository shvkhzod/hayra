import type { ChapterText } from '../types.js';

export const maqolat20: ChapterText = {
  id: 'maqolat-20',
  num: '32',
  title: 'Yigirmanchi Maqolat — Maqsud adosi (Xotima)',
  theme: 'Xotima — Sulton Badiʼuzzamonga bagʻishlov',
  intro:
    'Yigirmanchi maqolat — Hayrat ul-abrorning xotimasi. Navoiy butun asarni Sulton Husayn Bayqaroning oʻgʻli — Sulton Badiuzzamonga bagʻishlaydi.',
  source: '1989-yil Toshkent nashri.',
  glossary: [
    {
      id: 'huvaydo',
      word: 'huvaydo',
      modern: 'koʻrinuvchi, oshkor',
      etymology: 'Forschadan.'
    },
    {
      id: 'zimn',
      word: 'zimni',
      modern: 'ichkari, yashirin maʼno',
      etymology: 'Arabchadan.'
    },
    {
      id: 'xalaf',
      word: 'xalaf',
      modern: 'meros, oʻrinbosar',
      etymology: 'Arabchadan.',
      classical: 'Bu yerda — toʻgʻri farzand, davomchi.'
    },
    {
      id: 'midhat',
      word: 'midhat',
      modern: 'madh, ulugʻlash',
      etymology: 'Arabchadan.'
    }
  ],
  couplets: [
    {
      id: 'c1',
      lineA: [
        'Olam aro harne ',
        { text: 'huvaydo', glossId: 'huvaydo' },
        ' durur,'
      ],
      lineB: [
        'Siri aning ',
        { text: 'zimn', glossId: 'zimn' },
        'ida paydo durur.'
      ],
      interp: {
        short: 'Olamda har bir koʻrinuvchi narsa — siri ichida yashiringan.',
        long: 'Maqolatning falsafiy ochilishi: zohiri va botini, koʻrinish va sir. Quron va sufiy adabiyot doktrinasi: har narsada Allohning ishorasi yashiringan.'
      }
    },
    {
      id: 'c2',
      lineA: [
        'Bu ',
        { text: 'xalaf', glossId: 'xalaf' },
        ' insongʻa ham inson erur,'
      ],
      lineB: ['Shahgʻa shahu, xongʻa dogʻi xon erur.'],
      interp: {
        short: 'Bu xalaf — insondan inson, shohdan shoh, xondan xon.',
        long: 'Sulton Badiuzzamonni tasvirlashga oʻtish: u oddiy farzand emas, balki "xalaf" — toʻgʻri davomchi. Otadan oʻgʻilga oʻtgan kuch va shaʼn.'
      }
    },
    {
      id: 'c3',
      lineA: ['Bilki erur moyai amnu amon,'],
      lineB: ['Xusravi Jamqadr Badiʼuzzamon.'],
      interp: {
        short: 'Bil: amniyat va omonlikning manbai — Jamshid darajasidagi shoh Badiuzzamon.',
        long: 'Asarning bagʻishlangan kishisi: Sulton Husayn Bayqaroning oʻgʻli. "Jamqadr" — Jamshid darajasida; "Xusrav" — shoh. Mubohatning eng yuqori darajada.'
      }
    },
    {
      id: 'c4',
      lineA: [
        'Madh ila chun mumkin emas ',
        { text: 'midhat', glossId: 'midhat' },
        'ing,'
      ],
      lineB: ['Oʻzga jihatdin qilayin xizmating.'],
      interp: {
        short: 'Madh bilan ulugʻlashing imkonsiz — boshqa yoʻldan xizmat qilay.',
        long: 'Klassik kamtarlik formulasi: shohni soʻz bilan toʻliq madhlash mumkin emas. Demak, kitobning oʻzi — xizmat. "Hayrat ul-abror" — bu xizmatning natijasi.'
      }
    }
  ],
  closingEssay:
    'Yigirmanchi maqolat — Hayrat ul-abrorning xotimasi. Navoiy oʻzining "kitobi"ni tugatadi va uni Sulton Badiuzzamonga bagʻishlaydi.\n\nLekin bu — oddiy bagʻishlov emas. Birinchi maqolatda iymon belgilangan; keyingi 18 ta maqolat — uning amaliy ifodalari (islom, salotin, karam, adab, qanoat, vafo, ishq, rostliq, ilm va boshqalari). Yigirmanchisi — bularning hammasi bir kishida — sultonda — qanday ifodalanishi kerakligini koʻrsatadi.\n\nShu sababdan kitob qaytadan boshlanadi: Iymon haqida — uning kalitidir. Hayrat ul-abror — yopilgan halqa.'
};
