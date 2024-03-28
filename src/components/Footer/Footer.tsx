import Link from "next/link";
import { dataFooter } from ".";

export const Footer = () => {
  return (
    <section className="bg-primary">
      <section className="flex flex-row justify-between items-center lg:h-[444px] w-custom mx-auto">
        <div className="max-w-[479px]">
          <h1 className="text-custom-bg mb-5">Logo</h1>
          <p className="text-custom-bg">
            [Nombre] es el reflejo de un compromiso con el diseño excepcional y
            el desarrollo web innovador. Diseñando con cuidado y desarrollando
            con precisión, ofrecemos una experiencia en línea sobresaliente.
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-accent mb-6 text-lg font-bold">Links</h2>
          {dataFooter.map(({ id, text, link }) => (
            <Link key={id} href={link} className="text-custom-bg mb-3">
              {text}
            </Link>
          ))}
        </div>
      </section>
    </section>
  );
};
