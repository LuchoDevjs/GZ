import {
  HeroSplashOrangeText4,
  HeroSplashRedText1,
  HeroSplashRedText2,
  HeroSplashRedText3,
  HeroSplashBurgundyCube,
  HeroSplashOrangeCube,
  HeroSplashRedCube,
} from "@/components/Hero";
import { Splash } from "@/components";

export const HeroSplashesText = () => {
  return (
    <>
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
    </>
  );
};

export const HeroSplashesCube = () => {
  return (
    <>
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
    </>
  );
};
