"use client";

import { dataAboutUs } from "./AboutUs.data";
import { staggerContainer, textVariant } from "@/utils/motion";
import { motion } from "framer-motion";

export const Features = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="mb-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-5">
        {dataAboutUs.map(({ id, title, description }) => (
          <div
            key={id}
            className="flex flex-col gap-3 p-5 rounded-lg bg-bento-gradient"
          >
            <motion.h1
              variants={textVariant(0.6)}
              className="text-xl text-center font-bold degradedBlue bg-blueLight"
            >
              {title}
            </motion.h1>
            <motion.p variants={textVariant(0.7)} className="text-center">
              {description}
            </motion.p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};
