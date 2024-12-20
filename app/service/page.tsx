import {
  IconAlertOctagon,
  IconArrowNarrowRight,
  IconBriefcase,
  IconChartBarPopular,
  IconChartPie3,
} from "@tabler/icons-react";
import React, { ReactNode } from "react";
import enhancedDiversificationImg from "@/public/illustrations/enhanced-diversification.svg";
import riskReductionImg from "@/public/illustrations/risk-reduction.svg";
import consistentPerformanceImg from "@/public/illustrations/consistent-performance.svg";
import expertiseAndExperienceImg from "@/public/illustrations/expertise-and-experienct.svg";
import greenWaveImg from "@/public/illustrations/green-wave.svg";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import Link from "next/link";

type CardProps = {
  icon: ReactNode;
  heading: string;
  description: string;
};
const Card: React.FC<CardProps> = ({ icon, heading, description }) => {
  return (
    <div className="container bg-white px-8 py-6 rounded-md shadow-md cursor-pointer hover:scale-105  transition-all duration-150">
      <div className="flex items-center gap-3">
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
          <p className="text-xs">{description}</p>
        </div>
      </div>
    </div>
  );
};
const offeredItems = [
  {
    src: enhancedDiversificationImg,
    icon: <IconChartPie3 className="text-white" />,
    heading: "Enhanced Diversification",
    description:
      "Our market-neutral strategies involve taking both long and short positions in a variety of assets, allowing us to capitalize on price movements in either direction. This method helps to smooth out the performance of your portfolio, reducing exposure to market swings and creating a more stable investment journey.",
  },
  {
    src: riskReductionImg,
    icon: <IconAlertOctagon className="text-white" />,
    heading: "Risk Reduction",
    description:
      "Uncorrelated returns mean that the performance of our strategies does not depend on the broader market trends. This independence from market movements helps to mitigate the impact of economic downturns and market corrections on your portfolio. As a result, our clients enjoy a more balanced and less volatile investment experience.",
  },
  {
    src: consistentPerformanceImg,
    icon: <IconChartBarPopular className="text-white" />,
    heading: "Consistent Performance",
    description:
      "Our goal is to achieve steady, reliable returns through meticulous research, advanced quantitative models, and disciplined risk management. By focusing on market-neutral strategies, we strive to provide consistent performance that aligns with your financial goals, regardless of market conditions.",
  },
  {
    src: expertiseAndExperienceImg,
    icon: <IconBriefcase className="text-white" />,
    heading: "Expertise and Experience",
    description:
      "With a team of seasoned professionals and a deep understanding of market dynamics, Leyland Cypress is committed to delivering superior investment solutions. Our expertise in market-neutral strategies sets us apart, providing our clients with a distinct advantage in achieving their financial objectives.",
  },
];

const ServicePage = () => {
  return (
    <main className="min-h-screen">
      
      

      <section id="we-offer">
        <h2 className="text-center text-4xl font-extrabold">
          <span>We</span> <span className="text-accent-primary">Offer...</span>
        </h2>
        <div className="container w-full my-24 flex flex-col gap-5">
          {offeredItems.map((item, ind) => (
            <WeOfferCard
              key={item.heading}
              src={item.src}
              reverse={(ind & 1) !== 0}
              icon={item.icon}
              heading={item.heading}
              description={item.description}
            />
          ))}
        </div>
      </section>
      <section id="risk-returns">
        <div className="bg-white py-24">
          <div className="container max-md:flex-col flex gap-5">
            <div>
              <h2 className=" text-5xl sm:text-7xl font-extrabold tracking-tight">
                <span>Steady</span>
                <span className="text-accent-primary">
                  {" "}
                  Returns,
                  <br />
                </span>
                <span>Minimal Risk</span>
              </h2>
              <p className="text-gray-1 my-4">
                Our specialized trading strategy aims to provide better returns
                than a regular savings account, without the volatility of the
                stock market. By splitting funds between safe government bonds
                and a disciplined trading approach, we strive to generate
                steady, moderate returns of 11-18% annually while minimizing
                risk.
              </p>
              <div className="w-full flex max-md:justify-center">
                <Link href="mailto:info@leyland-cypress.com">
                  <Button className="font-medium bg-accent-primary hover:bg-accent-primary/80 shadow-md">
                    <span>Book a free consultation</span>{" "}
                    <IconArrowNarrowRight />
                  </Button>
                </Link>
              </div>
            </div>
            <div>
              <p className="text-gray-1 my-4">
                Our experts monitor the market daily, identifying and quickly
                executing small pricing opportunities. All trades are closed by
                the end of each day, focusing on accumulating smaller gains
                rather than making large, risky bets. This approach aims to
                provide steady, moderate returns while minimizing risk compared
                to the stock market.
              </p>
              <div>
                <div className="flex flex-wrap w-full gap-5">
                  <div className="border p-5 rounded-lg">
                    <h3 className=" text-2xl font-semibold text-nowrap">
                      11% - 18%
                    </h3>
                    <p className="text-gray-1 my-2">Annual Returns</p>
                  </div>
                  <div className="border p-5 rounded-lg">
                    <h3 className=" text-2xl font-semibold">Low Risk</h3>
                    <p className="text-gray-1 my-2">Compared to Share Market</p>
                  </div>
                </div>
                <p className="mt-2">
                  <strong>Note: </strong>
                  <span className="text-gray-1">
                    Remember though, while this approach tries to keep your
                    money safe, all investments carry some risk. The returns
                    mentioned are what we&apos;re aiming for, not a guarantee.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Image
        className="w-full bg-white"
        src={greenWaveImg}
        width={1440}
        height={500}
        alt="green wave"
      />
    </main>
  );
};

export default ServicePage;
