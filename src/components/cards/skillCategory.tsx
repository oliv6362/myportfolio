import { motion, useReducedMotion } from 'framer-motion';
import { SkillCard } from './skillCard';
import type { Skill } from '../../data/skills';

/**
 * Heading text for this category (e.g. “Frontend”)
 * Array of `Skill` objects to display in this category
 * If true, span the full width of the grid (uses `col-span-3`)
 */
interface SkillCategoryProps {
    title: string;
    skills: Skill[];
    fullWidth?: boolean;
}

// Fade-up animation
const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

/**
 * SkillCategory component that wraps a set of skills under a common heading, with optional
 * fade-up animation on scroll
 *
 * @param {SkillCategoryProps} props
 * @param {string} props.title – Category heading text.
 * @param {Skill[]} props.skills – Array of skill objects to render.
 * @param {boolean} [props.fullWidth=false]
 * @returns {JSX.Element}
 *
 * 
 * @example
 * ```tsx
 * <SkillCategory
 *   title="Backend"
 *   skills={[{ name: 'Node.js', icon: 'logos:nodejs-icon' }]}
 *   fullWidth={false}
 * />
 * ```
 */
export const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills, fullWidth = false }) => {
    const shouldReduceMotion = useReducedMotion();

    // Conditionally include animation props
    const motionProps = shouldReduceMotion
        ? {}
        : {
            variants: fadeUp,
            initial: 'hidden',
            whileInView: 'visible',
            viewport: { once: true, amount: 0.2 },
        };

    return (
        <motion.div
            className={`${fullWidth ? 'col-span-3' : ''} bg-gray-950 p-5 rounded-lg shadow
                  text-center hover:bg-slate-950 hover:scale-105 transition-transform
                  duration-300 border-2 border-sky-950`}
            {...motionProps}
        >
            <h2 className="text-3xl font-semibold mb-4">{title}</h2>
            <hr className="h-px border-t-0 bg-gradient-to-r opacity-25 dark:via-neutral-400" />

            <ul className="flex flex-wrap justify-center gap-2 mt-4">
                {skills.map((skill) => (
                    <motion.li
                        key={skill.name}
                        className="w-max"
                        {...motionProps}
                    >
                        <SkillCard skill={skill} />
                    </motion.li>
                ))}
            </ul>
        </motion.div>
    );
};