import { Splash } from "@/components";
import { DemoSplashRed, DemoSplashWhite } from "@/components/Demo";

export const DemoSplashes = () => {
  return (
    <>
      <Splash
        src={DemoSplashRed}
        alt="Splash Red"
        className="top-0 left-0 lg:w-[30vw]"
        style={{
          maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
        }}
      />
      <Splash
        src={DemoSplashWhite}
        alt="Splash White"
        className="bottom-0 right-0 lg:w-[30vw]"
        style={{
          maskImage: "linear-gradient(to top, black 80%, transparent 100%)",
        }}
      />
    </>
  );
};
