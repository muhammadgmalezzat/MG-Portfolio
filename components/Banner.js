"use client";
import { motion } from "framer-motion";
import styles from "./Styles.module.css";


  const Banner = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <motion.section
      id="Home"
      className="max-w-contentContainer mx-auto py-16 md:py-20 lgl:py-32 px-4 md:px-8 flex flex-col gap-6 md:gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Name */}
      <motion.h1
        variants={itemVariants}
        className="text-3xl sm:text-4xl md:text-5xl lgl:text-6xl font-titleFont font-semibold leading-tight"
      >
        Muhammad Gamal Ezzat
      </motion.h1>

      {/* Role */}
      <motion.h2
        variants={itemVariants}
        className="text-2xl sm:text-3xl md:text-4xl lgl:text-5xl font-titleFont font-semibold text-textDark leading-tight"
      >
        Backend & Full Stack Engineer
      </motion.h2>

      {/* Description */}
      <motion.p
        variants={itemVariants}
        className="text-sm sm:text-base md:text-lg max-w-full md:max-w-[650px] text-textDark font-medium leading-relaxed"
      >
        I build secure, high-performance systems that solve real business problems.
      </motion.p>

      <motion.p
        variants={itemVariants}
        className="text-sm sm:text-base max-w-full md:max-w-[650px] text-textDark font-medium leading-relaxed"
      >
        Payment integrations, anti-cheating systems, real-time features, and automation workflows — engineered to scale and deliver measurable impact.
      </motion.p>

      {/* Current Work */}
      <motion.div
        variants={itemVariants}
        className="text-xs sm:text-sm md:text-base max-w-full md:max-w-[650px] text-textDark font-medium flex flex-col gap-3"
      >
        <p className="leading-relaxed">
          <span className="text-textGreen font-semibold">Currently:</span> Engineering secure payment flows and attendance systems at Makkah Yard.
        </p>
        <p className="leading-relaxed">
          <span className="text-textGreen font-semibold">Previously:</span> Built real-time education tools serving 10K+ monthly users at English Express.
        </p>
      </motion.div>
    </motion.section>
  );
};
  

export default Banner;
