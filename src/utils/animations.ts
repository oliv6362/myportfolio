import type { Variants } from 'framer-motion';

//Global animations
export const containerStaggerVariant: Variants = {
    hidden: { opacity: 0 }, visible: { opacity: 1, transition: { when: 'beforeChildren', staggerChildren: 0.2 } }
};

export const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};




//HomeSection animations
export const slideLeftVariant: Variants = {
    hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export const slideRightVariant: Variants = {
    hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};




// AboutSection animations
export const staggerVariant: Variants = {
    hidden: {}, visible: { transition: { staggerChildren: 0.3 } }
};

export const fadeItemVariant: Variants = {
    hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5 } }
};
