"use client";

import Link from "next/link";
import { dataNavbar } from ".";
import Image from "next/image";
import Logo from "../../../public/assets/LionLogo.png";
import { motion } from "framer-motion";
import { navVariants } from "@/utils/motion";

export const Navbar = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false }}
      className="relative"
    >
      <section className="flex flex-row items-center justify-between py-2 hidden md:flex lg:flex text-lg">
        {dataNavbar.map(({ id, item, link }) => (
          <Link key={id} href={link}>
            {id === "3" ? (
              <Image src={item} alt="Logo" height={70} width={70} />
            ) : (
              <p className="transition-hover hover:text-secondary">{item}</p>
            )}
          </Link>
        ))}
      </section>
      <section className="flex flex-row items-center justify-between py-2 lg:hidden md:hidden">
        <Link href="#/">
          <Image src={Logo} alt="Logo" height={70} width={70} />
        </Link>
        <Link href="#contact">
          <p className="transition-hover hover:text-secondary text-lg">
            Contacto
          </p>
        </Link>
      </section>
    </motion.nav>
  );
};
