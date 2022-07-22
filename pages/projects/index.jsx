import Head from "next/head";

import Projects from "../../projects.json";

import ProjectCard from "../../components/ProjectCard";
import ProjectCardSmall from "../../components/ProjectCardSmall";

const techStack = [
  "Python",
  "Java",
  "Javascript",
  "HTML/CSS",
  "C/C++",
  "React",
  "Next.js",
  "React Native",
  "Electron",
  "MongoDB",
  "Postgres",
  "Prisma",
  "AWS Services (S3, Lambda, EC2, Amplify)",
];

export default function ProjectPage() {
  return (
    <div>
      <Head>
        <title>Projects - David Nguyen | Portfolio</title>
        <meta
          name="description"
          content="All of the projects that I've worked on, many of which I'm still working on or have published!"
        />
        <meta property="og:url" content="https://davidnguyen.at/projects" />
        <meta property="og:image" content="/portrait.jpg" />
      </Head>
      <main className="max-w-5xl mx-auto py-20 px-4 md:px-6">
        <div className="text-center pb-12">
          <h1 className="text-5xl md:text-6xl font-bold pb-6">My Projects</h1>
          <span className="text-lg md:text-xl">
            All of the projects that I&apos;ve worked on, many of which I&apos;m
            still working on or have published!
          </span>
        </div>

        <div className="text-center">
          <span className="text-xl md:text-2xl uppercase opacity-60 font-light tracking-wide">
            Skills
          </span>
          <div className="space-x-2 mt-2 max-w-xl mx-auto flex flex-wrap justify-center md:block">
            {techStack.map((tech, idx) => (
              <span className="font-light text-sm md:text-base" key={tech}>
                {tech}
                {idx !== techStack.length - 1 && (
                  <span className="ml-2 select-none">&#8226;</span>
                )}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-12 mt-16">
          {Projects.projects.map((project, idx) => {
            return (
              idx < 3 && (
                <ProjectCard
                  key={project.key}
                  title={project.title}
                  techstack={project.technologies}
                  subtitle={project.subtitle}
                  content={project.content}
                  link={project.link}
                  image={project.images[0]}
                />
              )
            );
          })}

          <div className="md:grid grid-cols-3 gap-8 space-y-8 md:space-y-0">
            {Projects.projects.map((project, idx) => {
              return (
                idx >= 3 && (
                  <div className="col-span-1 bg-zinc-800 rounded-3xl shadow-xl">
                    <ProjectCardSmall
                      key={project.key}
                      title={project.title}
                      content={project.content}
                      link={project.link}
                    />
                  </div>
                )
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
