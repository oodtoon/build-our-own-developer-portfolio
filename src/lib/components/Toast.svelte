<script lang="ts">
  import CrossIcon from "./icons/CrossIcon.svelte";
  import { createEventDispatcher } from "svelte";
  import { developerStats } from "$lib/store";

  export let message: string;
  export let title: string;
  export let isLevelUp: boolean = false;

  const dispatch = createEventDispatcher();

  function handleClose() {
    dispatch("closeToast");
  }
</script>

<div
  class="absolute -translate-x-1/2 left-1/2 rounded top-24 z-10 max-w-md top-left-bottom-right-slant bg-gradient-to-bl from-yellow-300 via-orange-400 to-pink-600 p-2"
>
  <div class="grid grid-cols-2 top-left-bottom-right-slant bg-green-200 p-10">
    <h2 class="text-4xl underline">{title}</h2>
    <button class="justify-self-end" on:click={handleClose}
      ><CrossIcon /></button
    >
    <p class="text-2xl col-span-2">
      {message}
    </p>
    {#if isLevelUp}
      <a class="text-xl underline col-span-2" href="/checkout" on:click={handleClose}
        >Contact Your {$developerStats.style} Developer!</a
      >
    {/if}
  </div>
</div>
