"use client";

import { Card, dataCard } from ".";
import { TitleText, TypingText } from "../CustomTexts/CustomTexts";
import { staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";

export const PricingPlans = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex flex-col justify-center mb-24 lg:max-w-[1200px] mx-auto"
      id="packages"
    >
      <div className="flex flex-col justify-center items-center gap-3 mb-16">
        <TitleText
          title="Elige el plan que más te conviene"
          className="text-3xl text-center lg:text-5xl font-extralight"
        />

        <TypingText title="| Principales paquetes:" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:flex-row gap-5 relative">
        {dataCard.map((data) => (
          <Card key={data.id} {...data} />
        ))}
      </div>

      <TitleText
        title="Si sentís que tu idea no se ajusta a ningún paquete, no dudes en
        comentarlo y te ofreceré el paquete adecuado para vos."
        className="text-center mt-16"
      />
    </motion.section>
  );
};
