import { dataAboutUs } from "./AboutUs.data";
import { Splash } from "../BackgroundSplash";

export const AboutUs = () => {
  return (
    <section className="my-24 relative">
      <div>
        <h1 className="text-center text-2xl mb-10">Nosotros</h1>
      </div>
      <Splash
        src="/assets/splashes/splash2.png"
        alt="splash1"
        className="top-[40vh] left-1 transform -translate-x-1/2 -translate-y-full lg:top-1/2 lg:left-0 lg:-translate-x-0 lg:-translate-y-1/2 w-[80vw] md:w-[50vw] lg:w-[30vw]"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-5 z-10 relative">
        {dataAboutUs.map(({ id, title, description }) => (
          <div
            key={id}
            className="flex flex-col gap-5 px-3 py-5 rounded-lg border border-[#FFF4E499] bg-[#FFF4E466]"
          >
            <h1 className="text-xl font-bold">{title}</h1>
            <p>{description}</p>
          </div>
        ))}
      </div>
      <Splash
        src="/assets/splashes/splash1.png"
        alt="splash2"
        className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100vw] md:w-[70vw] lg:w-[40vw]"
      />
      <Splash
        src="/assets/splashes/splash3.png"
        alt="splashred"
        className="top-1/2 bottom-[10vh] left-[70%] transform -translate-x-1/2 translate-y-1/2 lg:right-10 lg:top-1/2 lg:bottom-0 lg:right-0 lg:-translate-x-0 lg:-translate-y-1/2 w-[80vw] md:w-[50vw] lg:w-[30vw]"
      />
    </section>
  );
};
