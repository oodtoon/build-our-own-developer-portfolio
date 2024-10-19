<script lang="ts">
  import type { SkillType } from "$lib/types";
  import Search from "./Search.svelte";
  import FieldToSearch from "./FieldToSearch.svelte";
  import Skill from "./Skill.svelte";
  import { developerStats } from "$lib/store";

  export let skills: SkillType[];
  let searchValue: string;
  let fieldToSearchBy: string;
  let noSearchResult: string = "No more skills available.";

  const LARGE_SCREEN_SIZE = 1024;
  const MAX_SKILLS_TO_SHOW = 5;

  let isViewMore: boolean = false;

  let innerWidth: number;

  function toggleTotalSkillsShown() {
    isViewMore = !isViewMore;
  }

  $: foundSkills = searchValue
    ? skills.filter((skill) => {
        let skillTitleLowercase =
          skill[fieldToSearchBy as keyof typeof skill].toLocaleLowerCase();
        let searchLowercase = searchValue.toLocaleLowerCase();
        return skillTitleLowercase.includes(searchLowercase);
      })
    : skills;

  $: if (!foundSkills.length) {
    let foundSkill = $developerStats.skills.find((devSkill) => {
      return devSkill[fieldToSearchBy as keyof typeof devSkill]
        .toLocaleLowerCase()
        .includes(searchValue.toLocaleLowerCase());
    });
    noSearchResult = foundSkill
      ? fieldToSearchBy === "category"
        ? "No more skills in that category"
        : "Skill already on Developer"
      : "No more skills available";
  }
</script>

<svelte:window bind:innerWidth />

<div class="flex wrap gap-2">
  <Search bind:value={searchValue} />
  <FieldToSearch bind:group={fieldToSearchBy} />
</div>

<div class="flex flex-wrap gap-2 sm:gap-6">
  {#if foundSkills.length}
    {#each foundSkills as skill, i}
      {#if innerWidth > LARGE_SCREEN_SIZE || isViewMore}
        <Skill {skill} />
      {:else if i < MAX_SKILLS_TO_SHOW}
        <Skill {skill} />
      {/if}
    {/each}
    {#if foundSkills.length > MAX_SKILLS_TO_SHOW}
      <button
        on:click={toggleTotalSkillsShown}
        class="text-xl self-end lg:hidden md:block"
      >
        {#if isViewMore}
          View less
        {:else}
          View more
        {/if}
      </button>
    {/if}
  {:else}
    <p class="text-xl">{noSearchResult}</p>
  {/if}
</div>
