import { useReducedMotion } from 'framer-motion';
import { containerStaggerVariant, slideLeftVariant, slideRightVariant, fadeUpVariant, fadeItemVariant, staggerVariant} from './animations';

export function useMotionAnimations() {
    const reduce = useReducedMotion();

    return {
        containerStagger: reduce ? {} : { variants: containerStaggerVariant, initial: 'hidden', animate: 'visible' }, // Home, contact
        slideLeft: reduce ? {} : { variants: slideLeftVariant }, // Home
        slideRight: reduce ? {} : { variants: slideRightVariant }, // Home
        fadeUp: reduce ? {} : { variants: fadeUpVariant, }, // home, about, contact
        buttonHover: reduce ? {} : { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 } }, // Home, contact
    };
}

export function useHomeAnimations() {
    const reduce = useReducedMotion();
    return {
        containerStagger: reduce ? {} : { variants: containerStaggerVariant, initial: 'hidden', animate: 'visible' }, 
        fadeUp: reduce ? {} : { variants: fadeUpVariant, }, 
        slideLeft: reduce ? {} : { variants: slideLeftVariant }, 
        slideRight: reduce ? {} : { variants: slideRightVariant }, 
        buttonHover: reduce ? {} : { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 } }, 
    }
}

export function useAboutAnimations() {
    const reduce = useReducedMotion();
    return {
        fadeItem: reduce ? {} : { variants: fadeItemVariant }, 
        stagger: reduce ? {} : { variants: staggerVariant, initial: 'hidden', whileInView: 'visible', viewport: { once: true, amount: 0.3 } }, 
        fadeUp: reduce ? {} : { variants: fadeUpVariant, initial: 'hidden', whileInView: 'visible', viewport: { once: true, amount: 0.3 } } 

    }
}

export function useSkillAnimations() {
    const reduce = useReducedMotion();
    return {
        fadeUp: reduce ? {} : { variants: fadeUpVariant, initial: 'hidden', whileInView: 'visible', viewport: { once: true, amount: 0.2 } } 
    }
}

export function useContactAnimations() {
    const reduce = useReducedMotion();
    return {
        containerStagger: reduce ? {} : { variants: containerStaggerVariant, initial: 'hidden', whileInView: 'visible', viewport: { once: true, amount: 0.3 } }, 
        fadeUp: reduce ? {} : { variants: fadeUpVariant }, 
        button: reduce ? {} : { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 } } ,
    }
}