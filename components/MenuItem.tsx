import { cn } from "@/lib/utils";
import Link from "next/link";
import React, {  ReactNode } from "react";

type MenuItemProps = {
  selected: boolean;
  link: string;
  children: ReactNode;
};

const MenuItem: React.FC<MenuItemProps> = ({ link, selected, children }) => {
  return (
    <Link
      className={cn(
        "py-6 px-4 max-sm:w-full inline-block border-b-4 border-transparent hover:bg-white-2 text-accent-primary font-semibold",
        { "border-accent-primary bg-white-2 cursor-not-allowed": selected }
      )}
      href={link}
      
    >
      {children}
    </Link>
  );
};

export default MenuItem;
