import React from 'react'
import styles from '../Styles.module.css'
import { FaHtml5, FaCss3,FaReact,FaBootstrap,FaGithub,FaNodeJs,FaSass } from 'react-icons/fa'
import { TbBrandJavascript, TbBrandRedux,TbBrandNextjs } from 'react-icons/tb'
import { SiTailwindcss,SiSemanticuireact} from 'react-icons/si'
const skillIcon = () => {
    return (
        <ul className="flex flex-row gap-4 grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2">
            <li className="flex flex-row " >
                <div className={styles.iconbox}>
                    <div
                        className={styles.icon}
                    >
                        <FaHtml5 />
                    </div>
                    <p>HTML</p>
                </div>
            </li>
            <li className="flex flex-row" >
                <div className={styles.iconbox}>
                    <div
                        className={styles.icon}
                    >
                        <FaCss3 />
                    </div>
                    <p>CSS</p>
                </div>
            </li>
            <li className="flex flex-row" >
                <div className={styles.iconbox}>
                    <div
                        className={styles.icon}
                    >
                        <TbBrandJavascript />
                    </div>
                    <p>JS</p>
                </div>
            </li>
            <li className="flex flex-row" >
                <div className={styles.iconbox}>
                    <div
                        className={styles.icon}
                    >
                        <FaReact />
                    </div>
                    <p>REACT</p>
                </div>
            </li>
            <li className="flex flex-row" >
                <div className={styles.iconbox}>
                    <div
                        className={styles.icon}
                    >
                        <TbBrandRedux />
                    </div>
                    <p>REDUX</p>
                </div>
            </li>
            <li className="flex flex-row " >
                <div className={styles.iconbox}>
                    <div
                        className={styles.icon}
                    >
                        <FaBootstrap />
                    </div>
                    <p>Bootstrap</p>
                </div>
            </li>
            <li className="flex flex-row" >
                <div className={styles.iconbox}>
                    <div
                        className={styles.icon}
                    >
                        <SiTailwindcss />
                    </div>
                    <p>Tailwind</p>
                </div>
            </li>
            <li className="flex flex-row" >
                <div className={styles.iconbox}>
                    <div
                        className={styles.icon}
                    >
                        <SiSemanticuireact />
                    </div>
                    <p>SemanticUI</p>
                </div>
            </li>
            <li className="flex flex-row" >
                <div className={styles.iconbox}>
                    <div
                        className={styles.icon}
                    >
                        <FaGithub />
                    </div>
                    <p>Github</p>
                </div>
            </li>
            <li className="flex flex-row" >
                <div className={styles.iconbox}>
                    <div
                        className={styles.icon}
                    >
                        <FaNodeJs />
                    </div>
                    <p>NodeJs</p>
                </div>
            </li>
            <li className="flex flex-row" >
                <div className={styles.iconbox}>
                    <div
                        className={styles.icon}
                    >
                        <FaSass />
                    </div>
                    <p>Sass</p>
                </div>
            </li>
            <li className="flex flex-row" >
                <div className={styles.iconbox}>
                    <div
                        className={styles.icon}
                    >
                        <TbBrandNextjs />
                    </div>
                    <p>NextJs</p>
                </div>
            </li>
        </ul>
    );
}

export default skillIcon