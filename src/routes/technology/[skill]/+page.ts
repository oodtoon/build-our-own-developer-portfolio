import { skills } from "$lib";

export function load({ params }) {
  const skillData = skills.find((skill) => skill.id === params.skill);
  return { ...skillData };
}
