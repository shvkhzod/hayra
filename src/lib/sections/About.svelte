<section class="about">
  <div class="container">
    <div class="card">
      <div class="bg-noise"></div>

      <div class="grid">
        <div class="col">
          <h2 class="headline">
            <span class="prelude">1483. Hirot.</span>
            <span class="emph">Alisher Navoiy</span>
            <br />
            Xamsani boshladi. Bu — birinchi kitob.
          </h2>
        </div>

        <div class="col">
          <p class="body">
            Bu ishqiy hikoya emas. Iymon, adolat, ilm va karam haqida — yigirma
            maqola, yigirma hikoyat. Nizomiy fors tilida yozdi. Dehlaviy fors
            tilida yozdi. Navoiy chagʻatoy turkiysida yozdi — va shu kun turkiy
            til ilmiy adabiyotga qoʻshildi.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .about {
    position: relative;
    padding: var(--space-xl) var(--margin-safe);
    background: #000;
  }

  .container {
    max-width: 80rem;
    margin: 0 auto;
  }

  .card {
    position: relative;
    overflow: hidden;
    background: var(--surface-l1);
    border: 1px solid var(--surface-variant);
    border-radius: var(--radius-md);
    padding: var(--space-lg);
  }

  @media (min-width: 768px) {
    .card { padding: var(--space-xl); }
  }

  .grid {
    position: relative;
    z-index: 10;
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--gutter);
    align-items: center;
  }

  @media (min-width: 768px) {
    .grid { grid-template-columns: 1fr 1fr; }
  }

  .col { display: flex; flex-direction: column; gap: var(--space-sm); }

  .headline {
    margin: 0;
    font-family: var(--font-serif);
    font-weight: 400;
    color: var(--primary-container);
    font-size: var(--fs-h1);
    line-height: 1.15;
  }

  .prelude {
    display: block;
    margin-bottom: 0.5rem;
    font-family: var(--font-sans);
    font-weight: 400;
    font-size: var(--fs-h2);
    line-height: var(--lh-h2);
    letter-spacing: var(--ls-h2);
    opacity: 0.6;
  }

  .emph {
    font-style: italic;
    color: var(--primary);
  }

  .body {
    margin: 0;
    font-size: var(--fs-body-lg);
    line-height: var(--lh-body-lg);
    color: var(--on-surface-variant);
    opacity: 0.85;
  }
</style>
