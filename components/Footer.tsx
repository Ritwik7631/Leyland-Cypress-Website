import React from "react";
import { menuItems } from "@/data/menu";
import DividerLine from "./DividerLine";
import Link from "next/link";
const conditionLinks = [
  { name: "Form ADV", link: "/ADV.pdf" },
  { name: "Continuity Plan", link: "disclaimers" },
  { name: "Terms of Use", link: "/disclaimers#privacy-disclouser" },
  { name: "Privacy Policy", link: "/disclaimers#privacy-disclouser" },
];
const Footer = () => {
  return (
    <footer className="w-full sm:px-5 py-4  bg-accent-primary text-white justify-between">
      <div className="container">
        <div className="flex max-md:flex-col w-full items-start gap-5">
          {/* <menu className="md:block hidden font-bold">
            {menuItems.map((item) => (
              <li className="text-nowrap mb-2" key={item.name}>
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </menu> */}
          <div className="w-full 2xl:mx-24 lg:mx-12">
            <h2 className="text-center text-2xl font-bold">
              Leyland Cypress, LLC
            </h2>
            <p className="w-full text-sm text-center mt-2">
              Securities offered through Charles Schwab. Member FINRA/SIPC. To
              Check Firm or Individual Backgrounds please go to
              adviserinfo.sec.gov.
            </p>
          </div>
          {/* <div className="max-md:w-full max-md:flex justify-between">
            <menu className="md:hidden block font-bold">
              {menuItems.map((item) => (
                <li className="text-nowrap mb-2" key={item.name}>
                  <Link href={item.link}>{item.name}</Link>
                </li>
              ))}
            </menu>
            <menu className="font-bold text-right">
              {conditionLinks.map((item) => (
                <li className="text-nowrap mb-2" key={item.name}>
                  <Link href={item.link}>{item.name}</Link>
                </li>
              ))}
            </menu>
          </div> */}
        </div>
        <Link
          className="mx-auto block underline text-sm w-fit"
          href="/disclaimers"
          target="__blank"
        >
          Forms and Disclaimers
        </Link>
        <DividerLine />
      </div>
      <p className="text-center text-xs mt-2">
        Copyright © 2024 Leyland Cypress
      </p>
      <p className="text-center text-xs mt-2">
        Powered by{" "}
        <Link href="https://www.linkedin.com/company/superwit/" className="font-semibold underline">SuperWIT</Link>
      </p>
    </footer>
  );
};

export default Footer;
