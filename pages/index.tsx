import { PrismaClient } from "@prisma/client";
import clsx from "clsx";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

import Container from "@/components/Container";
import HeroCard from "@/components/HeroCard";
import Nav from "@/components/Nav";
import HeroImageMobile from "@/public/assets/image-hero-mobile.png";
import HeroImageTablet from "@/public/assets/image-hero-tablet.png";
import Styles from "@/styles/pages/home.module.scss";
import type { ContentType } from "@/types/Content";

export default function Home() {
  const [width, setWidth] = useState<number>(0);
  useEffect(() => {
    const handleWidth = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWidth);
    handleWidth();
    return () => window.removeEventListener("resize", handleWidth);
  });
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
      <header className={clsx(Styles.root)}>
        <Container className={clsx("h-48")}>
          <Nav logo="skilled" text="Get Started" variant="primary" />
        </Container>
      </header>
      <main className={clsx(Styles.root)}>
        <HeroCard />
        {width <= 768 ? (
          <Image
            alt="Hero"
            height={301}
            src={HeroImageMobile}
            style={{}}
            width={327}
          />
        ) : (
          <Image
            alt="Hero"
            height={640}
            src={HeroImageTablet}
            style={{
              backgroundPosition: "top -92.13px right -297.71px",
              backgroundRepeat: "no-repeat",
              position: "absolute",
              top: "-150px",
              right: "-280px",
            }}
            width={640}
          />
        )}
      </main>
      <footer className={clsx("bg-very-dark-blue", Styles.root)}>
        <Container className={clsx("h-48")}>
          <Nav logo="skilled" text="Get Started" variant="secondary" />
        </Container>
      </footer>
    </>
  );
}

export async function getStaticProps() {
  const prisma = new PrismaClient();
  const content: ContentType = await prisma.content.findMany();
  return {
    props: {
      content,
    },
  };
}
