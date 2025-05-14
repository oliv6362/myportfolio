import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import image1 from '../../assets/images/placeholder.png';
import Typewriter from '../atoms/typewriter';
import Social from '../atoms/social';
import Wave from 'react-wavify';

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
            <div className="flex h-screen items-center justify-center">
                <div className="max-w-2xl mr-20">
                    <motion.h1 className="text-4xl font-bold" variants={slideLeft}>
                        Hello! I'm Oliver Nordby Hansen
                    </motion.h1>

                    <motion.h1 className="mt-2 text-green-700 text-4xl font-bold" variants={slideRight}>
                        I'm a{' '}
                        <Typewriter texts={titles} delay={50} infinite />
                    </motion.h1>

                    <motion.p className="mt-2 text-lg" {...itemProps}>
                        Take a look around — check out my projects, skills, and feel free to
                        reach out if you want to connect!
                    </motion.p>

                    <motion.div {...itemProps}>
                        <Social />
                    </motion.div>

                    <motion.a href="#contact"
                        className="mt-4 inline-block rounded-lg bg-green-700 px-12 py-3 text-lg transition-colors focus:shadow-outline hover:bg-green-900"
                        {...itemProps} {...buttonHover} aria-label="Scroll to contact section" rel="noopener noreferrer">
                        Let's Connect
                    </motion.a>
                </div>

                <motion.div className="w-96" {...itemProps}>
                    <img src={image1} alt="Oliver’s portrait" className="rounded-lg w-full h-auto" />
                </motion.div>
            </div>

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
