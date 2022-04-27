import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ProjectData from "../projects.json";

import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail,
  AiFillFileText,
} from "react-icons/ai";
import ProjectCardSmall from "../components/ProjectCardSmall";

const Contact = () => {
  const fadeInVariant = {
    visible: { opacity: 1, transition: { duration: 1 } },
    hidden: { opacity: 0 },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      animate={controls}
      variants={fadeInVariant}
      initial="hidden"
      className="py-64 md:py-80 px-4 md:px-6"
    >
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
    </motion.section>
  );
};

export default Contact;
