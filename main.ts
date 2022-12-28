import { Application } from "oak";
import { router } from "./router.ts";
import { logger } from "./src/logger.ts";

const port = 18000;
const app = new Application();
app.use(async (ctx, next) => {
  const { method, headers, url } = ctx.request;
  logger.info({ method, headers, url });
  await next();
});
app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener("listen", () => {
  console.log(`Listening on http://localhost:${port}`);
});

await app.listen({ port });
