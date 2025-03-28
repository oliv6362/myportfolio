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
const HomeSection: React.FC<HomeSectionProps> = ({id, title}) => {
    return (
        <section id="home">
            <h1>{title}</h1>
        </section>
    );
};



export default HomeSection;