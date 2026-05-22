import AstroIcon from "../components/icons/AstroIcon.astro";
import BunIcon from "../components/icons/BunIcon.astro";
import CloudinaryIcon from "../components/icons/CloudinaryIcon.astro";
import CSSIcon from "../components/icons/CSSIcon.astro";
import DockerIcon from "../components/icons/DockerIcon.astro";
import DrizzleIcon from "../components/icons/DrizzleIcon.astro";
import ExpressIcon from "../components/icons/ExpressIcon.astro";
import GithubIcon from "../components/icons/GithubIcon.astro";
import GitIcon from "../components/icons/GitIcon.astro";
import HTMLIcon from "../components/icons/HTMLIcon.astro";
import JavaScriptIcon from "../components/icons/JavaScriptIcon.astro";
import MySQLIcon from "../components/icons/MySQLIcon.astro";
import NestJSIcon from "../components/icons/NestJSIcon.astro";
import NodeJSIcon from "../components/icons/NodeJSIcon.astro";
import PostgreSQLIcon from "../components/icons/PostgreSQLIcon.astro";
import PrismaIcon from "../components/icons/PrismaIcon.astro";
import ReactIcon from "../components/icons/ReactIcon.astro";
import RustIcon from "../components/icons/RustIcon.astro";
import SvelteIcon from "../components/icons/SvelteIcon.astro";
import TailwindIcon from "../components/icons/TailwindIcon.astro";
import TypeScriptIcon from "../components/icons/TypeScriptIcon.astro";
import ZodIcon from "../components/icons/ZodIcon.astro";
import type { AstroComponent } from "../models/astro-component.model";

export type TechnologyId = "html" | "css" | "javascript" | "typescript" | "github" | "react" | "tailwind" | "astro" | "mysql" | "nodejs" | "express" | "nestjs" | "git" | "docker" | "prisma" | "drizzle" | "postgresql" | "cloudinary" | "rust" | "zod" | "sveltekit" | "bun"

export const TECHNOLOGIES: {
  [key in TechnologyId]: { name: string; icon: AstroComponent };
} = {
  html: { name: "HTML", icon: HTMLIcon },
  css: { name: "CSS", icon: CSSIcon },
  javascript: { name: "JavaScript", icon: JavaScriptIcon },
  typescript: { name: "TypeScript", icon: TypeScriptIcon },
  github: { name: "GitHub", icon: GithubIcon },
  react: { name: "React", icon: ReactIcon },
  tailwind: { name: "Tailwind", icon: TailwindIcon },
  astro: { name: "Astro", icon: AstroIcon },
  mysql: { name: "MySQL", icon: MySQLIcon },
  nodejs: { name: "NodeJS", icon: NodeJSIcon },
  express: { name: "Express", icon: ExpressIcon },
  nestjs: { name: "NestJS", icon: NestJSIcon },
  git: { name: "Git", icon: GitIcon },
  docker: { name: "Docker", icon: DockerIcon },
  prisma: { name: "Prisma", icon: PrismaIcon },
  drizzle: { name: "Drizzle", icon: DrizzleIcon },
  postgresql: { name: "PostgreSQL", icon: PostgreSQLIcon },
  cloudinary: { name: "Cloudinary", icon: CloudinaryIcon },
  rust: { name: "Rust", icon: RustIcon },
  zod: { name: "Zod", icon: ZodIcon },
  sveltekit: { name: "SvelteKit", icon: SvelteIcon },
  bun: { name: "Bun", icon: BunIcon },
};
