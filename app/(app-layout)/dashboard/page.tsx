import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { prisma } from "@/lib/prisma";

export default async function Page() {
  return (
    <>
      <div className="flex flex-col gap-6 h-full">
        <div className="flex gap-4">
          <Card className="flex-1">
            <CardHeader className="text-xs font-semibold tracking-wide text-(--athletec-gris) uppercase">
              Athlètes
            </CardHeader>
            <CardContent className="text-3xl font-extrabold text-(--athletec-bleu)">
              9
            </CardContent>
            <CardDescription className="px-(--card-spacing)">
              dans l'effectif
            </CardDescription>
          </Card>
          <Card className="flex-1">
            <CardHeader className="text-xs font-semibold tracking-wide text-(--athletec-gris) uppercase">
              Résultats saisis
            </CardHeader>
            <CardContent className="text-3xl font-extrabold text-(--athletec-bleu)">
              26
            </CardContent>
            <CardDescription className="px-(--card-spacing)">
              cette saison
            </CardDescription>
          </Card>
          <Card className="flex-1">
            <CardHeader className="text-xs font-semibold tracking-wide text-(--athletec-gris) uppercase">
              Épreuves suivies
            </CardHeader>
            <CardContent className="text-3xl font-extrabold text-(--athletec-bleu)">
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
            <CardContent className="text-3xl font-extrabold text-(--athletec-orange)">
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
              <p className="text-(--athletec-orange) font-bold">Tout voir</p>
            </CardHeader>
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
