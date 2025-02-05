"use client";

import React, { useState } from "react";
import profilePic from "@/components/theme/media/about-me-pic.jpeg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/Header";

export default function About() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Header />
      <div className="mx-auto flex flex-col max-w-5xl justify-between gap-10 overflow-hidden px-5 py-8 xl:px-0">
        <div>
          <h1 className="flex font-bold items-start text-4xl text-[--primary] mb-4">
            About me
          </h1>
          <h2 className="text-sm tracking-wide text-muted-foreground">
            Know a little more about my career.
          </h2>
        </div>
        <div className="flex flex-col md:flex-row px-6 py-6 rounded-xl border align-center justify-between w-full gap-5">
          <img
            src={profilePic.src}
            loading="lazy"
            width="400"
            height="400"
            decoding="async"
            className="rounded-md"
            style={{ color: "transparent" }}
          />
          <div className="flex flex-col justify-center text-justify gap-5 max-w-lg text-[--primary] text-base leading-relaxed">
            <h2 className="text-sm uppercase tracking-wide text-muted-foreground">
              Introduction
            </h2>
            <p>
              My name is Mario, i am from Brazil and I am{" "}
              <strong>{new Date().getFullYear() - 1997}</strong> years old.
            </p>
            <p>
              I am a Front-end developer and I have been working with web
              development since 2020 with these particular technologies: HTML,
              CSS, JavaScript, TypeScript, ReactJS, React Native, Git, Github
              and many others.
            </p>
            <p>
              Throughout my career I have worked with many projects as Back-end
              developer, Mobile Developer and even as Cloud Server Engineer. I
              acquired experience with methodologies like Scrum e Kanban. I am
              available to contribute in freelance jobs with my skills specially
              in JavaScript, React, TS, Next.JS and Node.JS to your project.
            </p>
            <p>
              Besides that, I love to built personal projects and to share my
              professional experiences and my learnings in my{" "}
              <em>
                <a className="underline text-white"> socials.</a>
              </em>
            </p>
          </div>
        </div>
        <div className="flex flex-col px-6 py-6 rounded-xl border align-center justify-center">
          <h2 className="flex font-bold items-start text-2xl text-[--primary]">
            Career
          </h2>
          <div className="flex flex-col gap-1 max-w-md text-base mb-3">
            <h3 className="font-bold text-primary mt-5">
              Full-Stack developer
            </h3>
            <p className="m-0">
              <a className="text-[--secondary]">Duett Software</a>
              <span>{" • "}Remoto</span>
            </p>
            <p className="m-0">
              <span className="text-sm text-muted-foreground">march 2023</span>
              <span className="text-sm text-muted-foreground"> - current </span>
            </p>
          </div>
          <div
            data-orientation="horizontal"
            role="none"
            className="shrink-0 bg-border h-[1px] w-full"
          ></div>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className="border-none">
              <AccordionTrigger onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "Hide previous roles" : "Show previous roles"}
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-1 max-w-md text-[--primary] text-base">
                  <h3 className="font-bold text-primary mt-5">
                    Cloud Server Analyst
                  </h3>
                  <p className="m-0">
                    <a className="text-muted-foreground font-semibold">
                      {" "}
                      Umbler
                    </a>
                    <span className="text-lg text-muted-foreground font-semibold">
                      {" • "}Remoto
                    </span>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    June 2019 - September 2022
                  </p>
                </div>

                <div className="flex flex-col gap-1 max-w-md text-[--primary] text-base">
                  <h3 className="font-bold text-primary mt-5">
                    Customer Success
                  </h3>
                  <p className="m-0">
                    <a className="text-[--secondary]">Umbler</a>
                    <span>{" • "}Remoto</span>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    March 2017 - June 2022
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
}
