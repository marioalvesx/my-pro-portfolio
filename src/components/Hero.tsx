"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import ThemeToggler from "./ThemeToggler";
import LanguageTranslation from "@/shared/language-provider/LanguageProvider";

export default function Hero() {
  return (
    <div className="mx-auto max-w-2xl flex flex-col gap-16">
      <div className="w-full flex flex-col gap-8 items-center justify-between rounded-lg">
        <div className="w-full flex items-center justify-between rounded-lg">
          <div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent-foreground transition duration-300 ease-in">
            <span>Porto Alegre, RS</span>
          </div>
          <div className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 opacity-50 hover:opacity-100 transition-opacity">
            <ThemeToggler />
          </div>
        </div>
        <header className="w-full flex flex-col gap-2">
          <h1 className="text-2xl font-bold">Mario Alves Neto</h1>
          <p className="text-md text-muted-foreground">
            <LanguageTranslation id={"welcome.message.two"} />
          </p>
        </header>
      </div>
      <section className="w-[100%] flex flex-col justify-start items-start">
        <h3 className="mb-6 text-sm font-medium uppercase tracking-wider text-muted-foreground">
          MENU
        </h3>
        <div className="w-[100%]">
          <a
            href="/about"
            className="justify-between group flex items-center rounded-lg px-4 py-2 transition-colors hover:bg-muted"
          >
            <span className="font-medium text-muted-foreground">
              <LanguageTranslation id={"about.me"} />{" "}
            </span>
            <ChevronRight className="text-muted-foreground" />
          </a>
          <a
            href="/projects"
            className="group flex items-center justify-between rounded-lg px-4 py-2 transition-colors hover:bg-muted"
          >
            <span className="font-medium text-muted-foreground">
              <LanguageTranslation id={"projects.title"} />
            </span>
            <ChevronRight className="text-muted-foreground" />
          </a>
          <a
            href="https://drive.google.com/file/d/1UEYEmUZy2WnBCkC-MxKW0mPBqfSgP5nj/view?usp=drive_link"
            target="_blank"
            className="group flex items-center justify-between rounded-lg px-4 py-2 transition-colors hover:bg-muted"
          >
            <span className="font-medium text-muted-foreground">
              <LanguageTranslation id={"resume.me"} /> - PtBr
            </span>
            <ChevronRight className="text-muted-foreground" />
          </a>
          <a
            href="https://drive.google.com/file/d/1VsEKWrObaE9uP8Um-4z0lsmEv9iUFuCP/view?usp=drive_link"
            target="_blank"
            className="group flex items-center justify-between rounded-lg px-4 py-2 transition-colors hover:bg-muted"
          >
            <span className="font-medium text-muted-foreground">
              <LanguageTranslation id={"resume.me"} /> - EnUS
            </span>
            <ChevronRight className="text-muted-foreground" />
          </a>
          <a
            href="https://tally.so/r/mOLbDg"
            target="_blank"
            className="group flex items-center justify-between rounded-lg px-4 py-2 transition-colors hover:bg-muted"
          >
            <span className="font-medium text-muted-foreground">
              <LanguageTranslation id={"contact.me"} />
            </span>
            <ChevronRight className="text-muted-foreground" />
          </a>
        </div>
      </section>
    </div>
  );
}
