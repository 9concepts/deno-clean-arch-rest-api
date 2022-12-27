import postgres from "postgres";

const USER = "admin";
const PASSWORD = "admin";
const HOSTNAME = "localhost";
const PORT = 5432;
const DB = "deno_world";

export const sql = postgres(
  `postgres://${USER}:${PASSWORD}@${HOSTNAME}:${PORT}/${DB}`,
);
