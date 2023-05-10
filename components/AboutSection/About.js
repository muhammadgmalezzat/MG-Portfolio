import Image from "next/image";
import SectionTitle from "../SectionTitle"
import styles from '../Styles.module.css'
import { RxOpenInNewWindow } from 'react-icons/rx'
import SkillIcon from "./skillIcon";
const About = () => {
    return (
        <section id="About"
            className={`max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8 ${styles.bsec} ${styles.asec}`}
        >
            <SectionTitle title={"About Me"} titlenumber={.01 }/>
            <div
                className="flex flex-col lgl:flex-row gap-16"
            >
                <div
                    className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4"
                >
                    <p className={`${styles.bp}  ${styles.ap}  flex-col flex`}>
                        I am a Fron-end developer gained +1 of experience in frontend development by completing several projects using HTML, CSS, and JavaScript.
                        <br/> <br/>Additionally, I have experience using React and nextjs framework to develop responsive and user-friendly websites.I have also worked collaboratively with other developers to develop web applications that meet client requirements and user needs.I have a strong foundation in front-end development and am skilled in creating user-friedly and responsive web applications using react and its ecosystem. 
                    </p>
                    <a href="https://my-blog-website-ten.vercel.app/" target="_blank">
                        <button className={`w-52 h-14 text-sm border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300 ${styles.button}`} >Check out my Blog
                            
                            
                        </button>
                        
                                
                            
                    </a>
                </div>
                <div className="w-full lgl:w-1/3 h-80 relative group">
                    <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg ">
                        <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
                            <Image
                                className="rounded-lg h-full object-vover"
                                src="/assets/images/black.jpg"
                                width={300}
                                height={300}
                                alt="profile picture"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                
                <div
                >
                    <h3
                        className={styles.skillstitle}
                    >Skills</h3>
                    <div>
                        <SkillIcon/>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default About;