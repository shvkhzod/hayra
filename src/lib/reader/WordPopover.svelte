<script lang="ts">
  import { onMount } from 'svelte';
  import type { Gloss } from './types.js';

  let { gloss, text, interactive = true }:
    { gloss: Gloss; text: string; interactive?: boolean } = $props();

  let triggerEl: HTMLSpanElement | undefined = $state();
  let popoverEl: HTMLDivElement | undefined = $state();

  let open = $state(false);
  let pinned = $state(false);
  let placement: 'above' | 'below' = $state('above');

  let hoverTimer: ReturnType<typeof setTimeout> | undefined;

  function show() {
    if (!interactive) return;
    clearTimeout(hoverTimer);
    open = true;
    queueMicrotask(positionPopover);
  }

  function maybeHide() {
    if (pinned) return;
    clearTimeout(hoverTimer);
    hoverTimer = setTimeout(() => (open = false), 80);
  }

  function togglePin(e: MouseEvent) {
    if (!interactive) return;
    e.preventDefault();
    e.stopPropagation();
    if (pinned) {
      pinned = false;
      open = false;
    } else {
      pinned = true;
      open = true;
      queueMicrotask(positionPopover);
    }
  }

  function positionPopover() {
    if (!triggerEl || !popoverEl) return;
    const tRect = triggerEl.getBoundingClientRect();
    const pRect = popoverEl.getBoundingClientRect();
    const wouldOverflowTop = tRect.top - pRect.height - 12 < 8;
    placement = wouldOverflowTop ? 'below' : 'above';
  }

  onMount(() => {
    function onDocClick(e: MouseEvent) {
      if (!pinned) return;
      const target = e.target as Node;
      if (triggerEl?.contains(target) || popoverEl?.contains(target)) return;
      pinned = false;
      open = false;
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape' && open) {
        pinned = false;
        open = false;
      }
    }
    function onScroll() {
      if (open) positionPopover();
    }
    document.addEventListener('click', onDocClick);
    document.addEventListener('keydown', onKey);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      document.removeEventListener('click', onDocClick);
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('scroll', onScroll);
    };
  });
</script>

{#if interactive}
  <button
    type="button"
    bind:this={triggerEl}
    class="trigger interactive"
    class:open
    onpointerenter={show}
    onpointerleave={maybeHide}
    onfocus={show}
    onblur={maybeHide}
    onclick={togglePin}
    aria-expanded={open}
    aria-haspopup="dialog"
  >
    {text}
    {#if open}
      <span
        bind:this={popoverEl}
        class="pop {placement}"
        class:pinned
        role="dialog"
        tabindex="-1"
        aria-label={gloss.word}
        onpointerenter={show}
        onpointerleave={maybeHide}
      >
      <span class="pop-inner">
        <header class="pop-head">
          <span class="head-word">{gloss.word}</span>
          {#if gloss.sufiTag}
            <span class="tag">{gloss.sufiTag}</span>
          {/if}
        </header>

        <p class="modern">
          <span class="lbl">Hozirgi</span>
          {gloss.modern}
        </p>

        {#if gloss.etymology}
          <p class="etym">
            <span class="lbl">Etimologiya</span>
            {gloss.etymology}
          </p>
        {/if}

        {#if gloss.classical}
          <p class="classical">
            <span class="lbl">Klassik maʼno</span>
            {gloss.classical}
          </p>
        {/if}
      </span>
    </span>
    {/if}
  </button>
{:else}
  <span class="trigger" bind:this={triggerEl}>{text}</span>
{/if}

<style>
  .trigger {
    position: relative;
    display: inline;
    color: inherit;
    background: transparent;
    border: none;
    padding: 0;
    margin: 0;
    font: inherit;
    text-decoration: none;
    border-bottom: 1px solid rgba(222, 219, 200, 0.20);
    transition: border-color 240ms var(--ease-out-quart), color 240ms var(--ease-out-quart);
  }
  .trigger.interactive {
    cursor: help;
  }
  button.trigger { line-height: inherit; }
  .trigger.interactive:hover,
  .trigger.interactive:focus-visible,
  .trigger.open {
    color: var(--primary);
    border-bottom-color: var(--primary);
    outline: none;
  }

  .pop {
    position: absolute;
    z-index: 60;
    left: 50%;
    transform: translateX(-50%);
    width: max-content;
    max-width: min(22rem, calc(100vw - 2rem));

    pointer-events: auto;
    cursor: default;

    animation: pop-in 220ms var(--ease-out-expo) both;
  }
  .pop.above { bottom: calc(100% + 0.625rem); }
  .pop.below { top: calc(100% + 0.625rem); }

  @keyframes pop-in {
    from { opacity: 0; transform: translate(-50%, 4px); }
    to   { opacity: 1; transform: translate(-50%, 0); }
  }

  .pop-inner {
    display: block;
    padding: 0.875rem 1rem 1rem;
    background: rgb(16 16 16 / 0.96);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(222, 219, 200, 0.16);
    border-radius: var(--radius-default);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.55);
    color: var(--light-cream);
    font-family: var(--font-sans);
    font-size: 0.875rem;
    line-height: 1.5;
    text-align: left;
  }

  .pop-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.625rem;
    margin-bottom: 0.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid rgba(72, 71, 63, 0.55);
  }
  .head-word {
    font-family: var(--font-serif);
    font-style: italic;
    font-size: 1.15rem;
    color: var(--primary-container);
  }
  .tag {
    font-size: 0.625rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--primary);
    background: rgba(251, 247, 228, 0.08);
    border: 1px solid rgba(251, 247, 228, 0.20);
    padding: 0.1875rem 0.5rem;
    border-radius: var(--radius-full);
  }

  .pop p { margin: 0.375rem 0 0; }
  .pop .lbl {
    display: block;
    margin-bottom: 0.0625rem;
    font-size: 0.625rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(222, 219, 200, 0.50);
  }
  .modern { color: var(--warm-cream); }
  .etym, .classical { color: rgba(225, 224, 204, 0.78); }

  /* Pinned popover gets a subtle cream ring */
  .pop.pinned .pop-inner {
    box-shadow:
      0 0 0 1px rgba(222, 219, 200, 0.30),
      0 12px 40px rgba(0, 0, 0, 0.55);
  }

  @media (prefers-reduced-motion: reduce) {
    .pop { animation: none; }
  }
</style>
