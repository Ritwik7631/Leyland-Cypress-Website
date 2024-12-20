import Image from "next/image";
import React from "react";
import { whyLeyland } from "@/data/why-leyland";

import charles from "@/public/logos/charles.png";

import ProfileCard, { profiles } from "@/components/cards/ProfileCard";
import DataCard from "@/components/cards/DataCard";
import ComparisionChartSkeleton from "@/components/skeletons/ComparisionChartSkeleton";
import DataTableSkeleton from "@/components/skeletons/DataTableSkeleton";

const CompanyPage = () => {
  return (
    <main className="min-h-screen">
      <section id="why-leyland" className="my-32">
        <h2 className="text-center text-4xl font-extrabold">
          <span>The roots of </span>
          <span className="text-accent-primary">
            Leyland Cypress
          </span>
        </h2>

        <div className="container w-full flex max-lg:flex-wrap item-start gap-5 mt-24">
          {whyLeyland.map((item) => (
            <DataCard
              key={item.heading}
              icon={item.icon}
              heading={item.heading}
              description={item.description}
            />
          ))}
        </div>
       
      </section>
      <section id="leyland-team" className="my-32">
        <h2 className="text-center text-4xl font-extrabold">
          <span>Meet our </span>
          <span className="text-accent-primary">team...</span>
        </h2>

        <div className="container flex flex-wrap justify-center gap-10 my-14 ">
          {profiles.map((item) => (
            <ProfileCard key={item.name} {...item} />
          ))}
        </div>
      </section>
      {/* <section id="our-process" className="bg-white py-24">
        <h2 className="text-center text-4xl font-extrabold">
          <span>Our </span>
          <span className="text-accent-primary">Process...</span>
        </h2>

        <div className=" container max-md:flex-col flex flex-wrap my-14 ">
          {process.map((item) => (
            <ProcessCard
              key={item.heading}
              icon={item.icon}
              heading={item.heading}
              description={item.description}
            />
          ))}
        </div>
      </section> */}
      <section id="partners" className="my-32">
        <h2 className="text-center text-4xl font-extrabold">
          <span>Broker & Custodian</span>
        </h2>

        <div className="container w-full flex max-lg:flex-wrap item-center relative justify-center gap-5">
          <div className="h-[70px] overflow-hidden flex justify-center">
            <Image
              className=" object-cover"
              src={charles}
              alt="patner"
              height={70}
              width={224}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default CompanyPage;
