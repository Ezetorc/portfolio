import type { Work } from "../models/work.model";

export const WORKS: Work[] = [
  {
    id: "notievan",
    images: {
      icon: "/images/work/notievan/icon.webp",
      overview: "/images/work/notievan/articles-page.webp",
      process: "/images/work/notievan/article-page.webp",
    },
    technologies: {
      frontend: ["html", "css", "typescript", "react", "tailwind", "zod"],
      backend: ["typescript", "nodejs", "express", "prisma", "postgresql", "cloudinary", "zod"],
    },
    colors: {
      from: "#1447e6",
      to: "#041342",
    },
    links: {
      code: "https://github.com/Ezetorc/notievan",
      site: "https://notievan.vercel.app"
    },
  },
  {
    id: "bolsillo-feliz",
    images: {
      icon: "/images/work/bolsilloFeliz/icon.webp",
      overview: "/images/work/bolsilloFeliz/dashboard-page.webp",
      process: "/images/work/bolsilloFeliz/transactions-page.webp",
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
      icon: "/images/work/vibeNetwork/icon.webp",
      overview: "/images/work/vibeNetwork/register-page.webp",
      process: "/images/work/vibeNetwork/posts-page.webp",
    },
    technologies: {
      frontend: ["html", "css", "typescript", "react"],
      backend: ["nodejs", "express", "typescript", "mysql", "cloudinary"],
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
      icon: "/images/work/cinetroBackend/icon.webp"
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
