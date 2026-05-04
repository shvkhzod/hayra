<script lang="ts">
  import '../app.css';
  import Navbar from '$lib/sections/Navbar.svelte';
  import Footer from '$lib/sections/Footer.svelte';
  import MusicToggle from '$lib/MusicToggle.svelte';

  let { children } = $props();
</script>

<div class="page">
  <Navbar />
  <main>
    {@render children()}
  </main>
  <Footer />
  <MusicToggle />
</div>
