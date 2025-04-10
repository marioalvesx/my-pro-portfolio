"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import { useLanguage } from "../context/LanguageContext";
import publication1 from "../app/projects/assets/images/mainProjectsImages/tdc-event-1.jpg";
import publication2 from "../app/projects/assets/images/mainProjectsImages/tdc-event-2.jpg";
import publication3 from "../app/projects/assets/images/mainProjectsImages/tdc-event-3.jpg";
import Image from "next/image";
import ThemeToggler from "./ThemeToggler";
import LanguageTranslation from "@/shared/language-provider/LanguageProvider";

export default function Hero() {
  const { translations } = useLanguage();
  const publications = [
    {
      name: "TDC POA 2023",
      description: "Tech event in POA.",
      image: publication1,
      link: "https://www.linkedin.com/posts/marioalvesneto_tbt-thedevconf-activity-7166763613494484993-4AUY?utm_source=share&utm_medium=member_desktop",
    },
    {
      name: "TDC POA 2023",
      description: "Tech event in POA.",
      image: publication2,
      link: "https://www.linkedin.com/posts/marioalvesneto_tbt-thedevconf-activity-7166763613494484993-4AUY?utm_source=share&utm_medium=member_desktop",
    },
    {
      name: "TDC POA 2023",
      description: "Tech event in POA.",
      image: publication3,
      link: "https://www.linkedin.com/posts/marioalvesneto_tbt-thedevconf-activity-7166763613494484993-4AUY?utm_source=share&utm_medium=member_desktop",
    },
  ];

  return (
    <>
      <div className="mt-2 mb-6 mx-auto max-w-sm px-6 flex flex-col gap-8 items-center justify-center">
        <div className="w-full flex items-center justify-between rounded-lg">
          <div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent-foreground transition duration-300 ease-in">
            <span>Porto Alegre, RS</span>
          </div>
          <div className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 opacity-50 hover:opacity-100 transition-opacity">
            <ThemeToggler />
          </div>
        </div>
        <header className="w-full flex flex-col gap-2">
          <h1 className="text-2xl font-bold">marioalvesneto.dev</h1>
          <p className="text-md text-muted-foreground">
            <LanguageTranslation id={"welcome.message.two"} />
          </p>
        </header>
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
                <LanguageTranslation id={"projects.me"} />
              </span>
              <ChevronRight className="text-muted-foreground" />
            </a>
            <a
              href="https://drive.google.com/file/d/1aJmyzgds7QExx1D5zM6EunGYTMbw-wHG/view?usp=sharing"
              target="_blank"
              className="group flex items-center justify-between rounded-lg px-4 py-2 transition-colors hover:bg-muted"
            >
              <span className="font-medium text-muted-foreground">
                <LanguageTranslation id={"resume.me"} /> - PtBr
              </span>
              <ChevronRight className="text-muted-foreground" />
            </a>
            <a
              href="https://drive.google.com/file/d/1OyrZzybCqIYsJn-6zGuESfIblwy2jWeq/view?usp=sharing"
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
    </>
  );
}
