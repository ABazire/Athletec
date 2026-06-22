import Ariane from "@/src/components/Ariane";
import { Sidebar } from "@/src/components/Sidebar";
import { prisma } from "@/lib/prisma";
import { PropsWithChildren } from "react";

export default async function Layout(props: PropsWithChildren) {
  const athletes = await prisma.athletes.findMany({
    select: { id: true, name: true },
  });

  return (
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 h-screen flex flex-col">
        <Ariane athletes={athletes} />
        <div className="flex-1 min-h-0 px-20 py-10 bg-(--athletec-bg-gris)">
          {props.children}
        </div>
      </main>
    </div>
  );
}
