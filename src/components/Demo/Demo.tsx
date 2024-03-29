import { DemoSplashes } from ".";
import Link from "next/link";

export const Demo = () => {
  return (
    <section
      className="h-[300px] lg:h-[512px] bg-primary flex flex-col justify-center items-center gap-9 relative mb-24"
      id="demo"
    >
      <DemoSplashes />
      <h1 className="text-2xl lg:text-5xl font-extralight text-white">
        Descubre Nuestro Estilo
      </h1>
      <Link
        href="https://tmaldocena.github.io/cyberspeed/"
        target="_blank"
        className="btn"
      >
        Ver demo
      </Link>
    </section>
  );
};
