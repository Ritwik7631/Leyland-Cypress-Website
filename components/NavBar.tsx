"use client";
import Image from "next/image";
import Link from "next/link";
import MenuItem from "./MenuItem";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { menuItems } from "@/data/menu";
import { IconMenuDeep } from "@tabler/icons-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useState } from "react";

const NavBar = () => {
  const route = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <nav className="z-50 pr-2 sm:px-4 w-full flex items-center justify-between bg-white sticky top-0 shadow-xl">
      <Link href="/" className="p-1">
        <Image
          className="w-fit h-24"
          src="/logos/LC Logo (No IM).svg"
          width={424.8}
          height={164.52}
          alt="leyland logo"
          priority
        />
      </Link>
      <div className=" md:flex hidden items-center gap-2">
        <menu className="flex items-center">
          {menuItems.map((item) => (
            <li key={item.name}>
              <MenuItem selected={route == item.link} link={item.link}>
                {item.name}
              </MenuItem>
            </li>
          ))}
        </menu>
        <div>
          <Link
            target="__blank"
            href="https://client.schwab.com/areas/access/login?sim=y"
          >
            <Button className="bg-accent-primary font-bold text-sm hover:bg-accent-primary/80">
              Client Login
            </Button>
          </Link>
        </div>
      </div>
      <div className="max-md:block hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger>
            <IconMenuDeep />
          </SheetTrigger>
          <SheetContent>
            <DialogTitle className="text-xl text-accent-primary font-bold">
              <Link href="/" onClick={() => setOpen(!open)}>
                Leyland Cypress, LLC
              </Link>
            </DialogTitle>

            <menu className="flex flex-col my-5">
              {menuItems.map((item) => (
                <li key={item.name} onClick={() => setOpen(!open)}>
                  <MenuItem selected={route == item.link} link={item.link}>
                    {item.name}
                  </MenuItem>
                </li>
              ))}
            </menu>
            <Link
              target="__blank"
              href="https://client.schwab.com/Areas/Access/Login?&kc=y&sim=y"
            >
              <Button className="bg-accent-primary font-bold text-sm hover:bg-accent-primary/80">
                Client Login
              </Button>
            </Link>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default NavBar;
