import { dataPricings } from ".";
import { Separator } from "../ui/separator";

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
  },
  "2": {
    border: "border-[#D1274B99]",
    text: "text-[#D1274B99]",
    bg: "bg-[#D1274B99]",
    bgButton: "bg-secondary",
    textButton: "text-custom-bg",
  },
  "3": {
    border: "border-[#F8802099]",
    text: "text-[#F8802099]",
    bg: "bg-[#F8802099]",
    bgButton: "bg-accent",
    textButton: "text-custom-bg",
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
    <section className="flex flex-col justify-center mb-24 lg:max-w-[1200px] mx-auto">
      <div className="flex flex-col justify-center items-center gap-3 mb-16">
        <h1 className="text-5xl font-extralight">
          Elige el plan que más te conviene
        </h1>
        <h2>Estas son los principales paquetes que ofrecemos:</h2>
      </div>
      <div className="grid lg:grid-cols-3 gap-5">
        {dataPricings.map(
          ({ id, plan, price, description, itemA, itemB, itemC, itemD }) => {
            const { border, text, bg, bgButton, textButton, borderButton } =
              styleClasses(id);
            return (
              <div key={id} className={`border rounded-lg ${border} p-6`}>
                <div className="flex flex-col gap-8">
                  <h3
                    className={`border ${border} ${text}
               
                rounded-full px-8 py-2`}
                  >
                    {plan}
                  </h3>
                  <h4 className="text-5xl font-extralight">${price}</h4>
                  <p>{description}</p>
                </div>
                <Separator className={`my-8 ${bg}`} />
                <div className="mb-8 flex flex-col gap-3">
                  <p>{itemA}</p>
                  <p>{itemB}</p>
                  <p>{itemC}</p>
                  <p>{itemD}</p>
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
          }
        )}
      </div>

      <p className="text-center mt-16">
        Si sentís que tu idea no se ajusta a ningún paquete, no dudes en
        comentarlo y te ofrecemos el paquete adecuado para vos
      </p>
    </section>
  );
};
