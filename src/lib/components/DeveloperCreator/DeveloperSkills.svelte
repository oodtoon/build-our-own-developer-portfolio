<script lang="ts">
  import type { SkillType } from "$lib/types";
  import DeveloperSkill from "./DeveloperSkill.svelte";

  export let skills: SkillType[];
  export let category: string;
</script>

{#each skills as skill}
  {#if skill.category === category}
    <span><DeveloperSkill id={skill.id} /></span>
  {/if}
{/each}
