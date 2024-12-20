import { ReactNode } from "react";
import {
  IconChessQueen,
  IconClipboardText,
  IconHeartHandshake,
  IconHomeInfinity,
  IconRepeat,
  IconReportAnalytics,
} from "@tabler/icons-react";

type ProcessCardProps = {
  icon: ReactNode;
  heading: string;
  description: string;
};

const ProcessCard: React.FC<ProcessCardProps> = ({
  icon,
  heading,
  description,
}) => {
  return (
    <div className="md:w-1/3 text-center bg-white sm:px-8 py-6 rounded-md cursor-pointer hover:scale-105  transition-all duration-150">
      <div className="flex flex-col items-center gap-3">
        <div className=" w-fit p-2 bg-accent-primary rounded-md">{icon}</div>
        <div>
          <h2 className="text-2xl font-bold">{heading}</h2>
        </div>
      </div>
      <div className="my-3.5 text-gray-1 font-medium">
        <p className="text-xs">{description}</p>
      </div>
    </div>
  );
};

export default ProcessCard;


export const process = [
  {
    icon: <IconHeartHandshake className="text-white" />,
    heading: "1. Initial Consultation",
    description:
      "Discuss your financial goals and current situation, understand your risk tolerance and investment preferences, and provide an overview of our services and approach.",
  },
  {
    icon: <IconClipboardText className="text-white" />,
    heading: "2. Customized Financial Paln",
    description:
      "Analyze your financial data and create a personalized plan, recommend strategies to achieve your short and long-term objectives, and optimize your portfolio and asset allocation.",
  },
  {
    icon: <IconChessQueen className="text-white" />,
    heading: "3. Strategy Implementation",
    description:
      "Execute the agreed-upon financial plan, open necessary accounts and transfer assets, and implement the investment and wealth management strategies.",
  },
  {
    icon: <IconRepeat className="text-white" />,
    heading: "4. Monitoring and Management",
    description:
      "Continuously monitor your portfolio and make adjustments as needed, rebalance your investments to maintain your target asset allocation, and proactively address changes in your financial situation or goals.",
  },
  {
    icon: <IconReportAnalytics className="text-white" />,
    heading: "5. Transparent Reporting",
    description:
      "Provide regular updates on the performance of your investments, offer clear and detailed statements and reports, and ensure you have a complete understanding of your financial standing.",
  },
  {
    icon: <IconHomeInfinity className="text-white" />,
    heading: "6. Continuous Support and Communication",
    description:
      "Be available to answer your questions and address your concerns, provide timely updates on market conditions and their potential impact, and offer guidance and advice to help you navigate financial decisions.",
  },
];