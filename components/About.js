import Image from "next/image";
import SectionTitle from "./SectionTitle"

const About = () => {
    return (
        <section id="about"
            className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
        >
            <SectionTitle title={"About Me"} titlenumber={"01."} />
            <div
                className="flex flex-col lgl:flex-row gap-16"
            >
                <div
                    className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4"
                >
                    <p>
                        I am a web developer with +1 of experience in React. I have a strong foundation in front-end development and am skilled in creating user-friedly and responsive web applications using react and its ecosystem.
                    </p>
                </div>
                <div className="w-full lgl:w-1/3 h-80 relative group">
                    <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg ">
                        <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
                            <Image
                                className="rounded-lg h-full object-vover"
                                src="/assets/images/black.jpg"
                                width={300}
                                height={300}
                                alt="profile picture"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default About;