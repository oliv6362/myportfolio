import React from 'react';

//Props
interface AboutSectionProps {
    id?: string;
    title?: string;
}

/** 
* A simple AboutSection component showcasing basic TypeScript usage.
* 
* @param {string} [id] - An optional id to assign to the section.
* @param {string} [title] - An optional title to display at the top of the section.
*/

const AboutSection: React.FC<AboutSectionProps> = ({id, title}) => {
    return (
        <section id = "about">
            <h1>{title}</h1>



        </section>
    );
}

export default AboutSection;
