import React from 'react';
import image1 from '../assets/images/placeholder.png';
import Typewriter from './typewriter';
import Social from './social';

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
                        <h1 className="text-4xl font-bold ">Hi, I am Oliver Nordby Hansen</h1>
                        <h1 className="text-green-700 text-4xl font-bold ">I'm a
                            <Typewriter texts={titles} delay={100} infinite/>
                        </h1>
                        <p className="text-lg mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elementum mattis nisl sed volutpat. Donec quis augue vitae nisi malesuada convallis.</p>
                    </div>

                    <Social />

                    <button className="h-12 px-8 mt-4 text-lg transition-colors duration-500 bg-green-700 hover:bg-green-900 rounded-lg focus:shadow-outline">Let's Connect </button>
                </section>

                <div className="flex justify-center h-98 w-96 object-contain">
                    <img src={image1} alt="placeholder" />
                </div>

            </div>
        </section>
    );
};

export default HomeSection;