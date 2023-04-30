import type { KeyboardEventHandler, MouseEventHandler } from "react";

export type GetStartedProps = {
  className?: string;
  color: "primary" | "secondary" | "tertiary";
  content: string;
  heading: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onKeyDown?: KeyboardEventHandler<HTMLButtonElement>;
  typography: "primary" | "secondary" | "tertiary";
};
