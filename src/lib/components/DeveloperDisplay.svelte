<script lang="ts">
  import DeveloperGraphic from "./DeveloperCreator/DeveloperGraphic.svelte";
  import MainInfo from "./DeveloperCreator/MainInfo.svelte";
  import StyleSelector from "./DeveloperCreator/StyleSelector.svelte";
  import SkillField from "./DeveloperCreator/SkillField.svelte";
  import type { SkillFieldType } from "$lib/types";
  import Button from "./ui/Button.svelte";
  import { developerStats, techSkills } from "$lib/store";
  import { initialDeveloperStats, skills } from "$lib";
  import Link from "./ui/Link.svelte";

  let direction = "right";

  const skillFields: SkillFieldType[] = [
    { label: "Languages", group: "languages" },
    { label: "Frameworks", group: "frameworks" },
    { label: "Databases", group: "databases" },
    { label: "Bonuses", group: "bonuses" },
  ];

  function moveCharacter(e: KeyboardEvent) {
    switch (e.key) {
      case "ArrowUp":
        direction = "up";
        break;
      case "ArrowDown":
        direction = "down";
        break;
      case "ArrowLeft":
        direction = "left";
        break;
      case "ArrowRight":
        direction = "right";
        break;
      default:
        console.log("use arrow keys to control character direction");
    }
  }

  function removeLastSkill() {
    if ($developerStats.skills.length) {
      const removedSkill = $developerStats.skills.pop();
      $techSkills.push(removedSkill!);
    }

    $developerStats = $developerStats;
    $techSkills = $techSkills;
  }

  function resetDeveloper() {
    $techSkills = [...skills];
    $developerStats = { ...initialDeveloperStats };
  }
</script>

<svelte:document on:keydown={moveCharacter} />

<div
  class="top-right-bottom-left-slant place-self-center rounded h-[36rem] w-96 bg-gradient-to-bl from-yellow-300 via-orange-400 to-pink-600 p-1"
>
  <div class="grid top-right-bottom-left-slant h-full w-full bg-black p-4">
    <MainInfo />
    <StyleSelector />
    {#each skillFields as skillField}
      <SkillField {skillField} />
    {/each}

    <div class="grid grid-cols-2">
      <DeveloperGraphic {direction} />
      <div class="grid gap-2 place-self-center">
        
        <Link href="/developer-training">Select Developer</Link>
        <Button eventType="removeLastSkill" on:removeLastSkill={removeLastSkill}
          >Remove Last Skill</Button
        >
        <Button eventType="reset" on:reset={resetDeveloper}
          >Reset Developer</Button
        >
      </div>
    </div>
  </div>
</div>
