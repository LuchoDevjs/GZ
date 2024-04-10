"use client";

import { fadeIn, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import { TypingText } from "../CustomTexts/CustomTexts";
import { IoIosArrowRoundDown } from "react-icons/io";

export const Overview = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <TypingText title="| Sobre Mi" className="mb-14" />

      <motion.div
        variants={fadeIn("up", "tween", 0.1, 1)}
        className="flex flex-col justify-center items-center gap-5 mb-14"
      >
        <p className="text-center">
          Me enfoco en <span className="font-bold">crear soluciones web</span>{" "}
          que exceden las expectativas, combinando{" "}
          <span className="font-bold">innovación y funcionalidad</span>. Cada
          proyecto destaca por su{" "}
          <span className="font-bold">calidad técnica</span> y{" "}
          <span className="font-bold">experiencia de usuario</span>. Valoro la{" "}
          <span className="font-bold">comunicación efectiva</span> y el
          entendimiento de las{" "}
          <span className="font-bold">necesidades de los clientes</span>,
          buscando establecer{" "}
          <span className="font-bold">relaciones sólidas</span> basadas en la{" "}
          <span className="font-bold">confianza</span> y el{" "}
          <span className="font-bold">éxito mutuo</span>.
        </p>
        <IoIosArrowRoundDown size={35} />
      </motion.div>
    </motion.section>
  );
};
