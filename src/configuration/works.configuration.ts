import type { Work } from "../models/work.model";

export const WORKS: Work[] = [
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
    id: "bolsillo-feliz",
    images: {
      icon: "/assets/images/work/bolsilloFeliz/icon.webp",
      overview: "/assets/images/work/bolsilloFeliz/register-page.webp",
      process: "/assets/images/work/bolsilloFeliz/posts-page.webp",
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
];
