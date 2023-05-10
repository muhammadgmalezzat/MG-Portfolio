import Image from 'next/image';
import { AiOutlineYoutube } from 'react-icons/ai'
import { TbBrandGithub } from 'react-icons/tb'
import { RxOpenInNewWindow } from 'react-icons/rx'
const Project = ({ projectLink, projrctDescription, imgSrc, imgAlt, projectTitle, skills, youtubeLink, githubLink, reverse }) => {
    
    const clas = reverse ? 'flex flex-col xl:flex-row-reverse gap-6' : "flex flex-col xl:flex-row gap-6";
    const clasText= reverse ? 'bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md xl:-mr-16' : 'bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md';
    return (
        <div className={clas}>

            <a href={projectLink} target="_blank">
                <div>
                    <Image
                        className='w-full h-full object-contain '
                        src={imgSrc}
                        width={400}
                        height={400}
                        alt={imgAlt}
                    />
                </div>
            </a>
            <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10'>
                <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                    Featured Project
                </p>
                <h3 className='text-2xl font-bold'>
                    {projectTitle}
                </h3>
                <p className={clasText}>
                    {projrctDescription}
                </p>
                <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                    {
                        skills.map((skill) => {
                            return <li key={skill}>{skill}</li>
                        })
                    }
                </ul>
                <div className='text-2xl flex gap-4'>
                    <a
                        className='hover:text-textGreen duration-300'
                        href={youtubeLink}
                        target="_blank"
                    >
                        <AiOutlineYoutube />
                    </a>
                    <a
                        className='hover:text-textGreen duration-300'
                        href={githubLink}
                        target="_blank"
                    >
                        <TbBrandGithub />
                    </a>
                    <a
                        className='hover:text-textGreen duration-300'
                        href={projectLink}
                        target="_blank"
                    >
                        <RxOpenInNewWindow />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Project