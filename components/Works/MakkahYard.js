import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";


const MakkahYard = () => {
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Software Engineer{" "}
        <span className="text-textGreen tracking-wide">@Makkah Yard</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Aug 2025 – Present | Makkah, Saudi Arabia
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Integrated Mada, MasterCard, and Visa payment gateways, reducing
          processing fees by 1.4% and saving ≈67K SAR annually.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Built automated renewal notifications (SMS, WhatsApp, email), reducing
          manual follow-up by 80%.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Developed WhatsApp AI chatbot for subscription inquiries, cutting
          customer support load by 40%.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Built employee attendance system integrated with ZKTeco biometric
          devices, tracking holidays and shifts per Saudi labor laws.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Added analytics dashboards that helped reduce absenteeism by 15%.
        </li>
      </ul>
    </motion.div>
  );
};

export default MakkahYard;