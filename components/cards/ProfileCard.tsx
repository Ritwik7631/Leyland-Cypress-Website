import { IconBrandLinkedin, IconMail, IconPhone } from "@tabler/icons-react";
import brendonImg from "@/public/profiles/brenden.webp";
import markImg from "@/public/profiles/mark.webp";
import ritwikImg from "@/public/profiles/ritwik.webp";
import leelaImg from "@/public/profiles/lela.webp";
import alexImg from "@/public/profiles/alex.webp";
import Image, { StaticImageData } from "next/image";

import Link from "next/link";
export const profiles = [
  {
    name: "Brenden O'Connell",
    src: brendonImg,
    bio: "Brenden O'Connell, based in Long Beach, CA, serves as our Chief Investment Officer. A UCLA graduate (Class of 2021) with a B.A. in Economics completed in just three years, Brenden has been developing quantitative investment strategies full-time since June 2020. A proud individual with Asperger syndrome, Brenden brings a unique perspective to our team. Beyond his role as a quant finance nerd, he's also a connoisseur of rock and jazz music and an enthusiast of comedy.",
    position: "CIO",
    email: "brenden@leylandcypress.com",
    linkedin: "https://www.linkedin.com/in/brenden-oconnell/",
  },
  {
    name: "Mark Tennenbaum",
    src: markImg,

    bio: "Mark Tennenbaum, our Venice, CA-based CEO, has over 40 years of investment experience. He’s worked in London, New York, and on global deals. Influenced by value investing, he's led successful companies like Virgin. As CEO of Life UnLocked Partners, he guides our investment strategy. He holds an MBA from UCLA and enjoys improv, cooking, and puzzles.",
    position: "CEO",
    email: "mark@leylandcypress.com",
    linkedin: "https://www.linkedin.com/in/mark-tennenbaum-8276b240/",
  },
  {
    name: "Ritwik Kumar",
    src: ritwikImg,

    bio: "Ritwik Kumar, our Chief Technology Officer, hails from Simi Valley, CA. A recent graduate from UCLA (Class of 2022) with a B.S. in Pure Mathematics, Ritwik brings a fresh perspective to our team. His prior experience as an Investment Banking Analyst at DBD Partners, where he drove over $60 million in aggregate transaction value across healthcare and SaaS sectors, provides valuable insights to our operations. A true quant finance nerd, Ritwik is also an avid chess player and enjoys solving Jane Street puzzles in his spare time.",
    position: "CTO",
    email: "ritwik@leylandcypress.com",
    linkedin: "https://www.linkedin.com/in/ritwik-k-33039911a/",
  },
  {
    name: "Lela Kelly",
    src: leelaImg,
    bio: "Lela Kelly serves dual roles as our Legal Counsel and Chief Compliance Officer. With over 15 years of corporate law experience, Lela brings a wealth of knowledge to our team. She holds a BA from the University of Southern California and a JD from UCLA School of Law, co-founder of Tennenbaum & Kelly. Lela began her legal career at Jones Day and now dedicates time to guiding families with special needs. Originally from Cebu City, Philippines, Lela is a proud mother of three, balancing her professional life with her personal commitments.",
    position: "Legal Counsel and Chief Compliance Officer",
    email: "lela@leylandcypress.com",
    linkedin: "https://www.linkedin.com/in/lela-kelly-babb9611/",
  },
  {
    name: "Aleks Kelly",
    src: alexImg,
    bio: "Aleks Kelly, our Vice President of Client Relations, brings a client-centric approach and meticulous attention to detail to our team. With a background in the luxury automotive sector and a Bachelor of Science in Finance and Economics from California State University, Northridge, Alex excels in cultivating strong connections with our clients. Alex's diverse experience allows him to understand and cater to the unique needs of our discerning clients. Alex enjoys adventures with his family and their two feline companions, Archie the Ragdoll and Theodore the British Shorthair.",
    position: "Vice President",
    email: "aleks@leylandcypress.com",
    linkedin: "https://www.linkedin.com/in/aleks-kelly-120257309/",
  },
];

type ProfileCardProps = {
  src: StaticImageData;
  name: string;
  bio: string;
  position: string;
  email: string;
  linkedin: string;
};

const ProfileCard: React.FC<ProfileCardProps> = ({
  src,
  name,
  bio,
  position,
  email,
  linkedin,
}) => {
  return (
    <div className=" group px-4 py-5 bg-white rounded-lg shadow-md transition-all duration-150">
      <div className="w-fit h-fit rounded-lg overflow-clip relative">
        <div className="group-hover:opacity-100 opacity-0 cursor-pointer p-4 transition-all duration-200  absolute overflow-y-auto bg-black/70 backdrop-blur-2xl h-full w-full">
          <h2 className="text-white text-2xl font-bold my-2">Bio</h2>
          <p className="text-white text-sm">{bio}</p>
        </div>
        <Image
          className="w-[300px] h-auto"
          src={src}
          width={300}
          height={700}
          alt={name}
          placeholder="blur"
          priority
        />
      </div>
      <h2 className="text-2xl font-bold mt-2">{name}</h2>
      <p className="text-gray-1 text-xs">{position}</p>
      <div className="mt-4 font-medium flex flex-col gap-2">
        <Link className="flex gap-2" href={`mailto:${email}`}>
          <IconMail size={20} />
          <span className="text-sm">{email}</span>
        </Link>

        <Link className="flex gap-2" target="__blank" href={`${linkedin}`}>
          <IconBrandLinkedin size={21} />
          <span className="text-sm text-blue-500 underline">LinkedIn</span>
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;
