import clsx from "clsx";

import Styles from "@/styles/components/Headings.module.scss";
import type { HeadingsProp } from "@/types/Headings";

export default function Headings({
  className,
  text,
  typography,
}: HeadingsProp) {
  return (
    <h1
      className={clsx(
        className,
        { [Styles.bm]: typography === "BM" },
        { [Styles.bmb]: typography === "BMB" },
        { [Styles.bs]: typography === "BS" },
        { [Styles.bsb]: typography === "BSB" },
        { [Styles.hl]: typography === "HL" },
        { [Styles.hm]: typography === "HM" },
        { [Styles.hs]: typography === "HS" },
        { [Styles.hxl]: typography === "HXL" }
      )}>
      {text}
    </h1>
  );
}
