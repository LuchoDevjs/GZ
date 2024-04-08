"use client";

import {
  firstInformation,
  members,
  secondInformation,
} from "@/components/AboutUs";
import { Separator } from "@/components/ui/separator";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import { TypingText } from "../CustomTexts/CustomTexts";

export const Overview = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="relative"
    >
      <TypingText title="| Sobre Nosotros" className="mb-14" />

      <motion.div
        variants={fadeIn("up", "tween", 0.1, 1)}
        className="flex flex-col text-center lg:text-start gap-10 mb-14"
      >
        {firstInformation.map(({ id, text }) => (
          <p key={id}>{text}</p>
        ))}
      </motion.div>

      <motion.section
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="flex flex-col lg:flex-row gap-4 mb-24"
      >
        {secondInformation.map(({ id, text }) => (
          <div key={id} className="flex-1 flex flex-row gap-4 items-center">
            <Separator
              orientation="vertical"
              className="bg-secondary h-[7rem]"
            />
            <p>{text}</p>
          </div>
        ))}
      </motion.section>
    </motion.section>
  );
};
