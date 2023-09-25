// routes/about.tsx
import { Handlers } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { Nav } from "../components/Nav.tsx";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const resp = await ctx.render();
    resp.headers.set("X-Custom-Header", "Hello");
    return resp;
  },
};

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>praise-cage-ai</title>
      </Head>
      <Nav active="true" />
      <div class="px-4 py-8 mx-auto bg-[#86efac]">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <h1 class="text-4xl font-bold">Praise Cage</h1>
          <p class="my-4">
            This is the About Page.
          </p>
        </div>
      </div>
    </>
  );
}
