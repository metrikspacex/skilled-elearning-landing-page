import Styles from "@/styles/components/Foot.module.scss";

import Button from "./Button";

export default function Foot() {
  return (
    <ul className={Styles.root}>
      <li>
        <h1>skilled</h1>
      </li>
      <li>
        <Button />
      </li>
    </ul>
  );
}
