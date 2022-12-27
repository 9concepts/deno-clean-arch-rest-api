import { Application } from "oak";
import { rootHandler } from "./src/handler/root_handler.ts";

const port = 8000;
const app = new Application();

app.use(rootHandler);

app.addEventListener("listen", () => {
  console.log(`Listening on localhost:${port}`);
});

await app.listen({ port });
