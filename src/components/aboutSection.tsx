import React from 'react';
import image1 from '../assets/images/placeholder.png';
import EducationPart from './parts/educationPart';
import ExperiencePart from './parts/experiencePart';


const AboutSection: React.FC = () => {
    return (
        <section id="about" className="bg-[#051937]">
            <div className="flex mx-auto justify-center py-20">

                <div className="flex justify-center h-98 w-96 object-contain mr-20">
                    <img className='rounded-lg' src={image1} alt="placeholder" />
                </div>

                <article className="max-w-2xl">
                    <h1 className="text-4xl font-bold text-green-700">About me</h1>
                    <p className="text-lg mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt odio sed orci lobortis, vitae tincidunt est lobortis.
                        In at malesuada est. Aenean sit amet laoreet orci. Nullam porta ex eu condimentum auctor. Phasellus ut quam orci. Suspendisse non magna feugiat,
                        pulvinar mauris eu, efficitur dui.
                    </p>
                    <p className="text-lg mt-4">Nulla vehicula, lectus eget elementum pharetra, sapien arcu interdum urna, in ullamcorper massa erat a est.
                        Nam at pretium quam.
                    </p>
                </article>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto px-4 py-20">
                    <EducationPart/>
                    {/*<div className="hidden md:block border-l-2 border-gray-700 h-96"></div>*/}
                    <ExperiencePart/>      
            </div>
        </section>
    );
}

export default AboutSection;
