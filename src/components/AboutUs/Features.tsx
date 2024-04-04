import Image from "next/image";
import { IconBrush, IconLaptop, IconPerson, dataAboutUs } from "./AboutUs.data";

const icons = [
  { id: "1", icon: IconLaptop, alt: "Icon Laptop" },
  { id: "2", icon: IconBrush, alt: "Icon Brush" },
  { id: "3", icon: IconPerson, alt: "Icon Person" },
];

export const Features = () => {
  return (
    <section className="mb-24 relative">
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
            <h1 className="text-xl font-bold">{title}</h1>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
