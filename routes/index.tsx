import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Habiton</title>
      </Head>
      <div>
        <p>
          PRAISE CAGE!
        </p>
        <Counter start={3} />
      </div>
    </>
  );
}
