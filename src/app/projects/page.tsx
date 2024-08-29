"use client";

import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

// Files
import project1 from "./assets/images/githubExplorer.svg";
import project2 from "./assets/images/hypedsneakers.svg";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const fetchProjects: Project[] = [
  {
    id: 1,
    title: "Github Explorer",
    description:
      "Busque pelo nome de qualquer usuário do Github e explore seus projetos.",
    imageUrl: project1,
  },
  {
    id: 2,
    title: "Hyped Sneakers",
    description:
      "E-commerce minimalista e experimental dos sneakers mais famosos e bem conceituados do mercado.",
    imageUrl: project2,
  },
];

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>(fetchProjects);

  return (
    <div className="mx-auto flex flex-col max-w-5xl justify-between gap-10 overflow-hidden px-5 py-8 xl:px-0">
      <div className="flex flex-col gap-5 w-full px-1">
        <h1 className="flex font-bold items-start text-4xl text-[--primary]">
          Projects
        </h1>
        <p className="text-base text-muted-foreground">
          Aqui você vai conferir os{" "}
          <span className="text-primary">{projects.length}</span> principais
          projetos que venho desenvolvendo durante minha jornada como
          programador.{" "}
          <span className="text-primary underline">
            Confira outros projetos em meu Github
          </span>
          .
        </p>
        <div className="relative w-full">
          <Input
            name="search"
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors transition-border duration-200 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Procure pelo projeto desejado"
            // onChange={() => {}
          />
          <span className="absolute inset-y-0 right-0 flex items-center pr-3">
            <svg
              className="h-5 w-5 text-muted-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-10 items-center px-5">
        {projects.map((project) => (
          <>
            <div key="1" className="relative w-full max-w-3xl mx-auto">
              <Image
                src={project.imageUrl}
                alt="MacBook"
                layout="responsive"
                width={800}
                height={450}
                className="w-full h-full m-0 hover:scale-105 transform transition-all duration-500 ease-in-out"
              />
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Projects;
