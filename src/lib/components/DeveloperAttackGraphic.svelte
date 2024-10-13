<script lang="ts">
  import { developerStats } from "$lib/store";

  export let totalProjects: number;
  let exp: number;

  $: spriteAttackStyle =
    $developerStats.style === "Battle" || $developerStats.style === "Pirate"
      ? "weapon-attack-sprite"
      : "attack-sprite";

  $: rightAmount =
    $developerStats.style === "Battle" || $developerStats.style === "Pirate"
      ? "weapon-attack-right"
      : "attack-right";

  $: if ($developerStats.projects) {
    exp = $developerStats.projects.length / totalProjects;
  } else {
    exp = 0 / totalProjects;
  }

</script>

<div class="grid items-center">
  <div class="character attack-character col-span-1">
    <img
      class="sprite-sheet attack-sprite-sheet {spriteAttackStyle} {rightAmount} pixel-art max-w-none"
      src={$developerStats.attackingImagePath}
      alt={`${$developerStats.style} developer attacking right`}
    />
  </div>

  <label class="flex items-center gap-2">
    EXP:
    <progress
      value={exp}
      class="border-2 border-green-200 border-sold rounded w-1/2"
    ></progress>
  </label>
</div>

<style>
  progress::-webkit-progress-bar {
    background-color: #1f2937;
  }

  progress::-webkit-progress-value {
    background: linear-gradient(
      to right,
      rgb(55 48 163),
      rgb(219 39 119),
      rgb(253 224 71)
    );
  }

  .attack-character {
    width: calc(15px * var(--pixel-size));
    height: calc(15px * var(--pixel-size));
  }

  .attack-sprite-sheet {
    width: calc(200px * var(--pixel-size));
  }

  .weapon-attack-sprite {
    animation: moveWeaponAttackSprite 1s steps(6) infinite;
    left: -69%;
  }

  .weapon-attack-right {
    top: calc(-107px * var(--pixel-size));
  }

  @keyframes moveWeaponAttackSprite {
    from {
      transform: translate3d(0px, 0, 0);
    }
    to {
      transform: translate3d(-100%, 0, 0);
    }
  }

  .attack-sprite {
    animation: moveAttackSprite 1s steps(6) infinite;
    left: -10%;
  }

  .attack-right {
    top: calc(-46px * var(--pixel-size));
  }

  @keyframes moveAttackSprite {
    from {
      transform: translate3d(0px, 0, 0);
    }
    to {
      transform: translate3d(-46%, 0, 0);
    }
  }
</style>
