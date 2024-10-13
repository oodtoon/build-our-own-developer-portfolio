<script lang="ts">
  import DeveloperDisplay from "$lib/components/DeveloperDisplay.svelte";
  import Search from "$lib/components/Search.svelte";
  import Skill from "$lib/components/Skill.svelte";
  import FancyTitle from "$lib/components/ui/FancyTitle.svelte";
  import { techSkills } from "$lib/store";
</script>

<FancyTitle>
  <span slot="standard">Build The Developer of Your</span>
  <span slot="fancy">DREAMS</span>
</FancyTitle>

<p class="text-xl">NOTE: Any technology found and added to developer can be used on the job.</p>

<div class="grid grid-flow-col gap-6 w-full max-w-4xl">
  <DeveloperDisplay />

  <div class="grid gap-2 place-content-start">
    <Search />
    <div class="flex flex-wrap gap-6">
      {#each $techSkills as skill}
        <Skill {skill} />
      {/each}
    </div>
  </div>
</div>
