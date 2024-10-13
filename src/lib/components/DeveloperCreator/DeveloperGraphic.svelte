<script lang="ts">
  import { developerStats } from "$lib/store";
  export let direction: string;
</script>

<div class="character character-walking col-span-1">
  <img
    class="sprite-sheet sprite-sheet-walking pixel-art max-w-none {direction}"
    src={$developerStats.imagePath}
    alt={`${$developerStats.style} developer walking ${direction}`}
  />
</div>
