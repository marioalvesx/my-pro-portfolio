"use client";

import Link from "next/link";
import Logo from "./theme/media/Logo";
import ThemeToggler from "./ThemeToggler";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <header
        className={`${
          header
            ? "mx-auto items-center justify-between gap-20 px-8 py-8 xl:px-0 flex-row-reverse lg:flex-row py-4 bg-white shadow-lg dark:bg-accent"
            : "mx-auto items-center justify-between gap-20 px-8 py-8 xl:px-0 flex-row-reverse lg:flex-row py-6 dark:bg-transparent"
        } sticky top-0 z-30 transition-all ${
          pathname === "/" && 'bg-[#fef9f5"]'
        }`}
      >
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <Logo />
            <div className="flex items-center gap-x-8">
              <Nav
                containerStyles="hidden xl:flex gap-x-8 items-center"
                underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
                linkStyles="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
              />
              <ThemeToggler />
              <div className="xl:hidden">
                <MobileNav />
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        data-orientation="horizontal"
        role="none"
        className="shrink-0 bg-border h-[1px] w-full"
      ></div>
    </>
  );
};

export default Header;
