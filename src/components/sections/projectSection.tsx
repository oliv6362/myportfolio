import { useState } from 'react';
import { ProjectCard } from '../cards/projectCard';
import { projects } from '../../data/projects';
import { Pager } from '../pager';

const PAGE_SIZE = 3; // Number of cards shown per page

/**
 * ProjectSection component that renders a grid of project cards.  
 * - If there are no projects, renders nothing (`null`).  
 * 
 * **Features**  
 * 1. Splits the `projects` array into pages of size `PAGE_SIZE`.  
 * 2. Uses the `Pager` subcomponent to show left/right arrows and dot indicators.  
 * 3. Ensures the grid adapts to screen size (1 column on small, 3 on large).  
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
    if (!projects.length) return null;

    // Total number of pages shown in the pager
    const total = Math.ceil(projects.length / PAGE_SIZE) || 1;

    // Determine which slice of projects to show on the current page
    const currentProjects = projects.slice(
        page * PAGE_SIZE,
        page * PAGE_SIZE + PAGE_SIZE
    );

    // Handlers to move between pages, clamped at bounds [0, total - 1]
    const handlePrev = () => setPage(p => Math.max(p - 1, 0));
    const handleNext = () => setPage(p => Math.min(p + 1, total - 1));

    return (
        <section id="projects" className="bg-[#051937] py-20 px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>

            <Pager
                page={page}
                total={total}
                onPrev={handlePrev}
                onNext={handleNext}
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 sm:gap-12 lg:gap-8 place-items-center lg:mx-30">
                {currentProjects.map((p) => (
                    <ProjectCard key={p.link} project={p} />
                ))}
            </div>
        </section>
    );
};

export default ProjectSection;