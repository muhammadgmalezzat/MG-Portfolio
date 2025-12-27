import Image from "next/image";
import { SlSocialGithub, SlSocialLinkedin } from "react-icons/sl";

const LeftSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
      <div className="flex flex-col gap-4">
        {/* GitHub */}
        <a
          href="https://github.com/muhammadgmalezzat"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <span className="w-10 h-10 bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SlSocialGithub />
          </span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/muhammad-gmal-61330119b/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <span className="w-10 h-10 bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SlSocialLinkedin />
          </span>
        </a>

        {/* LeetCode */}
        <a
          href="https://leetcode.com/u/muhammad_gmal/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LeetCode"
        >
          <span className="w-10 h-10 bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <Image
              src="/assets/images/leetcode2.png"
              width={25}
              height={25}
              alt="LeetCode"
            />
          </span>
        </a>
      </div>

      <div className="w-[2px] h-32 bg-textDark"></div>
    </div>
  );
};

export default LeftSide;
