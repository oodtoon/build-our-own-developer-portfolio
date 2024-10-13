<script lang="ts">
  import { developerStats } from "$lib/store";
  import type { SkillFieldType, SkillType } from "$lib/types";
  import DeveloperSkills from "./DeveloperSkills.svelte";

  export let skillField: SkillFieldType;
</script>

<span class="text-2xl flex gap-2"
  >{skillField.label} :
  {#if $developerStats.skills}
    <DeveloperSkills skills={$developerStats.skills} group={skillField.group} />
  {/if}
</span>
