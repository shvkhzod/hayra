import { writable, type Writable } from 'svelte/store';
import type { Tier } from './types.js';

const KEY = 'hayra:reader-tier';
const DEFAULT: Tier = 2;

function makeTierStore(): Writable<Tier> {
  let initial: Tier = DEFAULT;
  if (typeof localStorage !== 'undefined') {
    const v = localStorage.getItem(KEY);
    if (v === '1' || v === '2' || v === '3') initial = Number(v) as Tier;
  }
  const store = writable<Tier>(initial);
  if (typeof localStorage !== 'undefined') {
    store.subscribe((v) => {
      try {
        localStorage.setItem(KEY, String(v));
      } catch {
        /* ignore quota / private mode */
      }
    });
  }
  return store;
}

export const tier = makeTierStore();
