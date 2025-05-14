import image1 from '../../assets/images/placeholder.png';
import EducationPart from '../parts/educationPart';
import ExperiencePart from '../parts/experiencePart';
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
        : { variants, initial: 'hidden', whileInView: 'visible', viewport: { once: false, amount } };
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
        <section id="about" className="bg-[#051937]">
            <div className="py-20 px-4">

                {/* Image + Intro Text */}
                <div className="flex mx-auto justify-center ">
                    <motion.div
                        className="flex mx-auto justify-center"
                        {...fadeProps}
                    >
                        <div className="flex justify-center h-98 w-96 object-contain mr-20">
                            <img className='rounded-lg' src={image1} alt="placeholder" />
                        </div>

                        <motion.article
                            className="max-w-2xl"
                            {...staggerProps}
                        >
                            <h1 className="text-5xl">About me</h1>
                            {aboutParagraphs.map((paragraph) =>
                                <motion.p key={paragraph.text} className="text-lg mt-4" {...itemProps}>
                                    {paragraph.text}
                                </motion.p>
                            )}
                        </motion.article>
                    </motion.div>
                </div>

                {/* Education & Experience Timeline */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto pt-20"
                    {...fadeProps}
                >
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
