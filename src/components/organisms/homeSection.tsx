import { motion, useReducedMotion } from 'framer-motion';
import Typewriter from '../atoms/typewriter';
import Social from '../atoms/social';
import Wave from 'react-wavify';
import { AsciiLoader } from '../atoms/asciiLoader';

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { when: 'beforeChildren', staggerChildren: 0.2 } } };
const slideLeft = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } } };
const slideRight = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } } };
const fadeItem = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } };

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
    const reduce = useReducedMotion();
    const buttonHover = reduce
        ? {}
        : {
            animate: { scale: [1, 1.05, 1] },
            transition: {
                repeat: Infinity,
                duration: 2,
                ease: 'easeInOut',
                repeatDelay: 3,

            },
        };

    const containerProps = reduce
        ? {}
        : { variants: containerVariants, initial: 'hidden', animate: 'visible' };

    const itemProps = reduce ? {} : { variants: fadeItem };

    return (
        <motion.section id="home" className="bg-[#011533] overflow-hidden" {...containerProps} >
            <div className="flex flex-col lg:flex-row lg:h-screen xl:h-screen items-center justify-center px-20 pt-30 lg:pt-0 xl:pt-0">

                {/* Left side */}
                <div className="max-w-2xl lg:mr-15 xl:mr-20 text-center lg:text-left xl:text-left">
                    <motion.h1 className="text-lg md:text-xl lg:text-2xl xl:text-4xl" variants={slideLeft}>
                        Hello! I'm Oliver Nordby Hansen
                    </motion.h1>

                    <motion.h1 className="mt-2 text-green-700 text-lg md:text-xl lg:text-2xl xl:text-4xl font-bold" variants={slideRight}>
                        I'm a{' '}
                        <Typewriter texts={titles} delay={50} infinite />
                    </motion.h1>

                    <motion.p className="mt-2 text-base md:text-lg lg:text-xl" {...itemProps}>
                        Take a look around — check out my projects, skills, and feel free to
                        reach out if you want to connect!
                    </motion.p>

                    <motion.div {...itemProps}>
                        <Social />
                    </motion.div>

                    <motion.a href="#contact"
                        className="mt-4 inline-block rounded-lg bg-green-700 px-12 py-3 text-sm lg:text-base xl:text-lg transition-colors focus:shadow-outline hover:bg-green-900"
                        {...itemProps} {...buttonHover} aria-label="Scroll to contact section" rel="noopener noreferrer">
                        Let's Connect
                    </motion.a>
                </div>

                {/* Right side */}
                <motion.div className="text-[3px]/0.5 xl:text-[5px]/0.75 mt-10 lg:mt-0 lg:mg-0"{...itemProps}>
                    <AsciiLoader />
                </motion.div>
            </div>

            {/* Wave divider */}
            <motion.div
                className="overflow-hidden"
                {...(reduce
                    ? {}
                    : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 1, duration: 1 } })} >
                <Wave
                    fill="#051937"
                    paused
                    style={{ display: 'flex' }}
                    options={{ height: 50, amplitude: 50, speed: 0.15, points: 3 }}
                />
            </motion.div>
        </motion.section>
    );
};

export default HomeSection;
