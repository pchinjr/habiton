import LemonIcon from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/lemon-2.tsx";

type Props = {
  active: string;
};

export function Nav({ active }: Props) {
  const menus = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Search", href: "/search" },
    { name: "Greet!", href: "/greet/NicCage" },
    { name: "Github", href: "/github/pchinjr" },
    { name: "NASA APOD", href: "/nasa/apod" },
    { name: "Random UUID API", href: "/api/random-uuid" },
    { name: "Countdown", href: "/countdown" }
  ];

  return (
    <div class="w-full max-w-screen-lg py-6 px-8 bg-[#86efac]">
      <div class="flex">
        <LemonIcon aria-hidden="true" />
        <div class="text-2xl ml-1 font-bold">
          Praise Cage
        </div>
      </div>
      <ul>
        {menus.map((menu) => (
          <li>
            <a
              href={menu.href}
              class={"text-gray-500 hover:text-gray-700 py-1 border-gray-500" +
                (menu.href === active ? "font-bold border-b-2" : "")}
            >
              {menu.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
