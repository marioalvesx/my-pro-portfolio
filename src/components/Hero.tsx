"use client";

import React from "react";
import { Send, NotebookText } from "lucide-react";
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
      <section className="py-12 xl:pt-5 bg-hero bg-no-repeat bg-bottom dark:bg-none">
        <div className="container mx-auto pl-0 pr-0">
          <div className="flex justify-between gap-x-8">
            <div className="flex max-w-[720px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
              <h1 className="heroName mb-4">
                {translations.welcome}
                <br />
                {translations["welcome.message.two"]}
              </h1>
              <p className="subtitle max-w-[530px] mx-auto xl:mx-0">
                {translations["welcome.message.three"]}
              </p>
              <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0">
                <Link href="https://tally.so/r/mOLbDg" target="_blank">
                  <Button className="inline-flex justify-center whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 items-center gap-1 rounded-full p-5 text-base hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out">
                    Contact me <Send size={18} />
                  </Button>
                </Link>
                <Link href="https://medium.com/@marioalvesneto" target="_blank">
                  <Button className="inline-flex justify-center whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 items-center gap-1 rounded-full p-5 text-base hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out">
                    Read my blog <NotebookText size={18} />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-10 flex flex-col gap-5 p-1">
        <div>
          <span className="font-bold uppercase">Últimas publicações</span>
        </div>
        <div className="p-10 md:p-2">
          <Carousel
            opts={{
              align: "start",
            }}
            className="relative w-full"
            orientation="horizontal"
          >
            <CarouselContent>
              {Array.isArray(publications) &&
                publications.map((publication, index) => (
                  <CarouselItem
                    key={index}
                    className="min-w-0 shrink-0 grow-0 md:basis-1/2 lg:basis-1/3 pl-4"
                  >
                    <div className="p-1">
                      <Card className="h-64">
                        <CardContent className="flex aspect-square items-center justify-center p-0">
                          <div className="group relative w-full h-full">
                            <a href={publication.link} target="_blank">
                              <Image
                                src={publication.image}
                                alt=""
                                quality={100}
                                className="rounded-md object-cover w-full h-64 shadow-md transition duration-300 ease-in-out group-hover:shadow-none group-hover:brightness-100 brightness-75"
                              />
                            </a>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </>
  );
}
