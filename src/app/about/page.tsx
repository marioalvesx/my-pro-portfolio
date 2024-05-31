"use client";

import { log } from "console";
import React, { useEffect } from "react";
import profilePic from "@/components/theme/media/aboutme-pic.jpeg";
import { color } from "framer-motion";

export default function about() {
  return (
    <div className="mx-auto flex flex-col max-w-5xl justify-between gap-10 overflow-hidden px-5 py-8 xl:px-0">
      <h1 className="flex font-bold items-start text-4xl">About me</h1>
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
        <div className="flex flex-col gap-5 max-w-lg text-[#A1A1AA] text-base leading-relaxed">
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
            Besides that, I adore to built personal projects and I love to share
            my professional experiences and my learnings in my{" "}
            <em>
              <a className="underline text-white"> socials</a>
            </em>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
