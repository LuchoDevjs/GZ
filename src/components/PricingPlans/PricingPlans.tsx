import Image from "next/image";
import {
  IconCheck,
  PricingPlansSplashBurgundy1,
  PricingPlansSplashBurgundy2,
  PricingPlansSplashBurgundy3,
  PricingPlansSplashOrange1,
  PricingPlansSplashOrange2,
  PricingPlansSplashRed1,
  dataPricings,
} from ".";
import { Separator } from "../ui/separator";
import { Splash } from "..";

interface StyleClasses {
  border: string;
  text: string;
  bg: string;
  bgButton: string;
  textButton: string;
  borderButton?: string;
}

type StyleClassKey = "1" | "2" | "3";

const stylesMap = {
  "1": {
    border: "border-[#FFF4E499]",
    text: "text-[#FFF4E499]",
    bg: "bg-[#FFF4E499]",
    bgButton: "bg-custom-bg",
    textButton: "text-secondart",
    borderButton: "border-[#3D0E1E99]",
    bgh3: "bg-[#FFF4E433]",
  },
  "2": {
    border: "border-[#D1274B99]",
    text: "text-[#D1274B99]",
    bg: "bg-[#D1274B99]",
    bgButton: "bg-secondary",
    textButton: "text-custom-bg",
    bgh3: "bg-[#D1274B33]",
  },
  "3": {
    border: "border-[#F8802099]",
    text: "text-[#F8802099]",
    bg: "bg-[#F8802099]",
    bgButton: "bg-accent",
    textButton: "text-custom-bg",
    bgh3: "bg-[#F8802033]",
  },
};

const styleClasses = (id: string): StyleClasses => {
  return (
    stylesMap[id as StyleClassKey] || {
      border: "",
      text: "",
      bg: "",
      bgButton: "",
      textButton: "",
    }
  );
};

export const PricingPlans = () => {
  return (
    <section className="flex flex-col justify-center mb-24 lg:max-w-[1200px] mx-auto relative">
      <div className="flex flex-col justify-center items-center gap-3 mb-16">
        <h1 className="text-5xl font-extralight">
          Elige el plan que más te conviene
        </h1>
        <h2>Estas son los principales paquetes que ofrecemos:</h2>
      </div>
      <div className="grid lg:grid-cols-3 gap-5 relative">
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
          className="lg:-top-[18vh] lg:-right-[20vh] lg:w-[50vh]"
        />
        <Splash
          src={PricingPlansSplashRed1}
          alt="Splash Red"
          className="lg:-bottom-[10vh] lg:-right-[3vh] lg:w-[50vh]"
        />
        {dataPricings.map(({ id, plan, price, description, items }) => {
          const { border, text, bg, bgButton, textButton, borderButton } =
            styleClasses(id);
          return (
            <div
              key={id}
              className={`border rounded-lg ${border} p-6 relative z-10 bg-[#FFF4E466]`}
            >
              <div className="flex flex-col gap-8">
                <div className="flex justify-start">
                  <h3
                    className={`border ${border} text-custom-bg rounded-full px-8 py-2 ${bg}`}
                  >
                    {plan}
                  </h3>
                </div>
                <h4 className="text-5xl font-extralight">${price}</h4>
                <p>{description}</p>
              </div>
              <Separator className={`my-8 ${bg}`} />
              <div className="mb-8 flex flex-col gap-3">
                {items.map(({ id, item }) => {
                  let iconColor = "#000";
                  if (text.includes("text-[#FFF4E499]")) {
                    iconColor = "#3D0E1E99";
                  } else if (text.includes("text-[#D1274B99]")) {
                    iconColor = "#D1274B";
                  } else if (text.includes("text-[#F8802099]")) {
                    iconColor = "#F88020";
                  }
                  return (
                    <div key={id} className="flex flex-row gap-2 items-center">
                      <IconCheck color={iconColor} />
                      <p>{item}</p>
                    </div>
                  );
                })}
              </div>
              <button
                className={`border ${bgButton} ${textButton} ${
                  borderButton || ""
                } py-1 rounded-md w-full`}
              >
                Text
              </button>
            </div>
          );
        })}
      </div>

      <p className="text-center mt-16">
        Si sentís que tu idea no se ajusta a ningún paquete, no dudes en
        comentarlo y te ofrecemos el paquete adecuado para vos
      </p>
    </section>
  );
};
