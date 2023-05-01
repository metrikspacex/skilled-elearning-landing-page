/* eslint-disable no-empty-pattern */
import Styles from "@/styles/components/Hero.module.scss";
import type { HeroProps } from "@/types/HeroProps";

export default function HeroCard({}: HeroProps) {
  return <div className={Styles.root}></div>;
}
