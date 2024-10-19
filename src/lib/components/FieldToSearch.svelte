<script lang="ts">
  export let group: string = "title";
</script>

<label for="title" class="flex gap-2 items-center text-lg"
  >Title:
  <div class="grid place-items-center">
    <input
      class="col-start-1 row-start-1 appearance-none w-4 h-4 border-2 border-green-200 rounded-full peer/title"
      id="title"
      type="radio"
      value="title"
      checked
      bind:group
    />
    <div
      class="col-start-1 row-start-1 bg-green-200 w-2 h-2 rounded-full hidden peer-checked/title:block"
    ></div>
  </div>
</label>
<label class="group flex gap-2 items-center text-lg" for="category"
  >Category:
  <div class="grid place-items-center">
    <input
      class="col-start-1 row-start-1 appearance-none w-4 h-4 border-2 border-green-200 rounded-full peer/category"
      id="category"
      type="radio"
      value="category"
      bind:group
    />

    <div
      class="col-start-1 row-start-1 bg-green-200 w-2 h-2 rounded-full hidden peer-checked/category:block"
    ></div>
  </div>
</label>
