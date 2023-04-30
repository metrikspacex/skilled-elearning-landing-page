import { clsx } from "clsx";
import Image from "next/image";

import Styles from "@/styles/components/Hero.module.scss";
import type { HeroProps } from "@/types/Hero";

export default function Hero({
  alt,
  className,
  height,
  src,
  width,
}: HeroProps) {
  return (
    <picture className={clsx(className, Styles.root)}>
      <Image priority alt={alt} height={height} src={src} width={width} />
    </picture>
  );
}
