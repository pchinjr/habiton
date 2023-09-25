import { Head } from "$fresh/runtime.ts";
import { Nav } from "../components/Nav.tsx";

import Countdown from "../islands/Countdown.tsx";

export default function Page() {
  const date = new Date();
  date.setHours(date.getMinutes() + 1);
  return (
    <>
      <Head>
        <title>Habiton</title>
      </Head>
      <Nav active="" />
      <div class="px-4 py-8 mx-auto bg-[#86efac]">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <p>
            {date.toISOString()} is happening{" "}
            <Countdown target={date.toISOString()} />.
          </p>
        </div>
      </div>
    </>
  );
}
