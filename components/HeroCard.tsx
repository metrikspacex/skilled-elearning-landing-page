/* eslint-disable no-empty-pattern */
import Styles from "@/styles/components/HeroCard.module.scss";
import type { HeroCardProps } from "@/types/HeroCardProps";

export default function HeroCard({}: HeroCardProps) {
  return (
    <div className={Styles.root}>
      <h1>Maximize skill, minimize budget</h1>
      <h2>
        Our modern courses across a range of in-demand skills will give you the
        knowledge you need to live the life you want.
      </h2>
      <button type="button">Get Started</button>
    </div>
  );
}
