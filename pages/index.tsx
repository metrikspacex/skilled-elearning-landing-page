import Head from "next/head";

import Button from "@/components/Button";
import Styles from "@/styles/pages/home.module.scss";

export default function Home() {
  const onClick = () => {};
  return (
    <>
      <Head>
        <base href="/" />
        <meta charSet="UTF-8" />
        <meta content="Skilled e-learning" name="description" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <link
          href="./assets/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <title>Frontend Mentor | Skilled e-learning landing page</title>
      </Head>
      <header className={Styles.root}></header>
      <main className={Styles.root}></main>
      <footer className={Styles.root}>
        <div>
          <ul>
            <li>
              <h1>Skilled</h1>
            </li>
            <li>
              <Button
                color="tertiary"
                content="Get Start"
                height={4.8}
                typography="tertiary"
                width={14}
                onClick={onClick}
                onKeyDown={onClick}
              />
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
