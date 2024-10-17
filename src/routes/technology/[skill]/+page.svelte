<script lang="ts">
  import { skillIcons } from "$lib/skills.js";
  import AddRemoveSkillButton from "$lib/components/AddRemoveSkillButton.svelte";
  import type { SkillType } from "$lib/types";

  export let data: SkillType;

  $: skillIcon = skillIcons[data.id as keyof typeof skillIcons];
</script>

<h1 class="text-4xl flex items-center gap-2 underline">
  {data.title}
  <svelte:component this={skillIcon} />
</h1>
<div></div>
<AddRemoveSkillButton skill={data} />
