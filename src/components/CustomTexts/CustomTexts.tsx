"use client";

import { textContainer, textVariant2 } from "@/utils/motion";
import { motion } from "framer-motion";

export const TypingText = ({ title = "", className = "" }) => (
  <motion.p
    variants={textContainer}
    className={`font-extralight text-sm text-center ${className}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title = "", className = "" }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={className}
  >
    {title}
  </motion.h2>
);
