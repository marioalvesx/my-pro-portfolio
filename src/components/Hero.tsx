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

export default function Hero() {
  const { translations } = useLanguage();

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
                <Link href="/contact">
                  <Button className="inline-flex justify-center whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 items-center gap-1 rounded-full p-5 text-base hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out">
                    Contact me <Send size={18} />
                  </Button>
                </Link>
                <Link href="/blog">
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
          <span className="font-bold uppercase">Últimos projetos</span>
        </div>
        <div className="p-10 md:p-2">
          <Carousel
            opts={{
              align: "start",
            }}
            className="relative w-full"
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="min-w-0 shrink-0 grow-0 basis-full pl-4 md:basis-1/3 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-3xl font-semibold">
                          {index + 1}
                        </span>
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
