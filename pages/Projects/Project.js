import Image from 'next/image';
import { AiOutlineYoutube } from 'react-icons/ai'
import { TbBrandGithub } from 'react-icons/tb'
import { RxOpenInNewWindow } from 'react-icons/rx'
import Link from 'next/link';
const Project = ({ projectLink, projrctDescription, imgSrc, imgAlt, projectTitle, skills, youtubeLink, githubLink, reverse }) => {
    // Split the description string into bullet points using "-"
  const bulletPoints = (projrctDescription || '')
    .split('-')
    .map((item) => item.trim())
    .filter((item) => item); // remove empty strings
    
    const clas = reverse ? 'flex flex-col xl:flex-row-reverse gap-6' : "flex flex-col xl:flex-row gap-6";
    const clasText= reverse ? 'bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md ' : 'bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md';
    return (
        <div
            className={`flex flex-col xl:flex-row items-center gap-8 my-10 ${reverse ? 'xl:flex-row-reverse' : ''
                }`}
        >
            {/* Project Image */}
            <div className="w-full md:w-3/4 rounded-lg overflow-hidden shadow-lg">
                <a href={projectLink}>
                    <Image
                        width={400}
                        height={400}
                        src={imgSrc}
                        alt={imgAlt}
                        className=" hover:scale-105 transition-transform duration-300 cursor-pointer w-full h-full object-contain"
                    />
                </a>
            </div>

            {/* Project Details */}
            <div className="w-full md:w-3/4">
                <h2 className="text-2xl font-bold mb-2 text-textGreen ">{projectTitle}</h2>
                {/* Bullet Description */}
                <ul className={`list-disc pl-5 space-y-2  text-textDark mb-4 ${clasText} `}>
                {bulletPoints.map((point, idx) => (
                    <li key={idx}>{point}</li>
                ))}
                </ul>


                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {skills.map((skill, index) => (
                        <span
                            key={index}
                            className="bg-textGreen text-sm text-[#2d3250] px-3 py-1 rounded-full"
                        >
                            {skill}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className=" items-center text-xl flex gap-4">
                    {githubLink && (
                    <a
                        className='hover:text-textGreen duration-300'
                        href={githubLink}
                        target="_blank"
                    >
                        <TbBrandGithub />
                    </a>
                    )}
                    {youtubeLink && (
                                            <a
                        className='hover:text-textGreen duration-300 '
                        href={youtubeLink}
                        target="_blank"
                    >
                        <AiOutlineYoutube />
                    </a>
                    )}
                    {projectLink && (
                        <Link href={projectLink} className="hover:text-textGreen duration-300 flex">
                            
                            View Project <RxOpenInNewWindow />
                        </Link>
                    )}
                </div>
            </div>
        </div>
        // <div className={clas}>

        //     <a href={projectLink}>
        //         <div>
        //             <Image
        //                 className='w-full h-full object-contain '
        //                 src={imgSrc}
        //                 width={400}
        //                 height={400}
        //                 alt={imgAlt}
        //             />
        //         </div>
        //     </a>
        //     <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10'>
        //         <p className='font-titleFont text-textGreen text-sm tracking-wide'>
        //             Featured Project
        //         </p>
        //         <h3 className='text-2xl font-bold'>
        //             {projectTitle}
        //         </h3>
        //         <p className={clasText}>
        //             {projrctDescription}
        //         </p>
        //         <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
        //             {
        //                 skills.map((skill) => {
        //                     return <li key={skill}>{skill}</li>
        //                 })
        //             }
        //         </ul>
        //         <div className='text-2xl flex gap-4'>
        //             <a
        //                 className='hover:text-textGreen duration-300'
        //                 href={youtubeLink}
        //                 target="_blank"
        //             >
        //                 <AiOutlineYoutube />
        //             </a>
        //             <a
        //                 className='hover:text-textGreen duration-300'
        //                 href={githubLink}
        //                 target="_blank"
        //             >
        //                 <TbBrandGithub />
        //             </a>
        //             <a
        //                 className='hover:text-textGreen duration-300'
        //                 href={projectLink}
        //                 target="_blank"
        //             >
        //                 <RxOpenInNewWindow />
        //             </a>
        //         </div>
        //     </div>
        // </div>
    );
}

export default Project