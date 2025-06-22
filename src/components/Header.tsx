"use client";

import LogoWhite from "../app/projects/assets/logo/Portfolio-logo-white.png";
import LogoDark from "../app/projects/assets/logo/Portfolio-logo-dark.png";
import ThemeToggler from "./ThemeToggler";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import LanguageToggle from "./LanguageToggle";
import { useTheme } from "next-themes";

const Header = () => {
  const { theme } = useTheme();
  const currentLogo = theme === "light" ? LogoDark.src : LogoWhite.src;

  return (
    <>
      <header className="mx-auto items-center max-w-5xl justify-between gap-20 px-4 py-8 xl:px-0 flex-row-reverse lg:flex-row dark:bg-transparent">
        <div className="flex flex-1 justify-between mx-auto min-h-full min-w-full ">
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
            <Nav containerStyles="hidden xl:flex gap-x-8 items-center" />
            <LanguageToggle />
            <ThemeToggler />
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
