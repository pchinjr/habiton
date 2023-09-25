import { Handlers, PageProps } from "https://deno.land/x/fresh@1.3.1/server.ts";
import { Head } from "$fresh/runtime.ts";
import { Nav } from "../components/Nav.tsx";

const NAMES = ["Nic", "Ben", "Memphis", "Joe"];

interface Data {
  results: string[];
  query: string;
}

export const handler: Handlers<Data> = {
  GET(req, ctx) {
    const url = new URL(req.url);
    const query = url.searchParams.get("q") || "";
    const results = NAMES.filter((name) => name.includes(query));
    return ctx.render({ results, query });
  },
};

export default function Page({ data }: PageProps<Data>) {
  const { results, query } = data;
  return (
    <>
      <Head>
        <title>Habiton</title>
      </Head>
      <Nav active="" />
      <div class="px-4 py-8 mx-auto bg-[#86efac]">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <h3>Which Cage?</h3>
          <form>
            <input type="text" name="q" value={query} />
            <button type="submit">Search</button>
          </form>
          <ul>
            {results.map((name) => <li key={name}>{name}</li>)}
          </ul>
        </div>
      </div>
    </>
  );
}
