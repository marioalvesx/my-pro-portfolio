import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { AlignJustify } from "lucide-react";
import LogoWhite from "../app/projects/assets/logo/Portfolio-logo-white.png";
import LogoDark from "../app/projects/assets/logo/Portfolio-logo-dark.png";
import Nav from "./Nav";
import Socials from "./Socials";
import { useTheme } from "next-themes";

function MobileNav() {
  const { theme } = useTheme();
  const currentLogo = theme === "light" ? LogoDark.src : LogoWhite.src;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center h-[90%] py-8 gap-y-10">
          <div className="flex flex-col w-full items-center gap-y-32">
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
          </div>
          <Nav
            containerStyles="flex flex-col w-full items-start"
            isMobile={true}
          />
        </div>
        <div className="flex flex-col items-center">
          <Socials containerStyles="flex gap-x-4" iconsStyles="text-2xl" />
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
