<script>
  import { page } from "$app/stores";
  import { toast } from "$lib/store";

  let links = [
    { label: "Developer Builder", href: "/" },
    { label: "Training Projects", href: "/developer-training" },
    { label: "Checkout", href: "/checkout" },
  ];

  function closeToast() {
    $toast = null;
  }
</script>

<nav class="text-green-200 flex wrap gap-6 p-4 text-2xl">
  {#each links as link}
    <a
      on:click={closeToast}
      href={link.href}
      class={$page.url.pathname === link.href
        ? "bg-gradient-to-t from-violet-500 via-pink-600 to-yellow-300 inline-block text-transparent bg-clip-text"
        : ""}>{link.label}</a
    >
  {/each}
</nav>
