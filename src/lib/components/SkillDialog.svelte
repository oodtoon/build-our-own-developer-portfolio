<script lang="ts">
  import type { SkillType } from "$lib/types";

  export let skill: SkillType;

</script>

<dialog class="border-2 border-solid border-pink-500" open>
  {skill.title}
  This is a dialog
</dialog>