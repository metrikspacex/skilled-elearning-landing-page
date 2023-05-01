/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import clsx from "clsx";

import type { ContainerProps } from "@/types/ContainerProps";

export default function Container({ children, className }: ContainerProps) {
  return <div className={clsx(className)}>{children}</div>;
}
