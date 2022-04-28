import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Projects from "../projects.json";

import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail,
  AiFillFileText,
} from "react-icons/ai";
import ProjectCardSmall from "../components/ProjectCardSmall";

export default function Home() {
  return (
    <main className="max-w-screen-xl mx-auto">
      <Head>
        <title>David Nguyen | Portfolio</title>
        <meta
          name="description"
          content="My portfolio to showcase information about me and my projects."
        />
        <meta property="og:url" content="https://davidnguyen.at/" />
        <meta property="og:image" content="/portrait.jpg" />
      </Head>

      <section className="space-y-10 py-16 md:py-28 px-4 md:px-6">
        <div className="flex flex-col">
          <span className="text-2xl md:text-3xl text-sky-400 font-medium relative">
            Hey there! I'm
          </span>
          <h1 className="text-7xl md:text-8xl font-bold">David Nguyen.</h1>
        </div>

        <div className="max-w-4xl">
          <span className="text-2xl md:text-3xl font-medium">
            Software Engineer. Fullstack Developer.&nbsp;
            <span className="text-zinc-400">
              An avid developer consistently seeking to expand my knowledge in
              the fields of Computer Science, Blockchain, and Economics.
            </span>
          </span>
        </div>

        <div className="max-w-4xl">
          <span className="text-xl md:text-2xl text-zinc-400">
            &#127891;&nbsp;Computer Science Student @ University of California,
            Santa Cruz
          </span>
        </div>

        <div className="flex gap-x-4">
          <a
            href="https://github.com/daxidngyn"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center font-medium gap-x-2 bg-zinc-800 py-2 px-3 md:px-3.5 rounded-lg cursor-pointer hover:bg-zinc-700 hover:scale-95 transition duration-300 ease-in-out"
          >
            <AiFillGithub className="w-5 h-5 text-sky-400" />
            <span className="text-sm md:text-base">Github</span>
          </a>
          <a
            href="https://linkedin.com/in/davidngyn"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center font-medium gap-x-2 bg-zinc-800 py-2 px-3 md:px-3.5 rounded-lg cursor-pointer hover:bg-zinc-700 hover:scale-95 transition duration-300 ease-in-out"
          >
            <AiFillLinkedin className="w-5 h-5 text-sky-400" />
            <span className="text-sm md:text-base">Linkedin</span>
          </a>
          <a
            href="mailto:dnguy203@ucsc.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center font-medium gap-x-2 bg-zinc-800 py-2 px-3 md:px-3.5 rounded-lg cursor-pointer hover:bg-zinc-700 hover:scale-95 transition duration-300 ease-in-out"
          >
            <AiFillMail className="w-5 h-5 text-sky-400" />
            <span className="text-sm md:text-base">Email</span>
          </a>
        </div>
      </section>

      <section className="py-20 px-4 md:px-6">
        <div className="md:grid grid-cols-2 gap-24">
          <div className="space-y-4 pt-8 col-span-1">
            <h2 className="text-2xl md:text-3xl font-medium pb-2">
              &#11088;&nbsp;About Me
            </h2>
            <p className="text-zinc-400 md:text-lg">
              Hello! I'm David Nguyen, a current sophomore pursuing Computer
              Science at UC Santa Cruz.
            </p>

            <p className="text-zinc-400 md:text-lg">
              I'm a self-taught developer that specializes in full-stack web
              development. I love to fuel my innovation by exploring creative
              ideas and executing them. I've always been fascinated with the
              idea of how things worked - which paired with my love of computers
              and digital media, led me to where I am today and kickstarted my
              foray into web development.
            </p>

            <p className="text-zinc-400 md:text-lg">
              Outside of work, I enjoy playing video games such as Valorant,
              reselling sneakers, and exploring new places with my friends.
            </p>
          </div>

          <div className="col-span-1 flex items-center justify-center mt-10">
            <div className="relative h-80 w-80 md:h-96 md:w-96">
              <Image
                src="/portrait.jpg"
                layout="fill"
                objectFit="cover"
                className="rounded-full object-[center_top] object-scale-down"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-medium pb-2">
          &#128187;&nbsp;Projects
        </h2>
        <span className="text-zinc-400 md:text-lg">
          For a more in-depth view of my projects and experiences,&nbsp;
          <Link href="/projects">
            <a className="cursor-pointer text-white hover:text-sky-400 transition duration-150 ease-in-out">
              click here
            </a>
          </Link>
          .
        </span>

        <div className="mt-8 space-y-8 md:space-y-0 md:grid grid-cols-3 gap-8">
          {Projects.projects.map((project, idx) => {
            return (
              idx < 3 && (
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
      </section>

      <section className="py-64 md:py-80 px-4 md:px-6">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl md:text-5xl font-semibold">Keep In Touch.</h1>

          <div className="mt-8 text-center">
            <span className="text-zinc-400 text-lg">
              For any inquires, feel free to email me at&nbsp;
              <a
                href="mailto:dnguy203@ucsc.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400"
              >
                dnguy203@ucsc.edu
              </a>
              .
            </span>
          </div>

          <div className="flex gap-x-4 mt-8">
            <a
              href="https://github.com/daxidngyn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center font-medium gap-x-2 bg-zinc-800 py-2 px-3 md:px-3.5 rounded-lg cursor-pointer hover:bg-zinc-700 hover:scale-95 transition duration-300 ease-in-out"
            >
              <AiFillGithub className="w-5 h-5 text-sky-400" />
              <span className="text-sm md:text-base">Github</span>
            </a>
            <a
              href="https://linkedin.com/in/davidngyn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center font-medium gap-x-2 bg-zinc-800 py-2 px-3 md:px-3.5 rounded-lg cursor-pointer hover:bg-zinc-700 hover:scale-95 transition duration-300 ease-in-out"
            >
              <AiFillLinkedin className="w-5 h-5 text-sky-400" />
              <span className="text-sm md:text-base">Linkedin</span>
            </a>
            <a
              href="https://docs.google.com/document/d/1mV8xR01q6VJCVs58Md2UYzICOdnuPt3r/edit?usp=sharing&ouid=107088831996549920390&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center font-medium gap-x-2 bg-zinc-800 py-2 px-3 md:px-3.5 rounded-lg cursor-pointer hover:bg-zinc-700 hover:scale-95 transition duration-300 ease-in-out"
            >
              <AiFillFileText className="w-5 h-5 text-sky-400" />
              <span className="text-sm md:text-base">Resume</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
