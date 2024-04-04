"use client";

import { IconArrow } from ".";
import Link from "next/link";

export const Hero = () => {
  return (
    <>
      <section className="flex flex-col-reverse lg:flex-col justify-between items-center my-16 lg:my-20 rounded-xl">
        <section className="relative">
          <div className="flex flex-col p-2">
            <div className="flex flex-col gap-4 lg:gap-7 py-0 lg:py-6">
              <h1 className="text-6xl text-center lg:text-8xl font-semibold degradedBlue bg-blueLight">
                DevSign
              </h1>
              <h2 className="text-xl text-center lg:text-3xl font-extralight">
                Llevá tu presencia al siguiente nivel
              </h2>
            </div>
            <div className="my-8 flex justify-center">
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
