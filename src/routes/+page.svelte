<script lang="ts">
  import DeveloperDisplay from "$lib/components/DeveloperDisplay.svelte";
  import Search from "$lib/components/Search.svelte";
  import SkillsDisplay from "$lib/components/SkillsDisplay.svelte";
  import FancyTitle from "$lib/components/ui/FancyTitle.svelte";
  import { techSkills } from "$lib/store";

</script>


<FancyTitle>
  <span slot="standard">Build The Developer of Your</span>
  <span slot="fancy">DREAMS</span>
</FancyTitle>

<p class="text-xl">
  NOTE: Any technology found and added to developer can be used on the job.
</p>

<div class="grid grid-cols-1 gap-6 w-full max-w-4xl lg:grid-cols-2">
  <DeveloperDisplay />

  <div
    class="grid gap-2 place-content-start min-w-full lg:col-start-2 row-start-1"
  >
    <Search />
    {#if $techSkills}
      <SkillsDisplay skills={$techSkills} />
    {/if}
  </div>
</div>
