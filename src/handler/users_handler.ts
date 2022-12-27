import type { Middleware } from "oak";
import { sql } from "../../db/db.ts";

export const usersHandler: Middleware = async (ctx) => {
  const users = await sql`SELECT id, name FROM public.users`;
  await sql.end();

  ctx.response.body = users;
};
