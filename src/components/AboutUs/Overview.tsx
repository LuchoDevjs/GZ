import Image from "next/image";
import {
  firstInformation,
  members,
  secondInformation,
} from "@/components/AboutUs";
import { Separator } from "@/components/ui/separator";

export const Overview = () => {
  return (
    <section className="mb-24 relative">
      <h1 className="font-extralight text-3xl lg:text-5xl text-center lg:text-start mb-14">
        Compromiso con la excelencia
      </h1>
      <div className="flex flex-col text-center lg:text-start gap-10 mb-14">
        {firstInformation.map(({ id, text }) => (
          <p key={id}>{text}</p>
        ))}
      </div>

      <section className="flex flex-col lg:flex-row gap-4 mb-24">
        {secondInformation.map(({ id, text }) => (
          <div key={id} className="flex-1 flex flex-row gap-4 items-center">
            <Separator
              orientation="vertical"
              className="bg-secondary h-[7rem]"
            />
            <p>{text}</p>
          </div>
        ))}
      </section>
      <section className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:justify-around z-10 relative">
        {members.map(({ id, name, role, image }) => (
          <div
            className="flex flex-col gap-3 items-center justify-center bg-bento-gradient shadow-2xl p-8 rounded-lg"
            key={id}
          >
            {/* <Image src={image} alt={name} width={64} height={64} /> */}
            <h1 className="text-2xl font-bold">{name}</h1>
            <p>{role}</p>
          </div>
        ))}
      </section>
    </section>
  );
};
