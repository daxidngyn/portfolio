import { useEffect } from "react";
import Link from "next/link";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ProjectData from "../projects.json";
import ProjectCardSmall from "../components/ProjectCardSmall";

const Projects = () => {
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
        {ProjectData.projects.map((project, idx) => {
          return (
            idx < 3 && (
              <ProjectCardSmall
                key={project.key}
                title={project.title}
                techstack={project.technologies}
                subtitle={project.subtitle}
                content={project.content}
                image={project.images[0]}
              />
            )
          );
        })}
      </div>
    </motion.section>
  );
};

export default Projects;
