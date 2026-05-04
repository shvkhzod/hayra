<script lang="ts">
  import IlluminatedFolio from '$lib/reader/IlluminatedFolio.svelte';
  import type { WordToken } from '$lib/reader/types.js';
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();
  const meta = $derived(data.meta);
  const text = $derived(data.text);

  function joinTokens(tokens: WordToken[]): string {
    return tokens
      .map((t) => (typeof t === 'string' ? t : t.text))
      .join('')
      .trim();
  }
</script>

<svelte:head>
  <title>Asl matn — {meta.title} — HAYRA</title>
</svelte:head>

<article class="vestige">
  <!-- ── Hero band ──────────────────────────────────── -->
  <header class="hero">
    <a href="/maqolot/{meta.id}" class="crumb">
      <span class="material-symbols-outlined">arrow_left_alt</span>
      Oʻqishga qaytish
    </a>

    <span class="eyebrow">Asl matn</span>
    <h1 class="hero-title">
      Navoiy shunday <span class="emph">yozgan</span>.
    </h1>
    <p class="hero-sub">
      {meta.title}. Quyida — 1483-yilda Hirotda Perso-Arab yozuvida
      koʻchirilgan sahifani eslatuvchi tasvir. Yon ustunda — hozirgi oʻzbek
      yozuvidagi matn.
    </p>
    <div class="hairline" aria-hidden="true"></div>
  </header>

  <!-- ── VITRINE ────────────────────────────────────── -->
  <section class="vitrine">
    <div class="spotlight" aria-hidden="true"></div>

    <div class="folio-wrap">
      <IlluminatedFolio hue={28} label="Hayrat ul-abror — Avvalgi Maqolat folio (illustrative)" />
      <div class="plinth" aria-hidden="true"></div>
    </div>
  </section>

  <!-- ── Provenance ─────────────────────────────────── -->
  <section class="prov">
    <div class="prov-grid">
      <dl class="prov-list">
        <div class="prov-row">
          <dt>Asar</dt>
          <dd>Hayrat ul-abror</dd>
        </div>
        <div class="prov-row">
          <dt>Bob</dt>
          <dd>{meta.title}</dd>
        </div>
        <div class="prov-row">
          <dt>Yaratilish</dt>
          <dd>1483-yil, Hirot — Alisher Navoiy</dd>
        </div>
        <div class="prov-row">
          <dt>Yozuvi</dt>
          <dd>Chagʻatoy turkiysi, Perso-Arab alifbosi</dd>
        </div>
        <div class="prov-row">
          <dt>Vazni</dt>
          <dd>Mutaqorib</dd>
        </div>
        <div class="prov-row">
          <dt>Manba</dt>
          <dd>{text?.source ?? '1989-yil Toshkent nashri (G‘afur G‘ulom nomidagi nashriyot).'}</dd>
        </div>
      </dl>

      {#if text}
        <div class="paral">
          <header class="paral-head">
            <span class="paral-eyebrow">Hozirgi oʻzbek lotin yozuvi</span>
            <h2 class="paral-title">{meta.title}</h2>
          </header>

          <ol class="couplets">
            {#each text.couplets as c, i (c.id)}
              <li>
                <span class="cnum" aria-hidden="true">{(i + 1).toString().padStart(2, '0')}</span>
                <p class="line">{joinTokens(c.lineA)}</p>
                <p class="line">{joinTokens(c.lineB)}</p>
              </li>
            {/each}
          </ol>
        </div>
      {/if}
    </div>
  </section>

  <!-- ── Note ───────────────────────────────────────── -->
  <section class="note">
    <p>
      <span class="note-lbl">Eslatma —</span>
      Bu sahifa — stilizatsiya. Uning oʻrnida keyinroq asl qoʻlyozma
      sahifasi (Topkapı Saroyi nusxasidan) qoʻyiladi.
    </p>
  </section>

  <!-- ── Back-to-reading ────────────────────────────── -->
  <section class="cta">
    <a class="ghost-pill" href="/maqolot/{meta.id}">
      <span class="material-symbols-outlined">menu_book</span>
      Oʻqishga qaytish
    </a>
  </section>
</article>

<style>
  .vestige {
    padding-top: 6rem;
    background: #000;
  }

  /* ── Hero band ──────────────────────────────────── */
  .hero {
    padding: 0 var(--margin-safe) var(--space-lg);
    max-width: 80rem;
    margin: 0 auto;
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

  .eyebrow {
    display: inline-block;
    margin-top: 1rem;
    font-family: var(--font-sans);
    font-size: 0.6875rem;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--primary);
  }

  .hero-title {
    margin: 0.625rem 0 0;
    max-width: 32ch;
    font-family: var(--font-serif);
    font-style: italic;
    font-weight: 400;
    line-height: 1.0;
    color: var(--primary-container);
    font-size: clamp(2.5rem, 6vw, 5rem);
    letter-spacing: -0.015em;
  }
  .hero-title .emph {
    color: var(--primary);
  }

  .hero-sub {
    margin: 1rem 0 0;
    max-width: 44rem;
    font-size: var(--fs-body-lg);
    line-height: var(--lh-body-lg);
    color: var(--on-surface-variant);
  }

  .hairline {
    margin-top: var(--space-lg);
    height: 1px;
    background: linear-gradient(to right,
      transparent 0%,
      var(--outline-variant) 30%,
      var(--outline-variant) 70%,
      transparent 100%);
  }

  /* ── Vitrine ────────────────────────────────────── */
  .vitrine {
    position: relative;
    padding: clamp(3rem, 8vw, 6rem) var(--margin-safe);
    background: radial-gradient(
      120% 100% at 50% 30%,
      hsl(28 18% 8%) 0%,
      #050403 70%,
      #000 100%
    );
    overflow: hidden;
  }
  .spotlight {
    position: absolute;
    top: -10%;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    height: 60%;
    pointer-events: none;
    background: radial-gradient(
      ellipse at center top,
      rgba(251, 247, 228, 0.06) 0%,
      transparent 70%
    );
    filter: blur(20px);
  }

  .folio-wrap {
    position: relative;
    max-width: 32rem;
    margin: 0 auto;
  }

  .plinth {
    margin-top: 1.5rem;
    height: 1px;
    background: linear-gradient(to right,
      transparent 0%,
      rgba(222, 219, 200, 0.24) 50%,
      transparent 100%);
    box-shadow: 0 1px 0 rgba(222, 219, 200, 0.06);
  }

  /* ── Provenance + Parallel transliteration ──────── */
  .prov {
    padding: var(--space-xl) var(--margin-safe);
    max-width: 90rem;
    margin: 0 auto;
  }
  .prov-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  @media (min-width: 900px) {
    .prov-grid {
      grid-template-columns: 22rem minmax(0, 1fr);
      gap: 4rem;
      align-items: start;
    }
  }

  .prov-list {
    margin: 0;
    padding: 0;
  }
  .prov-row {
    display: grid;
    grid-template-columns: 8rem 1fr;
    gap: 1rem;
    padding: 0.875rem 0;
    border-bottom: 1px solid rgba(72, 71, 63, 0.55);
  }
  .prov-row:first-child { padding-top: 0; }
  .prov-row:last-child { border-bottom: none; }
  .prov-row dt {
    font-family: var(--font-sans);
    font-size: 0.6875rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgba(222, 219, 200, 0.50);
    align-self: start;
  }
  .prov-row dd {
    margin: 0;
    font-family: var(--font-serif);
    font-style: italic;
    font-size: 1.0625rem;
    line-height: 1.4;
    color: var(--primary-container);
  }

  /* Parallel transliteration column */
  .paral { }
  .paral-head {
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--outline-variant);
  }
  .paral-eyebrow {
    display: inline-block;
    font-family: var(--font-sans);
    font-size: 0.6875rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgba(222, 219, 200, 0.55);
  }
  .paral-title {
    margin: 0.625rem 0 0;
    font-family: var(--font-serif);
    font-style: italic;
    font-weight: 400;
    font-size: clamp(1.75rem, 3vw, 2.5rem);
    line-height: 1.15;
    color: var(--primary-container);
  }

  .couplets {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .couplets li {
    padding: 1.5rem 0;
    border-bottom: 1px dashed rgba(72, 71, 63, 0.55);
  }
  .couplets li:last-child { border-bottom: none; }

  .cnum {
    display: block;
    margin-bottom: 0.5rem;
    font-family: var(--font-sans);
    font-size: 0.625rem;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: rgba(222, 219, 200, 0.30);
  }

  .line {
    margin: 0;
    font-family: var(--font-serif);
    font-size: clamp(1.125rem, 1.5vw, 1.375rem);
    line-height: 1.9;
    color: var(--light-cream);
  }
  .line + .line { margin-top: 0; }

  /* ── Note ───────────────────────────────────────── */
  .note {
    padding: 0 var(--margin-safe) var(--space-xl);
    max-width: 56rem;
    margin: 0 auto;
  }
  .note p {
    margin: 0;
    font-family: var(--font-serif);
    font-style: italic;
    font-size: 0.9375rem;
    line-height: 1.7;
    color: rgba(222, 219, 200, 0.45);
    text-align: center;
    max-width: 48rem;
    margin: 0 auto;
  }
  .note-lbl {
    font-style: normal;
    font-family: var(--font-sans);
    font-size: 0.625rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgba(222, 219, 200, 0.55);
    margin-right: 0.25rem;
  }

  /* ── CTA ────────────────────────────────────────── */
  .cta {
    padding: 0 var(--margin-safe) var(--space-xl);
    text-align: center;
  }
  .ghost-pill {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.875rem 1.5rem;
    border: 1px solid rgba(222, 219, 200, 0.30);
    border-radius: var(--radius-full);
    color: var(--warm-cream);
    font-family: var(--font-sans);
    font-size: var(--fs-label-caps);
    font-weight: 700;
    letter-spacing: var(--ls-label-caps);
    text-transform: uppercase;
    transition:
      background 240ms var(--ease-out-quart),
      color 240ms var(--ease-out-quart),
      border-color 240ms var(--ease-out-quart);
  }
  .ghost-pill:hover {
    background: var(--primary-container);
    color: var(--on-primary-container);
    border-color: transparent;
  }
  .ghost-pill .material-symbols-outlined { font-size: 1rem; }
</style>
