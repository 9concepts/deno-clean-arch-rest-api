import { Router } from "oak";
import { rootHandler } from "./src/handler/root_handler.ts";
import { usersHandler } from "./src/handler/users_handler.ts";

export const router = new Router();

router.get("/", rootHandler)
  .get("/users", usersHandler);
