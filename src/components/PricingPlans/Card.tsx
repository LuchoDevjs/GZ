"use client";

import { CardProps, IconCheck } from "@/components/PricingPlans";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, textVariant } from "@/utils/motion";

export const Card = ({
  border,
  bg,
  plan,
  price,
  description,
  items,
  bgButton,
  hoverButton,
  textButton,
  borderButton,
  separatorColor,
  bgPlan,
  degraded,
}: CardProps) => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <motion.div
        variants={fadeIn("up", "tween", 0.1, 1)}
        className={`flex flex-col justify-between border-[0.5px] rounded-xl ${border} p-6 shadow-xl`}
      >
        <div className="flex flex-col gap-4">
          <div className="flex justify-start">
            <motion.h3
              variants={textVariant(0.6)}
              className={` ${textButton} text-3xl ${degraded} ${bgPlan}`}
            >
              {plan}
            </motion.h3>
          </div>
          <motion.h4
            variants={textVariant(0.7)}
            className="text-3xl lg:text-5xl font-extralight"
          >
            ${price}
          </motion.h4>
          <motion.p variants={textVariant(0.8)} className="text-sm">
            {description}
          </motion.p>
        </div>
        <motion.div variants={textVariant(0.9)}>
          <Separator className={`my-8 ${separatorColor}`} />
        </motion.div>
        <motion.div
          variants={textVariant(1)}
          className="mb-8 flex flex-col gap-3"
        >
          {items.map((item, index) => (
            <div key={index} className="flex flex-row items-center gap-2 ">
              <span className="text-xl">-</span>
              <p className="text-sm">{item.text}</p>
            </div>
          ))}
        </motion.div>
        <motion.div variants={textVariant(1.1)} className="flex justify-center">
          <Link
            href="#contact"
            className={`border ${bgButton} transition-hover ${hoverButton} ${textButton} ${
              borderButton || ""
            } text-sm lg:text-base py-2 rounded-full w-full text-center`}
          >
            Comienza ahora
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
