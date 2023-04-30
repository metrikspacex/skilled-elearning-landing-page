import clsx from "clsx";

import Styles from "@/styles/components/GetStarted.module.scss";
import type { GetStartedProps } from "@/types/GetStarted";

import Button from "./Button";

export default function GetStarted({
  className,
  color,
  content,
  heading,
  onClick,
  onKeyDown,
  typography,
}: GetStartedProps) {
  return (
    <div className={clsx(className, Styles.root)}>
      <ul>
        <li>
          <h1
            className={clsx(
              { [Styles.primaryColor]: color === "primary" },
              { [Styles.tertiaryColor]: color === "tertiary" }
            )}>
            {heading}
          </h1>
        </li>
        <li>
          <Button
            color={color}
            content={content}
            height={4.8}
            typography={typography}
            width={14}
            onClick={onClick}
            onKeyDown={onKeyDown}
          />
        </li>
      </ul>
    </div>
  );
}
