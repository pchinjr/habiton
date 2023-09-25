import { PageProps } from "$fresh/server.ts";

import { Head } from "$fresh/runtime.ts";
import { Header } from "../../components/Header.tsx";

export default function Greet(props: PageProps) {
  return (
    <>
      <Head>
        <title>praise-cage-ai</title>
      </Head>
      <Header active="true" />
      <div class="px-4 py-8 mx-auto bg-[#86efac]">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <h1 class="text-4xl font-bold">Praise Cage</h1>
          <p class="my-4">
            <div>Hello {props.params.name}</div>
          </p>
        </div>
      </div>
    </>
  );
}