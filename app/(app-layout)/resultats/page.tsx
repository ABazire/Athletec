import { Card } from "@/components/ui/card";
import { prisma } from "@/lib/prisma";

export default async function Page() {
  const results = await prisma.result.findMany({
    include: { athlete: true },
    orderBy: { date: "desc" },
  });

  return (
    <Card className="p-0">
      <div className="grid grid-cols-[1fr_auto_auto] items-center gap-6 border-b px-5 py-3 text-xs font-semibold tracking-wide text-(--athletec-gris) uppercase">
        <span>Athlète</span>
        <span className="text-right">Perf</span>
        <span className="text-right">Date</span>
      </div>
      <div className="divide-y">
        {results.map((result) => (
          <div
            key={result.id}
            className="grid grid-cols-[1fr_auto_auto] items-center gap-6 px-5 py-3"
          >
            <div className="flex items-center gap-3">
              <div
                className="flex size-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-white"
                style={{ backgroundColor: result.athlete.color }}
              >
                {result.athlete.initials}
              </div>
              <p className="font-semibold text-(--athletec-bleu)">
                {result.athlete.name}
              </p>
            </div>
            <p className="text-right font-bold text-(--athletec-bleu)">
              {result.value}
            </p>
            <p className="text-right text-sm text-(--athletec-gris)">
              {result.date.toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}
