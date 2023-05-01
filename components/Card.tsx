import clsx from "clsx";

import Styles from "@/styles/components/Card.module.scss";
import type { CardProps } from "@/types/CardProps";

export default function Card({ className, heading, paragraph }: CardProps) {
  return (
    <div className={clsx(Styles.card)}>
      <div className={clsx(className, Styles.root)}>
        <h1>{heading}</h1>
        <p>{paragraph}</p>
        <h2>Get Started</h2>
      </div>
    </div>
  );
}
