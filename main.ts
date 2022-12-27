import { Application } from "oak";
import { router } from "./router.ts";

const port = 18000;
const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener("listen", () => {
  console.log(`Listening on http://localhost:${port}`);
});

await app.listen({ port });
