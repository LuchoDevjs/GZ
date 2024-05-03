"use client";

import Link from "next/link";
import { dataFooter } from ".";
import Image from "next/image";
import { motion } from "framer-motion";
import { footerVariants } from "@/utils/motion";

export const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex flex-col justify-center w-width-custom mx-auto"
    >
      <section className="flex flex-col lg:flex-row justify-between items-center lg:items-start my-5">
        <div className="w-full flex items-center flex-col lg:items-start lg:max-w-[479px] my-10 lg:my-0 gap-5">
          <Link href="#/" className="">
            <Image src="/assets/Logo.png" alt="Logo" height={70} width={70} />
          </Link>
          <p className="text-center lg:text-start text-sm lg:text-base mb-0 lg:mb-20 lg:mt-5">
            Me comprometo firmemente con el desarrollo web innovador. Enfocado
            en la precisión técnica, creo experiencias en línea que se destacan
            por su funcionalidad y rendimiento avanzado.
          </p>
          <p className=" hidden lg:inline text-sm">© 2024 Luciano González</p>
        </div>
        <div className="flex flex-row lg:flex-col items-center lg:items-start gap-5 lg:gap-0 mb-10 lg:mb-0">
          <h2 className="degradedBlue bg-gradient-blue-light mb-6 text-lg font-bold hidden lg:inline">
            Links
          </h2>
          {dataFooter.map(({ id, text, link }) => (
            <Link
              key={id}
              href={link}
              className="mb-0 lg:mb-3 transition-hover hover:text-secondary text-sm lg:text-base"
            >
              {text}
            </Link>
          ))}
        </div>
      </section>
      <p className="text-center text-sm mb-5 inline lg:hidden">
        © 2024 Luciano González
      </p>
    </motion.footer>
  );
};
