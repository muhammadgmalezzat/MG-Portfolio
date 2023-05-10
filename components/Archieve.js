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
                    title={"E-commerce Watch Website"}
                    description={"an E-commerce Website. where you can buy Branded watches."}
                    listItem={["HTML","CSS","JavaScript","Bootstrap"]}
                    link={"https://muhammadgmalezzat.github.io/E-commerce_Watch_website/"}
                />

                <ArchiveCard
                                    title={"services website Fiction-website "}
                                    description={"services website built with HTML ,CSS ,Bootstrap and JavaScript."}
                                    listItem={["HTML","CSS","JavaScript","Bootstrap"]}
                                    link={"https://muhammadgmalezzat.github.io/fiction-website-/"}
                />
                <ArchiveCard
                                    title={"Gym Exercises Application "}
                                    description={"Website for Exploreing GYM exercises and choose exercise by body part (muscle)"}
                                    listItem={["HTML","CSS","JavaScript","react","material UI","Rabid API"]}
                                    link={"https://www.youtube.com/watch?v=IWMi91jJkA8&feature=youtu.be"}
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
                                    title={"Gym Exercises Application "}
                                    description={"Website for Exploreing GYM exercises and choose exercise by body part (muscle)"}
                                    listItem={["HTML","CSS","JavaScript","react","material UI","Rabid API"]}
                                    link={"https://www.youtube.com/watch?v=IWMi91jJkA8&feature=youtu.be"}
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