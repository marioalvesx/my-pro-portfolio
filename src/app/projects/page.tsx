"use client";

import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";

// Files
import githubExplorer from "./assets/images/githubExplorer.svg";
import hypedSneakers from "./assets/images/hypedsneakers.svg";
import loginPage from "./assets/images/animatedLoginPage.svg";
import { useProjects } from "@/services/firebase/useProjects";
import Header from "@/components/Header";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const fetchProjects: Project[] = [
  {
    id: 1,
    title: "Smart Finance",
    description: "Controle suas finanças de forma simples e intuitiva.",
    image: "",
    link: "https://github.com/marioalvesx/SmartFinance",
  },
  {
    id: 2,
    title: "Github Explorer",
    description:
      "Busque pelo nome de qualquer usuário do Github e explore seus projetos.",
    image: githubExplorer,
    link: "https://githubxplorer.netlify.app/",
  },
  {
    id: 3,
    title: "Hyped Sneakers",
    description:
      "E-commerce minimalista e experimental dos sneakers mais famosos e bem conceituados do mercado.",
    image: hypedSneakers,
    link: "https://hypedsneakersbr.netlify.app/",
  },
  {
    id: 4,
    title: "Login animado",
    description: "Página de login animada.",
    image: loginPage,
    link: "https://github.com/marioalvesx/login-page",
  },
  {
    id: 5,
    title: "DevUrlShortener",
    description: "Serviço para encurtar URLs.",
    image: "",
    link: "https://github.com/marioalvesx/DevUrlShortener",
  },
  {
    id: 6,
    title: "Nps Survey API",
    description:
      "API que envia pesquisas por e-mail para buscar o NPS de uma empresa.",
    image: "",
    link: "https://github.com/marioalvesx/NpsSurveyAPI",
  },
  {
    id: 7,
    title: "Vidly",
    description: "Aplicação que gerencia filmes de uma locadora.",
    image: "",
    link: "https://github.com/marioalvesx/Vidly",
  },
];

const Projects = () => {
  const { projects } = useProjects();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    projects?.length > 0 ? setLoading(true) : setLoading(false);
  }, [projects]);

  return (
    <>
      <Header />
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
        <div className="grid grid-cols-2 gap-10 items-center px-1">
          {loading ? (
            projects.map((project, index) => (
              <div
                key={index}
                className="rounded-xl border bg-card text-card-foreground shadow h-full flex flex-col overflow-hidden group hover:shadow-lg hover:cursor-pointer transition-shadow duration-300 relative"
                onClick={() => window.open(project?.imageUrl, "_blank")}
              >
                <div className="flex flex-col space-y-1.0 p-0">
                  <img
                    src={project?.imageUrl}
                    alt={project?.title}
                    loading="lazy"
                    width="500"
                    height="300"
                    decoding="async"
                    className="rounded-md"
                    style={{ color: "transparent" }}
                  />
                  <div className="absolute h-[600px] inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"></div>
                </div>
                <div className="flex flex-col flex-grow p-4">
                  <span className="w-full font-semibold tracking-tight text-xl mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <h3>Carregando...</h3>
          )}
        </div>
      </div>
    </>
  );
};

export default Projects;
