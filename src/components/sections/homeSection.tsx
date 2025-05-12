import React from 'react';
import image1 from '../../assets/images/placeholder.png';
import Typewriter from '../typewriter';
import Social from '../social';

const HomeSection: React.FC = () => {
    const titles = [
        ' Software Developer',
        ' Full Stack Developer',
        ' Game Developer',
        ' Web Developer',
        ' Front End Developer',
        ' Back End Developer',
    ];

    return (
        <section id="home" className="bg-[#011533]">
            <div className="flex mx-auto h-screen items-center justify-center">
                <section className="max-w-2xl mr-20">
                    <div>
                        <h1 className="text-4xl font-bold ">Hello! I'm Oliver Nordby Hansen</h1>
                        <h1 className="text-green-700 text-4xl font-bold ">I'm a
                            <Typewriter texts={titles} delay={50} infinite/>
                        </h1>
                        <p className="text-lg mt-4">Take a look around — check out my projects, skills, and feel free to reach out if you want to connect! 
                        </p>
                    </div>

                    <Social />

                    <button className="mt-4">
                        <a href="#contact" className="inline-flex items-center justify-center h-12 px-12 text-lg transition-colors duration-500 bg-green-700 hover:bg-green-900 rounded-lg focus:shadow-outline">Let's Connect</a>
                    </button>
                </section>

                <div className="flex justify-center h-98 w-96 object-contain">
                    <img src={image1} alt="placeholder" />
                </div>

            </div>
        </section>
    );
};

export default HomeSection;