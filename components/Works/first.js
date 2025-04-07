import { motion } from "framer-motion";
import {TiArrowForward} from 'react-icons/ti'
const first = () => {
    return (
        <motion.div
            className="w-full "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
        >
            <h3 className="flex gap-1 font-medium text-xl font-titleFont">
                Fronend Developer  <span className="text-textGreen tracking-wide"> @Codsoft</span>
            </h3>
            <p className="text-sm mt-1 font-medium text-textDark">
                Aug 2023 - Oct 2023
            </p>
            <ul className="mt-6 flex flex-col gap-3">
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1"> <TiArrowForward /> </span>{" "}
                    Optimized the user interface for increased responsiveness and improved user experience.
                </li>
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1"> <TiArrowForward /> </span>{" "}
                    Developed responsive web Apps using React and Next.js
                </li>
            </ul>
        </motion.div>
    );
}

export default first;