import { Plus_Jakarta_Sans } from "next/font/google";
import Head from "next/head";

import Foot from "@/components/Foot";
import Nav from "@/components/Nav";

const jakarta = Plus_Jakarta_Sans({
  display: "swap",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export default function Home() {
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
      <header>
        <Nav />
      </header>
      <main className={jakarta.variable}></main>
      <footer>
        <Foot />
      </footer>
    </>
  );
}
