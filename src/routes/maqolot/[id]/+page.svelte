<script lang="ts">
  import { onMount } from 'svelte';
  import TierSwitcher from '$lib/reader/TierSwitcher.svelte';
  import CoupletLine from '$lib/reader/CoupletLine.svelte';
  import { tier } from '$lib/reader/store.js';
  import type { Gloss } from '$lib/reader/types.js';
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();

  const meta = $derived(data.meta);
  const text = $derived(data.text);

  /** Map glossId → Gloss for quick lookup inside CoupletLine. */
  const glossMap = $derived.by(() => {
    const m = new Map<string, Gloss>();
    if (text) for (const g of text.glossary) m.set(g.id, g);
    return m;
  });

  const sortedGlossary = $derived.by(() => {
    if (!text) return [];
    return [...text.glossary].sort((a, b) =>
      a.word.localeCompare(b.word, 'uz')
    );
  });

  // Reveal-on-scroll for the page
  let stage: HTMLElement | undefined = $state();
  let revealed = $state(false);
  onMount(() => {
    if (!stage) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) { revealed = true; obs.disconnect(); }
      },
      { threshold: 0.05 }
    );
    obs.observe(stage);
    return () => obs.disconnect();
  });
</script>

<svelte:head>
  <title>{meta.title} — HAYRA</title>
</svelte:head>

