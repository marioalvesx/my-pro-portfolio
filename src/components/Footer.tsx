"use client";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="mx-auto flex w-1/4 flex-col justify-center gap-4 overflow-hidden pt-2 pb-0 px-5 lg:px-0">
      <div className="text-card-foreground shadow bg-footer-background">
        <div className="items-center m-0 flex justify-center p-5">
          <Socials
            containerStyles="grid grid-cols-5 items-center gap-8 md:flex md:gap-4"
            iconsStyles="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9 text-primary dark:text-white/70 text-[21px] hover:text-white dark:hover:text-primary transition-all"
          />
        </div>
        <div
          data-orientation="horizontal"
          role="none"
          className="w-full flex items-center justify-center shrink-0 bg-border h-[1px]"
        ></div>
        <div className="items-center m-0 flex justify-center p-5">
          <span className="text-sm text-muted-foreground">
            ©2025 - Mario Alves
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
