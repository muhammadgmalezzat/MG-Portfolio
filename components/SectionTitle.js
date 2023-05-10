import React from 'react'
import styles from './Styles.module.css'

const SectionTitle = ({title,titlenumber}) => {
    return (
        <h2 className={`font-titleFont text-3xl font-semibold  flex-col  ${styles.bh1} ${styles.ah1}`}>
            <span className='text-base md:text-lg text-textGreen mr-2 '>{titlenumber}</span>
            {" "}
            {title}
            <span className='hidden md:inline-flex md:w-60 lgl:w-72 h-[.5px] bg-gray-700 ml-6'> 
            </span>
        </h2>
    )
};

export default SectionTitle