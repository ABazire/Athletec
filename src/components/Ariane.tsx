"use client";

import { usePathname } from "next/navigation";
import { menu } from "../../app/data/menu";
import { Button } from "@/components/ui/button";

function Ariane() {
  const pathname = usePathname();
  const page = menu.find((item) => item.href === pathname);

  return (
    <div className="flex w-full items-center justify-between border-b p-5">
      <div>
        <h1 className="font-bold text-(--athletec-bleu) text-2xl ">
          {page?.label}
        </h1>
        <p className="text-sm text-(--athletec-gris)">{page?.description}</p>
      </div>
      <Button className="bg-(--athletec-orange) p-5 font-bold">
        Enregistrer un résultat
      </Button>
    </div>
  );
}

export default Ariane;
