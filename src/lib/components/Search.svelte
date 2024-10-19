<script lang="ts">
  export let value: string;
</script>

<label class="text-2xl flex items-center gap-2"
  >Search Skills: <input
    bind:value
    type="text"
    class="rounded-lg bg-gray-800 w-1/2 px-2 py-1"
  /></label
>
