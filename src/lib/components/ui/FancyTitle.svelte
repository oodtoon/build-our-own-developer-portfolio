<script lang="ts">
</script>

<h1 class="text-green-200 text-5xl border-b-2 border-green-200 px-2">
  <slot name="standard" />
  <span
    class="bg-gradient-to-b from-indigo-800 via-pink-600 to-yellow-300 inline-block text-transparent bg-clip-text text-6xl"
  >
    <slot name="fancy" />
  </span>
</h1>
