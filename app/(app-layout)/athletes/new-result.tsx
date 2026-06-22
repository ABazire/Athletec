"use client";

import { createResult } from "@/app/actions/results";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useRef } from "react";
import { toast } from "sonner";

function NewResult({ athletes }: { athletes: { id: number; name: string }[] }) {
  const formRef = useRef<HTMLFormElement>(null);

  async function handleCreate(formData: FormData) {
    await createResult(formData);
    formRef.current?.reset();
    toast.success("Résultat ajouté avec succès");
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-(--athletec-bleu)">
          Nouveau résultat
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form
          ref={formRef}
          action={handleCreate}
          className="flex items-end gap-3"
        >
          <div className="flex flex-1 flex-col gap-1.5">
            <label className="text-sm font-semibold text-(--athletec-bleu)">
              Athlète
            </label>
            <select
              name="athleteId"
              required
              defaultValue=""
              className="h-11 w-full rounded-lg bg-(--athletec-bg-gris) px-3 text-sm text-(--athletec-bleu) focus:outline-none focus:ring-2 focus:ring-(--athletec-orange)"
            >
              <option value="" disabled>
                Sélectionner un athlète
              </option>
              {athletes.map((athlete) => (
                <option key={athlete.id} value={athlete.id}>
                  {athlete.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-1 flex-col gap-1.5">
            <label className="text-sm font-semibold text-(--athletec-bleu)">
              Résultat
            </label>
            <input
              name="value"
              placeholder="ex. 10.23s"
              required
              className="h-11 w-full rounded-lg bg-(--athletec-bg-gris) px-3 text-sm text-(--athletec-bleu) placeholder:text-(--athletec-gris) focus:outline-none focus:ring-2 focus:ring-(--athletec-orange)"
            />
          </div>
          <Button type="submit" className="bg-(--athletec-orange) h-11 px-4 font-bold">
            Ajouter le résultat
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default NewResult;
