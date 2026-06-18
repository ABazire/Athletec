import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex gap-4 h-full">
          <Card className="flex-1">
            <CardHeader className="uppercase">Athletes</CardHeader>
            <CardContent>10</CardContent>
            <CardDescription>dans l'effectif</CardDescription>
          </Card>
          <Card className="flex-1">
            <CardHeader className="uppercase">Résultats saisis</CardHeader>
            <CardContent>30</CardContent>
            <CardDescription>cette saison</CardDescription>
          </Card>
          <Card className="flex-1">
            <CardHeader className="uppercase">Épreuves suivies</CardHeader>
            <CardContent>10</CardContent>
            <CardDescription>avec un record du club</CardDescription>
          </Card>
          <Card className="flex-1">
            <CardHeader className="uppercase">Ce mois-ci</CardHeader>
            <CardContent>12</CardContent>
            <CardDescription>nouvelles perfs en juin</CardDescription>
          </Card>
        </div>
        <div className="flex gap-4 h-full">
          <Card className="flex-3">
            <CardHeader>
              <CardTitle>Résultats récents</CardTitle>
              <p>Tout voir</p>
            </CardHeader>
          </Card>
          <Card className="flex-2">
            <CardHeader>
              <CardTitle>Résultats récents</CardTitle>
              <p>Tout voir</p>
            </CardHeader>
          </Card>
        </div>
      </div>
    </>
  );
}
