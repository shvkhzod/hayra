<script lang="ts">
  /**
   * A purely-CSS "manuscript plate" — layered sepia gradients,
   * faint arabesque SVG, parchment grain. No external images.
   */
  let { hue = 28, seed = 0.4 }: { hue?: number; seed?: number } = $props();

  // Deterministic per-seed offsets, kept reactive so prop changes update the plate.
  const sx = $derived(Math.round(seed * 1000) % 7);
  const sy = $derived((Math.round(seed * 1000) + 3) % 11);

  const arabesque = $derived(
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'>
        <g fill='none' stroke='hsl(${hue} 30% 80% / 0.10)' stroke-width='0.6'>
          <circle cx='${60 + sx * 6}' cy='${80 + sy * 4}' r='42'/>
          <circle cx='${60 + sx * 6}' cy='${80 + sy * 4}' r='28'/>
          <path d='M${20 + sx * 5} ${200} q40 -60 80 0 t80 0 t80 0 t80 0'/>
          <path d='M${30} ${260 - sy * 3} q60 -80 120 0 t120 0'/>
          <path d='M${40 + sx * 8} ${330} q30 -40 60 0 t60 0 t60 0 t60 0 t60 0'/>
          <circle cx='${320 - sx * 5}' cy='${130 + sy * 3}' r='30'/>
        </g>
        <g fill='hsl(${hue} 35% 75% / 0.05)'>
          <circle cx='${200}' cy='${200}' r='1.2'/>
          <circle cx='${140}' cy='${110}' r='0.9'/>
          <circle cx='${260}' cy='${280}' r='0.9'/>
        </g>
      </svg>`
    )
  );

  const dataUri = $derived(`url("data:image/svg+xml;utf8,${arabesque}")`);
</script>

<div
  class="plate"
  style="
    --plate-hue: {hue};
    --plate-pattern: {dataUri};
  "
>
  <div class="grain"></div>
</div>

<style>
  .plate {
    position: absolute;
    inset: 0;
    overflow: hidden;

    /* Sepia base: layered radial + linear gradients in HSL */
    background:
      radial-gradient(120% 80% at 30% 20%,
        hsl(var(--plate-hue) 28% 18% / 1) 0%,
        hsl(var(--plate-hue) 22% 10% / 1) 45%,
        hsl(var(--plate-hue) 18% 6% / 1) 100%
      ),
      linear-gradient(180deg,
        hsl(var(--plate-hue) 30% 14%) 0%,
        hsl(var(--plate-hue) 22% 7%) 100%
      );
    background-blend-mode: multiply;
  }

  .plate::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: var(--plate-pattern);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    opacity: 0.85;
    mix-blend-mode: screen;
    pointer-events: none;
  }

  .plate::after {
    /* Inner vignette to focus the eye */
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(120% 100% at 50% 50%,
        transparent 40%,
        rgba(0, 0, 0, 0.45) 80%,
        rgba(0, 0, 0, 0.85) 100%
      );
    pointer-events: none;
  }

  .grain {
    position: absolute;
    inset: 0;
    pointer-events: none;
    background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='1.4' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
    background-size: 128px 128px;
    opacity: 0.30;
    mix-blend-mode: overlay;
  }
</style>
