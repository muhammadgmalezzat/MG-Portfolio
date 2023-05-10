import { motion } from "framer-motion";
import styles from './Styles.module.css'

const Banner = () => {
    return (
        <section
            id="Home"
            className={`max-w-contentContainer mx-auto py-5 mdl:py-12 flex flex-col gap-4 lgl:gap-4 mdl:px-5 xl:px-4 ${styles.bbody}`}
        >

                <motion.h3
                initial={{y:10, opacity: 0 }}
                animate={{y:0, opacity: 1 }}
                transition={{duration: .5,delay:.6 }}
                className={`text-4xl lgl:text-6xl font-titleFont tracking-wide text-textGreen flex flex-col  ${styles.bh1} ${styles.ah1}`}>
                Hi,
            </motion.h3>
            
            
            <motion.h1
                initial={{y:10, opacity: 0 }}
                animate={{y:0, opacity: 1 }}
                transition={{ duration: .5, delay: .8 }}
                className={`text-4xl mdl:text-6xl lgl:text-7xl font-titleFont font-semibold flex flex-col ${styles.bh2} ${styles.ah2}`}
            >
                I'm Muhammad Gmal.{" "}
                <span className="text-textDark mt-2 lgl:mt-4">
                    I am Software Engineer.
                </span>
            </motion.h1>
            <motion.p
                initial={{y:10, opacity: 0 }}
                animate={{y:0, opacity: 1 }}
                transition={{ duration: .5, delay: .8 }}
                className={`text-base md:max-w-[650px] text-textDark font-medium flex flex-col ${styles.bp} ${styles.ap}`}>
                {" "}
                I am a Front-end Developer.
                {" "}
                
            </motion.p>

        </section>
    )
};

export default Banner