import type { StaticImageData } from "next/image";

export type HeroProps = {
  alt: string;
  className: string;
  height: number;
  src: StaticImageData;
  width: number;
};