<article class="reader" bind:this={stage} class:revealed>
  <!-- ── Header band ─────────────────────────────────── -->
  <header class="head">
    <div class="head-inner">
      <a href="/maqolot" class="crumb">
        <span class="material-symbols-outlined">arrow_left_alt</span>
        Maqolot
      </a>

      <span class="num">Bob {meta.num}</span>
      <span class="cat">{meta.theme ?? ''}</span>

      <h1 class="title">{meta.title}</h1>

      {#if text}
        <p class="intro">{text.intro}</p>
      {/if}

      <div class="rule" aria-hidden="true"></div>

      <div class="head-controls">
        <TierSwitcher />
        <a class="vestige-link" href="/maqolot/{meta.id}/asl">
          <span class="material-symbols-outlined">menu_book</span>
          <span>Asl matn</span>
        </a>
      </div>
    </div>
  </header>

  {#if !text}
    <!-- ── Stub: chapter content not yet curated ─────── -->
    <section class="placeholder">
      <div class="placeholder-card">
        <span class="placeholder-eyebrow">Matn tez orada</span>
        <h2 class="placeholder-title">Bu bob hali raqamli nashrga kiritilmagan.</h2>
        <p class="placeholder-body">
          «{meta.title}» — Hayrat ul-abrorning {meta.num}-bobi. Bu bob keyingi
          nashrlarda — lugʻat, izoh va tanqidiy apparati bilan birga — qoʻshiladi.
          Hozircha siz «Avvalgi Maqolat — Iymon haqida»ni toʻliq oʻqiy olasiz.
        </p>
        <a class="ghost-pill" href="/maqolot/maqolat-01-iymon">
          Iymon haqida boʻlimini oʻchish
          <span class="material-symbols-outlined">arrow_right_alt</span>
        </a>
      </div>
    </section>
  {:else if $tier === 1}
    <!-- ── TIER 1 — bare poem ──────────────────────────── -->
    <section class="tier-1">
      <ol class="couplets">
        {#each text.couplets as c (c.id)}
          <li class="couplet">
            <div class="hemistich">
              <CoupletLine tokens={c.lineA} {glossMap} interactive={false} />
            </div>
            <div class="hemistich">
              <CoupletLine tokens={c.lineB} {glossMap} interactive={false} />
            </div>
          </li>
        {/each}
      </ol>
      <p class="source">{text.source}</p>
    </section>
  {:else if $tier === 2}
    <!-- ── TIER 2 — reading with margin notes ──────────── -->
    <section class="tier-2">
      <ol class="couplets">
        {#each text.couplets as c, i (c.id)}
          <li class="t2-row">
            <div class="t2-poem">
              <span class="cnum" aria-hidden="true">{(i + 1).toString().padStart(2, '0')}</span>
              <div class="hemistich">
                <CoupletLine tokens={c.lineA} {glossMap} />
              </div>
              <div class="hemistich">
                <CoupletLine tokens={c.lineB} {glossMap} />
              </div>
            </div>
            {#if c.interp}
              <aside class="t2-note">
                <p>{c.interp.short}</p>
              </aside>
            {/if}
          </li>
        {/each}
      </ol>
      <p class="source">{text.source}</p>
    </section>
  {:else}
    <!-- ── TIER 3 — full critical apparatus ────────────── -->
    <section class="tier-3">
      <div class="t3-grid">
        <aside class="t3-gloss">
          <header class="aside-head">
            <span class="num">{sortedGlossary.length.toString().padStart(2, '0')}</span>
            <span class="lbl">Lugʻat</span>
          </header>
          <dl class="gloss-list">
            {#each sortedGlossary as g (g.id)}
              <div class="gloss-row">
                <dt>
                  <span class="word">{g.word}</span>
                  {#if g.sufiTag}<span class="tag">{g.sufiTag}</span>{/if}
                </dt>
                <dd>
                  <span class="modern">{g.modern}</span>
                  {#if g.etymology}<span class="etym">{g.etymology}</span>{/if}
                </dd>
              </div>
            {/each}
          </dl>
        </aside>

        <div class="t3-body">
          {#each text.couplets as c, i (c.id)}
            <article class="t3-row">
              <div class="t3-poem">
                <span class="cnum" aria-hidden="true">{(i + 1).toString().padStart(2, '0')}</span>
                <div class="hemistich">
                  <CoupletLine tokens={c.lineA} {glossMap} />
                </div>
                <div class="hemistich">
                  <CoupletLine tokens={c.lineB} {glossMap} />
                </div>
              </div>
              {#if c.interp}
                <aside class="t3-interp">
                  <header class="interp-head">
                    <span class="interp-num">{(i + 1).toString().padStart(2, '0')}</span>
                    <span class="interp-label">Tafsir</span>
                  </header>
                  <p>{c.interp.long}</p>
                </aside>
              {/if}
            </article>
          {/each}

          {#if text.closingEssay}
            <section class="essay">
              <header class="essay-head">
                <span class="essay-eyebrow">Yopilish soʻzi</span>
                <h2 class="essay-title">Faslning umumiy mazmuni</h2>
              </header>
              {#each text.closingEssay.split('\n\n') as para}
                <p>{para}</p>
              {/each}
            </section>
          {/if}

          <p class="source">{text.source}</p>
        </div>
      </div>
    </section>
  {/if}
</article>

<style>
  .reader {
    padding-top: 6rem;
    opacity: 0;
    transform: translateY(12px);
    transition:
      opacity 700ms var(--ease-out-expo),
      transform 700ms var(--ease-out-expo);
  }
  .reader.revealed { opacity: 1; transform: none; }

  /* ── HEAD ────────────────────────────────────────── */
  .head {
    padding: 0 var(--margin-safe) var(--space-lg);
    max-width: 90rem;
    margin: 0 auto;
  }
  .head-inner {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }

  .crumb {
    display: inline-flex;
    align-items: center;
    gap: 0.375rem;
    padding: 0.375rem 0.875rem 0.375rem 0.625rem;
    border: 1px solid rgba(222, 219, 200, 0.16);
    border-radius: var(--radius-full);

    color: rgba(222, 219, 200, 0.65);
    font-family: var(--font-sans);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;

    transition: color 240ms var(--ease-out-quart), border-color 240ms var(--ease-out-quart);
  }
  .crumb:hover { color: var(--warm-cream); border-color: rgba(222, 219, 200, 0.45); }
  .crumb .material-symbols-outlined { font-size: 1rem; }

  .num, .cat {
    font-family: var(--font-sans);
    font-size: 0.6875rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }
  .num   { color: var(--primary-container); margin-top: 0.5rem; }
  .cat   { color: rgba(222, 219, 200, 0.45); }

  .title {
    margin: 0.25rem 0 0;
    font-family: var(--font-serif);
    font-style: italic;
    font-weight: 400;
    line-height: 1.05;
    color: var(--primary-container);
    font-size: clamp(2.25rem, 5.5vw, 4.25rem);
    letter-spacing: -0.01em;
  }

  .intro {
    margin: 0.75rem 0 0;
    max-width: 44rem;
    font-size: var(--fs-body-lg);
    line-height: var(--lh-body-lg);
    color: var(--on-surface-variant);
  }

  .rule {
    margin: var(--space-lg) 0 var(--space-md);
    height: 1px;
    width: 100%;
    background: var(--outline-variant);
  }

  .head-controls {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;
  }

  .vestige-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;

    padding: 0.625rem 1rem;
    border: 1px solid rgba(222, 219, 200, 0.18);
    border-radius: var(--radius-full);
    color: rgba(222, 219, 200, 0.72);

    font-family: var(--font-sans);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;

    transition: color 240ms var(--ease-out-quart), border-color 240ms var(--ease-out-quart);
  }
  .vestige-link:hover { color: var(--primary); border-color: rgba(222, 219, 200, 0.45); }
  .vestige-link .material-symbols-outlined { font-size: 1rem; }

  /* ── PLACEHOLDER (chapter without curated content) ─── */
  .placeholder {
    padding: var(--space-md) var(--margin-safe) var(--space-xl);
    max-width: 56rem;
    margin: 0 auto;
  }
  .placeholder-card {
    padding: clamp(2rem, 5vw, 3.5rem);
    background: var(--surface-l1);
    border: 1px solid var(--surface-variant);
    border-radius: var(--radius-md);
  }
  .placeholder-eyebrow {
    display: inline-block;
    font-family: var(--font-sans);
    font-size: 0.6875rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgba(222, 219, 200, 0.55);
  }
  .placeholder-title {
    margin: 0.625rem 0 0.75rem;
    font-family: var(--font-serif);
    font-style: italic;
    font-weight: 400;
    font-size: clamp(1.75rem, 3.5vw, 2.25rem);
    line-height: 1.2;
    color: var(--primary-container);
  }
  .placeholder-body {
    margin: 0 0 1.25rem;
    color: var(--on-surface-variant);
    font-size: var(--fs-body-md);
    line-height: var(--lh-body-lg);
  }
  .ghost-pill {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.25rem;
    border: 1px solid rgba(222, 219, 200, 0.30);
    border-radius: var(--radius-full);
    color: var(--warm-cream);
    font-family: var(--font-sans);
    font-size: var(--fs-label-caps);
    font-weight: 700;
    letter-spacing: var(--ls-label-caps);
    text-transform: uppercase;
    transition: background 240ms var(--ease-out-quart), color 240ms var(--ease-out-quart);
  }
  .ghost-pill:hover { background: var(--primary-container); color: var(--on-primary-container); border-color: transparent; }
  .ghost-pill .material-symbols-outlined { font-size: 1rem; }

  /* ── COMMON COUPLET ──────────────────────────────── */
  .couplets {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .hemistich {
    font-family: var(--font-serif);
    font-size: clamp(1.25rem, 1.6vw, 1.5rem);
    line-height: 2;
    color: var(--light-cream);
    letter-spacing: 0.005em;
  }

  .source {
    margin: var(--space-xl) 0 var(--space-lg);
    font-family: var(--font-serif);
    font-style: italic;
    font-size: 0.875rem;
    color: rgba(222, 219, 200, 0.40);
    text-align: center;
  }

  .cnum {
    font-family: var(--font-sans);
    font-size: 0.625rem;
    font-weight: 700;
    letter-spacing: 0.16em;
    color: rgba(222, 219, 200, 0.30);
    text-transform: uppercase;
    display: block;
    margin-bottom: 0.5rem;
  }

  /* ── TIER 1 ──────────────────────────────────────── */
  .tier-1 {
    padding: var(--space-md) var(--margin-safe) var(--space-xl);
    max-width: 44rem;
    margin: 0 auto;
  }
  .tier-1 .couplet {
    padding: 1.25rem 0;
    border-bottom: 1px dashed rgba(72, 71, 63, 0.55);
  }
  .tier-1 .couplet:last-child { border-bottom: none; }

  /* ── TIER 2 ──────────────────────────────────────── */
  .tier-2 {
    padding: var(--space-md) var(--margin-safe) var(--space-xl);
    max-width: 78rem;
    margin: 0 auto;
  }
  .t2-row {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 1rem;
    padding: 1.25rem 0;
    border-bottom: 1px dashed rgba(72, 71, 63, 0.55);
  }
  .t2-row:last-child { border-bottom: none; }
  @media (min-width: 900px) {
    .t2-row {
      grid-template-columns: minmax(0, 1fr) 18rem;
      gap: 2.5rem;
      align-items: start;
    }
  }
  .t2-note {
    padding-left: 1rem;
    border-left: 1px solid var(--outline-variant);
    color: rgba(222, 219, 200, 0.70);
    font-family: var(--font-sans);
    font-size: 0.875rem;
    line-height: 1.6;
  }
  .t2-note p { margin: 0; }
  @media (min-width: 900px) {
    .t2-note {
      position: sticky;
      top: 6rem;
      align-self: start;
    }
  }

  /* ── TIER 3 ──────────────────────────────────────── */
  .tier-3 {
    padding: var(--space-md) var(--margin-safe) var(--space-xl);
    max-width: 100rem;
    margin: 0 auto;
  }
  .t3-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  @media (min-width: 1100px) {
    .t3-grid {
      grid-template-columns: 17rem minmax(0, 1fr);
      gap: 2.5rem;
      align-items: start;
    }
  }

  .t3-gloss {
    background: var(--surface-l1);
    border: 1px solid var(--surface-variant);
    border-radius: var(--radius-md);
    padding: 1.25rem 1rem 1.5rem;
  }
  @media (min-width: 1100px) {
    .t3-gloss { position: sticky; top: 6rem; max-height: calc(100vh - 7rem); overflow-y: auto; }
  }

  .aside-head {
    display: flex;
    align-items: baseline;
    gap: 0.625rem;
    padding-bottom: 0.625rem;
    border-bottom: 1px solid var(--outline-variant);
    margin-bottom: 0.875rem;
  }
  .aside-head .num {
    color: var(--primary);
    font-size: 0.75rem;
    margin-top: 0;
  }
  .aside-head .lbl {
    font-family: var(--font-sans);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--warm-cream);
  }

  .gloss-list { margin: 0; padding: 0; }
  .gloss-row {
    padding: 0.625rem 0;
    border-bottom: 1px solid rgba(72, 71, 63, 0.4);
  }
  .gloss-row:last-child { border-bottom: none; }
  .gloss-row dt {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
  }
  .gloss-row .word {
    font-family: var(--font-serif);
    font-style: italic;
    font-size: 1rem;
    color: var(--primary-container);
  }
  .gloss-row .tag {
    font-size: 0.5625rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--primary);
    border: 1px solid rgba(251, 247, 228, 0.20);
    padding: 0.125rem 0.4375rem;
    border-radius: var(--radius-full);
  }
  .gloss-row dd {
    margin: 0.25rem 0 0;
    font-family: var(--font-sans);
    font-size: 0.8125rem;
    line-height: 1.5;
    color: rgba(222, 219, 200, 0.70);
  }
  .gloss-row .modern { display: block; color: var(--warm-cream); }
  .gloss-row .etym {
    display: block;
    margin-top: 0.1875rem;
    font-style: italic;
    color: rgba(222, 219, 200, 0.55);
  }

  .t3-body { display: flex; flex-direction: column; gap: 0; }

  .t3-row {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 1.25rem;
    padding: 1.5rem 0;
    border-bottom: 1px solid rgba(72, 71, 63, 0.45);
  }
  .t3-row:last-of-type { border-bottom: none; }
  @media (min-width: 900px) {
    .t3-row {
      grid-template-columns: minmax(0, 1fr) 22rem;
      gap: 2.5rem;
      align-items: start;
    }
  }

  .t3-interp {
    padding: 1rem 1.125rem;
    background: var(--surface-l1);
    border: 1px solid var(--surface-variant);
    border-radius: var(--radius-default);
  }
  .interp-head {
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .interp-num {
    font-family: var(--font-sans);
    font-size: 0.625rem;
    font-weight: 700;
    letter-spacing: 0.16em;
    color: var(--primary);
  }
  .interp-label {
    font-family: var(--font-sans);
    font-size: 0.625rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgba(222, 219, 200, 0.45);
  }
  .t3-interp p {
    margin: 0;
    font-family: var(--font-sans);
    font-size: 0.875rem;
    line-height: 1.6;
    color: rgba(225, 224, 204, 0.80);
  }

  /* ── Closing essay ──────────────────────────────── */
  .essay {
    margin-top: var(--space-xl);
    padding: clamp(2rem, 4vw, 3rem);
    background: var(--surface-l1);
    border-radius: var(--radius-md);
    position: relative;
    overflow: hidden;
  }
  .essay::before {
    content: '';
    position: absolute; inset: 0;
    background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
    background-size: 96px 96px;
    opacity: 0.06;
    pointer-events: none;
  }
  .essay-head {
    position: relative;
    z-index: 1;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--outline-variant);
  }
  .essay-eyebrow {
    display: inline-block;
    font-family: var(--font-sans);
    font-size: 0.6875rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--primary);
  }
  .essay-title {
    margin: 0.5rem 0 0;
    font-family: var(--font-serif);
    font-style: italic;
    font-weight: 400;
    font-size: clamp(1.5rem, 2.6vw, 2rem);
    line-height: 1.2;
    color: var(--primary-container);
  }
  .essay p {
    position: relative;
    z-index: 1;
    margin: 0 0 1rem;
    font-family: var(--font-sans);
    font-size: 1rem;
    line-height: 1.75;
    color: rgba(225, 224, 204, 0.85);
    max-width: 56rem;
  }
  .essay p:last-child { margin-bottom: 0; }

  @media (prefers-reduced-motion: reduce) {
    .reader { transition: none; opacity: 1; transform: none; }
  }
</style>
