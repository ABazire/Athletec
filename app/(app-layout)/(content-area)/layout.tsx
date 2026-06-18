import { PageLayout } from "@/src/components/PageLayout";
import { PropsWithChildren } from "react";

export default function layout(props: PropsWithChildren) {
  return (
    <PageLayout>
      <h1>Club de Saint-Lô</h1>
    </PageLayout>
  );
}
