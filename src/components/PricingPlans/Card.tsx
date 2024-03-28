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
  textButton,
  borderButton,
}: CardProps) => {
  return (
    <div
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
        {items.map((item, index) => (
          <div key={index} className="flex flex-row gap-2 items-center">
            <IconCheck color={item.iconColor} />
            <p>{item.text}</p>
          </div>
        ))}
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
};
