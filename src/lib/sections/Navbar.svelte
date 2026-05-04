<script lang="ts">
  import { page } from '$app/stores';

  type LinkItem = { label: string; href: string; match: (path: string) => boolean };
  const links: LinkItem[] = [
    { label: 'Asar',    href: '/',         match: (p) => p === '/' },
    { label: 'Maqolot', href: '/maqolot',  match: (p) => p === '/maqolot' || p.startsWith('/maqolot/') }
  ];

  let menuOpen = $state(false);
  function toggleMenu() { menuOpen = !menuOpen; }
  function closeMenu() { menuOpen = false; }
</script>

<nav class="navbar" aria-label="Asosiy navigatsiya" class:open={menuOpen}>
  <div class="bar">
    <a class="brand" href="/" aria-label="Bosh sahifa" onclick={closeMenu}>HAYRA</a>

    <div class="links">
      {#each links as link}
        <a
          href={link.href}
          class:active={link.match($page.url.pathname)}
          aria-current={link.match($page.url.pathname) ? 'page' : undefined}
        >{link.label}</a>
      {/each}
    </div>

    <button type="button" class="cta">Oʻqishni boshla</button>

    <button
      type="button"
      class="menu-toggle"
      aria-label={menuOpen ? 'Menyuni yopish' : 'Menyuni ochish'}
      aria-expanded={menuOpen}
      aria-controls="mobile-menu"
      onclick={toggleMenu}
    >
      <span class="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
    </button>
  </div>

  <div id="mobile-menu" class="panel" hidden={!menuOpen}>
    <ul class="panel-links">
      {#each links as link}
        <li>
          <a
            href={link.href}
            class:active={link.match($page.url.pathname)}
            aria-current={link.match($page.url.pathname) ? 'page' : undefined}
            onclick={closeMenu}
          >
            <span class="label">{link.label}</span>
            <span class="material-symbols-outlined arrow">arrow_right_alt</span>
          </a>
        </li>
      {/each}
    </ul>
    <button type="button" class="cta panel-cta" onclick={closeMenu}>
      Oʻqishni boshla
    </button>
  </div>
</nav>

<style>
  .navbar {
    position: fixed;
    top: 1.5rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 50;
    width: max-content;
  }

  .bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    min-width: 600px;
    padding: 0.75rem 0.75rem 0.75rem 1.75rem;

    background: rgb(16 16 16 / 0.8);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);

    border: 1px solid rgb(222 219 200 / 0.10);
    border-radius: var(--radius-full);
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.5);
  }

  .brand {
    font-family: var(--font-serif);
    font-style: italic;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--warm-cream);
    letter-spacing: -0.01em;
  }

  .links {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    font-size: var(--fs-body-md);
  }

  .links a {
    color: rgb(222 219 200 / 0.6);
    transition: color 300ms ease, transform 200ms ease;
    padding-bottom: 2px;
    border-bottom: 1px solid transparent;
  }
  .links a:hover { color: var(--warm-cream); }
  .links a:active { transform: scale(0.92); }
  .links a.active {
    color: var(--warm-cream);
    border-bottom-color: var(--warm-cream);
  }

  .cta {
    background: var(--primary-container);
    color: var(--on-primary-container);
    border: none;
    padding: 0.625rem 1.25rem;
    border-radius: var(--radius-full);

    font-family: var(--font-sans);
    font-size: var(--fs-label-caps);
    font-weight: 700;
    line-height: var(--lh-label-caps);
    letter-spacing: var(--ls-label-caps);
    text-transform: uppercase;

    transition: background-color 200ms ease;
  }
  .cta:hover { background: var(--primary); }

  /* Hamburger toggle — desktop default hidden */
  .menu-toggle {
    display: none;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: var(--radius-full);
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgb(222 219 200 / 0.10);
    color: var(--warm-cream);
    transition: background-color 200ms ease, transform 200ms ease;
  }
  .menu-toggle:hover { background: rgba(255, 255, 255, 0.08); }
  .menu-toggle:active { transform: scale(0.94); }
  .menu-toggle .material-symbols-outlined { font-size: 1.5rem; }

  /* Dropdown panel — mobile only */
  .panel {
    margin-top: 0.5rem;
    padding: 0.75rem;
    background: rgb(16 16 16 / 0.85);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border: 1px solid rgb(222 219 200 / 0.10);
    border-radius: var(--radius-md);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.6);

    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    transform-origin: top center;
    animation: panel-in 320ms var(--ease-out-expo);
  }
  .panel[hidden] { display: none; }

  @keyframes panel-in {
    from { opacity: 0; transform: translateY(-8px) scale(0.98); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }

  .panel-links {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
  }

  .panel-links a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 0.875rem 1rem;
    border-radius: calc(var(--radius-md) - 0.5rem);

    font-family: var(--font-serif);
    font-style: italic;
    font-size: 1.375rem;
    line-height: 1.2;
    color: rgb(222 219 200 / 0.7);

    transition: background-color 200ms ease, color 200ms ease;
  }
  .panel-links a:hover { color: var(--warm-cream); background: rgba(255, 255, 255, 0.04); }
  .panel-links a.active { color: var(--warm-cream); }
  .panel-links a.active .arrow { color: var(--primary); }

  .panel-links .arrow {
    font-size: 1.25rem;
    color: rgb(222 219 200 / 0.35);
    transition: color 200ms ease, transform 240ms var(--ease-out-quart);
  }
  .panel-links a:hover .arrow {
    color: var(--warm-cream);
    transform: translateX(2px);
  }

  .panel-cta {
    margin: 0.25rem 0.25rem 0.25rem 0.25rem;
    padding: 0.875rem 1.25rem;
    text-align: center;
  }

  /* ── Mobile breakpoint ─────────────────────────────── */
  @media (max-width: 900px) {
    .navbar { width: calc(100vw - 2rem); }

    .bar {
      min-width: 0;
      width: 100%;
      padding: 0.5rem 0.5rem 0.5rem 1.25rem;
      gap: 0.75rem;
    }

    .links { display: none; }
    .cta { display: none; }
    .menu-toggle { display: inline-flex; }
  }

  /* ── Reduced motion ────────────────────────────────── */
  @media (prefers-reduced-motion: reduce) {
    .panel { animation: none; }
    .menu-toggle, .menu-toggle:active,
    .panel-links a, .panel-links .arrow,
    .links a, .links a:active {
      transition: none;
      transform: none;
    }
  }
</style>
