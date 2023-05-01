import clsx from "clsx";
import Image from "next/image";

import AnimationSVG from "@/public/assets/icon-animation.svg";
import BusinessSVG from "@/public/assets/icon-business.svg";
import CryptoSVG from "@/public/assets/icon-crypto.svg";
import DesignSVG from "@/public/assets/icon-design.svg";
import PhotoSVG from "@/public/assets/icon-photography.svg";
import Styles from "@/styles/components/Card.module.scss";
import type { CardProps } from "@/types/CardProps";

export default function Card({ className, heading, paragraph }: CardProps) {
  const svgs = () => {
    if (heading === "Animation") {
      return AnimationSVG;
    } else if (heading === "Design") {
      return DesignSVG;
    } else if (heading === "Photography") {
      return PhotoSVG;
    } else if (heading === "Crypto") {
      return CryptoSVG;
    }
    return BusinessSVG;
  };
  return (
    <div className={clsx(className, Styles.root)}>
      <div>
        <Image alt="" height={56} src={svgs()} width={56} />
      </div>
      <h1>{heading}</h1>
      <p>{paragraph}</p>
      <h2>Get Started</h2>
    </div>
  );
}
