import React from "react";
import LeyLandLogo from "@/components/logos/LeyLandLogo";
import {
  IconBrandLinkedin,
  IconMail,
  IconMapPin,
  IconPhone,
} from "@tabler/icons-react";
import Link from "next/link";

const ContactPage = () => {
  return (
    <main className="min-h-screen">
      <section id="contact" className="bg-white py-24">
        <h2 className="text-center text-4xl font-extrabold">
          <span className="text-accent-primary">Contact Us</span>
        </h2>
        <div className="flex max-md:flex-col items-center justify-center gap-10 max-w-screen-lg my-14 mx-auto">
          <LeyLandLogo />
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <IconMapPin />
              <p>Long Beach, California</p>
            </div>
            <div className="flex items-center gap-3">
              <IconMail />
              <Link
                href="mailto:info@leylandcypress.com"
                className="text-accent-primary font-medium"
              >
                info@leylandcypress.com
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <IconPhone />
              <Link
                href="tel:(562) 231-6418 "
                className="text-accent-primary font-medium"
              >
                (562) 231-6418{" "}
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <IconBrandLinkedin />
              <Link
                href="https://www.linkedin.com/company/leyland-cypress-llc/"
                target="__blank"
                className="text-accent-primary font-medium underline"
              >
                Follow us on LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
