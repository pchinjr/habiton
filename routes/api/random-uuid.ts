import { Handlers } from "https://deno.land/x/fresh@1.3.1/server.ts";

export const handler: Handlers = {
  GET(_req) {
    const uuid = crypto.randomUUID();
    return new Response(JSON.stringify({"UUID": uuid, "TIME_STAMP": Date.now()}), {
      headers: { "Content-Type": "application/json" },
    });
  },
};
