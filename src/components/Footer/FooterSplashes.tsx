import {
  FooterSplashOrange,
  FooterSplashRed,
  FooterSplashWhite,
  Splash,
} from "@/components";

export const FooterSplashes = () => {
  return (
    <>
      <Splash
        src={FooterSplashWhite}
        alt="Splash White"
        className="lg:bottom-[0vh] lg:left-[0vh] lg:w-[10vw]"
      />
      <Splash
        src={FooterSplashOrange}
        alt="Splash White"
        className="lg:bottom-[0vh] lg:-right-[70vh] lg:w-[70vw]"
      />
    </>
  );
};
