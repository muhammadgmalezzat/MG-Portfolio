import { motion } from "framer-motion";
import {TiArrowForward} from 'react-icons/ti'
const Jeetroom = () => {
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Frontend Developer{" "}
        <span className="text-textGreen tracking-wide">@Jeetroom</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Nov 2023 – Jan 2024 | Saudi Arabia (Remote)
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Developed responsive and modular UI components using React.js and MUI.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Translated Figma-based designs into high-quality, pixel-perfect
          interfaces.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Built core features such as property listings, advanced filters, and
          user dashboards.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Participated in Agile sprints, task tracking via Jira, and optimized
          performance across pages.
        </li>
      </ul>
    </motion.div>
  );
};

export default Jeetroom;