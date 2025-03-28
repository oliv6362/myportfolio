import image1 from '../assets/images/placeholder.png';

import React from 'react';

//props
interface HomeSectionProps {
    id?: string;
    title?: string;
}

/** 
* A simple AboutSection component showcasing basic TypeScript usage.
* 
* @param {string} [id] - An optional id to assign to the section.
* @param {string} [title] - An optional title to display at the top of the section.
*/
const HomeSection: React.FC<HomeSectionProps> = ({ id, title }) => {
    return (
        <section id="home">
            <div className="flex mx-auto h-screen items-center justify-center">
                <div className="text-center">
                    <h1>{title}</h1>
                </div>

                <div className="flex justify-center h-48 w-96 object-contain">
                    <img src={image1} alt="placeholder" />
                </div>
            </div>
        </section>
    );
};



export default HomeSection;