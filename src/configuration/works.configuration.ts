import type { Work } from "../models/work.model";

export const WORKS: Work[] = [
  {
    id: "bolsillo-feliz",
    images: {
      icon: "/assets/images/work/bolsilloFeliz/icon.webp",
      overview: "/assets/images/work/bolsilloFeliz/register-page.webp",
      process: "/assets/images/work/bolsilloFeliz/posts-page.webp",
    },
    technologies: {
      frontend: ["html", "css", "typescript", "react"],
      backend: ["nodejs", "express", "typescript", "mysql", "prisma"],
    },
    colors: {
      from: "#E5C598",
      to: "#875D22",
    },
    links: {
      code: "https://github.com/Ezetorc/bolsillo-feliz",
    },
  },
  {
    id: "vibe-network",
    images: {
      icon: "/assets/images/work/vibeNetwork/icon.webp",
      overview: "/assets/images/work/vibeNetwork/register-page.webp",
      process: "/assets/images/work/vibeNetwork/posts-page.webp",
    },
    technologies: {
      frontend: ["html", "css", "typescript", "react"],
      backend: ["nodejs", "express", "typescript", "mysql"],
    },
    colors: {
      from: "#63B5B1",
      to: "#1D3C3B",
    },
    links: {
      code: "https://github.com/Ezetorc/vibe-frontend",
    },
  },
  {
    id: "cinetro-backend",
    images: {
      icon: "/assets/images/work/cinetroBackend/icon.webp",
      overview: "/assets/images/work/cinetroBackend/register-page.webp",
      process: "/assets/images/work/cinetroBackend/posts-page.webp",
    },
    technologies: [
      "nodejs",
      "nestjs",
      "typescript",
      "mysql",
      "docker",
      "prisma",
      "redis",
    ],
    colors: {
      from: "#D33F3F",
      to: "#681313",
    },
    links: {
      code: "https://github.com/Ezetorc/cinetro-backend",
    },
  },
];
