import React from 'react'
import { motion } from "framer-motion";
import Link from "next/link";
import styles from '../Styles.module.css';
function NavItemMobile({name,handleSroll,delay}) {
    return (
        <div
        className={`${styles.beforeSymbol}`}>

        
        <Link
            href={`#${name}`}
            className=" flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link  "
            onClick={handleSroll}
        ><motion.li
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: .2, delay: delay, ease: "easeIn" }}
        >
                <span className=" inline-flex relative cursor-pointer  group overflow-x-hidden ">
                    &#60;{name } /&#62;
                    <span
                        className="absolute w-full h-[1.5px] bg-textGreen left-0 bottom-0 translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"
                    ></span>
                </span>
            </motion.li>
            </Link>
            </div>
    );
}

export default NavItemMobile