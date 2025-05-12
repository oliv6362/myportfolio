import { useState } from 'react';
import { ProjectCard } from '../cards/projectCard';
import { projects } from '../../data/projects';
import { Pager } from '../pager';
import { motion, AnimatePresence } from 'framer-motion';

const PAGE_SIZE = 3; // Number of cards shown per page

// Animation variants for the page transition. (Left-to-right and right-to-left)
const variants = {
    enter: (direction: number) => ({ x: direction > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({ x: direction < 0 ? 300 : -300, opacity: 0 }),
};

/**
 * ProjectSection component that renders a grid of project cards.  
 * - If there are no projects, renders nothing (`null`).  
 * 
 * **Features**  
 * 1. Splits the `projects` array into pages of size `PAGE_SIZE`.  
 * 2. Uses the `Pager` subcomponent to show left/right arrows and dot indicators.  
 * 3. Ensures the grid adapts to screen size (1 column on small, 3 on large). 
 * 4. Animates the transition between pages using `framer-motion`:
 *     - Slide in/out based on navigation direction
 *     - Fades opacity for a smooth effect
 *
 * @component
 * 
 * @returns {JSX.Element | null}
 *   A `<section>` containing project cards and pagination controls, or `null` if no projects exist.
 * 
 * @example
 * ```tsx
 * <ProjectSection />
 * ```
*/

const ProjectSection: React.FC = () => {
    const [page, setPage] = useState(0);
    const [direction, setDirection] = useState(0);
    if (!projects.length) return null;

    // Total number of pages shown in the pager
    const total = Math.ceil(projects.length / PAGE_SIZE) || 1;

    // Determine which slice of projects to show on the current page
    const currentProjects = projects.slice(
        page * PAGE_SIZE,
        page * PAGE_SIZE + PAGE_SIZE
    );

    // Sets the direction of the page animation and then the page.
    const paginate = (newPage: number) => {
        setDirection(newPage > page ? 1 : -1);
        setPage(newPage);
    };

    // Goes to the next or previous page, ensuring it doesn't go out of bounds
    const handlePrev = () => paginate(Math.max(page - 1, 0));
    const handleNext = () => paginate(Math.min(page + 1, total - 1));

    return (
        <section id="projects" className="bg-[#051937] py-20 px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>

            <Pager
                page={page}
                total={total}
                onPrev={handlePrev}
                onNext={handleNext}
            />

            <AnimatePresence initial={false} custom={direction} mode="wait">
                {/* 2) absolute inset-0 + same grid classes */}
                <motion.div
                    key={page}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 lg:grid-cols-3 sm:gap-12 lg:gap-8 place-items-center lg:mx-30"
                >
                    {currentProjects.map((project) => (
                        <ProjectCard key={project.link} project={project} />
                    ))}
                </motion.div>
            </AnimatePresence>
        </section>
    );
};

export default ProjectSection;