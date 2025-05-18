import image1 from '../../assets/images/pic6.png';
import EducationPart from '../molecules/educationPart';
import ExperiencePart from '../molecules/experiencePart';
import { aboutParagraphs } from '../../data/abouts';
import Wave from 'react-wavify';
import { motion, useReducedMotion } from 'framer-motion';

/**
 *  Variants for animations in the "About me" section.
 *  - The `fadeInUp` fading in and sliding up a container.
 *  - The `stagger` stagger the appearance of child elements.
 *  - The `fadeItem` for fading in individual items (e.g. paragraphs)..
 */
const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.3 } } };
const fadeItem = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5 } } };

function useScrollProps(variants: any, amount = 0.3) {
    const reduce = useReducedMotion();
    return reduce
        ? {}
        : { variants, initial: 'hidden', whileInView: 'visible', viewport: { once: true, amount } };
}

function useItemProps(variants: any) {
    const reduce = useReducedMotion();
    return reduce
        ? {}
        : { variants };
}

/**
 * AboutSection component that renders the “About me” section with:
 * 1. A profile image and staggered paragraphs that fade in on scroll  
 * 2. Two sub-components (`EducationPart` and `ExperiencePart`) that also fade in  
 * 3. A decorative, static SVG wave at the bottom
 *
 * Animations respect the user’s `prefers-reduced-motion` setting.
 *
 * @returns {JSX.Element} 
 * The About section with image, text, and timeline parts.
 * 
 * @example
 * ```tsx
 * import AboutSection from './AboutSection';
 * function App() {
 *   return (
 *     <main>
 *       <AboutSection />
 *     </main>
 *   );
 * }
 * ```
 */
const AboutSection: React.FC = () => {
    const fadeProps = useScrollProps(fadeInUp);
    const staggerProps = useScrollProps(stagger);
    const itemProps = useItemProps(fadeItem);

    return (
        <section id="about" className="bg-[#051937] scroll-mt-25">
            <div className="py-10 md:px-4">

                {/* Image + Intro Text */}

                <motion.div className="flex flex-col xl:flex-row mx-auto justify-center" {...fadeProps}>
                    <div className="flex justify-center mx-auto xl:mx-0 h-49 w-48 md:h-65 md:w-64 lg:h-98 lg:w-96 object-contain xl:mr-20 xl:mt-6">
                        <img className='rounded-lg' src={image1} alt="placeholder" />
                    </div>

                    <motion.article className="max-w-2xl mx-auto xl:mx-0" {...staggerProps} >
                        <h1 className="text-center xl:text-start text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-4 xl:mt-0">About me</h1>
                        {aboutParagraphs.map((paragraph) =>
                            <motion.p key={paragraph.text} className="text-center xl:text-start text-base lg:text-lg mt-4 px-8 lg:px-0" {...itemProps}>
                                {paragraph.text}
                            </motion.p>
                        )}
                    </motion.article>
                </motion.div>


                {/* Education & Experience Timeline */}
                <motion.div className="grid grid-cols-1 xl:grid-cols-2 max-w-7xl mx-auto" {...fadeProps} >
                    <EducationPart />
                    {/*<div className="hidden md:block border-l-2 border-gray-700 h-96"></div>*/}
                    <ExperiencePart />
                </motion.div>
            </div>

            {/*Wave divider */}
            <Wave fill='#011533'
                paused={true}
                style={{ display: 'flex' }}
                options={{
                    height: 50,
                    amplitude: 50,
                    speed: 0.15,
                    points: 3
                }}
            />
        </section >
    );
}

export default AboutSection;
