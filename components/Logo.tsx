type LogoProps = {
  text: string;
};
export default function Logo({ text }: LogoProps) {
  return <h1>{text}</h1>;
}
