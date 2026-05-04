<script lang="ts">
  import WordPopover from './WordPopover.svelte';
  import type { Gloss, WordToken } from './types.js';

  let { tokens, glossMap, interactive = true }:
    { tokens: WordToken[]; glossMap: Map<string, Gloss>; interactive?: boolean } = $props();
</script>

<span class="line">
  {#each tokens as tok, i (i)}
    {#if typeof tok === 'string'}{tok}{:else}
      {@const g = glossMap.get(tok.glossId)}
      {#if g}
        <WordPopover text={tok.text} gloss={g} {interactive} />
      {:else}
        <span class="missing">{tok.text}</span>
      {/if}
    {/if}
  {/each}
</span>

<style>
  .line {
    display: inline;
  }
  .missing {
    border-bottom: 1px dashed rgba(255, 180, 171, 0.50);
  }
</style>
