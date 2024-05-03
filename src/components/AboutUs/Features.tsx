"use client";

import { dataAboutUs } from "./AboutUs.data";
import { staggerContainer, textVariant, fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";

export const Features = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="mb-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-5">
        {dataAboutUs.map(({ id, title, description }) => (
          <motion.div
            variants={fadeIn("up", "tween", 0.3, 1)}
            key={id}
            className="flex flex-col gap-3 p-5 rounded-lg bg-[#0000007d] border border-dashed border-blue-light-opacity"
          >
            <motion.h1
              variants={textVariant(0.4)}
              className="text-xl text-center font-bold degradedBlue bg-gradient-blue-light"
            >
              {title}
            </motion.h1>
            <motion.p variants={textVariant(0.5)} className="text-center">
              {description}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
