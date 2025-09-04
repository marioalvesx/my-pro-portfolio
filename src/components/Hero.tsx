"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { stagger } from "motion";
import { ChevronRight } from "lucide-react";
import ThemeToggler from "./ThemeToggler";
import LanguageTranslation from "@/shared/language-provider/LanguageProvider";
import Socials from "./Socials";

const container = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 0.84, 0.44, 1] as [number, number, number, number],
      when: "beforeChildren" as string,
      delayChildren: stagger(0.1),
    },
  },
};

function NavItem({
  href,
  external = false,
  children,
}: {
  href: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  const Content = (
    <motion.div
      className="group flex items-center justify-between rounded-lg pl-5 py-2 transition-colors hover:bg-muted"
      whileHover={{ x: 2 }}
      transition={{ type: "spring", stiffness: 420, damping: 32 }}
    >
      <span className="font-medium text-muted-foreground">{children}</span>
      <motion.span
        className="text-muted-foreground"
        whileHover={{ x: 4 }}
        transition={{ type: "spring", stiffness: 420, damping: 32 }}
      >
        <ChevronRight />
      </motion.span>
    </motion.div>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer">
        {Content}
      </a>
    );
  }
  return <Link href={href}>{Content}</Link>;
}

export default function Hero() {
  return (
    <motion.div
      className="mx-auto max-w-2xl px-6 py-8 flex flex-col gap-8"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div className="w-full flex flex-col gap-8 items-center justify-between rounded-lg">
        <div className="w-full flex items-center justify-between rounded-lg">
          <motion.div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent-foreground transition duration-300 ease-in">
            <span>Porto Alegre, RS</span>
          </motion.div>

          <motion.div
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 opacity-50 hover:opacity-100 transition-opacity"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 500, damping: 28 }}
          >
            <ThemeToggler />
          </motion.div>
        </div>

        <header className="w-full flex flex-col gap-2">
          <motion.h1 className="text-2xl font-bold">Mario Alves Neto</motion.h1>
          <motion.p className="text-md text-muted-foreground">
            <LanguageTranslation id={"welcome.message.two"} />
          </motion.p>
        </header>
      </motion.div>

      <motion.section
        className="w-[100%] flex flex-col justify-start items-start"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4, ease: [0.16, 0.84, 0.44, 1] }}
      >
        <h3 className="mb-6 text-sm font-medium uppercase tracking-wider text-muted-foreground">
          MENU
        </h3>

        <div className="w-[100%] space-y-1">
          <NavItem href="/about">
            <LanguageTranslation id={"about.me"} />
          </NavItem>

          <NavItem href="/projects">
            <LanguageTranslation id={"projects.title"} />
          </NavItem>

          <NavItem
            href="https://drive.google.com/file/d/1UEYEmUZy2WnBCkC-MxKW0mPBqfSgP5nj/view?usp=drive_link"
            external
          >
            <LanguageTranslation id={"resume.me"} /> - PtBr
          </NavItem>

          <NavItem
            href="https://drive.google.com/file/d/1VsEKWrObaE9uP8Um-4z0lsmEv9iUFuCP/view?usp=drive_link"
            external
          >
            <LanguageTranslation id={"resume.me"} /> - EnUS
          </NavItem>

          <NavItem href="https://tally.so/r/mOLbDg" external>
            <LanguageTranslation id={"contact.me"} />
          </NavItem>
        </div>
      </motion.section>
      <footer className="mx-auto max-w-2xl px-6 py-8 flex flex-col gap-8">
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
    </motion.div>
  );
}
