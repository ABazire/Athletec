import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { prisma } from "@/lib/prisma";

export default async function Page() {
  const results = await prisma.result.findMany({
    include: { athlete: true, event: true },
    orderBy: { date: "desc" },
    take: 8,
  });
  const athleteCount = await prisma.athletes.count();
  const resultCount = await prisma.result.count();

  return (
    <>
      <div className="flex flex-col gap-6 h-full">
        <div className="flex gap-4">
          <Card className="flex-1">
            <CardHeader className=" text-xs font-semibold tracking-wide text-(--athletec-gris) uppercase">
              Athlètes
            </CardHeader>
            <CardContent className=" text-5xl font-extrabold text-(--athletec-bleu)">
              {athleteCount}
            </CardContent>
            <CardDescription className="px-(--card-spacing)">
              dans l'effectif
            </CardDescription>
          </Card>
          <Card className="flex-1">
            <CardHeader className="text-xs font-semibold tracking-wide text-(--athletec-gris) uppercase">
              Résultats saisis
            </CardHeader>
            <CardContent className="text-5xl font-extrabold text-(--athletec-bleu)">
              {resultCount}
            </CardContent>
            <CardDescription className="px-(--card-spacing)">
              cette saison
            </CardDescription>
          </Card>
          <Card className="flex-1">
            <CardHeader className="text-xs font-semibold tracking-wide text-(--athletec-gris) uppercase">
              Épreuves suivies
            </CardHeader>
            <CardContent className="text-5xl font-extrabold text-(--athletec-bleu)">
              10
            </CardContent>
            <CardDescription className="px-(--card-spacing)">
              avec un record du club
            </CardDescription>
          </Card>
          <Card className="flex-1">
            <CardHeader className="text-xs font-semibold tracking-wide text-(--athletec-gris) uppercase">
              Ce mois-ci
            </CardHeader>
            <CardContent className="text-5xl font-extrabold text-(--athletec-orange)">
              10
            </CardContent>
            <CardDescription className="px-(--card-spacing)">
              nouvelles perfs en juin
            </CardDescription>
          </Card>
        </div>
        <div className="flex gap-4 flex-1 min-h-0">
          <Card className="flex-3">
            <CardHeader className="flex justify-between align-middle">
              <CardTitle>Résultats récents</CardTitle>
              <a
                href="/athletes"
                className="text-(--athletec-orange) font-bold"
              >
                Tout voir
              </a>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-[2fr_1fr_2fr_1fr] items-center gap-4 border-b px-5 py-3 text-xs font-semibold tracking-wide text-(--athletec-gris) uppercase">
                <span>Athlète</span>
                <span>Épreuve</span>
                <span>Perf / Compétition</span>
                <span className="text-right">Date</span>
              </div>
              <div className="divide-y">
                {results.map((result) => (
                  <div
                    key={result.id}
                    className="grid grid-cols-[2fr_1fr_2fr_1fr] items-center gap-4 px-5 py-3"
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
                    <p className="text-(--athletec-gris)">
                      {result.event.name}
                    </p>
                    <p className="flex items-baseline gap-2">
                      <span className="font-bold text-(--athletec-bleu)">
                        {result.value}
                      </span>
                      <span className="text-sm text-(--athletec-gris)">
                        {result.competition}
                      </span>
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
            </CardContent>
          </Card>
          <Card className="flex-2">
            <CardHeader className="flex justify-between align-middle">
              <CardTitle>Résultats récents</CardTitle>
              <p className="text-(--athletec-orange) font-bold">Tout voir</p>
            </CardHeader>
          </Card>
        </div>
      </div>
    </>
  );
}
