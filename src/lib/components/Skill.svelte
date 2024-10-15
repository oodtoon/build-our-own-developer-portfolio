<script lang="ts">
  import { techSkills, developerStats } from "$lib/store";
  import type { SkillType } from "$lib/types";
  import SkillCard from "./SkillCard.svelte";

  export let skill: SkillType;
  export let isInDeveloperCart = false;

  function addToDeveloper() {
    $techSkills = $techSkills.filter((techSkill) => techSkill.id !== skill.id);
    $developerStats.skills.push(skill);
    $developerStats = $developerStats;
  }

  function removeFromDeveloper() {
    $developerStats.skills = $developerStats.skills.filter((devSkill) => devSkill.id !== skill.id)
    $techSkills.push(skill);
    $developerStats = $developerStats
    $techSkills = $techSkills
  }
</script>

<div>
  <div class="grid gap-2">
    <SkillCard {skill} />
    {#if isInDeveloperCart}
      <button
        on:click={removeFromDeveloper}
        class="bg-green-200 text-black flex items-center justify-center rounded text-sm sm:p-2 p1 border-2 border-green-200 hover:bg-black hover:text-green-200"
        >Remove From Dev</button
      >
    {:else}
      <button
        class="bg-green-200 text-black flex items-center justify-center rounded text-sm sm:p-2 p1 border-2 border-green-200 hover:bg-black hover:text-green-200"
        on:click={addToDeveloper}
      >
        Add To Dev</button
      >
    {/if}
  </div>
</div>
