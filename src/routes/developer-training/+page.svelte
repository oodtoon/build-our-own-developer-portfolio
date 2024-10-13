<script lang="ts">
  import { developerStats, toast } from "$lib/store";
  import FancyTitle from "$lib/components/ui/FancyTitle.svelte";
  import DeveloperAttackGraphic from "$lib/components/DeveloperAttackGraphic.svelte";
  import CheckIcon from "$lib/components/icons/CheckIcon.svelte";
  import CrossIcon from "$lib/components/icons/CrossIcon.svelte";
  import { projects } from "$lib";

  let focusedSection = "newell-automations";

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
</script>

<FancyTitle>
  <span slot="standard">Level Up Your Developer With</span>
  <span slot="fancy">PROJECTS</span>
</FancyTitle>

<p class="text-xl">
  NOTE : View each project to gain exp and level of your developer.
</p>

<div class="grid">
  <div class="grid gap-10">
    {#each projects as project}
      <section id={project.id} class="flex gap-4">
        <div>
          {#if focusedSection === project.id}
            <DeveloperAttackGraphic totalProjects={projects.length} />
          {:else if $developerStats.projects.includes(project.id)}
            <span class="flex gap-2 text-xl">Complete <CheckIcon /></span>
          {:else}
            <span class="flex gap-2 text-xl my-6 mx-1"
              >Not Viewed <CrossIcon /></span
            >
          {/if}
        </div>
        <div class="col-start-2">
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
</div>
