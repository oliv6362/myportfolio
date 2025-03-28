import React from 'react';

//Props
interface ContactSectionProps {
    id?: string;
    title?: string;
}


/** 
* A simple AboutSection component showcasing basic TypeScript usage.
* 
* @param {string} [id] - An optional id to assign to the section.
* @param {string} [title] - An optional title to display at the top of the section.
*/
const ContactSection: React.FC<ContactSectionProps> = ({ id, title }) => {
    return (
        <section id="contact">
            <div className="flex mx-auto h-screen items-center justify-center">
                <div className="text-center">
                    <h1>{title}</h1>
                </div>
                <form>

                </form>
            </div>
        </section>
    );
};

export default ContactSection;