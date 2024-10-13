<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let eventType: string;
  let className: string = ""
  export { className as class };

  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch(eventType);
  }
</script>

<button
  on:click={handleClick}
  class="border-2 border-solid border-green-200 rounded p-2 text-xl justify-self-start hover:bg-green-200 hover:text-black {className}"
  type="button"
>
  <slot />
</button>
