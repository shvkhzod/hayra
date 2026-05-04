<script lang="ts">
  import { onMount } from 'svelte';

  const videoSrc =
    'https://res.cloudinary.com/dzf3rwe4y/video/upload/v1777651744/read_llsssp.mp4';

  type StatCard = { num: string; title: string; items: string[]; surface: 'l1' | 'l2' };
  const cards: StatCard[] = [
    {
      num: '01',
      title: 'Tarkib.',
      items: ['20 maqola', '20 hikoyat', 'Mutaqorib vazni', 'Chagʻatoy turkiysi'],
      surface: 'l2'
    },
    {
      num: '02',
      title: 'Mavzular.',
      items: ['Iymon va islom', 'Adolat va karam', 'Ilm va adab', 'Vafo va sidq'],
      surface: 'l1'
    },
    {
      num: '03',
      title: 'Manbalar.',
      items: ['Topkapı Saroyi (1483)', 'Beruni instituti', '2012-yil nashri', 'Lotin nashri'],
      surface: 'l1'
    }
  ];

  // 4 cards total: index 0 = video, 1..3 = stats
  const TOTAL = 1 + cards.length;
  let cardEls: (HTMLElement | undefined)[] = $state(new Array(TOTAL));
  let revealed: boolean[] = $state(new Array(TOTAL).fill(false));

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const target = entry.target as HTMLElement;
          const idx = cardEls.findIndex((el) => el === target);
          if (idx >= 0) revealed[idx] = true;
          observer.unobserve(target);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    );
    for (const el of cardEls) if (el) observer.observe(el);
    return () => observer.disconnect();
  });

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

