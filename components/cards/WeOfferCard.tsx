import { cn } from "@/lib/utils";
import Image from "next/image";
import { ReactNode } from "react";

type CardProps = {
  icon: ReactNode;
  heading: string;
  description: string;
};

interface WeOfferCardProps extends CardProps {
  src: string;
  reverse: boolean;
}

const WeOfferCard: React.FC<WeOfferCardProps> = ({
  src,
  reverse,
  icon,
  heading,
  description,
}) => {
  return (
    <div
      className={cn(
        "container bg-white flex max-md:flex-col gap-5 items-center justify-between px-8 py-6 rounded-md shadow-md cursor-pointer hover:scale-105  transition-all duration-150",
        { "flex-row-reverse justify-between": reverse }
      )}
    >
      <div
        className={cn("md:w-1/3 flex flex-col", { "items-center": reverse })}
      >
        <Image src={src} alt={heading} width={240} height={190} />
      </div>
      <div className="md:w-2/3">
        <div className="flex items-center gap-3">
          <div className=" w-fit p-2 bg-accent-primary rounded-md">{icon}</div>
          <div className="w-full">
            <h2 className="text-2xl font-bold">{heading}</h2>
          </div>
        </div>
        <div className="my-3.5 text-gray-1 font-medium">
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default WeOfferCard;
