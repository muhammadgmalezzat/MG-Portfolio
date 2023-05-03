import { useState } from 'react';
import ArchiveCard from './ArchiveCard';
import { motion } from 'framer-motion'


function Archieve() {
    const [showMore, setshowMore] = useState(false);


    return (
        <div className="max-w-contentContainer mx-auto px-4 py-24">
            <div className="w-full flex flex-col items-center">
                <h2 className="text-3xl font-titleFont font-semibold">Other Noteworthy Projects</h2>
                <p className="text-sm font-titleFont text-textGreen">view the archive</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10'>

                <ArchiveCard
                    title={"Cyber Security Blog with live comments section"}
                    description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium velit qui sint non, voluptates quo a veritatis."}
                    listItem={["Reactjs", "Tailwind CSS", "getform.io"]}
                    link={"https://localhost:3000"}
                />
                {
                    showMore && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{duration: .1 }}
                            >
                                <ArchiveCard
                                    title={"Cyber Security Blog with live comments section"}
                                    description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium velit qui sint non, voluptates quo a veritatis."}
                                    listItem={["Reactjs", "Tailwind CSS", "getform.io"]}
                                    link={"https://localhost:3000"}
                                />
                            </motion.div>
                        </>
                    )
                }

            </div>
            <div className="mt-12 flex items-center justify-center">
                {
                    showMore ?<button
                    onClick={() => { setshowMore(false) }}
                    className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300">
                    Show Less
                </button>:<button
                    onClick={() => { setshowMore(true) }}
                    className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300">
                    Show More
                </button>
                }
            </div>
        </div>
    );
}

export default Archieve