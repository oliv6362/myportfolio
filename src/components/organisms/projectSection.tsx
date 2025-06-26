import { ProjectCard } from '../molecules/projectCard';
import { projects } from '../../data/projects';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * ProjectSection component that renders a grid of project cards.  
 * - If there are no projects, renders nothing (`null`).  
 * - Ensures the grid adapts to screen size (1 column on small, 3 on large). 
 */
const ProjectSection: React.FC = () => {
    return (
        <section id="projects" className="relative bg-[#040d12] overflow-hidden">
            {/* Header text */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center mb-6 md:mb-10 lg:mb-15">Projects</h2>

            {/* Project cards */}
            <AnimatePresence >
                <motion.div className="flex flex-wrap justify-center gap-8 mx-auto project-flex-container">
                    {projects.map((project) => (
                        <ProjectCard key={project.link} project={project} />
                    ))}
                </motion.div>
            </AnimatePresence>

            {/* Waver divider */}
            <hr className="h-1 border-t-0 bg-gradient-to-r opacity-25 via-[#126FAB] m-15" />


        </section>
    );
};

export default ProjectSection;