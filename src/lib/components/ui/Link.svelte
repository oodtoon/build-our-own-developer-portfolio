<script lang="ts">
  export let href: string;
</script>

<a
  {href}
  class="border-2 border-solid border-green-200 rounded p-2 text-xl justify-self-start hover:bg-green-200 hover:text-black"
>
  <slot />
</a>
