import Image from "next/image";

type IconProps = {
  alt: string;
  height: number;
  src: string;
  width: number;
};
export default function Icon({ alt, height, src, width }: IconProps) {
  return <Image alt={alt} height={height} src={src} width={width} />;
}
