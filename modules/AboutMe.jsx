import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Projects from "../projects.json";

import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail,
  AiFillFileText,
} from "react-icons/ai";
import ProjectCardSmall from "../components/ProjectCardSmall";

const AboutMe = () => {
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
      className="py-16 px-4 md:px-6"
    >
      <div className="md:grid grid-cols-2 gap-24">
        <div className="space-y-4 pt-6 col-span-1">
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
            ideas and executing them. I've always been fascinated with the idea
            of how things worked - which paired with my love of computers and
            digital media, led me to where I am today and kickstarted my foray
            into web development.
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
    </motion.section>
  );
};

export default AboutMe;
