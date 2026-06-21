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
import { useState } from "react";

function New() {
  const [isOpen, setIsOpen] = useState(false);

  async function handleCreate(formData: FormData) {
    await createAthlete(formData);
    setIsOpen(false);
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-(--athletec-bleu) h-10 px-4 font-bold">
          + Ajouter un athlète
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Nouvel athlète</DialogTitle>
        </DialogHeader>
        <form action={handleCreate} className="flex flex-col gap-4">
          <input name="name" placeholder="Nom" required />
          <input name="category" placeholder="Catégorie" required />
          <input name="gender" placeholder="Genre" required />
          <input name="mainEvent" placeholder="Épreuve principale" required />
          <Button type="submit">Créer</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default New;
