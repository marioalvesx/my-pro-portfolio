"use client";

import { Input } from "@/components/ui/input";
import LanguageTranslation from "@/shared/language-provider/LanguageProvider";

// Files
import { useProjects } from "@/services/firebase/useProjects";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import Footer from "@/components/Footer";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  url: string;
  link: string;
}

const Projects = () => {
  const { projects } = useProjects();
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  useEffect(() => {
    if (projects?.length > 0) {
      setLoading(true);
      projects.sort((a, b) => a.id - b.id);
      setFilteredProjects(projects);
    } else {
      setLoading(false);
    }
  }, [projects]);

  useEffect(() => {
    if (searchTerm) {
      const filtered = projects.filter((project) =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      setFilteredProjects(filtered);
    } else {
      setFilteredProjects(projects);
    }
  }, [searchTerm, projects]);

  return (
    <>
      <Header />
      <div className="mx-auto flex flex-col max-w-5xl justify-between gap-10 overflow-hidden pl-[12px] pr-[3px] px-5 py-8">
        <div className="flex flex-col gap-5 w-full px-1">
          <h1 className="flex font-bold items-start text-4xl text-[--primary]">
            <LanguageTranslation id={"projects.title"} />
          </h1>
          <p className="text-base text-muted-foreground">
            <LanguageTranslation id={"projects.description.one"} />{" "}
            <span className="text-primary">{projects.length}</span>{" "}
            <LanguageTranslation id={"projects.description.two"} />.{" "}
            <span
              className="text-primary underline hover:cursor-pointer"
              onClick={() =>
                window.open(
                  "https://github.com/marioalvesx?tab=repositories",
                  "_blank",
                )
              }
            >
              <LanguageTranslation id={"projects.description.three"} />
            </span>
            .
          </p>
          <div className="relative w-full">
            <Input
              name="search"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors transition-border duration-200 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start px-1">
          {loading ? (
            filteredProjects.map((project, index) => (
              <div
                key={index}
                className="rounded-xl border bg-card text-card-foreground shadow h-full flex flex-col overflow-hidden group hover:shadow-lg hover:cursor-pointer transition-shadow duration-300 relative"
                onClick={() => window.open(project?.url, "_blank")}
              >
                <div className="flex flex-col space-y-1.0 p-0">
                  {project?.imageUrl ? (
                    <>
                      <img
                        src={project.imageUrl}
                        alt={project?.title}
                        loading="lazy"
                        width="500"
                        height="400"
                        decoding="async"
                        className="rounded-md object-cover w-full h-[215px] transition-transform duration-300 group-hover:scale-105"
                        style={{ color: "transparent" }}
                      />
                      <div className="absolute h-[220px] inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <ExternalLink
                          size="34"
                          color="white"
                          className="group-hover:text-primary transition-colors duration-300"
                        />
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-[220px] bg-black rounded-md flex items-center justify-center">
                      <span className="text-white">
                        <LanguageTranslation id={"gen.message.wip"} />
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex flex-col flex-grow p-4 gap-2">
                  <span className="w-full font-semibold tracking-tight text-lg">
                    {project.title}
                  </span>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.description && project.description.length > 100
                      ? `${project.description.substring(0, 100)}...`
                      : project.description}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <>
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="rounded-xl border bg-card text-card-foreground shadow h-full flex flex-col overflow-hidden group transition-shadow duration-300 relative"
                >
                  <div className="flex flex-col space-y-1.0 p-0">
                    <div className="w-full h-[220px] bg-gray-700 animate-pulse rounded-md"></div>
                  </div>
                  <div className="flex flex-col flex-grow p-4 gap-2">
                    <div className="w-full h-5 bg-gray-800 animate-pulse rounded-md"></div>
                    <div className="w-full h-4 bg-gray-700 animate-pulse rounded-md"></div>
                    <div className="w-2/3 h-4 bg-gray-700 animate-pulse rounded-md"></div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
