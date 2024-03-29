import {
  HeroSplashOrangeText1,
  HeroSplashRedText1,
  HeroSplashRedText2,
  HeroSplashRedText3,
  HeroSplashBurgundyCube,
  HeroSplashOrangeCube,
  HeroSplashOrangeText2,
  HeroSplashRedCube1,
  HeroSplashRedCube2,
  HeroSplashOrangeCube2,
} from "@/components/Hero";
import { Splash } from "@/components";

export const HeroSplashesText = () => {
  return (
    <>
      {/* Mobile */}
      <Splash
        src={HeroSplashRedCube2}
        alt="Splash Red"
        className="-top-[35vh] -left-[10vh] w-[90vw] lg:hidden inline z-[-1]"
      />
      <Splash
        src={HeroSplashOrangeCube2}
        alt="Splash Red"
        className="-top-[10vh] -right-[10vh] w-[90vw] lg:hidden inline z-[-1]"
      />

      {/* Desktop */}
      <Splash
        src={HeroSplashRedText1}
        alt="Splash Red"
        className="lg:-top-[1vh] lg:-left-[3vh] lg:w-[10vw] hidden lg:inline"
      />
      <Splash
        src={HeroSplashRedText2}
        alt="Splash Red"
        className="lg:-top-[14vh] lg:left-[15vh] lg:w-[50vw] hidden lg:inline"
      />
      <Splash
        src={HeroSplashOrangeText1}
        alt="Splash Orange"
        className="lg:-top-[7vh] lg:left-[35vh] lg:w-[50vw] hidden lg:inline"
      />
      <Splash
        src={HeroSplashRedText3}
        alt="Splash Red"
        className="lg:-bottom-[30vh] lg:-left-[20vh] lg:w-[30vw] hidden lg:inline"
      />
      <Splash
        src={HeroSplashOrangeText2}
        alt="Splash Red"
        className="lg:-bottom-[20vh] lg:left-[20vh] lg:w-[40vw] hidden lg:inline"
      />
    </>
  );
};

export const HeroSplashesCube = () => {
  return (
    <>
      {/* Desktop */}
      <Splash
        src={HeroSplashBurgundyCube}
        alt="Splash Orange"
        className="lg:bottom-[19vh] lg:right-[15vh] lg:w-[20vw] hidden lg:inline"
      />
      <Splash
        src={HeroSplashOrangeCube}
        alt="Splash Orange"
        className="lg:top-[16vh] lg:right-[17vh] lg:w-[20vw] hidden lg:inline"
      />
      <Splash
        src={HeroSplashRedCube1}
        alt="Splash Red"
        className="lg:top-[20vh] lg:-right-[5vh] lg:w-[20vw] hidden lg:inline"
      />
    </>
  );
};
