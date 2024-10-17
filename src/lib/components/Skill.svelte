<script lang="ts">
  import type { SkillType } from "$lib/types";
  import SkillCard from "./SkillCard.svelte";
  import AddRemoveSkillButton from "./AddRemoveSkillButton.svelte";

  export let skill: SkillType;
</script>

<div>
  <div class="grid gap-2">
    <SkillCard {skill} />
    <AddRemoveSkillButton {skill} />
  </div>
</div>
