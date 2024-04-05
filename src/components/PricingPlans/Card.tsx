import { CardProps, IconCheck } from "@/components/PricingPlans";
import { Separator } from "@/components/ui/separator";

export const Card = ({
  border,
  bg,
  plan,
  price,
  description,
  items,
  bgButton,
  hoverButton,
  textButton,
  borderButton,
  separatorColor,
}: CardProps) => {
  return (
    <div
      className={`flex flex-col justify-between border rounded-lg ${border} p-6 bg-bento-gradient shadow-xl`}
    >
      <div className="flex flex-col gap-8">
        <div className="flex justify-start">
          <h3
            className={`border ${border} ${textButton} rounded-full px-8 py-2 ${bg}`}
          >
            {plan}
          </h3>
        </div>
        <h4 className="text-3xl lg:text-5xl font-extralight">${price}</h4>
        <p className="text-sm lg:text-base">{description}</p>
      </div>
      <Separator className={`my-8 ${separatorColor}`} />
      <div className="mb-8 flex flex-col gap-3">
        {items.map((item, index) => (
          <div key={index} className="flex flex-row gap-2 ">
            <IconCheck color={item.iconColor} className="w-[24px] h-[24px]" />
            <p className="text-sm lg:text-base">{item.text}</p>
          </div>
        ))}
      </div>
      <button
        className={`border ${bgButton} transition-hover ${hoverButton} ${textButton} ${
          borderButton || ""
        } text-sm lg:text-base py-1 rounded-md w-full`}
      >
        Comienza ahora
      </button>
    </div>
  );
};
