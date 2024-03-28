import {
  PricingPlansSplashBurgundy1,
  PricingPlansSplashBurgundy2,
  PricingPlansSplashBurgundy3,
  PricingPlansSplashOrange1,
  PricingPlansSplashOrange2,
  PricingPlansSplashRed1,
} from "@/components/PricingPlans";
import { Splash } from "@/components";

export const PricingPlansSplash = () => {
  return (
    <>
      <Splash
        src={PricingPlansSplashBurgundy1}
        alt="Splash Burgundy"
        className="lg:-top-[25vh] lg:-left-[20vh]"
      />
      <Splash
        src={PricingPlansSplashBurgundy2}
        alt="Splash Burgundy"
        className="lg:top-[10vh] lg:left-[10vh]"
      />
      <Splash
        src={PricingPlansSplashBurgundy3}
        alt="Splash Burgundy"
        className="lg:-bottom-[12vh] lg:-left-[12vh] lg:w-[40vh]"
      />
      <Splash
        src={PricingPlansSplashOrange1}
        alt="Splash Orange"
        className="lg:-top-[15vh] lg:right-[45vh] lg:w-[50vh]"
      />
      <Splash
        src={PricingPlansSplashOrange2}
        alt="Splash Orange"
        className="lg:-bottom-[20vh] lg:right-[20vh] lg:w-[50vh]"
      />
      <Splash
        src={PricingPlansSplashRed1}
        alt="Splash Red"
        className="lg:-top-[18vh] lg:-right-[15vh] lg:w-[40vh]"
      />
      <Splash
        src={PricingPlansSplashRed1}
        alt="Splash Red"
        className="lg:-bottom-[10vh] lg:-right-[3vh] lg:w-[50vh]"
      />
    </>
  );
};
