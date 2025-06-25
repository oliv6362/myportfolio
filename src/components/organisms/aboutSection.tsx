import image1 from '../../assets/images/pic6.png';
import EducationPart from '../molecules/educationCard';
import ExperiencePart from '../molecules/experienceCard';
import { aboutParagraphs } from '../../data/abouts';
import { motion } from 'framer-motion';
import { useAboutAnimations } from '../../utils/animationManager';

/**
 * AboutSection component that renders the “About me” section with:
 * 1. A profile image and staggered paragraphs that fade in on scroll  
 * 2. Two sub-components (`EducationPart` and `ExperiencePart`) that also fade in  
 * 3. A decorative, static SVG wave at the bottom
 *
 * Animations respect the user’s `prefers-reduced-motion` setting.
 */
const AboutSection: React.FC = () => {
    const { fadeItem, stagger, fadeUp } = useAboutAnimations();

    return (
        <section id="about" className="bg-[#040d12] overflow-hidden" >
            <div className="py-10 md:px-4">

                {/* Image + Intro Text */}
                <motion.div className="flex flex-col xl:flex-row mx-auto justify-center" {...fadeUp}>
                    <div className="flex justify-center mx-auto xl:mx-0 h-49 w-48 md:h-65 md:w-64 lg:h-98 lg:w-96 object-contain xl:mr-20 xl:mt-6">
                        <img className='rounded-lg' src={image1} alt="placeholder" />
                    </div>

                    <motion.article className="max-w-2xl mx-auto xl:mx-0" {...stagger} >
                        <h2 className="text-center xl:text-start text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-4 xl:mt-0">About me</h2>
                        {aboutParagraphs.map((paragraph) =>
                            <motion.p key={paragraph.text} className="text-center xl:text-start text-base lg:text-lg mt-4 px-8 lg:px-0" {...fadeItem}>
                                {paragraph.text}
                            </motion.p>
                        )}
                    </motion.article>
                </motion.div>

                {/* Education & Experience Timeline */}
                <motion.div className="grid grid-cols-1 xl:grid-cols-2 max-w-7xl mx-auto" {...fadeUp} >
                    <EducationPart />
                    {/*<div className="hidden md:block border-l-2 border-gray-700 h-96"></div>*/}
                    <ExperiencePart />
                </motion.div>
            </div>

            {/*Wave divider */}
            <hr className="h-1 border-t-0 bg-gradient-to-r opacity-25 via-[#126FAB] m-15" />


        </section >
    );
}

export default AboutSection;
