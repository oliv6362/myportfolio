import React from 'react';
import image1 from '../assets/images/placeholder.png';
import EducationPart from './parts/educationPart';
import ExperiencePart from './parts/experiencePart';


const AboutSection: React.FC = () => {
    return (
        <section id="about" className="bg-[#051937]">
            <div className="py-20 px-4">
                <div className="flex mx-auto justify-center ">
                    <div className="flex justify-center h-98 w-96 object-contain mr-20">
                        <img className='rounded-lg' src={image1} alt="placeholder" />
                    </div>

                    <article className="max-w-2xl">
                        <h1 className="text-4xl font-bold">About me</h1>
                        <p className="text-lg mt-4">
                            Hey, I'm Oliver! I'm from Denmark and recently completed my Computer Science
                            degree.
                        </p>
                        <p className="text-lg mt-4">
                            I've always been passionate about gaming, training, and technology.
                            Gaming sparked my interest in programming early on — leading me to learn C#,
                            build small projects in Unity, and eventually pursue software development and
                            engineering professionally.
                        </p>
                        <p className="text-lg mt-4">
                            Today, I specialize in software, web, and game development, while continuously
                            expanding my skills in areas like Linux systems, cloud computing, networking,
                            server configuration, security, automation, and more.
                        </p>
                        <p className="text-lg mt-4">
                            I'm passionate about creating, learning, and improving every day. I'm excited
                            to keep growing as a developer and to see where the next project or idea will
                            take me.
                        </p>
                    </article>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto pt-20">
                    <EducationPart />
                    {/*<div className="hidden md:block border-l-2 border-gray-700 h-96"></div>*/}
                    <ExperiencePart />
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
