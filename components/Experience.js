import SectionTitle from "@/components/SectionTitle";
import Codsoft from "@/components/Works/Codsoft";
import Jeetroom from "@/components/Works/Jeetroom";
import EnglishExpress from "@/components/Works/EnglishExpress";
import { useState } from "react";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("engexp");

  const renderContent = () => {
    switch (activeTab) {
      case "codsoft":
        return <Codsoft />;
      case "jeetroom":
        return <Jeetroom />;
      case "engexp":
        return <EnglishExpress />;
      default:
        return null;
    }
  };

  return (
    <section
      id="experience"
      className="max-w-container mx-auto lgl:px-20 py-24"
    >
      <SectionTitle title="Where I Have Worked" titlenumber="02." />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex lgl:flex-col md:flex-col sm:flex-row">
          <li
            className={`${
              activeTab === "engexp"
                ? "border-l-textGreen text-textGreen"
                : "text-textDark border-l-hoverColor"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
            onClick={() => setActiveTab("engexp")}
          >
            English Express
          </li>

          <li
            className={`${
              activeTab === "jeetroom"
                ? "border-l-textGreen text-textGreen"
                : "text-textDark border-l-hoverColor"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
            onClick={() => setActiveTab("jeetroom")}
          >
            Jeetroom
          </li>

          <li
            className={`${
              activeTab === "codsoft"
                ? "border-l-textGreen text-textGreen"
                : "text-textDark border-l-hoverColor"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
            onClick={() => setActiveTab("codsoft")}
          >
            Codsoft
          </li>
        </ul>
        <div className="flex-1">{renderContent()}</div>
      </div>
    </section>
  );
};

export default Experience;
