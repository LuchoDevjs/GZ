import Link from "next/link";
import { dataNavbar } from ".";
import Image from "next/image";

export const Navbar = () => {
  return (
    <nav className="flex flex-row items-center justify-between py-2">
      {dataNavbar.map(({ id, item, link }) => (
        <Link key={id} href={link}>
          {id === "3" ? (
            <Image src={item} alt="Logo" height={100} width={100} />
          ) : (
            item
          )}
        </Link>
      ))}
    </nav>
  );
};
