import { PrismaClient } from "@prisma/client";
import clsx from "clsx";
import Head from "next/head";

import Button from "@/components/Button";
import Card from "@/components/Card";
import GetStarted from "@/components/GetStarted";
import Headings from "@/components/Headings";
import Hero from "@/components/Hero";
import HeroImage from "@/public/assets/image-hero-mobile-2x.webp";
import Styles from "@/styles/pages/home.module.scss";
import type { ContentType } from "@/types/Content";

export default function Home({ content }: { content: ContentType }) {
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
      <header className={Styles.root}>
        <GetStarted
          color="primary"
          content="Get Started"
          heading="skilled"
          typography="primary"
        />
        <div className={Styles.gridA}>
          <Headings
            className={clsx("mx-16")}
            text="Maximize skill, minimize budget"
            typography="HL"
          />
          <Headings
            className={clsx("mt-26 mx-16")}
            text="Our moden courses across a range of in-demand skills will give you the knowledge you need to live the life you want"
            typography="BS"
          />
          <Button
            className={clsx("ml-16 mt-24")}
            color="secondary"
            content="Get Started"
            height={5.6}
            typography="secondary"
            width={16.7}
          />
        </div>
        <Hero
          alt="HeroImage"
          className={clsx("mb-66 mx-24 my-46")}
          height={301}
          src={HeroImage}
          width={327}
        />
      </header>
      <main className={Styles.root}>
        <div className={clsx(Styles.heading, "mx-16")}>
          <h1>Check out our most popular courses!</h1>
        </div>
        <div className={clsx(Styles.gridB)}>
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
      <footer className={Styles.root}>
        <GetStarted
          color="tertiary"
          content="Get Started"
          heading="skilled"
          typography="tertiary"
        />
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
