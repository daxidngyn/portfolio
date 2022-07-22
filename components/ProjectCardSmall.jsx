import { BsArrowRightShort } from "react-icons/bs";

const ProjectCardSmall = ({ title, content, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="py-10 px-4 lg:py-12 lg:px-10 bg-zinc-800 rounded-3xl flex flex-col group cursor-pointer"
    >
      <span className="text-2xl font-semibold">{title}</span>

      <span className="font-light mt-6 opacity-90">{content}</span>

      <div className="mt-8">
        <span className="text-xs uppercase group-hover:scale-95 group-hover:underline decoration-zinc-600 transition duration-300 ease-in-out flex items-center font-semibold tracking-wide">
          Learn more
          <BsArrowRightShort className="w-5 h-5 group-hover:translate-x-1 transition duration-300 ease-in-out" />
        </span>
      </div>
    </a>
  );
};

export default ProjectCardSmall;
