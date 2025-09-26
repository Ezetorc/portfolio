import { DEFAULT_LANGUAGE } from "./configuration/i18n.configuration";
import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  if (context.url.pathname === "/") {
    const url = `${context.url.origin}/${DEFAULT_LANGUAGE}`;

    return Response.redirect(url, 302);
  }

  return next();
});
