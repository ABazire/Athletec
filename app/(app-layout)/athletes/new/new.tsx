import { createAthlete } from "@/app/actions/athletes";
import { Button } from "@/components/ui/button";

function New() {
  return (
    <form action={createAthlete} className="flex flex-col gap-4">
      <input name="name" placeholder="Nom" required />
      <input name="category" placeholder="Catégorie" required />
      <input name="gender" placeholder="Genre" required />
      <input name="mainEvent" placeholder="Épreuve principale" required />
      <Button type="submit">Créer</Button>
    </form>
  );
}

export default New;
