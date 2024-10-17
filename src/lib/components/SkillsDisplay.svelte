<script lang="ts">
  import type { SkillType } from "$lib/types";
  import Skill from "./Skill.svelte";

  export let skills: SkillType[];

  const LARGE_SCREEN_SIZE = 1024;
  const MAX_SKILLS_TO_SHOW = 5;

  let isViewMore: boolean = false;

  let innerWidth: number;

  function toggleTotalSkillsShown() {
    isViewMore = !isViewMore;
  }
</script>

<svelte:window bind:innerWidth />

<div class="flex flex-wrap gap-2 sm:gap-6">
  {#if skills.length}
    {#each skills as skill, i}
      {#if innerWidth > LARGE_SCREEN_SIZE || isViewMore}
        <Skill {skill} />
      {:else if i < MAX_SKILLS_TO_SHOW}
        <Skill {skill} />
      {/if}
    {/each}
    {#if skills.length > MAX_SKILLS_TO_SHOW}
      <button
        on:click={toggleTotalSkillsShown}
        class="text-xl self-end lg:hidden md:block"
      >
        {#if isViewMore}
          View less
        {:else}
          View more
        {/if}
      </button>
    {/if}
  {:else}
    <p class="text-xl">No more skills available.</p>
  {/if}
</div>
