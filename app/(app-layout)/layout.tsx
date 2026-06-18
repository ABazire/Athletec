import Ariane from "@/src/components/Ariane";
import { Sidebar } from "@/src/components/Sidebar";
import { PropsWithChildren } from "react";

export default function Layout(props: PropsWithChildren) {
  return (
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 h-screen">
        <Ariane />
        <div className="px-20 py-10 bg-(--athletec-bg-gris)">
          {props.children}
        </div>
      </main>
    </div>
  );
}
