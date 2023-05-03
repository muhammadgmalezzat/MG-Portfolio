import { TbBrandGithub,SiLeetcode} from 'react-icons'
import {
    SlSocialLinkedin,
    SlSocialFacebook,
    SlSocialInstagram,
    SlSocialGithub,
    SlSocialBehance
} from 'react-icons/sl'
const LeftSide = () => {
    return (
        <div className='w-full h-full flex flex-col items-center justify-end gap-4 text-textLight'>
            <div className='flex flex-col gap-4'>
                <a href='https://github.com/muhammadgmalezzat' target="_blank">
                    <span className='w-10 h-10 bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                        <SlSocialGithub />
                    </span>
                </a>
                <a href='https://www.facebook.com/mohamed.gmal.98871' target="_blank">
                    <span className='w-10 h-10 bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                        <SlSocialFacebook />
                    </span>
                </a>
                <a href='https://www.linkedin.com/in/muhammad-gmal-61330119b/' target="_blank">
                    <span className='w-10 h-10 bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                        <SlSocialLinkedin />
                    </span>
                </a>
                <a href='https://www.instagram.com/7958_muhammad/?fbclid=IwAR2eHRWktRWm-FDqcPWCFYOcm7FrbFBtr0X2mBRjMpjZWfCMcXrarMwtSg4' target="_blank">
                    <span className='w-10 h-10 bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                        <SlSocialInstagram />
                    </span>
                </a>
                <a href='https://www.behance.net/muhammad12' target="_blank">
                    <span className='w-10 h-10 bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                        <SlSocialBehance />
                    </span>
                </a>
            </div>
            <div className='w-[2px] h-32 bg-textDark'>

            </div>
        </div>
    )
};

export default LeftSide