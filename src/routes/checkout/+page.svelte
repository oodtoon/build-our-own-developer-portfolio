<script lang="ts">
  import FancyTitle from "$lib/components/ui/FancyTitle.svelte";
  import DeveloperAttackGraphic from "$lib/components/DeveloperAttackGraphic.svelte";
  import { projects } from "$lib";
  import { developerStats, toast } from "$lib/store";
  import { superForm } from "sveltekit-superforms/client";
  import SkillsDisplay from "$lib/components/SkillsDisplay.svelte";

  export let data;
  let projectsCompleted: number = 0;

  const { form, enhance, constraints } = superForm(data.form);

  function alertUser() {
    $toast = {
      title: "Success!",
      message: `<p>Thank you for contacting Brody, your dream developer!</p><br/><p>I will get back to you soon to discuss what you are looking for in a developer!</p><br /><p>-If the email you provided is correct.</p>`,
    };
  }

  $: if ($developerStats.projects.length) {
    projectsCompleted = $developerStats.projects.length;
  } else {
    projectsCompleted = 0;
  }
</script>

<FancyTitle>
  <span slot="standard">Checkout to Start Working With Your Dream</span>
  <span slot="fancy">DEVELOPER</span>
</FancyTitle>

<section class="grid grid-cols-1 gap-6 md:grid-cols-2 sm:m-4 m-1">
  <div class="grid">
    <h2 class="text-2xl underline">Your Developer :</h2>
    <DeveloperAttackGraphic
      totalProjects={projects.length}
      {projectsCompleted}
    />
    {#if $developerStats}
      <SkillsDisplay skills={$developerStats.skills} />
    {/if}
  </div>

  <div
    class="top-right-bottom-left-slant max-w-3xl bg-gradient-to-bl from-yellow-300 via-orange-400 to-pink-600 p-1"
  >
    <form
      class="grid grid-cols-4 gap-4 justify-items-stretch top-right-bottom-left-slant h-full w-full bg-black sm:p-10 p-4"
      method="POST"
      use:enhance
      on:submit={alertUser}
    >
      <label
        class="flex gap-2 items-center justify-bewteen text-2xl"
        for="name"
      >
        Name
      </label>
      <input
        class="col-span-4 sm:col-span-3 rounded-lg bg-gray-800 px-2 py-1 text-2xl"
        type="text"
        id="name"
        name="name"
        bind:value={$form.name}
        {...$constraints.name}
        required
      />
      <label
        class="flex gap-2 items-center justify-between text-2xl"
        for="email"
        >Email
      </label>
      <input
        class="col-span-4  sm:col-span-3 rounded-lg bg-gray-800 px-2 py-1 text-2xl"
        type="email"
        id="email"
        name="email"
        bind:value={$form.email}
        {...$constraints.email}
        required
      />

      <label
        class="flex gap-2 items-start justify-between text-2xl"
        for="message"
        >Message
      </label>
      <textarea
        bind:value={$form.message}
        class="col-span-4 sm:col-span-3 rounded-lg bg-gray-800 px-2 py-1 w-72 h-56 text-2xl"
        id="message"
        name="message"
        {...$constraints.message}
        required
      ></textarea>

      <input type="hidden" value={$developerStats.style} name="style" />
      <input
        type="hidden"
        value={$developerStats.skills.map((skill) => skill.id).toString()}
        name="skillsNeeded"
      />
      <input
        type="hidden"
        value={$developerStats.projects.toString()}
        name="projectsViewed"
      />

      <button
        class="col-span-4 justify-self-end border-2 border-solid border-green-200 rounded p-2 text-xl hover:bg-green-200 hover:text-black"
        >Contact Developer</button
      >
    </form>
  </div>
</section>
