import Image from "next/image";

import { BsArrowRightShort } from "react-icons/bs";

const ProjectCard = ({ title, techstack, subtitle, content, image, link }) => {
  return (
    <article className="lg:grid grid-cols-12 gap-16 bg-zinc-800 rounded-3xl py-10 px-4 lg:py-16 lg:px-12 shadow-xl">
      <div className="col-span-5 flex flex-col">
        <span className="text-3xl font-bold">{title}</span>

        <div className="space-x-2 mt-0.5">
          {techstack.map((tech, idx) => (
            <>
              <span
                className="text-zinc-400 text-sm lg:text-lg font-light"
                key={tech}
              >
                {tech}
                {idx !== techstack.length - 1 && (
                  <span className="ml-2 select-none">&#8226;</span>
                )}
              </span>
            </>
          ))}
        </div>

        <div className="h-48 w-full relative mt-4 ring-2 ring-black rounded-2xl lg:hidden">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-2xl object-top"
          />
        </div>

        <span className="text-zinc-200 lg:text-lg font-medium mt-4">
          {subtitle}
        </span>

        <span className="text-zinc-200 mt-2">{content}</span>

        <div className="mt-12">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit rounded-full bg-black px-8 py-3 text-xs uppercase hover:scale-95 transition duration-300 ease-in-out flex items-center"
          >
            Discover
            <BsArrowRightShort className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="col-span-7">
        <div className="h-full w-full relative shadow-xl lg:ring-2 ring-black rounded-2xl">
          <Image
            src={image}
            layout="fill"
            objectFit="cover"
            className="rounded-2xl object-top"
          />
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
