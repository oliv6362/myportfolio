import React from 'react';

//Props
interface ProjectSectionProps { 
    title?: string;
}

/** 
* A simple AboutSection component showcasing basic TypeScript usage.
* 
* @param {string} [title] - An optional title to display at the top of the section.
*/
const ProjectSection: React.FC<ProjectSectionProps> = ({title}) => {
    return (
        <section id="projects" className="bg-[#011533]">
            <div className="flex mx-auto h-screen items-center justify-center">
                <div className="text-center">
                    <h1>{title}</h1>
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;