import type { Variants } from 'framer-motion';

export const containerVariants: Variants = {
    hidden: { opacity: 0 }, visible: { opacity: 1, transition: { when: 'beforeChildren', staggerChildren: 0.2 } }
};

export const slideLeft: Variants = {
    hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export const slideRight: Variants = {
    hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export const fadeItemUp: Variants = {
    hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};



