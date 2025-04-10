"use client";

import Logo from "./theme/media/Logo";
import ThemeToggler from "./ThemeToggler";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import LanguageToggle from "./LanguageToggle";

const Header = () => {
  return (
    <>
      <header className="mx-auto items-center justify-between gap-20 px-4 py-8 xl:px-0 flex-row-reverse lg:flex-row py-4 dark:bg-transparent">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <Logo />
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
