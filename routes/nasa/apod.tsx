import { Handlers, PageProps } from "https://deno.land/x/fresh@1.3.1/server.ts";
import { Head } from "$fresh/runtime.ts";
import { Nav } from "../../components/Nav.tsx";

interface Apod {
  date: string;
  title: string;
  url: string;
  explanation: string;
}

export const handler: Handlers = {
  async GET(_req, ctx) {
    const resp = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${
        Deno.env.get("NASA_API_KEY")
      }`,
    );
    const apod = await resp.json();
    return ctx.render(apod);
  },
};

export default function ApodPage({ data }: PageProps<Apod>) {
  return (
    <>
      <Head>
        <title>praise-cage-ai</title>
      </Head>
      <Nav active="true" />
      <div class="px-4 py-8 mx-auto bg-[#86efac]">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <h1 class="text-4xl font-bold">NASA APOD - {data.date}</h1>
          <h2>{data.title}</h2>
          <p class="my-4">
            <img src={data.url} width="500"></img>
            <p>{data.explanation}</p>
          </p>
        </div>
      </div>
    </>
  );
}