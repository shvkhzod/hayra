import type { ChapterText } from '../types.js';

import { munojot01 } from './munojot-01.js';
import { munojot02 } from './munojot-02.js';
import { munojot03 } from './munojot-03.js';
import { munojot04 } from './munojot-04.js';

import { nat01 } from './nat-01.js';
import { nat02 } from './nat-02.js';
import { nat03 } from './nat-03.js';
import { nat04 } from './nat-04.js';
import { nat05 } from './nat-05.js';

import { hayrat01 } from './hayrat-01.js';
import { hayrat02 } from './hayrat-02.js';
import { hayrat03 } from './hayrat-03.js';

import { iymon } from './iymon.js';
import { maqolat02 } from './maqolat-02.js';
import { maqolat03 } from './maqolat-03.js';
import { maqolat04 } from './maqolat-04.js';
import { maqolat05 } from './maqolat-05.js';
import { maqolat06 } from './maqolat-06.js';
import { maqolat07 } from './maqolat-07.js';
import { maqolat08 } from './maqolat-08.js';
import { maqolat09 } from './maqolat-09.js';
import { maqolat10 } from './maqolat-10.js';
import { maqolat11 } from './maqolat-11.js';
import { maqolat12 } from './maqolat-12.js';
import { maqolat13 } from './maqolat-13.js';
import { maqolat14 } from './maqolat-14.js';
import { maqolat15 } from './maqolat-15.js';
import { maqolat16 } from './maqolat-16.js';
import { maqolat17 } from './maqolat-17.js';
import { maqolat18 } from './maqolat-18.js';
import { maqolat19 } from './maqolat-19.js';
import { maqolat20 } from './maqolat-20.js';

const all: ChapterText[] = [
  munojot01, munojot02, munojot03, munojot04,
  nat01, nat02, nat03, nat04, nat05,
  hayrat01, hayrat02, hayrat03,
  iymon,
  maqolat02, maqolat03, maqolat04, maqolat05,
  maqolat06, maqolat07, maqolat08, maqolat09,
  maqolat10, maqolat11, maqolat12, maqolat13,
  maqolat14, maqolat15, maqolat16, maqolat17,
  maqolat18, maqolat19, maqolat20
];

const registry: Record<string, ChapterText> = Object.fromEntries(
  all.map((c) => [c.id, c])
);

export function getChapterText(id: string): ChapterText | undefined {
  return registry[id];
}

export function hasChapterText(id: string): boolean {
  return id in registry;
}
