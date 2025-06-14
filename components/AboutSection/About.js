import Image from "next/image";
import SectionTitle from "../SectionTitle";
import styles from "../Styles.module.css";
import { RxOpenInNewWindow } from "react-icons/rx";
import SkillIcon from "./skillIcon";
const About = () => {
  return (
    <section
      id="About"
      className={`max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8 ${styles.bsec} ${styles.asec}`}
    >
      <SectionTitle title={"About Me"} titlenumber={0.01} />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p className={`${styles.bp}  ${styles.ap}  flex-col flex`}>
            I am a Full-Stack Developer with over a year of hands-on experience
            building scalable web applications using the MERN stack.
            <br />
            <br />
            I specialize in building frontend experiences with React and
            TypeScript, and I’m equally confident handling backend APIs using
            Node.js, Express, and MongoDB.
            <br />
            <br />
            I have a strong foundation in computer engineering, data structures,
            and authentication systems. Passionate about clean code, solving
            real-world problems, and always eager to learn and grow in
            high-impact engineering environments.
            <br />
          </p>
          <a href="https://mg-blog-sigma.vercel.app/" target="_blank">
            <button
              className={`w-52 h-14 text-sm border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300 ${styles.button}`}
            >
              Check out my Blog
            </button>
          </a>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group hidden lg:block">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg ">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0 ">
              <Image
                className="rounded-lg h-full object-vover "
                src="/assets/images/eee.jpg"
                width={300}
                height={300}
                alt="profile picture"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h3 className={styles.skillstitle}>Skills</h3>
          <div>
            <SkillIcon />
          </div>
        </div>
      </div>
      <div className="mt-12">
        <h3 className={styles.skillstitle}>Certifications</h3>
        <ul className="list-disc list-inside space-y-2 text-textDark text-base pl-4 mt-4">
          <li>CS50 – Harvard University</li>
          <li>React Development Nanodegree – Udacity</li>
          <li>Advanced Full-Stack Web Development – Udacity</li>
          <li>Node.js: The Complete Guide – Udemy</li>
          <li>
            Master the Coding Interview: Data Structures & Algorithms – Udemy
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
