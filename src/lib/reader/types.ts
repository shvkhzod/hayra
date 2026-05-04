/**
 * Reader domain types — tier system, couplets, glosses, interpretations.
 * Same data drives Tier 1 (bare poem), Tier 2 (margin reading), and
 * Tier 3 (full critical apparatus).
 */

export type Tier = 1 | 2 | 3;

/** A token in a hemistich. Either a plain string fragment or a glossed word. */
export type WordToken =
  | string
  | {
      text: string;
      glossId: string;
    };

export type Couplet = {
  id: string;
  /** First hemistich. */
  lineA: WordToken[];
  /** Second hemistich. */
  lineB: WordToken[];
  interp?: {
    /** 2–4 sentence margin note (Tier 2). */
    short: string;
    /** Longer interpretive panel (Tier 3, right column). */
    long: string;
  };
};

export type Gloss = {
  id: string;
  /** Display headword for the alphabetical glossary. */
  word: string;
  /** Modern Uzbek synonym. */
  modern: string;
  /** Etymological note (root, language of origin). */
  etymology?: string;
  /** Sense in classical Chagatai usage / context-specific reading. */
  classical?: string;
  /** Optional Sufi-term tag (e.g. "Hikmat", "Fano", "Vahdat"). */
  sufiTag?: string;
};

export type ChapterText = {
  id: string;
  num: string;
  title: string;
  theme?: string;
  /** Brief Uzbek intro displayed above the couplets. */
  intro?: string;
  glossary: Gloss[];
  couplets: Couplet[];
  /** Tier 3 closing prose (Robert Alter / Loeb-style critical reading). */
  closingEssay?: string;
  /** Source attribution shown subtly at the bottom. */
  source?: string;
};
