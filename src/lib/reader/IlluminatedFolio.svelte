<script lang="ts">
  /**
   * A stylized representation of an illuminated Chagatai manuscript folio.
   *
   * NOT a reproduction of any specific manuscript — this is an evocative
   * placeholder rendered entirely in SVG/CSS. It is intended to be replaced
   * with an actual public-domain image (e.g., from the British Library /
   * Qatar Digital Library or the Walters Art Museum) once available.
   *
   * The Arabic-flow strokes are decorative paths, not readable script.
   */
  let { hue = 32, label = '' }: { hue?: number; label?: string } = $props();

  // Generate text-line strokes deterministically
  const lineCount = 9;
  const lineY = (i: number) => 168 + i * 32;
</script>

<figure class="folio" style="--folio-hue: {hue};" aria-label={label || 'Illustrative folio of an illuminated Chagatai manuscript'}>
  <div class="bg-noise grain"></div>

  <svg
    viewBox="0 0 400 560"
    xmlns="http://www.w3.org/2000/svg"
    class="folio-svg"
    role="img"
    aria-hidden="true"
    preserveAspectRatio="xMidYMid meet"
  >
    <defs>
      <!-- parchment radial -->
      <radialGradient id="parch" cx="50%" cy="40%" r="80%">
        <stop offset="0%"  stop-color={`hsl(${hue} 38% 32%)`} />
        <stop offset="55%" stop-color={`hsl(${hue} 28% 17%)`} />
        <stop offset="100%" stop-color={`hsl(${hue} 22% 8%)`} />
      </radialGradient>

      <!-- gold ink -->
      <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%"  stop-color="#e9d8a6" />
        <stop offset="50%" stop-color="#f4ead0" />
        <stop offset="100%" stop-color="#c9b27a" />
      </linearGradient>

      <linearGradient id="ink" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%"  stop-color="#e9d8a6" stop-opacity="0.85" />
        <stop offset="100%" stop-color="#cab784" stop-opacity="0.75" />
      </linearGradient>

      <!-- vignette -->
      <radialGradient id="vignette" cx="50%" cy="50%" r="68%">
        <stop offset="0%"  stop-color="rgba(0,0,0,0)" />
        <stop offset="70%" stop-color="rgba(0,0,0,0.25)" />
        <stop offset="100%" stop-color="rgba(0,0,0,0.85)" />
      </radialGradient>

      <!-- arabesque pattern -->
      <pattern id="arabesque" x="0" y="0" width="48" height="32" patternUnits="userSpaceOnUse">
        <path d="M0 16 q 12 -16 24 0 t 24 0" fill="none" stroke="url(#gold)" stroke-width="0.5" stroke-opacity="0.6"/>
        <circle cx="12" cy="16" r="1.4" fill="url(#gold)" fill-opacity="0.7"/>
        <circle cx="36" cy="16" r="1.4" fill="url(#gold)" fill-opacity="0.7"/>
      </pattern>

      <!-- header rosette -->
      <symbol id="rosette" viewBox="-30 -30 60 60">
        <circle cx="0" cy="0" r="24" fill="none" stroke="url(#gold)" stroke-width="0.8" stroke-opacity="0.85"/>
        <circle cx="0" cy="0" r="18" fill={`hsl(${hue} 32% 22%)`} fill-opacity="0.6"/>
        <circle cx="0" cy="0" r="12" fill="none" stroke="url(#gold)" stroke-width="0.5" stroke-opacity="0.7"/>
        <g stroke="url(#gold)" stroke-width="0.5" stroke-opacity="0.85" fill="none">
          {#each Array(8) as _, i}
            <line
              x1="0" y1="-22"
              x2="0" y2="-12"
              transform={`rotate(${i * 45})`}
            />
          {/each}
        </g>
        <circle cx="0" cy="0" r="3" fill="url(#gold)" fill-opacity="0.95"/>
      </symbol>

      <!-- corner ornament -->
      <symbol id="corner" viewBox="-30 -30 60 60">
        <path d="M -28 -28 L 28 -28 L 28 -22 L -22 -22 L -22 28 L -28 28 Z" fill="url(#gold)" fill-opacity="0.4"/>
        <circle cx="-22" cy="-22" r="6" fill="none" stroke="url(#gold)" stroke-width="0.6" stroke-opacity="0.85"/>
      </symbol>
    </defs>

    <!-- parchment background -->
    <rect width="400" height="560" fill="url(#parch)"/>

    <!-- outer ornamental border -->
    <rect x="14" y="14" width="372" height="532" fill="none" stroke="url(#gold)" stroke-width="1.4" stroke-opacity="0.65"/>
    <rect x="22" y="22" width="356" height="516" fill="none" stroke="url(#gold)" stroke-width="0.5" stroke-opacity="0.4"/>

    <!-- inner arabesque frame band -->
    <rect x="34" y="34" width="332" height="492" fill="url(#arabesque)" opacity="0.45"/>
    <rect x="34" y="34" width="332" height="492" fill="none" stroke="url(#gold)" stroke-width="0.5" stroke-opacity="0.7"/>

    <!-- header cartouche -->
    <rect x="50" y="56" width="300" height="80" fill={`hsl(${hue} 30% 18%)`} fill-opacity="0.55" stroke="url(#gold)" stroke-width="0.6" stroke-opacity="0.7"/>
    <rect x="56" y="62" width="288" height="68" fill="none" stroke="url(#gold)" stroke-width="0.4" stroke-opacity="0.4"/>

    <!-- center rosette in header -->
    <use href="#rosette" x="200" y="96" width="60" height="60"/>

    <!-- illuminated band beneath header -->
    <rect x="60" y="148" width="280" height="2" fill="url(#gold)" fill-opacity="0.7"/>
    <rect x="60" y="156" width="280" height="0.5" fill="url(#gold)" fill-opacity="0.4"/>

    <!-- ─── Stylized text lines (decorative, non-readable) ─── -->
    {#each Array(lineCount) as _, i}
      {@const baseline = lineY(i)}
      {@const startX = 70 + ((i * 13) % 28)}
      {@const endX = 330 - ((i * 7) % 24)}
      <!-- main flowing stroke -->
      <path
        d={`M ${endX} ${baseline}
            q -22 6 -44 -2
            t -44 -2
            t -44 4
            t -44 -2
            t -44 0`}
        fill="none"
        stroke="url(#ink)"
        stroke-width="1.6"
        stroke-linecap="round"
      />
      <!-- diacritic-like dots above -->
      {#each Array(4) as _, j}
        <circle
          cx={startX + 30 + j * 60 + (i * 3) % 12}
          cy={baseline - 5 - (j % 2) * 3}
          r="0.8"
          fill="url(#gold)"
          fill-opacity="0.55"
        />
      {/each}
    {/each}

    <!-- corner ornaments -->
    <use href="#corner" x="42" y="42" width="32" height="32"/>
    <use href="#corner" x="358" y="42" width="32" height="32" transform="scale(-1, 1) translate(-716, 0)"/>
    <use href="#corner" x="42" y="518" width="32" height="32" transform="scale(1, -1) translate(0, -1036)"/>
    <use href="#corner" x="358" y="518" width="32" height="32" transform="scale(-1, -1) translate(-716, -1036)"/>

    <!-- marginal rosettes -->
    <use href="#rosette" x="200" y="500" width="36" height="36" opacity="0.8"/>

    <!-- aged stains (subtle dark patches) -->
    <ellipse cx="80" cy="380" rx="28" ry="14" fill="rgb(20, 14, 10)" opacity="0.18"/>
    <ellipse cx="320" cy="220" rx="22" ry="10" fill="rgb(20, 14, 10)" opacity="0.14"/>
    <ellipse cx="160" cy="470" rx="36" ry="8" fill="rgb(20, 14, 10)" opacity="0.10"/>

    <!-- final vignette over everything -->
    <rect width="400" height="560" fill="url(#vignette)" opacity="0.7"/>
  </svg>

  <figcaption class="caption">
    {label}
  </figcaption>
</figure>

<style>
  .folio {
    position: relative;
    width: 100%;
    aspect-ratio: 400 / 560;
    margin: 0;

    background: linear-gradient(180deg,
      hsl(var(--folio-hue) 22% 12%) 0%,
      hsl(var(--folio-hue) 16% 6%) 100%);

    border-radius: var(--radius-md);
    overflow: hidden;

    box-shadow:
      0 0 0 1px rgba(222, 219, 200, 0.10),
      0 30px 80px -20px rgba(0, 0, 0, 0.8),
      0 8px 30px -10px rgba(0, 0, 0, 0.5);
  }

  .folio-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .grain {
    position: absolute;
    inset: 0;
    pointer-events: none;
    background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='1.4' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
    background-size: 96px 96px;
    opacity: 0.20;
    mix-blend-mode: overlay;
    z-index: 2;
  }

  .caption {
    display: none;
  }
</style>
