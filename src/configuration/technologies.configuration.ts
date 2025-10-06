import AstroIcon from "../components/icons/AstroIcon.astro";
import CSSIcon from "../components/icons/CSSIcon.astro";
import ExpressIcon from "../components/icons/ExpressIcon.astro";
import GithubIcon from "../components/icons/GithubIcon.astro";
import GitIcon from "../components/icons/GitIcon.astro";
import HTMLIcon from "../components/icons/HTMLIcon.astro";
import JavaScriptIcon from "../components/icons/JavaScriptIcon.astro";
import MySQLIcon from "../components/icons/MySQLIcon.astro";
import NestJSIcon from "../components/icons/NestJSIcon.astro";
import NodeJSIcon from "../components/icons/NodeJSIcon.astro";
import ReactIcon from "../components/icons/ReactIcon.astro";
import TailwindIcon from "../components/icons/TailwindIcon.astro";
import TypeScriptIcon from "../components/icons/TypeScriptIcon.astro";
import ViteIcon from "../components/icons/ViteIcon.astro";

export const TECHNOLOGIES: {
  [key: string]: (_props: Record<string, any>) => any;
} = {
  html: HTMLIcon,
  css: CSSIcon,
  javascript: JavaScriptIcon,
  typescript: TypeScriptIcon,
  github: GithubIcon,
  react: ReactIcon,
  tailwind: TailwindIcon,
  astro: AstroIcon,
  vite: ViteIcon,
  mysql: MySQLIcon,
  nodejs: NodeJSIcon,
  express: ExpressIcon,
  nestjs: NestJSIcon,
  git: GitIcon,
};
