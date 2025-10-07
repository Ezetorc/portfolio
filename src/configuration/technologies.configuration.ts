import AstroIcon from "../components/icons/AstroIcon.astro";
import CSSIcon from "../components/icons/CSSIcon.astro";
import DockerIcon from "../components/icons/DockerIcon.astro";
import ExpressIcon from "../components/icons/ExpressIcon.astro";
import GithubIcon from "../components/icons/GithubIcon.astro";
import GitIcon from "../components/icons/GitIcon.astro";
import HTMLIcon from "../components/icons/HTMLIcon.astro";
import JavaScriptIcon from "../components/icons/JavaScriptIcon.astro";
import MySQLIcon from "../components/icons/MySQLIcon.astro";
import NestJSIcon from "../components/icons/NestJSIcon.astro";
import NodeJSIcon from "../components/icons/NodeJSIcon.astro";
import PrismaIcon from "../components/icons/PrismaIcon.astro";
import ReactIcon from "../components/icons/ReactIcon.astro";
import RedisIcon from "../components/icons/RedisIcon.astro";
import TailwindIcon from "../components/icons/TailwindIcon.astro";
import TypeScriptIcon from "../components/icons/TypeScriptIcon.astro";
import ViteIcon from "../components/icons/ViteIcon.astro";
import type { AstroComponent } from "../models/astro-component.model";

export const TECHNOLOGIES: {
  [key: string]: { name: string; icon: AstroComponent };
} = {
  html: { name: "HTML", icon: HTMLIcon },
  css: { name: "CSS", icon: CSSIcon },
  javascript: { name: "JavaScript", icon: JavaScriptIcon },
  typescript: { name: "TypeScript", icon: TypeScriptIcon },
  github: { name: "GitHub", icon: GithubIcon },
  react: { name: "React", icon: ReactIcon },
  tailwind: { name: "Tailwind", icon: TailwindIcon },
  astro: { name: "Astro", icon: AstroIcon },
  vite: { name: "Vite", icon: ViteIcon },
  mysql: { name: "MySQL", icon: MySQLIcon },
  nodejs: { name: "NodeJS", icon: NodeJSIcon },
  express: { name: "Express", icon: ExpressIcon },
  nestjs: { name: "NestJS", icon: NestJSIcon },
  git: { name: "Git", icon: GitIcon },
  docker: { name: "Docker", icon: DockerIcon },
  redis: { name: "Redis", icon: RedisIcon },
  prisma: { name: "Prisma", icon: PrismaIcon },
};
