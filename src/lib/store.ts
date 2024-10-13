import { persisted } from "svelte-persisted-store";
import { skills } from "./skills";
import { initialDeveloperStats } from "./developer";
import type { DeveloperInfoType, SkillType } from "./types";
import { writable } from "svelte/store";
import type { ToastProps } from "$lib";

export const techSkills = persisted<SkillType[]>("skills", skills);
export const developerStats = persisted<DeveloperInfoType>(
  "developer-stats",
  initialDeveloperStats
);
export const toast = writable<ToastProps | null>(null);
