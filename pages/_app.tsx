import "@/styles/globals.scss";

import type { AppProps } from "next/app";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";

const jakarta = Plus_Jakarta_Sans({
  display: "swap",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--ff",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={jakarta.variable} id="__target">
      <Script src="./scripts/resize.js" />
      <Component {...pageProps} />
    </div>
  );
}
