"use client";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="mx-auto flex max-w-5xl flex-col justify-start gap-4 overflow-hidden py-8 px-5 lg:px-0">
      <div className="rounded-xl border text-card-foreground shadow bg-[#121212]">
        <div className="space-y-1.5 p-6 flex flex-col gap-2">
          <span className="uppercase font-bold dark:text-white text-lg text-white">
            LET'S BUILD SOMETHING TOGETHER?
          </span>
          <p className="text-sm text-muted-foreground">
            <span>
              If you have any idea in mind, feel free to send me a message.
            </span>
          </p>
        </div>
        <div className="p-6 pt-0">
          <a title="Talk with me" href="/">
            <button className="inline-flex justify-center whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 items-center gap-1 rounded-full p-5 text-base hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out">
              Talk to me
            </button>
          </a>
        </div>
        <div className="items-center m-0 flex justify-center p-5">
          <Socials
            containerStyles="grid grid-cols-5 items-center gap-3 md:flex md:gap-2"
            iconsStyles="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9 text-primary dark:text-white/70 text-[21px] hover:text-white dark:hover:text-primary transition-all"
          />
        </div>
        <div
          data-orientation="horizontal"
          role="none"
          className="shrink-0 bg-border h-[1px] w-full"
        ></div>
        <div className="items-center m-0 flex justify-center p-5">
          <span className="text-sm text-muted-foreground">
            ©2024 Mario Alves
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
