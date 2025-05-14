import React from 'react';

//Props
interface ContactSectionProps {
    title?: string;
}

/** 
* A simple AboutSection component showcasing basic TypeScript usage.
* 
* @param {string} [title] - An optional title to display at the top of the section.
*/
const ContactSection: React.FC<ContactSectionProps> = ({title }) => {
    return (
        <section id="contact" className="bg-[#011533] scroll-mt-16">
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