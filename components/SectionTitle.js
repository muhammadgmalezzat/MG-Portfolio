import React from 'react'
import styles from './Styles.module.css'
import { motion } from "framer-motion";

const SectionTitle = ({title,titlenumber}) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 font-titleFont text-2xl font-semibold mb-12"
      >
        {titlenumber && (
          <span className="text-base md:text-lg text-textGreen font-mono">
            {titlenumber}
          </span>
        )}
        <h2 className="text-2xl md:text-3xl font-bold text-textLight">
          {title}
        </h2>
        <span className="hidden md:inline-block h-[1px] w-60 bg-textDark ml-4"></span>
      </motion.div>
    );
};

export default SectionTitle