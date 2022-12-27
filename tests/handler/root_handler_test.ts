import { assertEquals } from "asserts";
import { testing } from "oak";
import { rootHandler } from "../../src/handler/root_handler.ts";

Deno.test({
  name: "root path test",
  async fn() {
    const ctx = testing.createMockContext({
      path: "/a",
    });
    const next = testing.createMockNext();
    await rootHandler(ctx, next);

    assertEquals(ctx.response.body, "Hello, World!");
  },
});
