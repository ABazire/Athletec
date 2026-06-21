import { Search } from "lucide-react";
import { Card } from "@/components/ui/card";
// import { athletes } from "@/app/data/athletes";
import { prisma } from "@/lib/prisma";
import New from "./new/new";
import DeleteAthleteButton from "./delete-athlete-button";

export default async function Page() {
  const athletes = await prisma.athletes.findMany();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between gap-4">
        <div className="relative w-80">
          <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-(--athletec-gris)" />
          <input
            type="text"
            placeholder="Rechercher un athlète..."
            className="h-10 w-full rounded-lg bg-white pl-9 pr-3 text-sm text-(--athletec-bleu) ring-1 ring-foreground/10 placeholder:text-(--athletec-gris) focus:outline-none"
          />
        </div>
        <New />
      </div>
      <div className="grid grid-cols-4 gap-5">
        {athletes.map((athlete) => (
          <Card key={athlete.id} className="gap-4 p-5">
            <div className="flex items-center gap-3">
              <DeleteAthleteButton athleteId={athlete.id} />
              <div
                className="flex size-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white"
                style={{ backgroundColor: athlete.color }}
              >
                {athlete.initials}
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-bold text-(--athletec-bleu)">
                  {athlete.name}
                </p>
                <div className="flex gap-1.5">
                  <span className="rounded-md bg-(--athletec-bg-gris) px-1.5 py-0.5 text-[0.65rem] font-semibold text-(--athletec-gris)">
                    {athlete.category}
                  </span>
                  <span className="rounded-md bg-(--athletec-bg-gris) px-1.5 py-0.5 text-[0.65rem] font-semibold text-(--athletec-gris)">
                    {athlete.gender}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between border-t pt-4">
              <div className="flex gap-5">
                <div>
                  <p className="font-bold text-(--athletec-bleu)">
                    {athlete.results}
                  </p>
                  <p className="text-[0.65rem] font-semibold text-(--athletec-gris) uppercase">
                    Résultats
                  </p>
                </div>
                <div>
                  <p className="font-bold text-(--athletec-bleu)">
                    {athlete.events}
                  </p>
                  <p className="text-[0.65rem] font-semibold text-(--athletec-gris) uppercase">
                    Épreuves
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-(--athletec-bleu)">
                  {athlete.mainEvent}
                </p>
                <p className="text-[0.65rem] font-semibold text-(--athletec-orange)/70 uppercase">
                  Épreuve principale
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
