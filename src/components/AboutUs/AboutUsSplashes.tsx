import { Splash } from "@/components";
import {
  FeaturesSplashBurgundy,
  FeaturesSplashOrange,
  FeaturesSplashRed,
  OverviewSplashOrange1,
  OverviewSplashOrange2,
  OverviewSplashOrange3,
  OverviewSplashOrange4,
  OverviewSplashOrange5,
  OverviewSplashRed1,
} from "@/components/AboutUs/AboutUs.data";

export const OverviewSplashes = () => {
  return (
    <>
      <Splash
        src={OverviewSplashOrange1}
        alt="Splash Orange"
        className="lg:-top-[16vh] lg:-left-[5vh] lg:w-[13vw] hidden lg:inline"
      />
      <Splash
        src={OverviewSplashOrange2}
        alt="Splash Orange"
        className="lg:-top-[18vh] lg:-right-[5vh] lg:w-[20vw] hidden lg:inline"
      />
      <Splash
        src={OverviewSplashOrange3}
        alt="Splash Orange"
        className="lg:bottom-[60vh] lg:-right-[15vh] lg:w-[12vw] hidden lg:inline"
      />
      <Splash
        src={OverviewSplashOrange4}
        alt="Splash Orange"
        className="lg:bottom-[12vh] lg:-left-[17vh] lg:w-[15vw] hidden lg:inline"
      />
      <Splash
        src={OverviewSplashOrange5}
        alt="Splash Orange"
        className="bottom-[12vh] -left-[9vh] w-[120vw] lg:-bottom-[15vh] lg:left-[3vh] lg:w-[60vw]"
      />
      <Splash
        src={OverviewSplashRed1}
        alt="Splash Red"
        className="-bottom-[15vh] -left-[9vh] w-[120vw] lg:-bottom-[15vh] lg:-right-[40vh] lg:w-[60vw] lg:left-auto"
      />
    </>
  );
};

export const FeaturesSplashes = () => {
  return (
    <>
      <Splash
        src={FeaturesSplashBurgundy}
        alt="Splash Burgundy"
        className="top-[40vh] left-1 transform -translate-x-1/2 -translate-y-full lg:top-1/2 lg:left-0 lg:-translate-x-0 lg:-translate-y-1/2 w-[80vw] md:w-[50vw] lg:w-[30vw]"
      />
      <Splash
        src={FeaturesSplashRed}
        alt="Splash Red"
        className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100vw] md:w-[70vw] lg:w-[40vw]"
      />
      <Splash
        src={FeaturesSplashOrange}
        alt="Splash Orange"
        className="top-1/2 bottom-[10vh] left-[70%] transform -translate-x-1/2 translate-y-1/2 lg:right-10 lg:top-1/2 lg:bottom-0 lg:right-0 lg:-translate-x-0 lg:-translate-y-1/2 w-[80vw] md:w-[50vw] lg:w-[30vw]"
      />
    </>
  );
};
