import React from "react";
import { motion } from "framer-motion";
export const Contact = () => {
  return (
    <motion.section
      id="Contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="max-w-containerSmall mx-auto py-16 mdl:py-24 px-4 flex flex-col items-center gap-6 text-center"
    >
      {/* Section Number */}
      <p className="text-sm md:text-base text-textGreen font-mono">
        04. What's Next?
      </p>

      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-bold text-textLight">
        Get In Touch
      </h2>

      {/* Description */}
      <p className="text-sm md:text-base max-w-md text-textDark leading-relaxed">
        My inbox is always open. Whether you have a question, opportunity, or
        just want to say hi, I'll get back to you!
      </p>

      {/* Button */}
      <a href="mailto:muhammadgmal320@gmail.com">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 px-6 py-3 md:px-8 md:py-4 border-2 border-textGreen text-textGreen rounded-md hover:bg-hoverColor transition-all duration-300 text-sm md:text-base font-medium"
        >
          Say Hello
        </motion.button>
      </a>
    </motion.section>
  );
};
