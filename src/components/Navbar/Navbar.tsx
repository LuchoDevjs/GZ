import Link from "next/link";
import { dataNavbar } from ".";
import Image from "next/image";
import Logo from "../../../public/assets/LionLogo.png";

export const Navbar = () => {
  return (
    <nav>
      <section className="flex flex-row items-center justify-between py-2 hidden md:flex lg:flex text-xl">
        {dataNavbar.map(({ id, item, link }) => (
          <Link key={id} href={link}>
            {id === "3" ? (
              <Image src={item} alt="Logo" height={90} width={90} />
            ) : (
              <p className="transition-hover hover:text-secondary">{item}</p>
            )}
          </Link>
        ))}
      </section>
      <section className="flex flex-row items-center justify-between py-2 lg:hidden md:hidden">
        <Link href="#/">
          <Image src={Logo} alt="Logo" height={90} width={90} />
        </Link>
        <Link href="/contact">
          <p className="transition-hover hover:text-secondary text-xl">
            Contacto
          </p>
        </Link>
      </section>
    </nav>
  );
};
