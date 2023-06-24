//import  logo2  from "@/public/assets/images/logo2.png";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRef } from "react";
import { MdOutlineClose } from 'react-icons/md';
import {
    SlSocialLinkedin,
    SlSocialFacebook,
    SlSocialInstagram,
    SlSocialGithub,
    SlSocialBehance
} from 'react-icons/sl';
import styles from '../Styles.module.css';
import Navitem from './NavItem'
import NavItemMobile from "./NavItemMobile";

const Navbar = () => {
    const [showMenu, setshowMenu] = useState(false);
    const ref = useRef("")

    const handleSroll = () => { 
        setshowMenu(false)
    }
    function handleClick(e) {
        if (e.target.contains(ref.current)) {
            setshowMenu(false)
        }
    }
    
    return (
        <section className={`w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4  relative ${styles.navbar}` } >
            <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                >
                    <Image
                        className="w-14"
                        src='/assets/images/logo1.png'
                        alt='logo'
                        width={150}
                        height={150}
                    />
                </motion.div>
                <div className="hidden lgl:inline-flex items-center gap-5">
                    <ul className="flex text[13px] gap-5">
                        <Navitem name={"Home"} delay={".1"}/>
                        <Navitem name={"About"} delay={".2"}/>
                        <Navitem name={"Projects"} delay={".3"}/>
                        <Navitem name={"Contact"} delay={".4"}/>
                    </ul>
                    <a href="/assets/Muhammad_Gmal_Resume.pdf" target="_blank">
                        <motion.button
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: .1, delay: .5 }}
                            className="px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
                        >
                            Resume
                        </motion.button>
                    </a>
                </div>
                <div
                    onClick={() => setshowMenu(true)}
                    className="w-6 h-5 flex flex-col justify-between items-center lgl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group">
                    <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
                    <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
                    <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>

                </div>
                {
                    showMenu && (
                        <div
                            ref={(node) => (ref.current = node)}
                            onClick={handleClick}
                            className="absolute lgl:hidden top-0 right-0 w-full h-screen  bg-black bg-opacity-90 flex flex-col items-end"
                        >
                            <motion.div
                                initial={{ x: 2, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: .1 }}
                                className="w-[90%] h-screen overflow-y-scroll scrollbarHide bg-[#2D3250] rounded flex flex-col items-center px-4 py-10 relative"
                            >
                                <MdOutlineClose
                                    onClick={() => setshowMenu(false)}
                                    className="text-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-4 right-4" />
                                
                                <div className="flex flex-col items-center gap-7  ">
                                    
                                    <ul className="flex flex-col text-base gap-7  ">
                                        <NavItemMobile name={"Home"} handleSroll={handleSroll} delay={".1" }/>
                                        <NavItemMobile name={"About"} handleSroll={handleSroll} delay={".2" }/>
                                        <NavItemMobile name={"Projects"} handleSroll={handleSroll} delay={".3" }/>
                                        <NavItemMobile name={"Contact"} handleSroll={ handleSroll}delay={".4" }/>
                                    </ul>

                                    <a href="/assets/Muhammad_Gmal_Resume.pdf" target="_blank">
                                        <motion.button
                                            initial={{  opacity: 0 }}
                                            animate={{  opacity: 1 }}
                                            transition={{ duration:.2,delay: .5,ease:"easeIn" }}
                                            className="w-32 h-10 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
                                        >
                                            Resume
                                        </motion.button>
                                    </a>

                                    <div className="flex gap-4">
                                        <motion.a
                                            initial={{ y:20, opacity: 0 }}
                                            animate={{  y:0, opacity: 1 }}
                                            transition={{ delay: .6,ease:"easeIn" }}
                                            href="https://leetcode.com/muhammad_gmal/"
                                            target="_blank">
                                            <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                                                <Image
                                                    src="/assets/images/leetcode2.png"
                                                    width={25}
                                                    height={25}
                                                    alt="LeetCode"
                                                />
                                            </span>
                                        </motion.a>
                                        <motion.a
                                            initial={{ y:20, opacity: 0 }}
                                            animate={{  y:0, opacity: 1 }}
                                            transition={{ delay: .7,ease:"easeIn" }}
                                            href="https://www.facebook.com/mohamed.gmal.98871" target="_blank">
                                            <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                                                <SlSocialFacebook />
                                            </span>
                                        </motion.a>
                                        <motion.a
                                            initial={{ y:20, opacity: 0 }}
                                            animate={{  y:0, opacity: 1 }}
                                            transition={{ delay: .8,ease:"easeIn" }}
                                            href="https://github.com/muhammadgmalezzat" target="_blank">
                                            <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                                                <SlSocialGithub />
                                            </span>
                                        </motion.a>
                                        <motion.a
                                            initial={{ y:20, opacity: 0 }}
                                            animate={{  y:0, opacity: 1 }}
                                            transition={{ delay: .9,ease:"easeIn" }}
                                            href="https://www.linkedin.com/in/muhammad-gmal-61330119b/" target="_blank">
                                            <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                                                <SlSocialLinkedin />
                                            </span>
                                        </motion.a>
                                        <motion.a
                                            initial={{ y:20, opacity: 0 }}
                                            animate={{  y:0, opacity: 1 }}
                                            transition={{ delay: 1,ease:"easeIn" }}
                                            href="https://www.behance.net/muhammad12" target="_blank">
                                            <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                                                <SlSocialBehance /> 
                                            </span>
                                        </motion.a>
                                    </div>
                                </div>
                                <motion.a
                                    initial={{ x:20, opacity: 0 }}
                                            animate={{  x:0, opacity: 1 }}
                                            transition={{ delay: 1.2,ease:"easeIn" }}
                                    href="mailto:muhammadgmal320@gmail.com" >
                                    <p className="text-sm  w-72 tracking-widest text-textGreen text-center mt-4">
                                        muhammad @email
                                    </p>
                                </motion.a>
                            </motion.div>
                        </div>
                    )
                }
            </div>
        </section>
    );
};

export default Navbar 