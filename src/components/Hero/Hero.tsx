"use client";

import { IconArrow } from ".";
import Link from "next/link";

export const Hero = () => {
  return (
    <>
      <section className="flex flex-col-reverse lg:flex-col justify-between items-center my-16 rounded-xl">
        <section className="relative">
          <div className="flex flex-col p-2">
            <div className="flex flex-col gap-4 lg:gap-5 py-0 lg:py-6">
              <p className="text-center font-extralight text-sm lg:text-xl tracking-[0.2em]">
                SOMOS DEVSIGN
              </p>
              <h1 className="text-2xl text-center lg:text-5xl font-semibold degradedBlue bg-blueLight">
                Desarrollamos tu web y diseño para potenciar tu presencia
                online.
              </h1>
            </div>
            <div className="my-5 flex justify-center">
              <Link href="#packages" className="btn">
                Empezár
              </Link>
            </div>
          </div>
        </section>
      </section>
      <Link href="#aboutus" className="flex justify-center my-16 lg:my-28">
        <IconArrow color="#006ff0" />
      </Link>
    </>
  );
};
