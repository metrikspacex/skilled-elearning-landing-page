import Image from "next/image";

type HeroProps = {
  alt: string;
  height: number;
  src: string;
  width: number;
};
export default function Hero({ alt, height, src, width }: HeroProps) {
  return <Image alt={alt} height={height} src={src} width={width} />;
}
