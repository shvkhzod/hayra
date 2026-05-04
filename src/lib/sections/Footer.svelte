<script lang="ts">
  const links: { label: string; href: string }[] = [
    { label: 'Maxfiylik', href: '#maxfiylik' },
    { label: 'Shartlar', href: '#shartlar' },
    { label: 'Arxivlar', href: '#arxivlar' },
    { label: 'Aloqa', href: '#aloqa' }
  ];
</script>

<footer class="footer">
  <div class="bg-noise opacity-20"></div>

  <div class="brand-block">
    <span class="brand">HAYRA</span>
    <span class="copyright">© 2026 HAYRA Raqamli Arxivi. Barcha ilmiy huquqlar himoyalangan.</span>
  </div>

  <nav class="links" aria-label="Huquqiy havolalar">
    {#each links as link}
      <a href={link.href}>{link.label}</a>
    {/each}
  </nav>
</footer>

<style>
  .footer {
    position: relative;
    overflow: hidden;
    width: 100%;
    padding: 3rem var(--margin-safe);
    background: #000;
    border-top: 1px solid rgb(222 219 200 / 0.05);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }

  @media (min-width: 768px) {
    .footer { flex-direction: row; }
  }

  .opacity-20 { opacity: 0.20; }

  .brand-block {
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
  @media (min-width: 768px) {
    .brand-block { align-items: flex-start; }
  }

  .brand {
    font-family: var(--font-serif);
    font-style: italic;
    font-weight: 700;
    font-size: 1.125rem;
    color: var(--warm-cream);
  }

  .copyright {
    font-family: var(--font-serif);
    font-style: italic;
    font-size: 0.875rem;
    color: rgb(222 219 200 / 0.4);
  }

  .links {
    position: relative;
    z-index: 10;
    display: flex;
    align-items: center;
    gap: 1.5rem;
    font-family: var(--font-serif);
    font-style: italic;
    font-size: 0.875rem;
  }

  .links a {
    color: rgb(222 219 200 / 0.4);
    text-decoration: underline;
    text-decoration-style: dotted;
    text-underline-offset: 3px;
    transition: color 500ms ease;
  }
  .links a:hover { color: var(--warm-cream); }
</style>
