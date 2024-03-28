import { Splash } from "@/components";
import {
  AboutSplashBurgundy,
  AboutSplashOrange,
  AboutSplashRed,
} from "@/components/AboutUs/AboutUs.data";

export const FeaturesSplashes = () => {
  return (
    <>
      <Splash
        src={AboutSplashBurgundy}
        alt="Splash Burgundy"
        className="top-[40vh] left-1 transform -translate-x-1/2 -translate-y-full lg:top-1/2 lg:left-0 lg:-translate-x-0 lg:-translate-y-1/2 w-[80vw] md:w-[50vw] lg:w-[30vw]"
      />
      <Splash
        src={AboutSplashRed}
        alt="Splash Red"
        className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100vw] md:w-[70vw] lg:w-[40vw]"
      />
      <Splash
        src={AboutSplashOrange}
        alt="Splash Orange"
        className="top-1/2 bottom-[10vh] left-[70%] transform -translate-x-1/2 translate-y-1/2 lg:right-10 lg:top-1/2 lg:bottom-0 lg:right-0 lg:-translate-x-0 lg:-translate-y-1/2 w-[80vw] md:w-[50vw] lg:w-[30vw]"
      />
    </>
  );
};
