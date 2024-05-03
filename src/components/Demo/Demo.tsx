import Link from "next/link";

export const Demo = () => {
  return (
    <section
      className="h-[300px] lg:h-[350px] bg-primary flex flex-col justify-center items-center gap-9 relative mb-24"
      id="demo"
    >
      <h1 className="text-2xl lg:text-5xl font-extralight text-custom-bg">
        Descubre Nuestro Estilo
      </h1>
      <Link href="" target="_blank" className="btn">
        Ver demo
      </Link>
    </section>
  );
};
