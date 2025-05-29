import { useReducedMotion } from 'framer-motion';
import { containerStaggerVariant, slideLeftVariant, slideRightVariant, fadeUpVariant, fadeItemVariant, staggerVariant, switchVariant } from './animations';

export function useHomeAnimations() {
    const reduce = useReducedMotion();
    return {
        containerStagger: reduce ? {} : { variants: containerStaggerVariant, initial: 'hidden', animate: 'visible' },
        fadeUp: reduce ? {} : { variants: fadeUpVariant },
        slideLeft: reduce ? {} : { variants: slideLeftVariant },
        slideRight: reduce ? {} : { variants: slideRightVariant },
        buttonHover: reduce ? {} : { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 } }
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
        button: reduce ? {} : { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 } }
    }
}

// Animation variants for the page transition. (Left-to-right and right-to-left)
export function useProjectAnimations() {
    const reduce = useReducedMotion();
    return {
        pager: reduce ? {} : { variants: switchVariant, initial: 'enter', animate: 'center', exit: 'exit', transition: { duration: 0.5 } },
        fadeItem: reduce ? {} : { variants: fadeItemVariant, initial: 'hidden', whileInView: 'visible', viewport: { once: true, amount: 0.2 } },
        button: reduce ? {} : { whileHover: { scale: 1.25 }, whileTap: { scale: 0.9 } }
    }
}