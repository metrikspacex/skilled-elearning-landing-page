import clsx from "clsx";
import Image from "next/image";

import AnimationSVG from "@/public/assets/icon-animation.svg";
import Styles from "@/styles/components/Card.module.scss";
import type { CardProps } from "@/types/Card";

export default function Card({ className, heading, paragraph }: CardProps) {
  return (
    <div className={clsx(className, Styles.root)}>
      <div>
        <Image alt="" height={56} src={AnimationSVG} width={56} />
      </div>
      <h1>{heading}</h1>
      <p>{paragraph}</p>
      <h2>Get Started</h2>
    </div>
  );
}
