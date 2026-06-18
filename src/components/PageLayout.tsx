import { PropsWithChildren } from "react";

export const PageLayout = (props: PropsWithChildren) => {
  return <div className="text-red-500">{props.children}</div>;
};
