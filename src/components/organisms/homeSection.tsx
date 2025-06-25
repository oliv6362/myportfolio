import { motion } from 'framer-motion';
import Typewriter from '../atoms/typewriter';
import { AsciiLoader } from '../atoms/asciiLoader';
import { useHomeAnimations } from '../../utils/animationManager';

const titles = [
    ' Software Developer',
    ' Full Stack Developer',
    ' Game Developer',
    ' Web Developer',
    ' Front End Developer',
    ' Back End Developer',
];

/**
 * Herosection component with:
 * - Staggered entrance for headings, intro text, socials, button & image
 * - Typewriter effect for titles
 * - Pulsing “Let’s Connect” button
 * - Static wave divider at the bottom
 *
 * Respects `prefers-reduced-motion`.
 */
const HomeSection: React.FC = () => {
    const { containerStagger, slideLeft, slideRight, buttonHover, fadeUp } = useHomeAnimations();


    return (
        <motion.section id="home" className="bg-[#040d12] overflow-hidden" {...containerStagger} >
            <div className="flex flex-col lg:flex-row lg:h-screen items-center justify-center px-20 pt-30 lg:pt-0 xl:pt-0">

                {/* Left side */}
                <div className="max-w-2xl lg:mr-15 xl:mr-20 text-center lg:text-left xl:text-left">
                    <motion.h1 className="text-lg md:text-xl lg:text-2xl xl:text-4xl" {...slideLeft}>
                        Hello! I'm Oliver Nordby Hansen
                    </motion.h1>

                    <motion.h2 className="mt-2 text-[#126FAB] text-lg md:text-xl lg:text-2xl xl:text-4xl font-bold" {...slideRight}>
                        I'm a{' '}
                        <Typewriter texts={titles} delay={50} infinite />
                    </motion.h2>

                    <motion.p className="mt-2 text-base md:text-lg lg:text-xl" {...fadeUp}>
                        Take a look around — check out my projects, skills, and feel free to
                        reach out if you want to connect!
                    </motion.p>



                    <motion.a href="#footer"
                        className="mt-6 inline-block rounded-lg bg-[#126FAB] px-12 py-3 text-sm lg:text-base xl:text-lg transition-colors"
                        {...fadeUp} {...buttonHover} aria-label="Scroll to contact section" rel="noopener noreferrer">
                        Let's Connect
                    </motion.a>
                </div>

                {/* Right side */}
                <motion.div className="text-[3px]/0.5 xl:text-[5px]/0.75 mt-10 lg:mt-0 lg:mg-0"{...fadeUp}>
                    <AsciiLoader />
                </motion.div>
            </div>

            {/* Waver divider */}
            <hr className="h-1 border-t-0 bg-gradient-to-r opacity-25 via-[#126FAB] mb-5" />


        </motion.section>
    );
};

export default HomeSection;
