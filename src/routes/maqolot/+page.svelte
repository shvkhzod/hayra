<script lang="ts">
  import { onMount } from 'svelte';
  import {
    featured,
    chapters,
    filters,
    matches,
    categoryLabel,
    type FilterKey,
    type Category
  } from '$lib/maqolot/data.js';

  let active: FilterKey = $state('all');
  let sortMenuOpen = $state(false);
  let sortLabel = $state('Tartib boʻyicha');
  const sortOptions = ['Tartib boʻyicha', 'Boʻlim boʻyicha', 'Alifbo boʻyicha'];

  let visibleCount = $derived(chapters.filter((c) => matches(c, active)).length);

  const order: Category[] = ['munojot', 'nat', 'hayrat', 'maqolat'];
  const groups = $derived.by(() =>
    order.map((key) => ({
      key,
      label: categoryLabel[key],
      items: chapters.filter((c) => c.category === key)
    }))
  );

  // Reveal-on-scroll: simple section-level entrance
  let stage: HTMLElement | undefined = $state();
  let revealed = $state(false);

  onMount(() => {
    if (!stage) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            revealed = true;
            obs.disconnect();
          }
        }
      },
      { threshold: 0.05 }
    );
    obs.observe(stage);
    return () => obs.disconnect();
  });

  // Cursor spotlight handlers reused for the featured card
  function onMove(e: PointerEvent) {
    const el = e.currentTarget as HTMLElement;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`);
  }
  function onLeave(e: PointerEvent) {
    const el = e.currentTarget as HTMLElement;
    el.style.removeProperty('--mx');
    el.style.removeProperty('--my');
  }

  function pickSort(option: string) {
    sortLabel = option;
    sortMenuOpen = false;
  }
</script>

<svelte:head>
  <title>Maqolot — HAYRA Raqamli Arxivi</title>
</svelte:head>

<article class="page-stage" bind:this={stage} class:revealed>
  <!-- ── HERO ────────────────────────────────────────── -->
  <section class="hero">
    <div class="eyebrow-row">
      <span class="eyebrow">«Hayrat ul-abror»</span>
      <span class="dot">·</span>
      <span class="eyebrow">{chapters.length.toString().padStart(2, '0')} bob</span>
    </div>

    <h1 class="title">
      Maqolot<span class="ast">*</span>
    </h1>

    <p class="lede">
      Oʻn ikki muqaddima bobi va yigirma maqolat — Navoiy «Hayrat ul-abror»da
      tartiblagan boblarning toʻliq roʻyxati. Iymondan ishqqacha, qanoatdan
      Xurosonga.
    </p>

    <div class="rule" aria-hidden="true"></div>

    <div class="controls">
      <div class="chips" role="tablist" aria-label="Boblarni boʻlim boʻyicha saralash">
        {#each filters as f}
          <button
            type="button"
            role="tab"
            aria-selected={active === f.key}
            class="chip"
            class:active={active === f.key}
            onclick={() => (active = f.key)}
          >
            {f.label}
          </button>
        {/each}
      </div>

      <div class="sort">
        <button
          type="button"
          class="chip ghost sort-trigger"
          aria-haspopup="listbox"
          aria-expanded={sortMenuOpen}
          onclick={() => (sortMenuOpen = !sortMenuOpen)}
        >
          <span class="sort-prefix">Saralash:</span>
          <span class="sort-value">{sortLabel}</span>
          <span class="material-symbols-outlined caret" class:open={sortMenuOpen}>
            expand_more
          </span>
        </button>

        {#if sortMenuOpen}
          <ul class="sort-menu" role="listbox">
            {#each sortOptions as opt}
              <li>
                <button
                  type="button"
                  role="option"
                  aria-selected={sortLabel === opt}
                  class="sort-option"
                  class:selected={sortLabel === opt}
                  onclick={() => pickSort(opt)}
                >
                  {opt}
                </button>
              </li>
            {/each}
          </ul>
        {/if}
      </div>
    </div>
  </section>

  <!-- ── FEATURED CODEX ─────────────────────────────── -->
  <section class="featured-wrap">
    <a
      class="featured"
      href="/maqolot/{featured.id}"
      onpointermove={onMove}
      onpointerleave={onLeave}
      style="--feat-hue: {featured.hue}"
    >
      <div class="feat-bg">
        {#if featured.image}
          <img class="feat-img" src={featured.image} alt="" />
        {:else}
          <div class="feat-plate"></div>
        {/if}
        <div class="feat-vignette"></div>
        <div class="bg-noise feat-noise"></div>
      </div>

      <div class="feat-content">
        <span class="feat-eyebrow">
          Boshlash uchun · Maqolat {featured.num}
        </span>
        <h2 class="feat-title">{featured.title}</h2>
        <p class="feat-desc">{featured.description}</p>

        <ul class="feat-meta">
          <li>Maqolat</li>
          <li>{featured.theme}</li>
          <li>20 maqolatdan 1-si</li>
        </ul>
      </div>

      <div class="feat-action" aria-hidden="true">
        <span class="ghost-pill">
          Bobni ochish
          <span class="material-symbols-outlined arrow">arrow_right_alt</span>
        </span>
      </div>
    </a>
  </section>

  <!-- ── TABLE OF CONTENTS ─────────────────────────── -->
  <section class="corpus">
    <header class="corpus-head">
      <h2 class="corpus-title">Toʻliq bob roʻyxati</h2>
      <span class="corpus-count">
        {visibleCount.toString().padStart(2, '0')} / {chapters.length.toString().padStart(2, '0')} bob
      </span>
    </header>

    <div class="toc">
      {#each groups as g (g.key)}
        <section class="group">
          <header class="group-head">
            <span class="group-num">{g.items.length.toString().padStart(2, '0')}</span>
            <span class="group-label">{g.label}</span>
            <span class="group-rule" aria-hidden="true"></span>
          </header>

          <ol class="rows">
            {#each g.items as item (item.id)}
              <li class:dimmed={!matches(item, active)}>
                <a class="row" href="/maqolot/{item.id}">
                  <span class="row-num">{item.num}</span>
                  <span class="row-title">{item.title}</span>
                  <span class="row-theme">{item.theme ?? ''}</span>
                  <span class="row-arrow material-symbols-outlined" aria-hidden="true">arrow_outward</span>
                </a>
              </li>
            {/each}
          </ol>
        </section>
      {/each}
    </div>
  </section>

  <!-- ── SCHOLARLY ASIDE ────────────────────────────── -->
  <section class="aside">
    <p class="quote">
      Yozilgan soʻz uni yozgan qoʻldan koʻproq yashaydi.
    </p>
    <p class="attrib">— Tahririyat soʻzboshisi, Navoiyga ehtirom bilan</p>
  </section>

</article>

<style>
  /* ── Page-level entrance ────────────────────────── */
  .page-stage {
    padding-top: 7rem; /* clear the floating navbar */
    opacity: 0;
    transform: translateY(12px);
    transition:
      opacity 700ms var(--ease-out-expo),
      transform 700ms var(--ease-out-expo);
  }
  .page-stage.revealed { opacity: 1; transform: none; }

  /* ── HERO ───────────────────────────────────────── */
  .hero {
    padding: 0 var(--margin-safe) var(--space-xl);
    max-width: 90rem;
    margin: 0 auto;
  }

  .eyebrow-row {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    color: rgba(222, 219, 200, 0.55);
  }
  .eyebrow {
    font-family: var(--font-sans);
    font-size: var(--fs-label-caps);
    font-weight: 700;
    letter-spacing: var(--ls-label-caps);
    text-transform: uppercase;
  }
  .eyebrow-row .dot { color: rgba(222, 219, 200, 0.30); }

  .title {
    margin: 0.5rem 0 0;
    font-family: var(--font-serif);
    font-style: italic;
    font-weight: 400;
    color: var(--primary-container);
    font-size: 12vw;
    line-height: 0.95;
    letter-spacing: -0.03em;
  }
  .ast { color: var(--primary); font-style: normal; }

  .lede {
    margin: 1rem 0 0;
    max-width: 36rem;
    font-size: var(--fs-body-lg);
    line-height: var(--lh-body-lg);
    color: var(--on-surface-variant);
  }

  .rule {
    margin: var(--space-lg) 0 var(--space-md);
    height: 1px;
    background: var(--outline-variant);
  }

  .controls {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-md);
  }

  .chips {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .chip {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border: 1px solid rgba(222, 219, 200, 0.18);
    background: transparent;
    color: rgba(222, 219, 200, 0.65);
    border-radius: var(--radius-full);

    font-family: var(--font-sans);
    font-size: 0.875rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;

    transition:
      background-color 240ms var(--ease-out-quart),
      color 240ms var(--ease-out-quart),
      border-color 240ms var(--ease-out-quart),
      transform 240ms var(--ease-out-quart);
  }
  .chip:hover {
    color: var(--warm-cream);
    border-color: rgba(222, 219, 200, 0.45);
  }
  .chip:active { transform: scale(0.96); }
  .chip.active {
    background: var(--primary-container);
    color: var(--on-primary-container);
    border-color: transparent;
  }
  .chip.active:hover { background: var(--primary); }

  .ghost {
    background: transparent;
    color: rgba(222, 219, 200, 0.65);
  }

  /* ── Sort dropdown ──────────────────────────────── */
  .sort {
    position: relative;
  }
  .sort-trigger { padding-right: 0.625rem; }
  .sort-prefix { color: rgba(222, 219, 200, 0.45); margin-right: 0.25rem; }
  .sort-value { color: var(--warm-cream); }
  .caret {
    font-size: 1.125rem;
    transition: transform 240ms var(--ease-out-quart);
  }
  .caret.open { transform: rotate(180deg); }

  .sort-menu {
    position: absolute;
    top: calc(100% + 0.5rem);
    right: 0;
    z-index: 20;
    list-style: none;
    margin: 0;
    padding: 0.375rem;
    min-width: 14rem;

    background: rgb(16 16 16 / 0.92);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(222, 219, 200, 0.10);
    border-radius: var(--radius-default);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.6);

    animation: menu-in 220ms var(--ease-out-quart);
  }
  @keyframes menu-in {
    from { opacity: 0; transform: translateY(-4px); }
    to   { opacity: 1; transform: none; }
  }

  .sort-option {
    width: 100%;
    text-align: left;
    padding: 0.625rem 0.75rem;
    background: transparent;
    border: none;
    border-radius: 0.625rem;
    color: rgba(222, 219, 200, 0.75);
    font-family: var(--font-sans);
    font-size: 0.875rem;
    transition: background-color 200ms var(--ease-out-quart), color 200ms var(--ease-out-quart);
  }
  .sort-option:hover { background: rgb(33 33 33 / 0.6); color: var(--warm-cream); }
  .sort-option.selected { color: var(--primary); }

  /* ── FEATURED ───────────────────────────────────── */
  .featured-wrap {
    padding: var(--space-xl) var(--margin-safe);
    max-width: 90rem;
    margin: 0 auto;
  }

  .featured {
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    align-items: end;
    height: clamp(420px, 56vw, 520px);

    text-decoration: none;
    color: inherit;

    background: var(--surface-l1);
    border: 1px solid var(--surface-variant);
    border-radius: var(--radius-md);
    overflow: hidden;
    isolation: isolate;

    transition: border-color 360ms var(--ease-out-quart), transform 480ms var(--ease-out-quart);
    will-change: transform;
  }
  .featured:hover { border-color: rgba(222, 219, 200, 0.30); }
  .featured::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 30;
    background: radial-gradient(
      640px circle at var(--mx, 50%) var(--my, 50%),
      rgba(222, 219, 200, 0.10),
      transparent 55%
    );
    opacity: 0;
    transition: opacity 420ms var(--ease-out-quart);
  }
  .featured:hover::before { opacity: 1; }

  .feat-bg { position: absolute; inset: 0; z-index: 0; overflow: hidden; }
  .feat-plate {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(140% 90% at 18% 30%,
        hsl(var(--feat-hue) 32% 22% / 1) 0%,
        hsl(var(--feat-hue) 22% 10% / 1) 55%,
        hsl(var(--feat-hue) 18% 5% / 1) 100%
      );
    transform: scale(1.02);
    transition: transform 1200ms var(--ease-out-expo);
  }
  .featured:hover .feat-plate { transform: scale(1.08); }

  .feat-img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.02);
    transition: transform 1200ms var(--ease-out-expo), filter 600ms var(--ease-out-quart);
    will-change: transform;
  }
  .featured:hover .feat-img { transform: scale(1.07); filter: brightness(1.04); }

  .feat-vignette {
    position: absolute;
    inset: 0;
    background:
      linear-gradient(to right, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.45) 40%, transparent 75%),
      linear-gradient(to top,   rgba(0, 0, 0, 0.92) 0%, rgba(0, 0, 0, 0.55) 35%, transparent 70%);
  }
  .feat-noise { z-index: 1; opacity: 0.12; }

  .feat-content {
    position: relative;
    z-index: 10;
    padding: clamp(2rem, 4vw, 3.5rem);
    max-width: 36rem;
  }

  .feat-eyebrow {
    display: inline-block;
    font-family: var(--font-sans);
    font-size: var(--fs-label-caps);
    font-weight: 700;
    letter-spacing: var(--ls-label-caps);
    text-transform: uppercase;
    color: rgba(222, 219, 200, 0.65);
  }

  .feat-title {
    margin: 0.75rem 0 0.75rem;
    font-family: var(--font-serif);
    font-style: italic;
    font-weight: 400;
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    line-height: 1.05;
    color: var(--primary-container);
  }

  .feat-desc {
    margin: 0 0 1.25rem;
    font-size: var(--fs-body-md);
    line-height: var(--lh-body-md);
    color: rgba(225, 224, 204, 0.75);
  }

  .feat-meta {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  .feat-meta li {
    padding: 0.375rem 0.75rem;
    border: 1px solid rgba(222, 219, 200, 0.18);
    border-radius: var(--radius-full);
    font-family: var(--font-sans);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: rgba(222, 219, 200, 0.75);
  }

  .feat-action {
    position: absolute;
    z-index: 10;
    right: clamp(1.25rem, 3vw, 2.5rem);
    bottom: clamp(1.25rem, 3vw, 2.5rem);
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

    transition: background-color 240ms var(--ease-out-quart), color 240ms var(--ease-out-quart);
  }
  .featured:hover .ghost-pill {
    background: var(--primary-container);
    color: var(--on-primary-container);
    border-color: transparent;
  }
  .ghost-pill .arrow { font-size: 1rem; }

  /* ── CORPUS ─────────────────────────────────────── */
  .corpus {
    padding: var(--space-md) var(--margin-safe) var(--space-xl);
    max-width: 90rem;
    margin: 0 auto;
  }

  .corpus-head {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: var(--space-md);
    margin-bottom: var(--space-md);
    padding-bottom: var(--space-sm);
    border-bottom: 1px solid var(--outline-variant);
  }

  .corpus-title {
    margin: 0;
    font-family: var(--font-serif);
    font-style: italic;
    font-weight: 400;
    font-size: clamp(1.75rem, 3vw, 2.5rem);
    line-height: 1.15;
    color: var(--primary-container);
  }
  .corpus-count {
    font-family: var(--font-sans);
    font-size: var(--fs-label-caps);
    font-weight: 700;
    letter-spacing: var(--ls-label-caps);
    text-transform: uppercase;
    color: rgba(222, 219, 200, 0.55);
  }

  /* ── Table of Contents (groups + rows) ─────────── */
  .toc {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  .group { display: block; }

  .group-head {
    display: grid;
    grid-template-columns: 2.5rem auto 1fr;
    align-items: center;
    gap: 1rem;
    margin-bottom: 0.625rem;
  }
  .group-num {
    font-family: var(--font-sans);
    font-size: 0.6875rem;
    font-weight: 700;
    letter-spacing: 0.16em;
    color: var(--primary);
  }
  .group-label {
    font-family: var(--font-sans);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.20em;
    text-transform: uppercase;
    color: var(--warm-cream);
  }
  .group-rule {
    height: 1px;
    width: 100%;
    background: var(--outline-variant);
  }

  .rows {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .rows li + li .row { border-top: 1px solid rgba(72, 71, 63, 0.45); }

  .row {
    display: grid;
    grid-template-columns: 2.5rem minmax(0, 1fr) minmax(0, 18rem) 1.75rem;
    align-items: baseline;
    gap: 1.25rem;

    padding: 1.125rem 0;
    color: inherit;
    text-decoration: none;

    transition:
      color 240ms var(--ease-out-quart),
      background-color 240ms var(--ease-out-quart);
  }

  .row:hover {
    background:
      linear-gradient(to right,
        rgba(222, 219, 200, 0.04) 0%,
        rgba(222, 219, 200, 0.02) 60%,
        transparent 100%);
  }

  .row-num {
    font-family: var(--font-sans);
    font-size: 0.6875rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    color: rgba(222, 219, 200, 0.40);
    transition: color 240ms var(--ease-out-quart), letter-spacing 320ms var(--ease-out-quart);
  }
  .row:hover .row-num {
    color: var(--primary);
    letter-spacing: 0.22em;
  }

  .row-title {
    font-family: var(--font-serif);
    font-style: italic;
    font-weight: 400;
    font-size: clamp(1.125rem, 1.6vw, 1.375rem);
    line-height: 1.25;
    color: var(--primary-container);
    transition: color 240ms var(--ease-out-quart);
  }
  .row:hover .row-title { color: var(--primary); }

  .row-theme {
    font-family: var(--font-sans);
    font-size: 0.875rem;
    line-height: 1.4;
    color: rgba(222, 219, 200, 0.50);
    text-align: right;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    transition: color 240ms var(--ease-out-quart);
  }
  .row:hover .row-theme { color: rgba(222, 219, 200, 0.80); }

  .row-arrow {
    font-size: 1rem;
    color: var(--primary);
    justify-self: end;
    opacity: 0;
    transform: translate(-4px, 4px);
    transition:
      opacity 240ms var(--ease-out-quart),
      transform 280ms var(--ease-out-expo);
  }
  .row:hover .row-arrow { opacity: 1; transform: translate(0, 0); }

  .rows li.dimmed .row {
    opacity: 0.30;
    filter: grayscale(0.6) brightness(0.7);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    .row {
      grid-template-columns: 2rem minmax(0, 1fr) 1.25rem;
      gap: 0.875rem;
    }
    .row-theme { display: none; }
  }

  /* ── ASIDE ──────────────────────────────────────── */
  .aside {
    margin: var(--space-xl) var(--margin-safe);
    padding: clamp(3rem, 6vw, 5rem) clamp(2rem, 5vw, 4rem);
    max-width: 90rem;
    margin-inline: auto;
    background: var(--surface-l1);
    border-radius: var(--radius-md);
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  .aside::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
    background-size: 96px 96px;
    opacity: 0.08;
    pointer-events: none;
  }
  .quote {
    margin: 0 auto;
    max-width: 56rem;
    font-family: var(--font-serif);
    font-style: italic;
    font-weight: 400;
    font-size: clamp(1.75rem, 3vw, 3rem);
    line-height: 1.25;
    color: var(--primary-container);
  }
  .attrib {
    margin: 1.25rem 0 0;
    font-family: var(--font-sans);
    font-size: var(--fs-label-caps);
    font-weight: 700;
    letter-spacing: var(--ls-label-caps);
    text-transform: uppercase;
    color: rgba(222, 219, 200, 0.55);
  }

  /* ── Reduced motion ─────────────────────────────── */
  @media (prefers-reduced-motion: reduce) {
    .page-stage { transition: none; opacity: 1; transform: none; }
    .featured,
    .feat-plate,
    .ghost-pill,
    .chip,
    .caret,
    .row,
    .row-arrow,
    .row-num,
    .sort-menu {
      transition: none !important;
      animation: none !important;
    }
  }

  /* ── Mobile tweaks ──────────────────────────────── */
  @media (max-width: 640px) {
    .title { font-size: 22vw; }
    .controls { flex-direction: column; align-items: stretch; }
    .sort { align-self: stretch; }
    .sort-trigger { width: 100%; justify-content: space-between; }
    .corpus-head { flex-wrap: wrap; }

    /* Featured card: stacked image-over-text plate */
    .featured-wrap { padding: var(--space-lg) var(--margin-safe); }

    .featured {
      display: flex;
      flex-direction: column;
      height: auto;
    }

    .feat-bg {
      position: relative;
      flex: 0 0 auto;
      width: 100%;
      aspect-ratio: 5 / 3;
      border-bottom: 1px solid var(--surface-variant);
    }
    .feat-vignette {
      background:
        linear-gradient(to top, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.10) 50%, transparent 100%);
    }

    .feat-content {
      position: relative;
      padding: var(--space-lg) var(--space-md) var(--space-md);
      max-width: none;
    }
    .feat-title {
      font-size: clamp(2rem, 8vw, 2.75rem);
      margin: 0.625rem 0 0.75rem;
    }
    .feat-desc { margin-bottom: 1rem; }
    .feat-meta { gap: 0.375rem; }
    .feat-meta li { padding: 0.3125rem 0.625rem; font-size: 0.6875rem; }

    .feat-action {
      position: static;
      padding: 0 var(--space-md) var(--space-md);
    }
    .ghost-pill {
      width: 100%;
      justify-content: space-between;
      padding: 0.875rem 1.25rem;
    }

    /* No cursor spotlight on touch — keep it static */
    .featured::before { display: none; }
  }
</style>
