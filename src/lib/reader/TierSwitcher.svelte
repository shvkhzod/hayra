<script lang="ts">
  import { tier } from './store.js';
  import type { Tier } from './types.js';

  const items: { key: Tier; label: string; sub: string }[] = [
    { key: 1, label: 'Asos',       sub: 'Faqat sheʼr' },
    { key: 2, label: 'Oʻqish',     sub: 'Lugʻat va izoh' },
    { key: 3, label: 'Apparat',    sub: 'Tanqidiy nashr' }
  ];

  function set(t: Tier) {
    tier.set(t);
  }
</script>

<div class="switcher" role="radiogroup" aria-label="Oʻqish darajasini tanlang">
  <span class="indicator" style="--idx: {$tier - 1}"></span>
  {#each items as it}
    <button
      type="button"
      role="radio"
      aria-checked={$tier === it.key}
      class="seg"
      class:active={$tier === it.key}
      onclick={() => set(it.key)}
      title={it.sub}
    >
      <span class="num">{it.key.toString().padStart(2, '0')}</span>
      <span class="label">{it.label}</span>
      <span class="sub">{it.sub}</span>
    </button>
  {/each}
</div>

<style>
  .switcher {
    position: relative;
    display: inline-grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0;

    padding: 0.375rem;
    background: rgb(16 16 16 / 0.85);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);

    border: 1px solid rgba(222, 219, 200, 0.10);
    border-radius: var(--radius-full);
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.5);

    overflow: hidden;
    isolation: isolate;
  }

  .indicator {
    position: absolute;
    z-index: 0;
    top: 0.375rem;
    bottom: 0.375rem;
    left: 0.375rem;
    width: calc((100% - 0.75rem) / 3);
    transform: translateX(calc(var(--idx) * 100%));

    background: var(--primary-container);
    border-radius: var(--radius-full);

    transition: transform 480ms var(--ease-out-expo);
    will-change: transform;
  }

  .seg {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.0625rem;

    padding: 0.625rem 1.125rem;
    background: transparent;
    border: none;
    border-radius: var(--radius-full);
    color: rgba(222, 219, 200, 0.65);

    font-family: var(--font-sans);
    cursor: pointer;
    transition: color 320ms var(--ease-out-quart);
    white-space: nowrap;
  }

  .seg:hover { color: var(--warm-cream); }
  .seg.active { color: var(--on-primary-container); }
  .seg.active .num { color: var(--on-primary-container); opacity: 0.6; }

  .num {
    font-size: 0.6875rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    color: rgba(222, 219, 200, 0.4);
    transition: color 320ms var(--ease-out-quart);
  }

  .label {
    font-family: var(--font-serif);
    font-style: italic;
    font-size: 1.05rem;
    line-height: 1;
  }

  .sub {
    font-size: 0.625rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    opacity: 0.7;
  }

  @media (max-width: 640px) {
    .switcher { grid-template-columns: repeat(3, 1fr); width: 100%; }
    .seg { padding: 0.5rem 0.5rem; }
    .label { font-size: 0.95rem; }
    .sub { display: none; }
  }

  @media (prefers-reduced-motion: reduce) {
    .indicator { transition: none; }
  }
</style>
