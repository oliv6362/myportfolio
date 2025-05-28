import { useReducedMotion } from 'framer-motion';
import { containerVariants, slideLeft, slideRight, fadeItemUp} from './animations';

export function useMotionAnimations() {
    const reduce = useReducedMotion();

    return {
        container: reduce ? {} : { variants: containerVariants, initial: 'hidden', animate: 'visible' },
        slideLeft: reduce ? {} : { variants: slideLeft },
        slideRight: reduce ? {} : { variants: slideRight },
        fadeItemUp: reduce ? {} : { variants: fadeItemUp },
        buttonHover: reduce ? {} : { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 } }
    };
}
