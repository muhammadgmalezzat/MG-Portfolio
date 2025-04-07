import SectionTitle from '@/components/SectionTitle';
import First from '@/components/Works/first';
import Second from '@/components/Works/second';
import Thired from '@/components/Works/thired';
import { useState } from 'react';

const Experience = () => {
    const [workFirst, setworkFirst] = useState(true)
    const [worksecond, setworksecond] = useState(false)
    const [workthired, setworkthired] = useState(false)

    const handleFirst = ()=> {
        setworkFirst(true)
        setworksecond(false)
        setworkthired(false)
    }
    const handleSecond = ()=> {
        setworkFirst(false)
        setworksecond(true)
        setworkthired(false)
    }
    const handleThired = ()=> {
        setworkFirst(false)
        setworksecond(false)
        setworkthired(true)
    }


    return (
        <section
            id='experience'
            className="max-w-container mx-auto lgl:px-20 py-24"
        >
            <SectionTitle title={"where i have worked"} titlenumber="02." />
            <div className='w-full mt-10 flex flex-col md:flex-row gap-16'>
                <ul className='md:w-32 flex lgl:flex-col md:flex-col sm:flex-row'>
                    <li className={`${workFirst ?
                            "border-l-textGreen text-textGreen " :
                            "text-textDark border-l-hoverColor"}
                            border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
                    onClick={handleFirst}
                    >
                        Internship
                    </li>
                    {/* <li className={`${worksecond ?
                            "border-l-textGreen text-textGreen" :
                            "text-textDark border-l-hoverColor"}
                            border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
                    onClick={handleSecond}
                    >
                        React
                    </li>
                    <li className={`${workthired ?
                            "border-l-textGreen text-textGreen" :
                            "text-textDark border-l-hoverColor"}
                            border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
                    onClick={handleThired}
                    >
                        React
                    </li> */}
                    
                </ul>
                {workFirst && <First />}
                {/* {worksecond && <Second />}
                {workthired && <Thired/>} */}
                
            </div>
        </section>
    );
}

export default Experience