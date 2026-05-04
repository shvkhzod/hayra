<script lang="ts">
  import { onMount } from 'svelte';

  const STORAGE_KEY = 'hayra:music-muted';
  const SRC = '/sfx/Sands%20of%20Dune.mp3';

  let audioEl: HTMLAudioElement | undefined = $state();
  let muted = $state(true);

  onMount(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored !== null) muted = stored === 'true';
    } catch {}

    if (!audioEl) return;
    audioEl.muted = muted;
    audioEl.volume = 0.5;

    const start = () => audioEl?.play().catch(() => {});
    void start();

    // Browsers may still block until a user gesture; arm a one-time fallback.
    const onGesture = () => {
      window.removeEventListener('pointerdown', onGesture);
      window.removeEventListener('keydown', onGesture);
      start();
    };
    window.addEventListener('pointerdown', onGesture, { once: true });
    window.addEventListener('keydown', onGesture, { once: true });

    return () => {
      window.removeEventListener('pointerdown', onGesture);
      window.removeEventListener('keydown', onGesture);
    };
  });

  function toggle() {
    muted = !muted;
    if (audioEl) {
      audioEl.muted = muted;
      if (!muted && audioEl.paused) audioEl.play().catch(() => {});
    }
    try { localStorage.setItem(STORAGE_KEY, String(muted)); } catch {}
  }
</script>

<audio bind:this={audioEl} src={SRC} loop preload="auto"></audio>

<button
  type="button"
  class="toggle"
  aria-label={muted ? 'Fon musiqasini yoqish' : 'Fon musiqasini oʻchirish'}
  aria-pressed={!muted}
  title={muted ? 'Musiqani yoqish' : 'Musiqani oʻchirish'}
  onclick={toggle}
>
  <span class="material-symbols-outlined" aria-hidden="true">
    {muted ? 'volume_off' : 'volume_up'}
  </span>
</button>

<style>
  .toggle {
    position: fixed;
    right: 1.5rem;
    bottom: 1.5rem;
    z-index: 50;

    width: 3rem;
    height: 3rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    color: var(--warm-cream);
    background: rgb(16 16 16 / 0.8);
    border: 1px solid rgb(222 219 200 / 0.10);
    border-radius: var(--radius-full);

    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);

    box-shadow: 0 0 40px rgba(0, 0, 0, 0.5);
    transition:
      background-color 200ms ease,
      color 200ms ease,
      transform 200ms ease;
  }

  .toggle:hover { background: rgb(33 33 33 / 0.85); color: var(--primary); }
  .toggle:active { transform: scale(0.94); }
  .toggle:focus-visible {
    outline: none;
    box-shadow: 0 0 0 1px var(--warm-cream), 0 0 40px rgba(0, 0, 0, 0.5);
  }

  .material-symbols-outlined { font-size: 1.5rem; }
</style>
