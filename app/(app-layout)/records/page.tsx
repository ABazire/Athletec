import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { records } from "@/app/data/records";

export default function Page() {
  return (
    <div className="grid grid-cols-4 gap-5">
      {records.map((record, index) => (
        <Card key={index} className="gap-4">
          <CardHeader className="flex flex-row items-center justify-between">
            <span className="text-xs font-semibold tracking-wide text-(--athletec-gris) uppercase">
              {record.category}
            </span>
            <span className="rounded-full bg-(--athletec-orange)/10 px-2 py-1 text-[0.65rem] font-bold text-(--athletec-orange) uppercase">
              Record du club
            </span>
          </CardHeader>
          <CardContent className="flex flex-col gap-1">
            <span className="font-bold text-(--athletec-bleu)">{record.event}</span>
            <span className="text-3xl font-extrabold text-(--athletec-orange)">
              {record.value}
            </span>
          </CardContent>
          <CardFooter className="flex items-center gap-3 border-t bg-transparent pt-4">
            <div
              className="flex size-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white"
              style={{ backgroundColor: record.color }}
            >
              {record.initials}
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-(--athletec-bleu)">
                {record.athlete}
              </p>
              <p className="truncate text-xs text-(--athletec-gris)">
                {record.competition} · {record.date}
              </p>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
