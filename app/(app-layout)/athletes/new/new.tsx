"use client";

import { createAthlete } from "@/app/actions/athletes";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const categories = ["Senior", "U20", "U18", "U17"];

function New() {
  const [isOpen, setIsOpen] = useState(false);
  const [gender, setGender] = useState("Hommes");

  async function handleCreate(formData: FormData) {
    formData.set("gender", gender);
    await createAthlete(formData);
    setIsOpen(false);
    setGender("Hommes");
    toast.success("Athlète créé avec succès");
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-(--athletec-bleu) h-10 px-4 font-bold">
          + Ajouter un athlète
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md p-6">
        <DialogHeader>
          <DialogTitle className="font-bold text-(--athletec-bleu) text-2xl">
            Nouvel athlète
          </DialogTitle>
          <p className="text-sm text-(--athletec-gris)">
            Informations du profil de l'athlète.
          </p>
        </DialogHeader>
        <form action={handleCreate} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-(--athletec-bleu)">
              Nom complet
            </label>
            <input
              name="name"
              placeholder="ex. Camille Durand"
              required
              className="h-11 w-full rounded-lg bg-white px-3 text-sm text-(--athletec-bleu) ring-1 ring-(--athletec-orange) placeholder:text-(--athletec-gris) focus:outline-none focus:ring-2 focus:ring-(--athletec-orange)"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-(--athletec-bleu)">
                Catégorie
              </label>
              <div className="relative">
                <select
                  name="category"
                  required
                  defaultValue="Senior"
                  className="h-11 w-full appearance-none rounded-lg bg-(--athletec-bg-gris) px-3 pr-9 text-sm text-(--athletec-bleu) focus:outline-none focus:ring-2 focus:ring-(--athletec-orange)"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-(--athletec-gris)" />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-(--athletec-bleu)">
                Adhésion (année)
              </label>
              <input
                name="membershipYear"
                type="number"
                placeholder="2026"
                className="h-11 w-full rounded-lg bg-(--athletec-bg-gris) px-3 text-sm text-(--athletec-bleu) placeholder:text-(--athletec-gris) focus:outline-none focus:ring-2 focus:ring-(--athletec-orange)"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-(--athletec-bleu)">
              Sexe
            </label>
            <div className="flex overflow-hidden rounded-lg ring-1 ring-foreground/10">
              <button
                type="button"
                onClick={() => setGender("Femmes")}
                className={cn(
                  "h-11 flex-1 text-sm font-semibold transition-colors",
                  gender === "Femmes"
                    ? "bg-(--athletec-bleu) text-white"
                    : "bg-white text-(--athletec-bleu) hover:bg-(--athletec-bg-gris)",
                )}
              >
                Femmes
              </button>
              <button
                type="button"
                onClick={() => setGender("Hommes")}
                className={cn(
                  "h-11 flex-1 text-sm font-semibold transition-colors",
                  gender === "Hommes"
                    ? "bg-(--athletec-bleu) text-white"
                    : "bg-white text-(--athletec-bleu) hover:bg-(--athletec-bg-gris)",
                )}
              >
                Hommes
              </button>
            </div>
          </div>

          <div className="mt-2 flex justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
            >
              Annuler
            </Button>
            <Button
              type="submit"
              className="bg-(--athletec-orange) px-4 font-bold"
            >
              Enregistrer le profil
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default New;
