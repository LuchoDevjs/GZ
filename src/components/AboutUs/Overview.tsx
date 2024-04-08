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
      <TypingText title="| Sobre Nosotros" className="mb-14" />

      <motion.div
        variants={fadeIn("up", "tween", 0.1, 1)}
        className="flex flex-col justify-center items-center gap-5 mb-14"
      >
        <p className="text-center">
          En DevSign, estamos dedicados a{" "}
          <span className="font-bold">crear diseños visuales</span> que cautiven
          y a <span className="font-bold">forjar relaciones sólidas</span> con
          nuestros clientes. Nos distinguimos por nuestro{" "}
          <span className="font-bold">compromiso</span> con{" "}
          <span className="font-bold">soluciones de diseño web</span> que no
          solo cumplen, sino que{" "}
          <span className="font-bold">sobrepasan las expectativas</span>.
          Nuestro{" "}
          <span className="font-bold">enfoque está centrado en el cliente</span>
          , priorizando una{" "}
          <span className="font-bold">comunicación clara y directa</span> desde
          la primera consulta hasta la entrega final. Nos esforzamos en{" "}
          <span className="font-bold">desarrollar vínculos duraderos</span>,
          basados en la <span className="font-bold">confianza mutua</span> y el{" "}
          <span className="font-bold">éxito conjunto</span>.
        </p>
        <IoIosArrowRoundDown size={35} />
      </motion.div>
    </motion.section>
  );
};
