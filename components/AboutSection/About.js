import Image from "next/image";
import OptimizedImage from "../../components/OptimizedImage";

import SectionTitle from "../SectionTitle";
import styles from "../Styles.module.css";
import { RxOpenInNewWindow } from "react-icons/rx";
import SkillIcon from "./skillIcon";
import { motion } from "framer-motion";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="About"
      className="max-w-containerSmall mx-auto py-16 md:py-24 lgl:py-32 px-4 md:px-8 flex flex-col gap-8"
    >
      <SectionTitle title="About" titlenumber="03." />

      <div className="flex flex-col lgl:flex-row gap-12 lgl:gap-16">
        {/* Main Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full lgl:w-2/3 text-sm sm:text-base text-textDark font-medium flex flex-col gap-4"
        >
          <motion.p variants={itemVariants} className="leading-relaxed">
            I'm a Full Stack Engineer focused on building systems that work
            under pressure—secure payment flows, real-time features, and
            automation that reduces manual work by 70%+.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="font-semibold text-textLight mt-2"
          >
            My work has delivered:
          </motion.p>

          <motion.ul
            variants={itemVariants}
            className="list-none space-y-2 pl-0"
          >
            <li className="flex items-start gap-2 leading-relaxed">
              <span className="text-textGreen mt-1 flex-shrink-0">▹</span>
              <span>
                67K SAR annual savings through payment gateway optimization
              </span>
            </li>
            <li className="flex items-start gap-2 leading-relaxed">
              <span className="text-textGreen mt-1 flex-shrink-0">▹</span>
              <span>90% reduction in exam cheating via secure PDF systems</span>
            </li>
            <li className="flex items-start gap-2 leading-relaxed">
              <span className="text-textGreen mt-1 flex-shrink-0">▹</span>
              <span>
                10K+ correction events/month tracked with sub-50ms query
                performance
              </span>
            </li>
            <li className="flex items-start gap-2 leading-relaxed">
              <span className="text-textGreen mt-1 flex-shrink-0">▹</span>
              <span>
                40% improvement in attendance accuracy using Zoom API
                integration
              </span>
            </li>
          </motion.ul>

          <motion.p variants={itemVariants} className="leading-relaxed mt-2">
            I approach engineering as a series of decisions: what to build, how
            to scale it, and how to measure success. I care about performance,
            security, and code that other engineers can maintain.
          </motion.p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full lgl:w-1/3 h-64 md:h-80 relative group hidden lg:block"
        >
          <div className="absolute w-full h-full -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6">
              <Image
                className="rounded-lg h-full object-cover transition-transform duration-300 group-hover:scale-105"
                src="/assets/images/eee.jpg"
                width={300}
                height={300}
                alt="Muhammad Gamal Ezzat"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Technical Focus */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-4 md:mt-8"
      >
        <h3 className="text-lg md:text-xl font-semibold text-textLight mb-4">
          Technical Focus
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 text-xs sm:text-sm text-textDark">
          <div className="leading-relaxed">
            <p className="font-semibold text-textGreen mb-2">Backend</p>
            <p>
              Node.js, Express, MongoDB (aggregation, indexing, schema design)
            </p>
          </div>
          <div className="leading-relaxed">
            <p className="font-semibold text-textGreen mb-2">Frontend</p>
            <p>React, Next.js, Redux, TypeScript</p>
          </div>
          <div className="leading-relaxed">
            <p className="font-semibold text-textGreen mb-2">Systems</p>
            <p>REST APIs, WebSockets, real-time features, JWT auth</p>
          </div>
          <div className="leading-relaxed">
            <p className="font-semibold text-textGreen mb-2">Integrations</p>
            <p>Zoom API, WhatsApp, Stripe, Mada, biometric devices (ZKTeco)</p>
          </div>
        </div>
      </motion.div>

      {/* Skills Icons */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-4 md:mt-8"
      >
        <SkillIcon />
      </motion.div>

      {/* Background */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-4 md:mt-8"
      >
        <h3 className="text-lg md:text-xl font-semibold text-textLight mb-4">
          Background
        </h3>
        <p className="text-sm sm:text-base text-textDark font-medium leading-relaxed">
          Computer Engineering degree from El-minya University. Completed
          military service (Jan 2024 – Mar 2025). Now building production
          systems in Saudi Arabia.
        </p>
      </motion.div>

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-4 md:mt-8"
      >
        <h3 className="text-lg md:text-xl font-semibold text-textLight mb-4">
          Certifications
        </h3>
        <ul className="list-none space-y-2 text-xs sm:text-sm md:text-base text-textDark pl-0">
          <li className="flex items-start gap-2 leading-relaxed">
            <span className="text-textGreen mt-1 flex-shrink-0">▹</span>
            <span>CS50 – Harvard University</span>
          </li>
          <li className="flex items-start gap-2 leading-relaxed">
            <span className="text-textGreen mt-1 flex-shrink-0">▹</span>
            <span>React Development Nanodegree – Udacity</span>
          </li>
          <li className="flex items-start gap-2 leading-relaxed">
            <span className="text-textGreen mt-1 flex-shrink-0">▹</span>
            <span>Node.js: The Complete Guide – Udemy</span>
          </li>
          <li className="flex items-start gap-2 leading-relaxed">
            <span className="text-textGreen mt-1 flex-shrink-0">▹</span>
            <span>
              Master the Coding Interview: Data Structures & Algorithms – Udemy
            </span>
          </li>
        </ul>
      </motion.div>
    </section>
  );
};

export default About;
