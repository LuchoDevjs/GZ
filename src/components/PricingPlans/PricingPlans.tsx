import { Card, dataCard } from ".";

export const PricingPlans = () => {
  return (
    <section
      className="flex flex-col justify-center mb-24 lg:max-w-[1200px] mx-auto relative"
      id="packages"
    >
      <div className="flex flex-col justify-center items-center gap-3 mb-16">
        <h1 className="text-3xl text-center lg:text-5xl font-extralight">
          Elige el plan que más te conviene
        </h1>
        <h2 className="text-sm lg:text-base text-center">
          Estas son los principales paquetes que ofrecemos:
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 gap-5 relative">
        {/* <PricingPlansSplash /> */}
        {dataCard.map((data) => (
          <Card key={data.id} {...data} />
        ))}
      </div>

      <p className="text-center mt-16">
        Si sentís que tu idea no se ajusta a ningún paquete, no dudes en
        comentarlo y te ofrecemos el paquete adecuado para vos
      </p>
    </section>
  );
};
