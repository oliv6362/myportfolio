import image1 from '../assets/images/placeholder.png';
import React from 'react';
import Social from './social';

//props
interface HomeSectionProps {
    title?: string;
}

/** 
* A simple AboutSection component showcasing basic TypeScript usage.
* 
* @param {string} [title] - An optional title to display at the top of the section.
*/
const HomeSection: React.FC<HomeSectionProps> = ({ title }) => {
    return (
        <section id="home" >
            <div className="flex mx-auto h-screen items-center justify-center">
                <section className="max-w-4xl">
                    <div>
                        <h1 className="text-4xl font-bold ">Hi, I am Oliver Nordby Hansen</h1>
                        <h1 className="text-blue-600 text-4xl font-bold ">I'm a {title}</h1>
                        <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elementum mattis nisl sed volutpat. Donec quis augue vitae nisi malesuada convallis. Vestibulum posuere, mauris et congue sodales, diam justo blandit lacus, ac pharetra mi augue a ante. In quis venenatis metus, eget feugiat quam. Morbi sed varius risus, in tempus libero.</p>
                    </div>

                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Contact Me</button>
                    <Social />
                </section>

                <div className="flex justify-center h-48 w-96 object-contain">
                    <img src={image1} alt="placeholder" />
                </div>

            </div>
        </section>
    );
};



export default HomeSection;