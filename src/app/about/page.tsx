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
import LanguageTranslation from "@/shared/language-provider/LanguageProvider";

export default function About() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Header />
      <div className="mx-auto flex flex-col max-w-5xl justify-between gap-10 overflow-hidden px-5 py-8 xl:px-0">
        <div>
          <h1 className="flex font-bold items-start text-4xl text-[--primary] mb-4">
            <LanguageTranslation id={"about.me"} />
          </h1>
          <h2 className="text-sm tracking-wide text-muted-foreground">
            <LanguageTranslation id={"about.me.description"} />
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
              <LanguageTranslation id={"about.me.introduction"} />
            </h2>
            <p>
              <LanguageTranslation id={"about.me.description.one"} />{" "}
              <strong>{new Date().getFullYear() - 1997}</strong>{" "}
              <LanguageTranslation id={"about.me.years.old"} />
            </p>
            <p>
              <LanguageTranslation id={"about.me.description.two"} />
            </p>
            <p>
              <LanguageTranslation id={"about.me.description.three"} />{" "}
            </p>
            <p>
              <LanguageTranslation id={"about.me.description.four"} />{" "}
              <em>
                <a className="underline text-white">
                  {" "}
                  <LanguageTranslation id={"about.me.description.socials"} />
                </a>
                {"."}
              </em>
            </p>
          </div>
        </div>
        <div className="flex flex-col px-6 py-6 rounded-xl border align-center justify-center">
          <h2 className="flex font-bold items-start text-2xl text-[--primary]">
            <LanguageTranslation id={"about.me.career"} />
          </h2>
          <div className="flex flex-col gap-1 max-w-md text-base mb-3">
            <h3 className="font-bold text-primary mt-5">
              <LanguageTranslation id={"about.me.fullstack.developer"} />
            </h3>
            <p className="m-0">
              <a className="text-[--secondary]">Duett Software</a>
              <span>
                {" • "}
                <LanguageTranslation id={"about.me.remote"} />
              </span>
            </p>
            <p className="m-0">
              <span className="text-sm text-muted-foreground">
                <LanguageTranslation id={"gen.march"} /> 2023
              </span>
              <span className="text-sm text-muted-foreground">
                {" "}
                - <LanguageTranslation id={"about.me.current"} />{" "}
              </span>
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
                {isOpen ? (
                  <LanguageTranslation id={"about.me.hide.roles"} />
                ) : (
                  <LanguageTranslation id={"about.me.show.roles"} />
                )}
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-1 max-w-md text-[--primary] text-base">
                  <h3 className="font-bold text-primary mt-5">
                    <LanguageTranslation id={"about.me.cloud.server.analyst"} />
                  </h3>
                  <p className="m-0">
                    <a className="text-muted-foreground font-semibold">
                      {" "}
                      Umbler
                    </a>
                    <span className="text-lg text-muted-foreground font-semibold">
                      {" • "}
                      <LanguageTranslation id={"about.me.remote"} />
                    </span>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <LanguageTranslation id={"gen.june"} /> 2019 -{" "}
                    <LanguageTranslation id={"gen.september"} /> 2022
                  </p>
                </div>

                <div className="flex flex-col gap-1 max-w-md text-[--primary] text-base">
                  <h3 className="font-bold text-primary mt-5">
                    <LanguageTranslation id={"about.me.customer.success"} />
                  </h3>
                  <p className="m-0">
                    <a className="text-[--secondary]">Umbler</a>
                    <span>
                      {" • "}
                      <LanguageTranslation id={"about.me.remote"} />
                    </span>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <LanguageTranslation id={"about.me.remote"} /> 2017 -{" "}
                    <LanguageTranslation id={"gen.june"} />
                    2022
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
