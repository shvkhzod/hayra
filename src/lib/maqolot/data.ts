/**
 * «Hayrat ul-abror» bob roʻyxati — 12 muqaddima bobi + 20 maqolat.
 * Tarkib va tartib 1989-yilgi Toshkent (Gʻafur Gʻulom nashriyoti)
 * nashridagi matniga asoslangan.
 */

export type Category = 'munojot' | 'nat' | 'hayrat' | 'maqolat';

export type Chapter = {
  id: string;
  num: string;
  title: string;
  /** Bobning asosiy mavzusi — qisqa Uzbek line */
  theme?: string;
  category: Category;
  /** Hue (0–360) — per-card sepia tint (used when no image). */
  hue: number;
  /** Seed (0–1) — arabesque pattern variation (used when no image). */
  seed: number;
  /** Optional thumbnail image — overrides the procedural plate when set. */
  image?: string;
};

export const featured: Chapter & { description: string } = {
  id: 'maqolat-01-iymon',
  num: '13',
  title: 'Avvalgi Maqolat — Iymon haqida',
  theme: 'Iymon haqida',
  category: 'maqolat',
  hue: 28,
  seed: 0.12,
  image: '/img/iyman.webp',
  description:
    'Yigirma maqolatning birinchisi. Navoiy bu bobda asosiy fikrini aytadi: insonlikning belgisi — iymon. Qolgan 19 maqolatning kaliti shu yerda.'
};

