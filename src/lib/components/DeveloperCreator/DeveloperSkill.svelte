<script lang="ts">
  import { skillIcons } from "$lib/skills";

  export let id: string;

  $: skillIcon = skillIcons[id as keyof typeof skillIcons];
</script>

<span><svelte:component this={skillIcon} /></span>
