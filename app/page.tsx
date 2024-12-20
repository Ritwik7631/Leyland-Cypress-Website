import { Button } from "@/components/ui/button";
import {
  IconArrowNarrowRight,
  IconLeaf,
  IconRocket,
  IconShieldShare,
} from "@tabler/icons-react";
import Image from "next/image";
import heroImage from "../public/leyland-hero.webp";
import { ComparisionChart } from "@/components/charts/ComparisionChart";
import Link from "next/link";
import DataTable from "@/components/table/DataTable";
import { Suspense } from "react";
import DataCard from "@/components/cards/DataCard";

const strategy = [
  {
    icon: <IconRocket className="text-white" size={25} />,
    heading: "Fundamental Investment Strategy",
    description:
      "Focus on Attractively Valued U.S. Companies with Regular Dividend Payments.",
  },
  {
    icon: <IconLeaf className="text-white" size={25} />,
    heading: "Targeting Durable Franchises",
    description:
      "Investment in Companies with Consistent Earnings and Strong Management Teams.",
  },

  {
    icon: <IconShieldShare className="text-white" size={25} />,
    heading: "Long-Term Dividend Sustainability",
    description:
      "Selection of Securities Capable of Delivering Healthy, Sustainable Dividends.",
  },
];

export default function Home() {
  return (
    <main>
      <section
        id="hero"
        className="w-full min-h-[80vh] flex flex-col justify-center items-center px-5 md:px-32 py-32 overflow-hidden relative"
      >
        <header>
          <h1 className="text-4xl sm:text-7xl text-center font-extrabold text-white tracking-tighter">
            Built to thrive in all market conditions.
          </h1>
          <p className="max-w-[500px] mx-auto text-gray-100 font-medium mt-4 text-sm  sm:text-lg leading-6 text-center">
            We’re a quantitative investment management firm focused on
            generating consistent, <br /> uncorrelated returns for our clients.
          </p>
        </header>
        <Link href="/contact">
          <Button className=" font-semibold flex items-center gap-5 mt-6 bg-white hover:bg-slate-100 text-accent-primary">
            <span>Schedule a meeting</span> <IconArrowNarrowRight />
          </Button>
        </Link>
        <Image
          className="absolute top-0 -z-10 object-cover "
          src={heroImage}
          alt="hero image"
          fill
          priority
          placeholder="blur"
        />
      </section>
      <section id="chart" className="my-12 px-4 sm:container">
        <header>
          <h2 className="text-4xl text-center my-5 font-bold ">
            <span>Meet </span>
            <span className="text-accent-primary">Evergreen I</span>
          </h2>
          <p className="italic text-gray-500 text-center">
            An SMA strategy designed to provide high risk-adjusted returns and
            complement client portfolios.
          </p>
        </header>
        <section className="my-12">
          <div className="w-full flex max-lg:flex-wrap item-start gap-5">
            {strategy.map((item) => (
              <DataCard
                key={item.heading}
                icon={item.icon}
                heading={item.heading}
                description={item.description}
              />
            ))}
          </div>
        </section>
        <section id="data-table" className="">
          
          <Suspense>
            <ComparisionChart />
          </Suspense>
        </section>
      </section>
      <section id="data-table" className="container">
        
          <DataTable />
        
      </section>
    </main>
  );
}
