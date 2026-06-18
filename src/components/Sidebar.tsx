import Link from "next/link";
import { menu } from "../../app/data/menu";

export const Sidebar = () => {
  return (
    <nav className="w-80 shrink-0 border-r border-black/10 p-4 bg-(--athletec-bleu)">
      <ul className="flex flex-col gap-2">
        {menu.map((link) => (
          <li key={link.href} className="text-white text-2sm font-semibold">
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
