import { useState } from 'react';
import { ProjectCard } from '../molecules/projectCard';
import { projects } from '../../data/projects';
import { Pager } from '../atoms/pager';
import { motion, AnimatePresence } from 'framer-motion';
import Wave from 'react-wavify';
import { useProjectAnimations } from '../../utils/animationManager';

const PAGE_SIZE = 3; // Number of cards shown per page

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
 */
const ProjectSection: React.FC = () => {
    const { pager } = useProjectAnimations();
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
        <section id="projects" className="relative bg-[#051937] scroll-mt-16">
            {/* Header text */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center ">Projects</h2>

            <Pager page={page} total={total} onPrev={handlePrev} onNext={handleNext} />

            {/* Project cards */}
            <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div key={page} custom={direction} {...pager} 
                className="grid grid-cols-1 xl:grid-cols-3 gap-12 xl:gap-8 place-items-center container mx-auto px-14 md:px-0">
                    {currentProjects.map((project) => (
                        <ProjectCard key={project.link} project={project} />
                    ))}
                </motion.div>
            </AnimatePresence>

            {/* Waver divider */}
            <Wave fill='#011533'
                paused={true}
                style={{ display: 'flex' }}
                options={{
                    height: 85,
                    amplitude: 50,
                    speed: 0.15,
                    points: 3
                }}
            />
        </section>
    );
};

export default ProjectSection;