export const chapters: Chapter[] = [
  // ── Muqaddima: Munojot (4 ta) ─────────────────────────
  { id: 'munojot-01', num: '01', title: 'Avvalgi Munojot',     theme: 'Allohning birligi haqida',                category: 'munojot', hue: 24, seed: 0.04 },
  { id: 'munojot-02', num: '02', title: 'Ikkinchi Munojot',    theme: 'Yaratilishning zuhuri',                   category: 'munojot', hue: 26, seed: 0.13 },
  { id: 'munojot-03', num: '03', title: 'Uchinchi Munojot',    theme: 'Adamga qaytish',                          category: 'munojot', hue: 22, seed: 0.21 },
  { id: 'munojot-04', num: '04', title: 'Toʻrtinchi Munojot',  theme: 'Karam dengizi',                           category: 'munojot', hue: 28, seed: 0.30 },

  // ── Muqaddima: Naʼt (5 ta) ────────────────────────────
  { id: 'nat-01', num: '05', title: 'Avvalgi Naʼt',     theme: 'Payg‘ambarning azaliy nuri',  category: 'nat', hue: 32, seed: 0.36 },
  { id: 'nat-02', num: '06', title: 'Ikkinchi Naʼt',    theme: 'Risolat — payg‘ambarlik',     category: 'nat', hue: 30, seed: 0.42 },
  { id: 'nat-03', num: '07', title: 'Uchinchi Naʼt',    theme: 'Madhi rasul',                  category: 'nat', hue: 34, seed: 0.49 },
  { id: 'nat-04', num: '08', title: 'Toʻrtinchi Naʼt',  theme: 'Payg‘ambarlik osmoni',         category: 'nat', hue: 28, seed: 0.55 },
  { id: 'nat-05', num: '09', title: 'Beshinchi Naʼt',   theme: 'Meʼroj — tunlik sayri',        category: 'nat', hue: 36, seed: 0.61 },

  // ── Muqaddima: Hayrat (3 ta) ──────────────────────────
  { id: 'hayrat-01', num: '10', title: 'Avvalgi Hayrat',   theme: 'Ruhning uyg‘onishi',          category: 'hayrat', hue: 20, seed: 0.66 },
  { id: 'hayrat-02', num: '11', title: 'Ikkinchi Hayrat',  theme: 'Hayrat — borliq oldida',      category: 'hayrat', hue: 22, seed: 0.72 },
  { id: 'hayrat-03', num: '12', title: 'Uchinchi Hayrat',  theme: 'Ruhning tanaga inishi',       category: 'hayrat', hue: 18, seed: 0.78 },

  // ── 20 Maqolat ────────────────────────────────────────
  { id: 'maqolat-01-iymon', num: '13', title: 'Avvalgi Maqolat — Iymon haqida',           theme: 'Iymon haqida',                              category: 'maqolat', hue: 28, seed: 0.12, image: '/img/iyman.webp' },
  { id: 'maqolat-02', num: '14', title: 'Ikkinchi Maqolat — Islom haqida',                theme: 'Islom haqida',                              category: 'maqolat', hue: 30, seed: 0.19 },
  { id: 'maqolat-03', num: '15', title: 'Uchinchi Maqolat — Salotin haqida',              theme: 'Salotin (sultonlar va adolat) haqida',      category: 'maqolat', hue: 26, seed: 0.27 },
  { id: 'maqolat-04', num: '16', title: 'Toʻrtinchi Maqolat — Xirqapoʻshlar haqida',      theme: 'Xirqapoʻshlar (darvishlar) haqida',         category: 'maqolat', hue: 32, seed: 0.34 },
  { id: 'maqolat-05', num: '17', title: 'Beshinchi Maqolat — Karam haqida',               theme: 'Karam (saxiylik) haqida',                   category: 'maqolat', hue: 24, seed: 0.41 },
  { id: 'maqolat-06', num: '18', title: 'Oltinchi Maqolat — Adab haqida',                 theme: 'Adab va kamtarinlik haqida',                category: 'maqolat', hue: 36, seed: 0.48 },
  { id: 'maqolat-07', num: '19', title: 'Yettinchi Maqolat — Qanoat haqida',              theme: 'Qanoat haqida',                             category: 'maqolat', hue: 22, seed: 0.55 },
  { id: 'maqolat-08', num: '20', title: 'Sakkizinchi Maqolat — Vafo haqida',              theme: 'Vafo haqida',                               category: 'maqolat', hue: 28, seed: 0.62 },
  { id: 'maqolat-09', num: '21', title: 'Toʻqqizinchi Maqolat — Ishq haqida',             theme: 'Ishq haqida',                               category: 'maqolat', hue: 26, seed: 0.69 },
  { id: 'maqolat-10', num: '22', title: 'Oʻninchi Maqolat — Rostliq haqida',              theme: 'Rostliq (sidq) haqida',                     category: 'maqolat', hue: 30, seed: 0.76 },
  { id: 'maqolat-11', num: '23', title: 'Oʻn birinchi Maqolat — Ilm haqida',              theme: 'Ilm haqida',                                category: 'maqolat', hue: 34, seed: 0.83 },
  { id: 'maqolat-12', num: '24', title: 'Oʻn ikkinchi Maqolat',                           theme: 'Maqolat',                                   category: 'maqolat', hue: 20, seed: 0.07 },
  { id: 'maqolat-13', num: '25', title: 'Oʻn uchinchi Maqolat — Sahobnafrasonlar haqida', theme: 'Saxovat ahli haqida',                       category: 'maqolat', hue: 38, seed: 0.14 },
  { id: 'maqolat-14', num: '26', title: 'Oʻn toʻrtinchi Maqolat',                         theme: 'Maqolat',                                   category: 'maqolat', hue: 24, seed: 0.22 },
  { id: 'maqolat-15', num: '27', title: 'Oʻn beshinchi Maqolat — Jahl mayi haqida',       theme: 'Johillik (jahl mayi) haqida',               category: 'maqolat', hue: 16, seed: 0.31 },
  { id: 'maqolat-16', num: '28', title: 'Oʻn oltinchi Maqolat — Xudnamo muxannaslar haqida', theme: 'Riyokorlik haqida',                      category: 'maqolat', hue: 18, seed: 0.39 },
  { id: 'maqolat-17', num: '29', title: 'Oʻn yettinchi Maqolat — Bahor va xazon haqida',  theme: 'Bahor va xazon (yoshlik va qarilik)',       category: 'maqolat', hue: 32, seed: 0.46 },
  { id: 'maqolat-18', num: '30', title: 'Oʻn sakkizinchi Maqolat — Falak gʻamxonasi haqida', theme: 'Dunyo — gʻamxona',                       category: 'maqolat', hue: 22, seed: 0.53 },
  { id: 'maqolat-19', num: '31', title: 'Oʻn toʻqqizinchi Maqolat — Xuroson haqida',      theme: 'Xuroson va Hirot madhi',                    category: 'maqolat', hue: 30, seed: 0.61 },
  { id: 'maqolat-20', num: '32', title: 'Yigirmanchi Maqolat — Maqsud adosi (Xotima)',    theme: 'Xotima — Sulton Badiʼuzzamonga bagʻishlov', category: 'maqolat', hue: 28, seed: 0.68 }
];

export type FilterKey = 'all' | Category;

export const filters: { key: FilterKey; label: string }[] = [
  { key: 'all',      label: 'Barchasi' },
  { key: 'munojot',  label: 'Munojot' },
  { key: 'nat',      label: 'Naʼt' },
  { key: 'hayrat',   label: 'Hayrat' },
  { key: 'maqolat',  label: 'Maqolat' }
];

export const categoryLabel: Record<Category, string> = {
  munojot: 'Munojot',
  nat: 'Naʼt',
  hayrat: 'Hayrat',
  maqolat: 'Maqolat'
};

export function matches(c: Chapter, key: FilterKey): boolean {
  if (key === 'all') return true;
  return c.category === key;
}
