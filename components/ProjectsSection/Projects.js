import Image from 'next/image';
import SectionTitle from '../SectionTitle';
import { AiOutlineYoutube } from 'react-icons/ai'
import { TbBrandGithub } from 'react-icons/tb'
import { RxOpenInNewWindow } from 'react-icons/rx'
import Project from './Project';

const Projects = () => {
    return (
        <section
            id='Projects'
            className='max-w-container mx-auto lgl:px-20 py-24 '
        >
            <SectionTitle title={"Projects I have Built"} titlenumber={"03."} />
            
            <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
                <Project
                    projectLink={"https://muhammadgmalezzat.github.io/Stella-Orre-architecture/"}
                    imgSrc="/assets/images/stella.jpg"
                    imgAlt="furniture website"
                    projectTitle={"Stella Orr'e"}
                    projrctDescription={"An Furniture website designed to be Responsive for all devices."}
                    skills={["HTML","CSS","JavaScript","Bootstrap"]}
                    youtubeLink={"https://www.youtube.com/watch?v=jN2BAbGB3NQ&t=2s"}
                    githubLink={"https://github.com/muhammadgmalezzat/Stella-Orre-architecture"}
                    reverse={true}
                />

                <Project
                    projectLink={"https://burger-delievery.vercel.app/"}
                    imgSrc="/assets/images/burger.jpg"
                    imgAlt="Burger Delievery"
                    projectTitle={"Burger Delievery"}
                    projrctDescription={" Application used to choose your own burger ingredients and then order it."}
                    skills={["HTML","CSS","JavaScript","React.js","Redux","material-UI","FireBase "]}
                    youtubeLink={"https://www.youtube.com/watch?v=7nq9xebmk40"}
                    githubLink={"https://github.com/muhammadgmalezzat/Burger-Delievery"}
                    reverse={false}
                />

                <Project
                    projectLink={"https://listify-todo-list.vercel.app/"}
                    imgSrc="/assets/images/todo.jpg"
                    imgAlt="todo list website"
                    projectTitle={"Listify"}
                    projrctDescription={"A Todo List Application used to add , deiete and update your tasks ."}
                    skills={["HTML","CSS","JavaScript","React.js","Redux","material-UI"]}
                    youtubeLink={"https://www.youtube.com/watch?v=jN2BAbGB3NQ&t=2s"}
                    githubLink={"https://github.com/muhammadgmalezzat/Listify-Todo-List"}
                    reverse={true}
                />

                <Project
                    projectLink={"https://github.com/muhammadgmalezzat/My-Blog-website"}
                    imgSrc="/assets/images/blog.jpg"
                    imgAlt="blog website"
                    projectTitle={"Blog"}
                    projrctDescription={"A Next.js Application where i blog and write posts about front-end development ."}
                    skills={["React.js","Next.js","MongoDB"]}
                    youtubeLink={"https://www.youtube.com/watch?v=jN2BAbGB3NQ&t=2s"}
                    githubLink={"https://github.com/muhammadgmalezzat/My-Blog-website"}
                    reverse={false}
                />

            </div>
        </section>
    );
}

export default Projects