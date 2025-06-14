import { motion } from "framer-motion";
import {TiArrowForward} from 'react-icons/ti'
const EnglishExpress = () => {
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Full-Stack Developer{" "}
        <span className="text-textGreen tracking-wide">@English Express</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Apr 2025 – Present | Cairo, Egypt (Remote)
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Developed and maintained core features for two educational platforms:{" "}
          <strong>180English</strong> and <strong>IGCSE</strong>.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Built full-stack authentication using <strong>JWT</strong> and{" "}
          <strong>Refresh Tokens</strong> with secure cookie storage.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Implemented a real-time contextual chat system &quot; Ask the Teacher
          &quot; linked to sub-questions, using REST APIs and custom routing
          logic.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Built protected layouts, multi-role dashboards, and conditional
          navigation using <strong>React + TypeScript</strong>.
        </li>
      </ul>
    </motion.div>
  );
};

export default EnglishExpress;