import clsx from "clsx";

import Styles from "@/styles/components/Nav.module.scss";
import type { NavProps } from "@/types/NavProps";

export default function Nav({ className, logo, text, variant }: NavProps) {
  return (
    <nav
      className={clsx(className, Styles.root, {
        [Styles.primary]: variant === "primary",
        [Styles.secondary]: variant === "secondary",
      })}>
      <h1 className={clsx(Styles.navLogo)}>{logo}</h1>
      <button className={clsx(Styles.navButton)} type="button">
        {text}
      </button>
    </nav>
  );
}
