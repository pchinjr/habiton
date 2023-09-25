import LemonIcon from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/lemon-2.tsx";

type Props = {
  active: string;
};

export function Header({ active }: Props) {
  const menus = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Greet!", href: "/greet/NicCage" },
    { name: "Github", href: "/github/pchinjr" },
    { name: "NASA APOD", href: "/nasa/apod" },
    { name: "Random UUID API", href: "/api/random-uuid" },
  ];

  return (
    <div class="bg-[#86efac]">
      <div class="flex">
        <LemonIcon aria-hidden="true" />
        <div class="">
          Praise Cage
        </div>
      </div>
      <ul class="">
        {menus.map((menu) => (
          <li>
            <a
              href={menu.href}
              class={"py-1" +
                (menu.href === active ? "font-bold" : "")}
            >
              {menu.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
