<script lang="ts">
  import { skillIcons } from "$lib/skills";
  import type { SkillType } from "$lib/types";

  export let skill: SkillType;

  $: skillIcon = skillIcons[skill.id as keyof typeof skillIcons];
</script>

<div
  class="sm:h-28 sm:w-28 h-20 w-20 border-2 border-green-200 border-solid rounded"
>
  <a
    href={skill.href}
    class="w-full h-full flex flex-col hover:bg-green-200 hover:text-black"
  >
    <div class="self-center my-auto">
      <svelte:component this={skillIcon} />
    </div>
    <div class="self-end mx-1">
      {skill.title}
    </div>
  </a>
</div>
