<script lang="ts">
  import { developerStats } from "$lib/store";
  import LeftArrowIcon from "../icons/LeftArrowIcon.svelte";
  import RightArrowIcon from "../icons/RightArrowIcon.svelte";

  let selectedStyleIndex = 0;
  const INDEX_OFFSET = 1;

  const developerStyles = [
    {
      style: "Base",
      imagePath: "/sprites/baseSpriteSheet.png",
      attackingImagePath: "/sprites/attacks/baseSpriteSheetAttack.png",
    },
    {
      style: "Student",
      imagePath: "/sprites/studentSpriteSheet.png",
      attackingImagePath: "/sprites/attacks/studentSpriteSheetAttack.png",
    },
    {
      style: "Fancy",
      imagePath: "/sprites/fancySpriteSheet.png",
      attackingImagePath: "/sprites/attacks/fancySpriteSheetAttack.png",
    },
    {
      style: "Battle",
      imagePath: "/sprites/battleSpriteSheet.png",
      attackingImagePath: "/sprites/attacks/battleSpriteSheetAttack.png",
    },
    {
      style: "Beach",
      imagePath: "/sprites/beachSpriteSheet.png",
      attackingImagePath: "/sprites/attacks/beachSpriteSheetAttack.png",
    },
    {
      style: "Pirate",
      imagePath: "/sprites/pirateSpriteSheet.png",
      attackingImagePath: "/sprites/attacks/pirateSpriteSheetAttack.png",
    },
  ];

  function updateState() {
    $developerStats.style = developerStyles[selectedStyleIndex].style;
    setImages();
  }

  function setImages() {
    $developerStats.imagePath = developerStyles[selectedStyleIndex].imagePath;
    $developerStats.attackingImagePath =
      developerStyles[selectedStyleIndex].attackingImagePath;
  }

  function handleRightClick() {
    selectedStyleIndex =
      (selectedStyleIndex + INDEX_OFFSET) % developerStyles.length;
    updateState();
  }

  function handleLeftClick() {
    selectedStyleIndex =
      (selectedStyleIndex - INDEX_OFFSET + developerStyles.length) %
      developerStyles.length;
    updateState();
  }
</script>

<section
  class="flex items-center w-full justify-between"
  id="developer-classes"
>
  <button on:click={handleLeftClick}><LeftArrowIcon /></button>
  <div class="text-2xl">
    Style : {$developerStats.style}
  </div>
  <button on:click={handleRightClick}><RightArrowIcon /></button>
</section>
