"use client";

import { usePathname } from "next/navigation";
import { menu } from "../../app/data/menu";
import NewResult from "@/app/(app-layout)/resultats/new/new-result";

function Ariane({ athletes }: { athletes: { id: number; name: string }[] }) {
  const pathname = usePathname();
  const page = menu.find((item) => item.href === pathname);

  return (
    <div className="flex w-full items-center justify-between border-b p-5">
      <div>
        <h1 className="font-bold text-(--athletec-bleu) text-2xl">
          {page?.label}
        </h1>
        <p className="text-sm text-(--athletec-gris)">{page?.description}</p>
      </div>
      <NewResult athletes={athletes} />
    </div>
  );
}

export default Ariane;
