import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  if (context.url.pathname === "/") {
    return Response.redirect(`${context.url.origin}/en`, 302);
  }
  return next();
});
