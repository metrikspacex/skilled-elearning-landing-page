import { PrismaClient } from "@prisma/client";
import clsx from "clsx";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

import Card from "@/components/Card";
import Container from "@/components/Container";
import HeroCard from "@/components/HeroCard";
import Nav from "@/components/Nav";
import HeroImageDesktop from "@/public/assets/image-hero-desktop.png";
import HeroImageMobile from "@/public/assets/image-hero-mobile.png";
import HeroImageTablet from "@/public/assets/image-hero-tablet.png";
import Styles from "@/styles/pages/home.module.scss";
import type { ContentType } from "@/types/Content";

export default function Home({ content }: { content: ContentType }) {
  const [width, setWidth] = useState(667);
  const handleResize = () => setWidth(window.innerWidth);
  // Bug going from tablet -> mobile in devtools responsive mode
  // Break points work, just dynamically resizing.
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
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
        {width > 768 ? (
          // top -92.13px right -297.71px
          // top: "-150px",
          // right: "-280px",
          // I literally hate this section.
          <Image
            priority
            alt="Hero"
            height={width < 1440 ? 640 : 900}
            src={width < 1440 ? HeroImageTablet : HeroImageDesktop}
            style={{
              backgroundPosition: "top -92.13px right -297.71px",
              backgroundRepeat: "no-repeat",
              position: "absolute",
              top: width < 1440 ? "-150px" : "-300px",
              right: width < 1440 ? "-280px" : "-300px",
            }}
            width={width < 1440 ? 640 : 900}
          />
        ) : (
          <Image
            priority
            alt="Hero"
            height={301}
            src={HeroImageMobile}
            style={{}}
            width={327}
          />
        )}
        <div className={clsx(Styles.gridB)}>
          <div className={clsx(Styles.heading, "mx-16")}>
            <h1>Check out our most popular courses!</h1>
          </div>
          {content.map((item) => (
            <Card
              className={clsx("mt-40")}
              heading={item.heading}
              key={item.heading}
              paragraph={item.paragraph}
            />
          ))}
        </div>
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
