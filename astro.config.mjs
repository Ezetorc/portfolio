import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { DEFAULT_LANGUAGE } from "./src/configuration/i18n.configuration";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    "/": `/${DEFAULT_LANGUAGE}`,
  },
});
