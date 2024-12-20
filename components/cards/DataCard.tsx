import { ReactNode } from "react";

type CardProps = {
  icon: ReactNode;
  heading: string;
  description: string;
};

const DataCard: React.FC<CardProps> = ({ icon, heading, description }) => {
  return (
    <div className="container bg-white px-8 py-6 rounded-md shadow-md cursor-pointer hover:scale-105  transition-all duration-150">
      <div className="flex items-center gap-3">
        <div className=" w-fit p-2 bg-accent-primary rounded-md">{icon}</div>
        <div>
          <h2 className="text-2xl font-bold">{heading}</h2>
        </div>
      </div>
      <div className="my-3.5 text-gray-1 font-medium">
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default DataCard

