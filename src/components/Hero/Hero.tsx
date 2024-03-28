import Image from "next/image";
import { HeroCube, HeroSplashesCube, HeroSplashesText } from ".";

export const Hero = () => {
  return (
    <section className="flex flex-col justify-between items-center lg:flex-row my-24 gap-10 relative">
      <section className="relative">
        <HeroSplashesText />
        <div className="flex flex-col p-8 border border-[#FFF4E499] bg-[#FFF4E466] rounded-xl lg:max-w-[668px] lg:max-h-[360px] z-10 relative">
          <div className="flex flex-col gap-7 py-6">
            <h1 className="text-5xl font-extralight">
              Llevá tu presencia al siguiente nivel
            </h1>
            <p>
              Diseñamos sitios web que se adaptan perfectamente a cualquier
              dispositivo para una experiencia de usuario excepcional.
            </p>
          </div>
          <div className="my-8">
            <button className="btn">Conocé más</button>
          </div>
        </div>
      </section>
      <section className="relative">
        <HeroSplashesCube />
        <div className="flex justify-center relative">
          <Image src={HeroCube} alt="Cube" width={346} height={400} />
        </div>
      </section>
    </section>
  );
};
