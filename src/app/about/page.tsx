"use client";

import React from "react";
import profilePic from "@/components/theme/media/about-me-pic.jpeg";

export default function about() {
  return (
    <div className="mx-auto flex flex-col max-w-5xl justify-between gap-10 overflow-hidden px-5 py-8 xl:px-0">
      <h1 className="flex font-bold items-start text-4xl text-[--primary]">
        About me
      </h1>
      <div className="flex flex-col md:flex-row align-center justify-between w-full gap-5">
        <img
          src={profilePic.src}
          loading="lazy"
          width="400"
          height="400"
          decoding="async"
          className="rounded-md"
          style={{ color: "transparent" }}
        />
        <div className="flex flex-col gap-5 max-w-lg text-[--primary] text-base leading-relaxed">
          <p>
            My name is Mario, i am from Brazil and I am{" "}
            <strong>{new Date().getFullYear() - 1997}</strong> years old.
          </p>
          <p>
            I am a Front-end developer and I have been working with web
            development since 2020 with these particular technologies: HTML,
            CSS, JavaScript, TypeScript, ReactJS, React Native, Git, Github and
            many others.
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
      <div>
        <h2 className="flex font-bold items-start text-2xl text-[--primary]">
          Career
        </h2>
        <div className="flex flex-col gap-3 max-w-md text-base">
          <h3 className="font-bold text-primary mt-5">Full-Stack developer</h3>
          <p className="m-0">
            <a
              className="text-[--secondary] underline"
              href="https://duettsoftware.com"
            >
              Duett Software
            </a>
            <span>{" • "}Remoto</span>
          </p>
          <p className="m-0">
            <span>march 2023</span>
            <span> - current </span>
          </p>
        </div>

        <div className="flex flex-col gap-3 max-w-md text-[--primary] text-base">
          <h3 className="font-bold text-primary mt-5">Cloud Server Analyst</h3>
          <p className="m-0">
            <a
              className="text-[--secondary] underline"
              href="https://umbler.com"
            >
              {" "}
              Umbler
            </a>
            <span>{" • "}Remoto</span>
          </p>
          <p>jun 2019 - Sept 2022</p>
        </div>

        <div className="flex flex-col gap-3 max-w-md text-[--primary] text-base">
          <h3 className="font-bold text-primary mt-5">Customer Success</h3>
          <p className="m-0">
            <a
              className="text-[--secondary] underline"
              href="https://umbler.com.br"
            >
              Umbler
            </a>
            <span>{" • "}Remoto</span>
          </p>
          <p>march 2017 - jun 2022</p>
        </div>
      </div>
    </div>
  );
}
