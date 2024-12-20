import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

const DisclaimersPage = () => {
  return (
    <main className="min-h-screen my-32">
      <header className=" container">
        <h2 className="text-4xl text-center font-extrabold">
          <span>Important Disclaimers</span>
        </h2>
      </header>
      <section>
        <div className="my-12 flex flex-wrap items-center justify-center  gap-5">

        <Card className="w-fit text-center">
            <CardHeader className="text-gray-500">Client Relationship Summary</CardHeader>
          <CardContent>
            <Link  target="__blank" href='/' className="underline font-semibold text-xl">Form CRS</Link>
          </CardContent>
        </Card>
        <Card className="w-fit text-center">
            <CardHeader className="text-gray-500">Disclosure Brochure</CardHeader>
          <CardContent>
            <Link target="__blank" href='/ADV.pdf' className="underline font-semibold text-xl">Form ADV Part 2A
            </Link>
          </CardContent>
        </Card>
        </div>
      </section>
      <div className="container my-12">
        <p className="my-4">
          {`Leyland Cypress, LLC is a Registered Investment
            Advisor ("RIA"), located in the State of California. Leyland
            Cypress, LLC provides investment advisory and related services for
            clients nationally. Leyland Cypress, LLC will maintain all
            applicable registration and licenses as required by the various
            states in which Leyland Cypress, LLC conducts business, as
            applicable. Leyland Cypress, LLC renders individualized responses to
            persons in a particular state only after complying with all
            regulatory requirements, or pursuant to an applicable state
            exemption or exclusion.`}
        </p>
      </div>
      <section id="terms-of-use" className="container">
        <h2 className="text-2xl font-extrabold">Terms of Use</h2>
        <p className="my-2">
          Please read these terms and conditions of use (“Terms”) carefully
          before using the website located at www.leylandcypress.partners
          (“Website”) or any of the information or services provided by Leyland
          Cypress, LLC in connection with the Website. By using the Website, you
          acknowledge that you have read and understood these Terms and accept
          to be legally bound by them. If you do not accept and agree to these
          Terms, you are not an authorized user of the Website or any of the
          information or services provided by Leyland Cypress, LLC in connection
          with the Website and should promptly terminate all use thereof. The
          terms “you” and “your” mean you and any entity you may represent in
          connection with the use of the Website. You may use your browser to
          download or print a copy of these Terms for your records.
        </p>
        <p className="my-2">
          Leyland Cypress, LLC reserves the right to change, modify, add or
          remove portions of these Terms at any time for any reason. We suggest
          that you review these Terms periodically for changes. Such changes
          shall be effective immediately upon posting. You acknowledge that by
          accessing our Website after we have posted changes to these Terms, you
          are agreeing to these Terms as modified.
        </p>
      </section>
      <section id="risk-disclouser" className="container">
        <h2 className="text-2xl font-extrabold">Risk Disclousers</h2>
        <p className="my-2">
          Different types of investments involve varying degrees of risk.
          Therefore, it should not be assumed that future performance of any
          specific investment or investment strategy will be profitable.
        </p>
        <p className="my-2">
          Asset allocation may be used in an effort to manage risk and enhance
          returns. It does not, however, guarantee a profit or protect against
          loss. Performance of the asset allocation strategies depends on the
          underlying investments.
        </p>
        <p className="my-2">
          This website is intended to provide general information about Leyland
          Cypress, LLC and its services. It is not intended to offer or deliver
          investment advice in any way. Information regarding investment
          services are provided solely to gain an understanding of our
          investment philosophy, our strategies and to be able to contact us for
          further information. Market data, articles and other content on this
          website are based on generally available information and are believed
          to be reliable. Leyland Cypress, LLC does not guarantee the accuracy
          of the information contained in this website. The information is of a
          general nature and should not be construed as investment advice.
        </p>
        <p className="my-2">
          Please remember that it remains your responsibility to advise Leyland
          Cypress, LLC, in writing, if there are any changes in your
          personal/financial situation or investment objectives for the purpose
          of reviewing/evaluating/revising our previous recommendations and/or
          services, if you would like to impose, add, or to modify any
          reasonable restrictions to our investment advisory services.
        </p>
        <p className="my-2">
          {`Leyland Cypress, LLC will provide all prospective clients with a copy
          of our current Form ADV, Part 2A ("Disclosure Brochure") and the
          Brochure Supplement for each advisory person supporting a particular
          client. You may obtain a copy of these disclosures on the SEC website
          at http://adviserinfo.sec.gov or you may Contact Us to request a free
          copy via .pdf or hardcopy.`}
        </p>
      </section>
      <section id="privacy-disclouser" className="container">
        <h2 className="text-2xl font-extrabold">Privacy Disclousers</h2>

        <p className="my-2">
          Leyland Cypress, LLC is committed to safeguarding the use of personal
          information of our Clients (also referred to as “you” and “your”) that
          we obtain as your Investment Advisor, as described in our Privacy
          Policy.
        </p>
        <p className="my-2">
          Leyland Cypress, LLC does not collect personal non-public information
          through this website; however, the Advisor may collect information
          from you on application forms, agreements, profile or investment
          policy statements, and other documents received or processed in
          relation to services we provide. We also may collect information from
          other sources.
        </p>
        <p className="my-2">
          {` We do not respond to "do not track" requests because we do not track
          you over time or across third party websites to provide targeted
          advertising. We may track you across our website to help us improve
          our content.`}
        </p>
        <p className="my-2">
          {`We may use "cookies" and similar online technologies to keep, and
          sometimes track, information about you regarding your usage of our
          website. Cookies are small data files that are sent to your browser or
          related software from a Web server and stored on your device. Cookies
          help us to collect information about your usage of our website,
          including date and time of visits, pages viewed, amount of time spent
          on our sites, or general information about the device used to access
          the site, such as the browser used. You can refuse to store or delete
          cookies by configuring your web browser settings. Most browsers and
          mobile devices have their own settings to manage cookies. If you
          refuse a cookie when on our website, or if you delete cookies, you may
          experience some inconvenience in your use of our website, such as
          having to re-configure preferences.`}
        </p>

        <p className="my-2">
          When you are on this website you may have the opportunity to
          click-through to other websites, including websites operated by
          unaffiliated third parties. These sites may collect nonpublic personal
          Information about you. We do not control sites operated by these
          entities and are not responsible for the information practices of
          these sites. This Privacy Policy does not address the information
          practices of other websites. The privacy policies of websites operated
          third parties are located on those sites.
        </p>
        <p className="my-2">
          For a copy of the Leyland Cypress, LLC Privacy Policy, please contact
          us.
        </p>
      </section>
      <section id="email-disclouser" className="container">
        <h2 className="text-2xl font-extrabold">Email Disclousers</h2>
        <p className="my-2">
          Leyland Cypress, LLC often communicates with its clients and
          prospective clients through electronic mail (“email”) and other
          electronic means. Your privacy and security are very important to us.
          Leyland Cypress, LLC makes every effort to ensure that email
          communications do not contain sensitive information. We remind our
          clients and others not to send Leyland Cypress, LLC private
          information over email. If you have sensitive data to deliver, we can
          provide secure means for such delivery.
        </p>
        <p className="my-2">
          Please note: Leyland Cypress, LLC does not accept trading or money
          movement instructions via email.
        </p>
        <p className="my-2">
          As a registered investment advisor, Leyland Cypress, LLC emails may be
          subject to inspection by the Chief Compliance Officer (“CCO”) of
          Leyland Cypress, LLC or the securities regulators.
        </p>
        <p className="my-2">
          If you have received an email from Leyland Cypress, LLC in error, we
          ask that you contact the sender and destroy the email and its
          contents. If you have any questions regarding our email policies,
          please Contact Us.
        </p>
      </section>
      <section id="social-websites" className="container">
        <h2 className="text-2xl font-extrabold">Social Websites</h2>
        <p className="my-2">
          Leyland Cypress, LLC may utilize third-party websites, including
          social media websites, blogs and other interactive content. Leyland
          Cypress, LLC considers all interactions with clients, prospective
          clients and the general public on these sites to be advertisements
          under the securities regulations. As such, Leyland Cypress, LLC
          generally retains copies of information that Leyland Cypress, LLC or
          third-parties may contribute to such sites. This information is
          subject to review and inspection by the CCO of Leyland Cypress, LLC or
          the securities regulators.
        </p>
        <p className="my-2">
          Information provided on these sites is for informational and/or
          educational purposes only and is not, in any way, to be considered
          investment advice nor a recommendation of any investment product.
          Advice may only be provided by Leyland Cypress, LLC’s advisory persons
          after entering into an advisory agreement and provided Leyland
          Cypress, LLC with all requested background and account information.
        </p>
        <p className="my-2">
          If you have any questions regarding our policies, please Contact Us.
        </p>
      </section>
    </main>
  );
};

export default DisclaimersPage;
