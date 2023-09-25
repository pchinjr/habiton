import { Handlers, PageProps } from "https://deno.land/x/fresh@1.4.3/server.ts";
import { Head } from "https://deno.land/x/fresh@1.4.3/runtime.ts";
import { Nav } from "../../components/Nav.tsx";

interface User {
  login: string;
  name: string;
  avatar_url: string;
}

export const handler: Handlers<User | null> = {
  async GET(_, ctx) {
    const { username } = ctx.params;
    const resp = await fetch(`https://api.github.com/users/${username}`);
    if (resp.status === 404) {
      return ctx.render(null);
    }
    const user: User = await resp.json();
    return ctx.render(user);
  },
};

export default function Page({ data }: PageProps<User | null>) {
  if (!data) {
    return <h1>User Not Found</h1>;
  }

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
            <img src={data.avatar_url} width={64} height={64} />
            <h2>{data.name}</h2>
            <p>{data.login}</p>
          </p>
        </div>
      </div>
    </>
  );
}
