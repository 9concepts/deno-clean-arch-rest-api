import { assert, assertArrayIncludes } from "asserts";
import { testing } from "oak";
import { usersHandler } from "../../src/handler/users_handler.ts";

Deno.test({
  name: "fetch users",
  async fn() {
    const ctx = testing.createMockContext({
      path: "/users",
    });
    const next = testing.createMockNext();

    await usersHandler(ctx, next);

    const body = ctx.response.body;

    assert(body instanceof Array);

    assertArrayIncludes(body, [
      { id: 1, name: "9sako6" },
      { id: 2, name: "JaneDoe" },
    ]);
  },
});
