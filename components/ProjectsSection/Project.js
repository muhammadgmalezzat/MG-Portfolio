import Image from "next/image";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";

const Project = ({
  projectLink,
  projrctDescription,
  imgSrc,
  imgAlt,
  projectTitle,
  skills,
  youtubeLink,
  githubLink,
  reverse,
}) => {
  const containerClass = reverse
    ? "flex flex-col xl:flex-row-reverse gap-6"
    : "flex flex-col xl:flex-row gap-6";

  const textClass = reverse
    ? "bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md xl:-mr-16"
    : "bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md xl:-ml-16";

  return (
    <div className={containerClass}>
      {/* Project Image */}
      <a
        href={projectLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full xl:w-1/2 h-auto relative group"
      >
        <div className="w-full h-full">
          <Image
            className="w-full h-full object-cover rounded-lg"
            src={imgSrc}
            width={600}
            height={400}
            alt={imgAlt}
          />
        </div>
      </a>

      {/* Project Details */}
      <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10">
        <div>
          <p className="font-titleFont text-textGreen text-sm tracking-wide">
            Featured Project
          </p>
          <h3 className="text-2xl font-bold">{projectTitle}</h3>
        </div>

        <p className={textClass}>{projrctDescription}</p>

        <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark flex-wrap">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>

        <div className="text-2xl flex gap-4">
          {youtubeLink && (
            <a
              className="hover:text-textGreen duration-300"
              href={youtubeLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube Demo"
            >
              <AiOutlineYoutube />
            </a>
          )}
          <a
            className="hover:text-textGreen duration-300"
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Repository"
          >
            <TbBrandGithub />
          </a>
          <a
            className="hover:text-textGreen duration-300"
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Live Demo"
          >
            <RxOpenInNewWindow />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
