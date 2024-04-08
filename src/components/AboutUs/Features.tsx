"use client";

import Image from "next/image";
import { IconBrush, IconLaptop, IconPerson, dataAboutUs } from "./AboutUs.data";
import { staggerContainer, textVariant } from "@/utils/motion";
import { motion } from "framer-motion";

const icons = [
  { id: "1", icon: IconLaptop, alt: "Icon Laptop" },
  { id: "2", icon: IconBrush, alt: "Icon Brush" },
  { id: "3", icon: IconPerson, alt: "Icon Person" },
];

export const Features = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="mb-24 relative"
    >
      <div>
        <div className="flex flex-row gap-3 justify-center mb-10">
          {icons.map(({ id, icon, alt }) => (
            <Image
              key={id}
              src={icon}
              alt={alt}
              width={30}
              height={30}
              color="secondary"
            />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-5 z-10 relative">
        {dataAboutUs.map(({ id, title, description }) => (
          <div
            key={id}
            className="flex flex-col gap-5 px-3 py-5 rounded-lg bg-bento-gradient shadow-2xl"
          >
            <motion.h1
              variants={textVariant(0.6)}
              className="text-xl font-bold degradedBlue bg-blueLight"
            >
              {title}
            </motion.h1>
            <motion.p variants={textVariant(0.7)}>{description}</motion.p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};
