import type { Middleware } from "oak";

export const rootHandler: Middleware = (ctx) => {
  ctx.response.body = "Hello, World!";
};
