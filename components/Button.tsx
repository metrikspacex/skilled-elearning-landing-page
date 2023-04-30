import clsx from "clsx";

import Styles from "@/styles/components/Button.module.scss";
import type { ButtonProps } from "@/types/Button";

export default function Button({
  className,
  color,
  content,
  height,
  onClick,
  onKeyDown,
  typography,
  width,
}: ButtonProps) {
  return (
    <button
      className={clsx(
        className,
        { [Styles.primaryColor]: color === "primary" },
        { [Styles.secondaryColor]: color === "secondary" },
        { [Styles.tertiaryColor]: color === "tertiary" },
        { [Styles.primaryTypography]: typography === "primary" },
        { [Styles.secondaryTypography]: typography === "secondary" },
        { [Styles.tertiaryTypography]: typography === "tertiary" }
      )}
      style={{ height: `${height}rem`, width: `${width}rem` }}
      type="button"
      onClick={onClick ? onClick : () => {}}
      onKeyDown={onKeyDown ? onKeyDown : () => {}}>
      {content}
    </button>
  );
}
