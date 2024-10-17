// place files you want to import through the `$lib` alias in this folder.
import { skills } from "./skills";
import { Developer } from "./developer";
import { projects } from "./projects";
import { messageSchema } from "./schemas";

import type { ComponentProps } from "svelte";
import { default as Toast } from "./components/Toast.svelte";

export { skills, projects, messageSchema, Developer };

export { Toast };
export type ToastProps = ComponentProps<Toast>;
