<script lang="ts">
  import Plate from './Plate.svelte';
  import type { Chapter } from './data.js';
  import { categoryLabel } from './data.js';

  let { item, dimmed = false }: { item: Chapter; dimmed?: boolean } = $props();

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
</script>

<a
  class="card"
  class:dimmed
  href="/maqolot/{item.id}"
  onpointermove={onMove}
  onpointerleave={onLeave}
  aria-disabled={dimmed}
>
  <div class="thumb">
    {#if item.image}
      <img class="thumb-img" src={item.image} alt="" loading="lazy" />
      <div class="thumb-vignette" aria-hidden="true"></div>
    {:else}
      <Plate hue={item.hue} seed={item.seed} />
    {/if}
    <span class="num">{item.num}</span>
    <span class="badge">{categoryLabel[item.category]}</span>
    <span class="cue" aria-hidden="true">
      <span class="material-symbols-outlined">arrow_outward</span>
    </span>
  </div>

  <div class="meta">
    <h3 class="title">{item.title}</h3>
    {#if item.theme}
      <p class="line">{item.theme}</p>
    {/if}
  </div>
</a>

<style>
  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    aspect-ratio: 3 / 4;
    background: var(--surface-l1);
    border: 1px solid var(--surface-variant);
    border-radius: var(--radius-md);

    color: inherit;
    text-decoration: none;
    cursor: pointer;

    transition:
      transform 420ms var(--ease-out-quart),
      border-color 360ms var(--ease-out-quart),
      background-color 360ms var(--ease-out-quart),
      filter 480ms var(--ease-out-quart),
      opacity 360ms var(--ease-out-quart);
    will-change: transform;
  }

  .card::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    pointer-events: none;
    z-index: 5;
    background: radial-gradient(
      280px circle at var(--mx, 50%) var(--my, 50%),
      rgba(222, 219, 200, 0.10),
      rgba(222, 219, 200, 0.04) 35%,
      transparent 60%
    );
    opacity: 0;
    transition: opacity 360ms var(--ease-out-quart);
  }
  .card:hover::before { opacity: 1; }

  .card:hover {
    transform: translateY(-4px);
    border-color: rgba(222, 219, 200, 0.30);
    background: #161616;
  }
  .card:focus-visible {
    outline: none;
    border-color: var(--warm-cream);
  }

  .card.dimmed {
    opacity: 0.30;
    filter: grayscale(0.6) brightness(0.7);
    pointer-events: none;
  }

  /* ── Thumb ───────────────────────────────────────── */
  .thumb {
    position: relative;
    flex: 0 0 70%;
    overflow: hidden;
    isolation: isolate;
    background: var(--surface-l1);
  }

  .thumb-img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.001);
    transition: transform 900ms var(--ease-out-expo), filter 600ms var(--ease-out-quart);
    will-change: transform;
  }
  .card:hover .thumb-img {
    transform: scale(1.06);
    filter: brightness(1.04);
  }

  .thumb-vignette {
    position: absolute;
    inset: 0;
    z-index: 4;
    background:
      linear-gradient(to top, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.18) 50%, rgba(0, 0, 0, 0.10) 100%),
      radial-gradient(120% 100% at 50% 50%, transparent 50%, rgba(0, 0, 0, 0.45) 100%);
    pointer-events: none;
  }

  .num {
    position: absolute;
    top: 0.875rem;
    right: 1rem;
    z-index: 6;
    font-family: var(--font-sans);
    font-size: var(--fs-label-caps);
    font-weight: 700;
    letter-spacing: var(--ls-label-caps);
    text-transform: uppercase;
    color: rgba(222, 219, 200, 0.55);
    transition: color 320ms var(--ease-out-quart), letter-spacing 320ms var(--ease-out-quart);
  }
  .card:hover .num { color: var(--primary); letter-spacing: 0.18em; }

  .badge {
    position: absolute;
    top: 0.875rem;
    left: 1rem;
    z-index: 6;
    padding: 0.25rem 0.625rem;
    font-family: var(--font-sans);
    font-size: 0.6875rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--warm-cream);
    background: rgba(0, 0, 0, 0.55);
    border: 1px solid rgba(222, 219, 200, 0.18);
    border-radius: var(--radius-full);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
  }

  .cue {
    position: absolute;
    top: 0.75rem;
    right: 3.25rem;
    z-index: 6;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: var(--radius-full);
    color: var(--warm-cream);
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(222, 219, 200, 0.22);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);

    opacity: 0;
    transform: translate(8px, -8px) rotate(-12deg);
    transition: opacity 360ms var(--ease-out-quart), transform 420ms var(--ease-out-expo);
  }
  .cue .material-symbols-outlined { font-size: 1rem; }
  .card:hover .cue { opacity: 1; transform: translate(0, 0) rotate(0); }

  /* ── Meta ────────────────────────────────────────── */
  .meta {
    flex: 1 1 auto;
    padding: var(--space-md);
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.4rem;
    border-top: 1px solid rgba(72, 71, 63, 0.5);
  }

  .title {
    margin: 0;
    font-family: var(--font-serif);
    font-style: italic;
    font-weight: 400;
    font-size: 1.35rem;
    line-height: 1.18;
    color: var(--primary-container);
    transition: color 320ms var(--ease-out-quart);

    /* Allow up to 3 lines for long titles like "Oʻn yettinchi Maqolat — …" */
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .card:hover .title { color: var(--primary); }

  .line {
    margin: 0;
    font-family: var(--font-sans);
    font-size: 0.8125rem;
    line-height: 1.4;
    color: rgba(222, 219, 200, 0.55);
  }

  @media (prefers-reduced-motion: reduce) {
    .card,
    .card .num,
    .card .title,
    .card .cue,
    .card::before {
      transition: none !important;
    }
    .card:hover { transform: none; }
    .card:hover .cue { transform: none; }
  }
</style>
