import type { KeyboardEventHandler, MouseEventHandler } from "react";

export type ButtonProps = {
  className?: string;
  color: "primary" | "secondary" | "tertiary";
  content: string;
  height: number;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onKeyDown?: KeyboardEventHandler<HTMLButtonElement>;
  typography: "primary" | "secondary" | "tertiary";
  width: number;
};