<section class="features">
  <div class="bg-noise"></div>

  <div class="inner">
    <header class="header">
      <h2 class="eyebrow">Asar uchun qurilgan.</h2>
      <p class="lede">Boshqa hech narsa uchun emas.</p>
    </header>

    <div class="grid">
      <!-- Video card (index 0) -->
      <article
        bind:this={cardEls[0]}
        class="card video-card"
        class:revealed={revealed[0]}
        style="--reveal-delay: 0ms"
        onpointermove={onMove}
        onpointerleave={onLeave}
      >
        <video class="card-bg" src={videoSrc} autoplay loop muted playsinline></video>
        <div class="card-vignette"></div>
        <div class="card-foot">
          <h3 class="card-title">Soʻz — tirik.</h3>
          <span class="card-cue" aria-hidden="true">
            <span class="material-symbols-outlined">arrow_outward</span>
          </span>
        </div>
      </article>

      {#each cards as c, i}
        <article
          bind:this={cardEls[i + 1]}
          class="card stat-card surface-{c.surface}"
          class:revealed={revealed[i + 1]}
          style="--reveal-delay: {(i + 1) * 90}ms"
          onpointermove={onMove}
          onpointerleave={onLeave}
        >
          <div class="noise-overlay opacity-30"></div>
          <div class="card-head">
            <h3 class="stat-title">{c.title}</h3>
            <span class="stat-num">{c.num}</span>
          </div>
          <ul class="stat-list">
            {#each c.items as item}
              <li>
                <span class="material-symbols-outlined check">check</span>
                {item}
              </li>
            {/each}
          </ul>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  .features {
    position: relative;
    padding: var(--space-xl) var(--margin-safe);
    background: #000;
    min-height: 100vh;
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .inner {
    position: relative;
    z-index: 10;
    width: 100%;
    max-width: 80rem;
    margin: 0 auto;
  }

  .header {
    margin-bottom: var(--space-xl);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-sm);
    text-align: center;
  }

  .eyebrow {
    margin: 0;
    font-family: var(--font-sans);
    font-size: var(--fs-body-lg);
    line-height: var(--lh-body-lg);
    color: var(--primary-container);
    font-weight: 400;
  }

  .lede {
    margin: 0;
    font-family: var(--font-serif);
    font-style: italic;
    font-weight: 400;
    font-size: var(--fs-h2);
    line-height: var(--lh-h2);
    color: var(--surface-variant);
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--gutter);
  }

  @media (min-width: 768px) {
    .grid { grid-template-columns: repeat(2, 1fr); }
  }

  @media (min-width: 1024px) {
    .grid {
      grid-template-columns: repeat(4, 1fr);
      height: 480px;
    }
  }

  /* ── Card base ──────────────────────────────────────── */
  .card {
    position: relative;
    overflow: hidden;
    border-radius: var(--radius-md);
    height: 16rem;

    /* entrance: starts pre-revealed (hidden) */
    opacity: 0;
    transform: translateY(24px) scale(0.97);

    transition:
      opacity 700ms var(--ease-out-expo) var(--reveal-delay, 0ms),
      transform 700ms var(--ease-out-expo) var(--reveal-delay, 0ms),
      border-color 320ms var(--ease-out-quart),
      background-color 320ms var(--ease-out-quart);

    will-change: transform, opacity;
  }
  .card.revealed { opacity: 1; transform: translateY(0) scale(1); }

  @media (min-width: 1024px) { .card { height: 100%; } }

  /* Cursor-tracking candlelight spotlight */
  .card::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    pointer-events: none;
    z-index: 5;
    background: radial-gradient(
      320px circle at var(--mx, 50%) var(--my, 50%),
      rgba(222, 219, 200, 0.12),
      rgba(222, 219, 200, 0.04) 35%,
      transparent 60%
    );
    opacity: 0;
    transition: opacity 360ms var(--ease-out-quart);
  }
  .card:hover::before { opacity: 1; }

  /* Inner cream halo on hover (under spotlight) */
  .card::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    pointer-events: none;
    z-index: 4;
    box-shadow: inset 0 0 0 1px rgba(222, 219, 200, 0.0);
    transition: box-shadow 360ms var(--ease-out-quart);
  }
  .card:hover::after { box-shadow: inset 0 0 0 1px rgba(222, 219, 200, 0.18); }

  /* ── Video card ─────────────────────────────────────── */
  .video-card { border: 1px solid var(--surface-variant); }

  .card-bg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.001); /* avoid 1px gap on transition */
    transition: transform 900ms var(--ease-out-expo), filter 600ms var(--ease-out-quart);
    will-change: transform;
  }

  .video-card:hover .card-bg {
    transform: scale(1.06);
    filter: brightness(1.05);
  }

  .card-vignette {
    position: absolute;
    inset: 0;
    z-index: 10;
    background: linear-gradient(to top, #000 0%, rgba(0, 0, 0, 0.5) 50%, transparent 100%);
    transition: opacity 360ms var(--ease-out-quart);
  }
  .video-card:hover .card-vignette { opacity: 0.85; }

  .card-foot {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 20;
    padding: var(--space-lg);

    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: var(--space-sm);
  }

  .card-title {
    margin: 0;
    font-family: var(--font-serif);
    font-style: italic;
    font-weight: 400;
    font-size: var(--fs-h2);
    line-height: var(--lh-h2);
    color: var(--primary-container);
    transform: translateY(0);
    transition: transform 420ms var(--ease-out-quart), color 320ms var(--ease-out-quart);
  }
  .video-card:hover .card-title {
    transform: translateY(-2px);
    color: var(--primary);
  }

  .card-cue {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: var(--radius-full);
    color: var(--primary-container);
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(222, 219, 200, 0.18);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);

    opacity: 0;
    transform: translate(8px, -8px) rotate(-12deg);
    transition: opacity 360ms var(--ease-out-quart), transform 420ms var(--ease-out-expo);
  }
  .card-cue .material-symbols-outlined { font-size: 1.25rem; }
  .video-card:hover .card-cue {
    opacity: 1;
    transform: translate(0, 0) rotate(0);
  }

  /* ── Stat cards ─────────────────────────────────────── */
  .stat-card {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
    padding: var(--space-lg);
  }

  @media (min-width: 768px) {
    .stat-card { height: auto; }
  }

  .surface-l1 { background: var(--surface-l1); border: 1px solid var(--surface-variant); }
  .surface-l2 { background: var(--surface-l2); border: 1px solid var(--surface-container-high); }

  .stat-card:hover { transform: translateY(-4px) scale(1); }
  .stat-card.revealed:hover { transform: translateY(-4px); }
  .surface-l1:hover { background: #161616; }
  .surface-l2:hover { background: #262626; }

  .opacity-30 { opacity: 0.30; transition: opacity 360ms var(--ease-out-quart); }
  .stat-card:hover .opacity-30 { opacity: 0.45; }

  .card-head {
    position: relative;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: var(--space-sm);
  }

  .stat-title {
    margin: 0;
    font-family: var(--font-sans);
    font-weight: 700;
    font-size: var(--fs-body-lg);
    line-height: var(--lh-body-lg);
    color: var(--primary-container);
    transition: color 320ms var(--ease-out-quart);
  }
  .stat-card:hover .stat-title { color: var(--primary); }

  .stat-num {
    font-family: var(--font-sans);
    font-size: var(--fs-label-caps);
    font-weight: 700;
    letter-spacing: var(--ls-label-caps);
    text-transform: uppercase;
    color: var(--surface-variant);
    transition:
      color 320ms var(--ease-out-quart),
      letter-spacing 320ms var(--ease-out-quart);
  }
  .stat-card:hover .stat-num {
    color: var(--primary);
    letter-spacing: 0.18em;
  }

  .stat-list {
    position: relative;
    z-index: 10;
    list-style: none;
    margin: auto 0 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
  }

  .stat-list li {
    display: flex;
    align-items: center;
    gap: var(--space-xs);
    font-family: var(--font-sans);
    font-size: var(--fs-body-md);
    line-height: var(--lh-body-md);
    color: var(--on-surface-variant);

    /* per-item subtle slide-in on card hover */
    transform: translateX(0);
    transition: transform 420ms var(--ease-out-quart), color 320ms var(--ease-out-quart);
  }
  .stat-list li:nth-child(1) { transition-delay: 40ms; }
  .stat-list li:nth-child(2) { transition-delay: 80ms; }
  .stat-list li:nth-child(3) { transition-delay: 120ms; }
  .stat-list li:nth-child(4) { transition-delay: 160ms; }

  .stat-card:hover .stat-list li {
    color: var(--primary-container);
    transform: translateX(2px);
  }

  .check {
    font-size: 1rem;
    color: var(--primary);
    transform: scale(1);
    transition: transform 320ms var(--ease-out-quart);
  }
  .stat-card:hover .check { transform: scale(1.15); }

  /* ── Reduced motion ─────────────────────────────────── */
  @media (prefers-reduced-motion: reduce) {
    .card,
    .card-bg,
    .card-vignette,
    .card-title,
    .card-cue,
    .stat-title,
    .stat-num,
    .stat-list li,
    .check,
    .card::before,
    .card::after,
    .opacity-30 {
      transition: none !important;
    }
    .card { opacity: 1; transform: none; }
    .video-card:hover .card-bg { transform: none; }
    .stat-card:hover { transform: none; }
    .card-cue {
      opacity: 0; /* still hidden until hover, but no movement */
      transform: none;
    }
    .video-card:hover .card-cue { opacity: 1; transform: none; }
  }
</style>
