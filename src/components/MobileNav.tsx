import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { AlignJustify } from "lucide-react";
import Logo from "./theme/media/Logo";
import Nav from "./Nav";
import Socials from "./Socials";

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col w-full items-center gap-y-32">
            <Logo />
            <div className="flex flex-col w-full items-center gap-y-6">
              <Nav
                containerStyles="flex flex-col w-full items-center"
                linkStyles="text-2xl w-full"
                underlineStyles="w-full"
              />
            </div>
          </div>
          <Socials containerStyles="flex gap-x-4" iconsStyles="text-2xl" />
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
