import Ariane from "@/src/components/Ariane";
import { Sidebar } from "@/src/components/Sidebar";
import { PropsWithChildren } from "react";

export default function Layout(props: PropsWithChildren) {
  return (
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1">
        <Ariane />
        {props.children}
      </main>
    </div>
  );
}
