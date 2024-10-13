import SvelteIcon from "./components/icons/tech/SvelteIcon.svelte";
import ReactIcon from "./components/icons/tech/ReactIcon.svelte";
import ReduxIcon from "./components/icons/tech/ReduxIcon.svelte";
import NextIcon from "./components/icons/tech/NextIcon.svelte";
import JavaScriptIcon from "./components/icons/tech/JavaScriptIcon.svelte";
import TypeScriptIcon from "./components/icons/tech/TypeScriptIcon.svelte";
import HtmlIcon from "./components/icons/tech/HTMLIcon.svelte";
import TailwindIcon from "./components/icons/tech/TailwindIcon.svelte";
import CssIcon from "./components/icons/tech/CSSIcon.svelte";

export const skills = [
  {
    title: "SvelteKit",
    content: "",
    id: "sveltekit",
    experience: "",
    href: "/technology/sveltekit",
    group: "frameworks"
  },
  {
    title: "React",
    content: "",
    id: "react",
    experience: "",
    href: "/technology/react",
    group: "frameworks"
  },
  {
    title: "Redux",
    content: "",
    id: "redux",
    experience: "",
    href: "/technology/redux",
    group: "bonuses"
  },
  {
    title: "Next.JS",
    content: "",
    id: "nextjs",
    experience: "",
    href: "/technology/nextjs",
    group: "frameworks",
  },
  {
    title: "JavaScript",
    content: "",
    id: "javascript",
    experience: "",
    href: "/technology/javascript",
    group: "languages"
  },
  {
    title: "TypeScript",
    content: "",
    id: "typescript",
    experience: "",
    href: "/technology/typescript",
    group: "languages"
  },
  {
    title: "HTML",
    content: "",
    id: "html",
    experience: "",
    href: "/technology/html",
    group: "languages"
  },
  {
    title: "Tailwind",
    content: "",
    id: "tailwind",
    experience: "",
    href: "/technology/tailwind",
    group: "bonuses"
  },
  {
    title: "CSS",
    content: "",
    id: "css",
    experience: "",
    href: "/technology/css",
    group: "bonuses"
  },
];

export const skillIcons = {
  sveltekit: SvelteIcon,
  react: ReactIcon,
  redux: ReduxIcon,
  nextjs: NextIcon,
  javascript: JavaScriptIcon,
  typescript: TypeScriptIcon,
  html: HtmlIcon,
  css: CssIcon,
  tailwind: TailwindIcon,
};
