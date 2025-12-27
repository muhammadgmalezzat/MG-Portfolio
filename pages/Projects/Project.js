import Image from 'next/image';
import { AiOutlineYoutube } from 'react-icons/ai'
import { TbBrandGithub } from 'react-icons/tb'
import { RxOpenInNewWindow } from 'react-icons/rx'
import { motion } from "framer-motion";

import Link from 'next/link';
const Project = ({ projectLink, projrctDescription, imgSrc, imgAlt, projectTitle, skills, youtubeLink, githubLink, reverse }) => {
    // Split the description string into bullet points using "-"
  const bulletPoints = projrctDescription
        ? projrctDescription.split('-').map((item) => item.trim()).filter((item) => item)
        : [];
    const skillList = Array.isArray(skills) ? skills.map(skill => skill.trim()) : [];// remove empty strings
    
    const clas = reverse ? 'flex flex-col xl:flex-row-reverse gap-6' : "flex flex-col xl:flex-row gap-6";
    const clasText= reverse ? 'bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md ' : 'bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md';
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={`flex flex-col xl:flex-row items-center gap-8 my-10 ${
          reverse ? "xl:flex-row-reverse" : ""
        }`}
      >
        {/* Project Image */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="w-full md:w-3/4 rounded-lg overflow-hidden shadow-cardShadow relative group"
        >
          <a href={projectLink} target="_blank" rel="noopener noreferrer">
            <div className="relative overflow-hidden">
              <Image
                width={600}
                height={400}
                src={imgSrc}
                alt={imgAlt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-textGreen/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </a>
        </motion.div>

        {/* Project Details */}
        <div className="w-full md:w-3/4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-textGreen text-sm font-mono mb-2">
              Featured Project
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-textLight hover:text-textGreen transition-colors duration-300">
              {projectTitle}
            </h2>
          </motion.div>

          {/* Description */}
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="list-disc pl-5 space-y-2 text-textDark mb-4 bg-[#112240] p-4 md:p-6 rounded-lg shadow-lg"
          >
            {bulletPoints.map((point, idx) => (
              <li key={idx} className="text-sm md:text-base leading-relaxed">
                {point}
              </li>
            ))}
          </motion.ul>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2 mb-6"
          >
            {skillList.map((skill, index) => (
              <span
                key={index}
                className="bg-hoverColor text-textGreen text-xs md:text-sm px-3 py-1 rounded-full border border-textGreen/30 hover:border-textGreen transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center text-2xl gap-4"
          >
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Repository"
                className="text-textLight hover:text-textGreen hover:-translate-y-1 transition-all duration-300"
              >
                <TbBrandGithub />
              </a>
            )}
            {youtubeLink && (
              <a
                href={youtubeLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube Demo"
                className="text-textLight hover:text-textGreen hover:-translate-y-1 transition-all duration-300"
              >
                <AiOutlineYoutube />
              </a>
            )}
            {projectLink && (
              <a
                href={projectLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live Demo"
                className="text-textLight hover:text-textGreen hover:-translate-y-1 transition-all duration-300 flex items-center gap-1 text-sm"
              >
                View Project <RxOpenInNewWindow />
              </a>
            )}
          </motion.div>
        </div>
      </motion.div>
    );
}

export default Project