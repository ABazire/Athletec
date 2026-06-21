"use client";

import { deleteAthlete } from "@/app/actions/athletes";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { toast } from "sonner";

function DeleteAthleteButton({ athleteId }: { athleteId: number }) {
  async function handleDelete() {
    await deleteAthlete(athleteId);
    toast.success("Athlète supprimé avec succès");
  }

  return (
    <Button onClick={handleDelete}>
      <Trash />
    </Button>
  );
}

export default DeleteAthleteButton;
