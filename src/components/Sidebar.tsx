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
    <nav className="w-80 shrink-0 bg-(--athletec-bleu) flex flex-col justify-between py-5">
      <div>
        <div className="flex items-center gap-3 px-2 pb-5">
          <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-(--athletec-orange)"></div>
          <div className="leading-tight">
            <p className="text-sm font-bold text-white">Northgate AC</p>
            <p className="text-[10px] tracking-wider text-white/50">
              SUIVI DES RÉSULTATS
            </p>
          </div>
        </div>

        <ul className="flex flex-col gap-1  pt-5">
          {menu.map((link) => {
            const Icon = icons[link.href];
            const isActive = pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-3 border-l-4 border-transparent px-3 py-3  text-white/70",
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
      </div>

      <div className="mt-auto flex items-center gap-3 border-t border-white/10 px-2 pt-4">
        <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-(--athletec-orange) text-xs font-bold text-white">
          RD
        </div>
        <div className="leading-tight">
          <p className="text-sm font-semibold text-white">Coach R. Daniels</p>
          <p className="text-xs text-white/50">Entraîneur principal · Admin</p>
        </div>
      </div>
    </nav>
  );
};
