"use client";
import { motion } from "framer-motion";
import styles from "./Styles.module.css";

const Banner = () => {
  return (
    <section
      id="Home"
      className={`max-w-contentContainer mx-auto py-5 mdl:py-12 flex flex-col gap-4 lgl:gap-4 mdl:px-5 xl:px-4 ${styles.bbody}`}
    >
      {/* Greeting */}
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className={`text-4xl lgl:text-6xl font-titleFont tracking-wide text-textGreen flex flex-col ${styles.bh1} ${styles.ah1}`}
      >
        Hi,
      </motion.h3>

      {/* Name and Role */}
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className={`text-4xl mdl:text-6xl lgl:text-7xl font-titleFont font-semibold flex flex-col ${styles.bh2} ${styles.ah2}`}
      >
        I’m Muhammad Gamal.
        <span className="text-textDark mt-2 lgl:mt-4">
          Full-Stack Developer 
        </span>
      </motion.h1>

      {/* Summary */}
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className={`text-base md:max-w-[650px] text-textDark font-medium flex flex-col ${styles.bp} ${styles.ap}`}
      >
        I build scalable and performant full-stack web applications with a
        strong focus on clean architecture, reusability, and great user
        experience. I love solving real-world problems using modern technologies
        like React, Node.js, and MongoDB.
      </motion.p>

      
    </section>
  );
};

export default Banner;
