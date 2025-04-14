"use client";

import LogoWhite from "../app/projects/assets/logo/Portfolio-logo-white.png";
import LogoDark from "../app/projects/assets/logo/Portfolio-logo-dark.png";
import ThemeToggler from "./ThemeToggler";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import LanguageToggle from "./LanguageToggle";
import { useContext } from "react";
import { useTheme } from "next-themes";

const Header = () => {
  const { theme } = useTheme();
  const currentLogo = theme === "dark" ? LogoWhite.src : LogoDark.src;

  return (
    <>
      <header className="mx-auto items-center justify-between gap-20 px-4 py-8 xl:px-0 flex-row-reverse lg:flex-row py-4 dark:bg-transparent">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <a href="/">
              <img
                src={currentLogo}
                width={60}
                height={60}
                alt=""
                style={{ opacity: 0.5, transition: "opacity 0.3s" }}
                onMouseOver={(e) => (e.currentTarget.style.opacity = "1")}
                onMouseOut={(e) => (e.currentTarget.style.opacity = "0.5")}
              />
            </a>
            <div className="flex items-center gap-x-8">
              <Nav
                containerStyles="hidden xl:flex gap-x-8 items-center"
                underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
                linkStyles="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
              />
              <LanguageToggle />
              <ThemeToggler />
              <div className="xl:hidden">
                <MobileNav />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
