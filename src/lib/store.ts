import { persisted } from "svelte-persisted-store";
import type { DeveloperInfoType, SkillType } from "./types";
import { writable } from "svelte/store";
import { type ToastProps, Developer, skills } from "$lib";

export const techSkills = persisted<SkillType[]>("skills", skills);
export const developerStats = persisted<DeveloperInfoType>(
  "developer-stats",
  new Developer()
);
export const toast = writable<ToastProps | null>(null);
