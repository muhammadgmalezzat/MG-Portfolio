import Image from 'next/image';
import SectionTitle from './SectionTitle';
import { AiOutlineYoutube } from 'react-icons/ai'
import { TbBrandGithub } from 'react-icons/tb'
import { RxOpenInNewWindow } from 'react-icons/rx'
const Projects = () => {
    return (
        <section
            id='projects'
            className='max-w-container mx-auto lgl:px-20 py-24 '
        >
            <SectionTitle title={"Projects I have Built"} titlenumber={"03."} />
            
            <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>

                <div className='flex flex-col xl:flex-row gap-6'>

                    <a href='https://muhammadgmalezzat.github.io/Stella-Orre-architecture/' target="_blank">

                        <div>

                            <Image
                                className='w-full h-full object-contain '
                                src="/assets/images/stella.jpg"
                                width={400}
                                height={400}
                                alt={"furniture website"}
                            />
                        </div>
                        
                    </a>
                    <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10'>
                        <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                            Featured Project
                        </p>
                        <h3 className='text-2xl font-bold'>
                            Stella Orr'e
                        </h3>
                        <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
                            An E-commerce website designed to be <span className='text-textGreen'>Responsive</span>  for all devices.
                        </p>
                        <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Bootstrap</li>
                            <li>plugins.js</li>
                            <li>wow.min.js</li>
                        </ul>
                        <div className='text-2xl flex gap-4'>
                            <a
                                className='hover:text-textGreen duration-300'
                                href='https://www.youtube.com/watch?v=jN2BAbGB3NQ&t=2s'
                                target="_blank"
                            >
                                <AiOutlineYoutube/>
                            </a>
                            <a
                                className='hover:text-textGreen duration-300'
                                href='https://github.com/muhammadgmalezzat/Stella-Orre-architecture'
                                target="_blank"
                            >
                                <TbBrandGithub/>
                            </a>
                            <a
                                className='hover:text-textGreen duration-300'
                                href='https://muhammadgmalezzat.github.io/Stella-Orre-architecture/index.html'
                                target="_blank"
                            >
                                <RxOpenInNewWindow/>
                            </a>
                        </div>
                    </div>
                </div>

                
                <div className='flex flex-col xl:flex-row-reverse gap-6'>

                    <a href='https://muhammadgmalezzat.github.io/Stella-Orre-architecture/' target="_blank">

                        <div>

                            <Image
                                className='w-full h-full object-contain '
                                src="/assets/images/watch.jpg"
                                width={400}
                                height={400}
                                alt={"furniture website"}
                            />
                        </div>
                        
                    </a>
                    <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right  z-10'>
                        <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                            Featured Project
                        </p>
                        <h3 className='text-2xl font-bold'>
                            Stella Orr'e
                        </h3>
                        <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md xl:-mr-16'>
                            An E-commerce website designed to be <span className='text-textGreen'>Responsive</span>  for all devices.
                        </p>
                        <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Bootstrap</li>
                            <li>plugins.js</li>
                            <li>wow.min.js</li>
                        </ul>
                        <div className='text-2xl flex gap-4'>
                            <a
                                className='hover:text-textGreen duration-300'
                                href='https://www.youtube.com/watch?v=jN2BAbGB3NQ&t=2s'
                                target="_blank"
                            >
                                <AiOutlineYoutube/>
                            </a>
                            <a
                                className='hover:text-textGreen duration-300'
                                href='https://github.com/muhammadgmalezzat/Stella-Orre-architecture'
                                target="_blank"
                            >
                                <TbBrandGithub/>
                            </a>
                            <a
                                className='hover:text-textGreen duration-300'
                                href='https://muhammadgmalezzat.github.io/Stella-Orre-architecture/index.html'
                                target="_blank"
                            >
                                <RxOpenInNewWindow/>
                            </a>
                        </div>
                    </div>
                </div>

                
            </div>
        </section>
    );
}

export default Projects