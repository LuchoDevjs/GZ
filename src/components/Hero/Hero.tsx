import Image from "next/image";
import { HeroCube, HeroSplashesCube, HeroSplashesText, IconArrow } from ".";
import Link from "next/link";

export const Hero = () => {
  return (
    <>
      <section className="flex flex-col-reverse lg:flex-row justify-between items-center my-16 lg:my-36 lg:gap-10 border border-[#FFF4E499] bg-[#FFF4E466] lg:border-0 lg:bg-transparent rounded-xl">
        <section className="relative">
          <HeroSplashesText />
          <div className="flex flex-col p-2 lg:p-8 lg:border lg:border-[#FFF4E499] lg:bg-[#FFF4E466] lg:rounded-xl lg:max-w-[668px] lg:max-h-[360px] z-10 relative">
            <div className="flex flex-col gap-4 lg:gap-7 py-0 lg:py-6">
              <h1 className="text-3xl text-center lg:text-start lg:text-5xl font-extralight">
                Llevá tu presencia al siguiente nivel
              </h1>
              <p className="text-center lg:text-start">
                Diseñamos sitios web que se adaptan perfectamente a cualquier
                dispositivo para una experiencia de usuario excepcional.
              </p>
            </div>
            <div className="my-8 flex justify-center lg:justify-start">
              <Link href="#packages" className="btn">
                Conocé más
              </Link>
            </div>
          </div>
        </section>
        <section className="relative">
          <HeroSplashesCube />
          <div className="flex justify-center relative my-3 lg:my-0 lg:w-[346px] lg:h-[400px] w-[112px] h-[122px]">
            <Image src={HeroCube} alt="Cube" width={346} height={400} />
          </div>
        </section>
      </section>
      <Link href="#aboutus" className="flex justify-center my-16 lg:my-28">
        <IconArrow />
      </Link>
    </>
  );
};
