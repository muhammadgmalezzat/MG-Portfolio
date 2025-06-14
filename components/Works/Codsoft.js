import { motion } from "framer-motion";
import {TiArrowForward} from 'react-icons/ti'
const Codsoft = () => {
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Frontend Developer{" "}
        <span className="text-textGreen tracking-wide">@Codsoft</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Aug 2023 – Oct 2023
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Built responsive, component-driven interfaces using{" "}
          <strong>React.js</strong> and <strong>Next.js</strong>.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Refactored existing code to improve performance and reusability.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Collaborated with designers to translate Figma prototypes into
          pixel-perfect UI.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Delivered features with a focus on accessibility, cross-browser
          compatibility, and clean UX.
        </li>
      </ul>
    </motion.div>
  );
};

export default Codsoft;