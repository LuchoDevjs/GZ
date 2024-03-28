import { Splash } from "..";
import { DemoSplashRed, DemoSplashWhite } from ".";

export const Demo = () => {
  return (
    <section
      className="h-[300px] lg:h-[512px] bg-primary flex flex-col justify-center items-center gap-9 relative mb-24"
      id="demo"
    >
      <Splash
        src={DemoSplashRed}
        alt="Splash Red"
        className="top-0 left-0 lg:w-[30vw]"
        style={{
          maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
        }}
      />

      <h1 className="text-2xl lg:text-5xl font-extralight text-white">
        Descubre Nuestro Estilo
      </h1>
      <button className="btn">Ver demo</button>
      <Splash
        src={DemoSplashWhite}
        alt="Splash White"
        className="bottom-0 right-0 lg:w-[30vw]"
        style={{
          maskImage: "linear-gradient(to top, black 80%, transparent 100%)",
        }}
      />
    </section>
  );
};
