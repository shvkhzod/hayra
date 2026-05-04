<script lang="ts">
  const videoSrc =
    'https://res.cloudinary.com/dzf3rwe4y/video/upload/v1777651744/read_llsssp.mp4';
</script>

<section class="hero">
  <div class="frame">
    <video class="bg" src={videoSrc} autoplay loop muted playsinline></video>

    <div class="noise-overlay z-noise"></div>
    <div class="vignette"></div>

    <div class="content">
      <div class="grid">
        <div class="headline">
          <h1>
            Hayrat<span class="asterisk">*</span>
          </h1>
        </div>

        <div class="aside">
          <p>
            Besh asr oldin yozilgan. Hozir oʻqilishi kerak. Soʻz —
            qoʻlyozmadan. Hech narsa qoʻshilmadi, hech narsa olib tashlanmadi.
          </p>
          <button type="button" class="begin">
            Oʻqishni boshla
            <span class="material-symbols-outlined arrow">arrow_right_alt</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .hero {
    position: relative;
    height: 100vh;
    height: 100dvh;
    padding: 1rem;
  }

  .frame {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: var(--radius-md);
    border: 1px solid var(--surface-container-high);
  }

  .bg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .z-noise { z-index: 10; }

  .vignette {
    position: absolute;
    inset: 0;
    z-index: 20;
    pointer-events: none;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.45) 0%,
      rgba(0, 0, 0, 0.15) 30%,
      rgba(0, 0, 0, 0.55) 65%,
      rgba(0, 0, 0, 0.92) 100%
    );
  }

  .content {
    position: absolute;
    inset: 0;
    z-index: 30;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: var(--margin-safe);
    padding-bottom: var(--space-xl);
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: var(--gutter);
    align-items: end;
    width: 100%;
  }

  .headline { grid-column: span 12 / span 12; }
  .aside {
    grid-column: span 12 / span 12;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-md);
    padding-bottom: var(--space-md);
  }

  @media (min-width: 768px) {
    .headline { grid-column: span 8 / span 8; }
    .aside { grid-column: span 4 / span 4; }
  }

  h1 {
    margin: 0;
    font-family: var(--font-serif);
    font-style: italic;
    font-weight: 400;
    color: var(--primary-container);
    font-size: 20vw;
    line-height: 0.8;
    letter-spacing: -0.04em;
  }

  .asterisk { color: var(--primary); font-style: normal; }

  .aside p {
    margin: 0;
    max-width: 24rem;
    font-size: var(--fs-body-lg);
    line-height: var(--lh-body-lg);
    color: var(--on-surface-variant);
  }

  .begin {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: var(--primary);
    color: var(--on-primary);
    border: none;
    padding: 1rem 2rem;
    border-radius: var(--radius-full);

    font-family: var(--font-sans);
    font-size: var(--fs-label-caps);
    font-weight: 700;
    letter-spacing: var(--ls-label-caps);
    text-transform: uppercase;

    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.10);
    transition: background-color 200ms ease;
  }
  .begin:hover { background: #ffffff; }
  .arrow { font-size: 1.1rem; }

  @media (max-width: 767px) {
    .hero { padding: 0.5rem; }

    .content {
      padding: var(--margin-safe);
      padding-top: 5.5rem; /* room beneath the floating navbar pill */
      padding-bottom: var(--space-lg);
    }

    .grid {
      gap: var(--space-md);
      align-items: end;
      min-height: 100%;
      grid-template-rows: 1fr auto;
    }

    .headline {
      grid-row: 1;
      align-self: end;
    }

    .aside {
      grid-row: 2;
      gap: var(--space-md);
      padding-bottom: 0;
    }

    h1 {
      font-size: clamp(4.5rem, 26vw, 9rem);
      line-height: 0.85;
    }

    .aside p {
      max-width: none;
      font-size: var(--fs-body-md);
      line-height: var(--lh-body-md);
    }

    .begin {
      width: 100%;
      justify-content: space-between;
      padding: 1.125rem 1.5rem;
    }
    .arrow { font-size: 1.25rem; }
  }
</style>
