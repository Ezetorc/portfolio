import type { Language } from "../models/language.model";
import type { Metadata } from "../models/metadata.model";
import { FULL_NAME } from "./general.configuration";

export const METADATA: { [key in Language]: Metadata } = {
  en: {
    title: `${FULL_NAME} Portfolio`,
    description: "Web developer specialized in React and NodeJS, building modern, scalable, and creative projects. Explore my work, skills, and experience in software development.",
    url: "https://ezetorc.vercel.app/en",
    image: "https://opengraph.b-cdn.net/production/images/934d9ff1-24e6-42af-8535-c4a125e62f38.png?token=9uxPjDBLLCu_2iK2fHsVgrzQiom1mBz_ORxB_LdA0qE&height=630&width=1200&expires=33297857890",
  },
  es: {
    title: `${FULL_NAME} Portafolio`,
    description: "Desarrollador web especializado en React y NodeJS, construyendo proyectos modernos, escalables y creativos. Explora mi trabajo, habilidades y experiencia en desarrollo de software.",
    url: "https://ezetorc.vercel.app/es",
    image: "https://opengraph.b-cdn.net/production/images/39c976c1-c14a-456c-996b-9ca1b4502bbe.png?token=S9ksgoRskcRfgxaCAEOPFt3kJNQWQLomE-BszNS2CLU&height=630&width=1200&expires=33297858101",
  },
}