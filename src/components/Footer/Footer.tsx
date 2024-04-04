import Link from "next/link";
import { dataFooter } from ".";
import Image from "next/image";

export const Footer = () => {
  return (
    <section className="bg-primary relative">
      <section className="flex flex-col justify-center  w-custom mx-auto">
        <section className="flex flex-col lg:flex-row justify-between items-center lg:h-[444px] z-10 relative">
          <div className="w-full flex items-center flex-col lg:items-start lg:max-w-[479px] my-10 lg:my-0">
            <Link href="#/">
              <Image
                src="/assets/LionLogo.png"
                alt="Logo"
                height={80}
                width={80}
              />
            </Link>
            <p className="text-custom-bg text-center lg:text-start text-sm lg:text-base mb-0 lg:mb-20 lg:mt-5">
              DevSign es el reflejo de un compromiso con el diseño excepcional y
              el desarrollo web innovador. Diseñando con cuidado y desarrollando
              con precisión, ofrecemos una experiencia en línea sobresaliente.
            </p>
            <p className="text-custom-bg hidden lg:inline text-sm">
              © 2024 Luciano González
            </p>
          </div>
          <div className="flex flex-row lg:flex-col items-center lg:items-start gap-5 lg:gap-0 mb-10 lg:mb-0">
            <h2 className="text-secondary mb-6 text-lg font-bold hidden lg:inline">
              Links
            </h2>
            {dataFooter.map(({ id, text, link }) => (
              <Link
                key={id}
                href={link}
                className="text-custom-bg mb-3 transition-hover hover:text-secondary text-sm lg:text-base"
              >
                {text}
              </Link>
            ))}
          </div>
        </section>
        <p className="text-custom-bg text-center text-sm mb-5 inline lg:hidden">
          © 2024 Luciano González
        </p>
      </section>
    </section>
  );
};
