<script lang="ts">
  import { developerStats, toast } from "$lib/store";
  import FancyTitle from "$lib/components/ui/FancyTitle.svelte";
  import DeveloperAttackGraphic from "$lib/components/DeveloperAttackGraphic.svelte";
  import CheckIcon from "$lib/components/icons/CheckIcon.svelte";
  import CrossIcon from "$lib/components/icons/CrossIcon.svelte";
  import { projects } from "$lib";

  let focusedSection = "newell-automations";
  let projectsCompleted = 0;
  let scrollY: number = 0;
  let innerHeight: number;
  let sectionIndex: number = 0;
  const INDEX_OFFSET = 1

  function addProjectExpToDev(id: string) {
    $developerStats.projects.push(id);
    $developerStats = $developerStats;
  }

  function handleFocus(id: string) {
    focusedSection = id;
  }

  function levelUpToast() {
    $toast = {
      title: "Level Up!",
      message:
        "Congrats! You have viewed all available projects and leveled up your developer skills! A true professional!",
      isLevelUp: true,
    };
  }

  $: if (projects.length === $developerStats.projects.length) {
    levelUpToast();
  }

  $: if ($developerStats.projects.length) {
    projectsCompleted = $developerStats.projects.length;
  } else {
    projectsCompleted = 0;
  }

  $: if (!isNaN(scrollY / innerHeight)) {
    sectionIndex = Math.floor(scrollY / innerHeight) + INDEX_OFFSET;
  }
  $: console.log(sectionIndex);
</script>

<svelte:window bind:scrollY bind:innerHeight />

<FancyTitle>
  <span slot="standard">Level Up Your Developer With</span>
  <span slot="fancy">PROJECTS</span>
</FancyTitle>

<p class="text-xl">
  NOTE : View each project to gain exp and level of your developer.
</p>

<div class="grid gap-y-14">
  {#each projects as project, i}
    <section
      id={project.id}
      class="grid grid-cols-5 sm:h-auto h-lvh justify-items-start items-center"
    >
      <div class="col-start-1">
        <div class="hidden sm:block">
          {#if focusedSection === project.id}
            <DeveloperAttackGraphic
              totalProjects={projects.length}
              {projectsCompleted}
            />
          {:else if $developerStats.projects.includes(project.id)}
            <span class="flex gap-2 text-xl">Complete <CheckIcon /></span>
          {:else}
            <span class="flex gap-2 text-xl my-6 mx-1"
              >Not Viewed <CrossIcon /></span
            >
          {/if}
        </div>
        <div class="sm:hidden block">
          <DeveloperAttackGraphic
            totalProjects={projects.length}
            projectsCompleted={sectionIndex}
          />
        </div>
      </div>

      <div class="col-span-4">
        <a
          on:click={() => addProjectExpToDev(project.id)}
          class="underline text-4xl hover:bg-gradient-to-b hover:from-indigo-800 hover:via-pink-600 hover:to-yellow-300 inline-block hover:text-transparent hover:bg-clip-text"
          href={project.href}
          target="_blank"
          on:focus={() => handleFocus(project.id)}
        >
          {project.label}
        </a>
        <ul class="list-disc mx-6 text-2xl">
          {#each project.notes as note}
            <li>{note}</li>
          {/each}
        </ul>
      </div>
    </section>
  {/each}
</div>
