"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutGrid, Users, AlignLeft, Flag } from "lucide-react";
import { menu } from "../../app/data/menu";
import { cn } from "@/lib/utils";

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  "/dashboard": LayoutGrid,
  "/athletes": Users,
  "/resultats": AlignLeft,
  "/records": Flag,
};

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <nav className="w-80 shrink-0 bg-(--athletec-bleu) p-4">
      <ul className="flex flex-col gap-1">
        {menu.map((link) => {
          const Icon = icons[link.href];
          const isActive = pathname === link.href;

          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg border-l-4 border-transparent px-3 py-2.5 text-sm text-white/70",
                  isActive &&
                    "border-(--athletec-orange) bg-white/10 font-semibold text-white",
                )}
              >
                {Icon && <Icon className="size-4" />}
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
