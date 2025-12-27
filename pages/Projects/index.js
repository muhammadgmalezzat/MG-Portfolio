import Image from "next/image";
import SectionTitle from "../../components/SectionTitle";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";
import Project from "./Project";

const Projects = () => {
  return (
    <section id="Projects" className="max-w-container mx-auto lgl:px-20 py-24 ">
      <SectionTitle title={"Projects I have Built"} titlenumber={"02."} />

      <div className="w-full flex flex-col items-center justify-center gap-16 md:gap-24 mt-8 md:mt-10">
        {/* Project 1: Doctor Appointment System */}
        <Project
          projectLink="https://github.com/muhammadgmalezzat/DocBook-"
          imgSrc="/assets/images/doc.jpg"
          imgAlt="Doctor Appointment Booking System"
          projectTitle="Doctor Appointment System"
          projrctDescription="-Fullstack booking platform with role based dashboards (patients, doctors, admins). -Built JWT + refresh token auth with custom RBAC. -Integrated doctor availability, email notifications, appointment history, and cancellation rules."
          skills={["React", "Node.js", "Express", "MongoDB", "JWT", "Mailjet"]}
          githubLink="https://github.com/muhammadgmalezzat/DocBook-"
          reverse={true}
        />

        {/* Project 2: E-commerce Platform */}
        <Project
          projectLink="https://github.com/muhammadgmalezzat/Fullstack-Watch-Shop"
          imgSrc="/assets/images/watch.jpg"
          imgAlt="E-commerce Platform"
          projectTitle="E-commerce Platform"
          projrctDescription="-Fullstack online store using Express, MongoDB (MVC architecture). -Implemented token based auth with hashed passwords and CSRF protection. -Integrated Mailjet for emails and Stripe for payments. -Built session based cart and secure checkout."
          skills={["Express", "MongoDB", "Stripe", "Authentication", "Mailjet"]}
          githubLink="https://github.com/muhammadgmalezzat/Fullstack-Watch-Shop"
          reverse={false}
        />

        {/* Project 3: Real-Time Code Editor */}
        <Project
          projectLink="https://github-clone-4c4a3.web.app/home"
          imgSrc="/assets/images/codepen.jpg"
          imgAlt="Real-Time Code Editor"
          projectTitle="Real-Time Code Editor"
          projrctDescription="-Live code editor with React, Redux, and Firebase. Features user auth, project management, and real time HTML/CSS/JS preview. -Used CodeMirror for tabbed editing, search by tags, and user dashboard."
          skills={[
            "React",
            "Redux",
            "Firebase",
            "CodeMirror",
            "Authentication",
          ]}
          youtubeLink="https://www.youtube.com/watch?v=31zRZG7TaO0&feature=youtu.be"
          githubLink="https://github.com/muhammadgmalezzat/CodePen-Clone"
          reverse={true}
        />

        {/* Project 4: Food Delivery Platform */}
        <Project
          projectLink="https://food-delivery-ashy.vercel.app/"
          imgSrc="/assets/images/2.png"
          imgAlt="Food Delivery Platform"
          projectTitle="Food Delivery Platform"
          projrctDescription="-Dynamic ordering app with Google Auth and admin dashboard. -Users browse meals, manage cart, and place orders. -Admins add/edit meals in Firebase. -Built with React, Redux, Tailwind, and MUI."
          skills={["React", "Redux", "Tailwind", "Firebase", "Google Auth"]}
          youtubeLink="https://www.youtube.com/watch?v=WTzLFDL2F_A"
          githubLink="https://github.com/muhammadgmalezzat/FoodDelivery"
          reverse={false}
        />

        {/* <Project
            projectLink={"https://mg-blog-sigma.vercel.app/"}
            imgSrc="/assets/images/blog1.jpg"
            imgAlt="Notion-Powered Blog Platform"
            projectTitle={"Notion-Powered Blog Platform"}
            projrctDescription={
              "- Developed a blog platform using Next.js and Notion as a CMS, enabling seamless syncing and publishing of blog posts directly from Notion Database.- Implemented search and dark mode to enhance user navigation .- Utilized react notion x and react markdown for rendering rich Notion content, along with react syntax highlighter for displaying code snippets.- Designed a fully responsive interface using Tailwind CSS, Framer Motion, MUI, and React Icons, and integrated SEO enhancements ."
            }
            skills={[
              "Next.js",
              "Redux",
              "react-markdown",
              "Notion API ",
              "Notion Database ",
            ]}
            youtubeLink={""}
            githubLink={"https://github.com/muhammadgmalezzat/My-Blog-website"}
            reverse={true}
          /> */}

        {/* <Project
            projectLink={"https://burger-delievery.vercel.app/"}
            imgSrc="/assets/images/burger.jpg"
            imgAlt="Burger Delievery"
            projectTitle={"Burger Delievery"}
            projrctDescription={
              " -Developed a burger customization app using React.js, Redux, and Firebase with secure user authentication.-Enabled users to modify burger ingredients and proceed to checkout after signing in with email.-Created a form validation system to ensure accurate order information during checkout.-Designed an orders page where users can track their previous orders."
            }
            skills={[
              "React.js",
              "Redux",
              "Authentication",
              "material-UI",
              "FireBase ",
            ]}
            youtubeLink={"https://www.youtube.com/watch?v=7nq9xebmk40"}
            githubLink={"https://github.com/muhammadgmalezzat/Burger-Delievery"}
            reverse={false}
          /> */}

        {/* <Project
            projectLink={
              "https://github.com/muhammadgmalezzat/Gym-Exercises-App"
            }
            imgSrc="/assets/images/6.png"
            imgAlt="Gym Exercises Application "
            projectTitle={"Gym Exercises Application "}
            projrctDescription={
              "- Built a fitness web app using React, Material UI, and Rapid API, allowing users to explore and search for exercises based on body part, machine name, or exercise name.- Designed dynamic pages displaying detailed exercise information, enhancing user understanding and engagement.- Integrated YouTube video support to provide users with visual demonstrations for proper exercise form and technique."
            }
            skills={["react", "material UI", "Rabid API"]}
            youtubeLink={"https://www.youtube.com/watch?v=7nq9xebmk40"}
            githubLink={"https://github.com/muhammadgmalezzat/Burger-Delievery"}
            reverse={true}
          /> */}

        {/* <Project
            projectLink={"https://listify-todo-list.vercel.app/"}
            imgSrc="/assets/images/todo.jpg"
            imgAlt="todo list website"
            projectTitle={"Listify"}
            projrctDescription={
              "- Built a ToDo List application using React.js, Redux, and Tailwind CSS, allowing users to add, edit, and delete tasks with realtime updates.- Implemented task filtering to display completed, incompleted, and all todos, with each task showing its creation date and time.- Enhanced user experience with Framer Motion animations, MUI components, and React Icons to deliver a visually appealing and responsive UI."
            }
            skills={[
              "HTML",
              "CSS",
              "JavaScript",
              "React.js",
              "Redux",
              "material-UI",
            ]}
            //youtubeLink={"https://www.youtube.com/watch?v=jN2BAbGB3NQ&t=2s"}
            githubLink={
              "https://github.com/muhammadgmalezzat/Listify-Todo-List"
            }
            reverse={false}
          /> */}

        {/* <Project
            projectLink={
              "https://muhammadgmalezzat.github.io/Stella-Orre-architecture/"
            }
            imgSrc="/assets/images/stella.jpg"
            imgAlt="furniture website"
            projectTitle={"Stella Orr'e"}
            projrctDescription={
              "- An Furniture website designed to be Responsive for all devices.- Clean and minimalist design to showcase furniture products with style Mobile first responsiveness ensuring smooth user experience across devices .- Product sections with clear categories, images, and details"
            }
            skills={["HTML", "CSS", "JavaScript", "Bootstrap"]}
            youtubeLink={"https://www.youtube.com/watch?v=jN2BAbGB3NQ&t=2s"}
            githubLink={
              "https://github.com/muhammadgmalezzat/Stella-Orre-architecture"
            }
            reverse={true}
          /> */}

        {/* <Project
            projectLink={
              "https://muhammadgmalezzat.github.io/fiction-website-/"
            }
            imgSrc="/assets/images/fiction.jpg"
            imgAlt="services website "
            projectTitle={"Services website Fiction-website"}
            projrctDescription={
              "- Modern, clean design to present services in a clear and engaging way. - Mobile first responsiveness ensures accessibility and usability on all devices. - Smooth navigation bar, service sections, and contact forms built with Bootstrap"
            }
            skills={["HTML", "CSS", "JavaScript", "Bootstrap"]}
            youtubeLink={"https://youtu.be/8qwmMdzhCN0?si=Y-CDa1CBplfwAJwP"}
            githubLink={"https://github.com/muhammadgmalezzat/fiction-website-"}
            reverse={false}
          /> */}

        {/* <Project
                    projectLink={"https://github.com/muhammadgmalezzat/My-Blog-website"}
                    imgSrc="/assets/images/blog.jpg"
                    imgAlt="blog website"
                    projectTitle={"Blog"}
                    projrctDescription={"A Next.js Application where i blog and write posts about front-end development ."}
                    skills={["React.js","Next.js","MongoDB"]}
                    youtubeLink={"https://www.youtube.com/watch?v=jN2BAbGB3NQ&t=2s"}
                    githubLink={"https://github.com/muhammadgmalezzat/My-Blog-website"}
                    reverse={false}
                /> */}
      </div>
    </section>
  );
};

export default Projects;
