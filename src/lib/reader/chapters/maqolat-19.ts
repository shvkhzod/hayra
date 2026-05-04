import type { ChapterText } from '../types.js';

export const maqolat19: ChapterText = {
  id: 'maqolat-19',
  num: '31',
  title: 'Oʻn toʻqqizinchi Maqolat — Xuroson haqida',
  theme: 'Xuroson va Hirot madhi',
  intro:
    'Xuroson — eng goʻzal mamlakat, Hirot — uning toji. Navoiy bu yerda oʻz vatani haqida yozadi: yetti iqlimning toʻrtinchisi va eng yaxshisi.',
  source: '1989-yil Toshkent nashri.',
  glossary: [
    {
      id: 'foyiq',
      word: 'foyiq',
      modern: 'ustun, ortiq',
      etymology: 'Arabchadan.'
    },
    {
      id: 'iqlim',
      word: 'iqlim',
      modern: 'mintaqa, mamlakat',
      etymology: 'Arabchadan.',
      classical: 'Klassik geografiya: dunyo yetti iqlimga boʻlinadi.'
    },
    {
      id: 'ravza',
      word: 'ravzai rizvon',
      modern: 'rizvon bogʻi (jannat)',
      etymology: 'Arabchadan.'
    },
    {
      id: 'samo',
      word: 'samo',
      modern: 'osmon',
      etymology: 'Arabchadan.'
    }
  ],
  couplets: [
    {
      id: 'c1',
      lineA: [
        'Mehr chu ul oltigʻa ',
        { text: 'foyiq', glossId: 'foyiq' },
        ' durur,'
      ],
      lineB: [
        'Andagʻi ',
        { text: 'iqlim', glossId: 'iqlim' },
        ' anga loyiq durur.'
      ],
      interp: {
        short: 'Quyosh boshqa olti yulduzdan ustun — Xuroson iqlimi ham boshqalardan ustun.',
        long: 'Ptolemey kosmologiyasiga ishora: yetti sayyora bor, quyosh markazda — toʻrtinchi. Yetti iqlim ham bor; quyoshga toʻgʻri keladigan iqlim — toʻrtinchi. Bu — Xuroson.'
      }
    },
    {
      id: 'c2',
      lineA: ['Toʻrtinchi charxki maʼvosidur,'],
      lineB: ['Ham oʻshul iqlim murabbosidur.'],
      interp: {
        short: 'Quyosh toʻrtinchi falakda turadi; xuddi shu iqlim murabbas (kub kabi mukammal).',
        long: 'Ramzy moslik: quyoshning oʻrni — toʻrtinchi falak. Uning yer yuzidagi muqobili — toʻrtinchi iqlim, yaʼni Xuroson. Tabiat ham, geografiya ham — bir tartibga.'
      }
    },
    {
      id: 'c3',
      lineA: ['Ziynat aro '],
      lineB: [
        { text: 'ravzai rizvon', glossId: 'ravza' },
        'dur ul, Ravzani qoʻy, mulki Xurosondur ul.'
      ],
      interp: {
        short: 'Ziynatda — rizvon bogʻidek; lekin "bogʻ"ni qoldir, Xuroson mulki.',
        long: 'Klassik mubohatga: rizvon bogʻi dema, balki Xuroson de. Bu yerda mubohat shu darajada-ki, jannat ham unga qiyoslanadi.'
      }
    },
    {
      id: 'c4',
      lineA: ['Sohati toʻrtinchi falakdin vasiʼ,'],
      lineB: [
        'Rutbasi yettinchi ',
        { text: 'samo', glossId: 'samo' },
        'din rafiʼ.'
      ],
      interp: {
        short: 'Maydoni toʻrtinchi falakdan keng; mavqei yettinchi osmondan baland.',
        long: 'Eng baland mubohat: Xurosonning maydoni va mavqei koinotning eng katta oʻlchamlaridan ham ortiq. Bu — vatan sevgisining sheʼriy ifodasi.'
      }
    }
  ],
  closingEssay:
    'Oʻn toʻqqizinchi maqolat — Xuroson va Hirot haqida. Navoiy oʻz vatanini madh qiladi: koinotning toʻrtinchi iqlimi, eng goʻzal mintaqasi.\n\nKlassik geografiyada yetti iqlim bor. Toʻrtinchisi — quyosh oʻrnida. Xuroson aynan shu joyda turadi. Hirot — uning markazi, gulshani. Bu maqolat — vatan sevgisining sheʼriy ifodasi: jannatdan ham goʻzal koʻrish — koʻngilning ishidir.'
};
