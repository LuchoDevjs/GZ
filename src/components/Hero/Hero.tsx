import Image from "next/image";
import {
  HeroCube,
  HeroSplashBurgundyCube,
  HeroSplashOrangeCube,
  HeroSplashOrangeText4,
  HeroSplashRedCube,
  HeroSplashRedText1,
  HeroSplashRedText2,
  HeroSplashRedText3,
} from ".";
import { Splash } from "..";

export const Hero = () => {
  return (
    <section className="flex flex-col justify-between items-center lg:flex-row my-24 gap-10 relative">
      <section className="relative">
        <Splash
          src={HeroSplashRedText1}
          alt="Splash Red"
          className="lg:-top-[1vh] lg:-left-[3vh] lg:w-[10vw]"
        />
        <Splash
          src={HeroSplashRedText2}
          alt="Splash Red"
          className="lg:-top-[14vh] lg:left-[15vh] lg:w-[50vw]"
        />
        <Splash
          src={HeroSplashOrangeText4}
          alt="Splash Orange"
          className="lg:-top-[7vh] lg:left-[35vh] lg:w-[50vw]"
        />
        <Splash
          src={HeroSplashRedText3}
          alt="Splash Red"
          className="lg:-bottom-[30vh] lg:-left-[20vh] lg:w-[30vw]"
        />
        <Splash
          src={HeroSplashOrangeText4}
          alt="Splash Red"
          className="lg:-bottom-[25vh] lg:left-[20vh] lg:w-[50vw]"
        />

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
        <Splash
          src={HeroSplashBurgundyCube}
          alt="Splash Orange"
          className="lg:bottom-[19vh] lg:right-[15vh] lg:w-[20vw]"
        />
        <Splash
          src={HeroSplashOrangeCube}
          alt="Splash Orange"
          className="lg:top-[16vh] lg:right-[17vh] lg:w-[20vw]"
        />
        <Splash
          src={HeroSplashRedCube}
          alt="Splash Red"
          className="lg:top-[20vh] lg:-right-[5vh] lg:w-[20vw]"
        />
        <div className="flex justify-center relative">
          <Image src={HeroCube} alt="Cube" width={346} height={400} />
        </div>
      </section>
    </section>
  );
};
