<script lang="ts">
  import "../app.css";
  import Nav from "$lib/components/Nav.svelte";
  import Toast from "$lib/components/Toast.svelte";
  import { toast } from "$lib/store";

  let toastInt: NodeJS.Timeout;

  $: if ($toast) {
    toastInt = setTimeout(() => {
      $toast = null;
    }, 7000);
  }

  function closeToast() {
    $toast = null
    clearTimeout(toastInt);
  }
</script>

{#if $toast}
  <Toast
    title={$toast.title}
    message={$toast.message}
    isLevelUp={$toast.isLevelUp}
    on:closeToast={closeToast}
  />
{/if}
<Nav />
<main class="container m-4 text-green-200 grid justify-items-center gap-4 md:m-auto">
  <slot />
</main>
