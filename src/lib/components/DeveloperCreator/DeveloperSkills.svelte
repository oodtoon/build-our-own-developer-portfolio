<script lang="ts">
  import type { SkillType } from "$lib/types";
  import DeveloperSkill from "./DeveloperSkill.svelte";

  export let skills: SkillType[];
  export let group: string;
</script>

{#each skills as skill}
  {#if skill.group === group}
    <span><DeveloperSkill id={skill.id} /></span>
  {/if}
{/each}
