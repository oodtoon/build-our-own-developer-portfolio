import type { SkillType } from "./types";

export class Developer {
  readonly name: string = "Brody Blair";
  readonly occupation = "Frontend Developer";
  style: string = "Base";
  imagePath: string = "/sprites/baseSpriteSheet.png";
  attackingImagePath: string = "/sprites/attacks/baseSpriteSheetAttack.png";
  skills: SkillType[] = [];
  projects: string[] = [];
}
