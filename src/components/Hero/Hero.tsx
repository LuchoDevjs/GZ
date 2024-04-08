"use client";

import { IconArrow } from ".";
import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "@/utils/motion";

export const Hero = () => {
  return (
    <>
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex flex-col justify-between items-center my-16"
      >
        <div className="flex flex-col p-2">
          <div className="flex flex-col gap-4 lg:gap-5 py-0 lg:py-10">
            <motion.p
              variants={textVariant(0.6)}
              className="text-center font-extralight text-sm lg:text-xl tracking-[0.2em]"
            >
              SOMOS DEVSIGN
            </motion.p>
            <motion.h1
              variants={textVariant(0.7)}
              className="text-2xl text-center lg:text-5xl font-semibold degradedBlue bg-blueLight"
            >
              Desarrollamos tu web y diseño para potenciar tu presencia online.
            </motion.h1>
          </div>
          <motion.div
            variants={textVariant(0.8)}
            className="my-5 flex justify-center"
          >
            <Link href="#packages" className="btn">
              Empezár
            </Link>
          </motion.div>
        </div>
      </motion.section>
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <motion.div variants={textVariant(0.9)}>
          <Link href="#aboutus" className="flex justify-center my-16 lg:my-28">
            <IconArrow color="#006ff0" />
          </Link>
        </motion.div>
      </motion.section>
    </>
  );
};
