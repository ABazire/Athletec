"use client";

import { createResult } from "@/app/actions/results";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

function NewResult({ athletes }: { athletes: { id: number; name: string }[] }) {
  const [isOpen, setIsOpen] = useState(false);

  async function resultCreate(formData: FormData) {
    await createResult(formData);
    setIsOpen(false);
    toast.success("Résultat enregistré avec succès");
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="rounded-full bg-(--athletec-orange) p-5 font-bold">
          <Plus /> Enregistrer un résultat
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>Nouveau résultat</DialogHeader>
        <p className="text-sm text-(--athletec-gris)">
          Informations du profil de l'athlète.
        </p>
        <form action={resultCreate} className="flex flex-col gap-4">
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
          <Button
            type="submit"
            className="bg-(--athletec-orange) h-11 px-4 font-bold"
          >
            Ajouter le résultat
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default NewResult;
