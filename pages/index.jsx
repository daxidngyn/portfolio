import Head from "next/head";
import dynamic from "next/dynamic";

import AboutMe from "../modules/AboutMe";
const Projects = dynamic(() => import("../modules/Projects"));
const Contact = dynamic(() => import("../modules/Contact"));

import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";

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

      <AboutMe />

      <Projects />

      <Contact />
    </main>
  );
}
