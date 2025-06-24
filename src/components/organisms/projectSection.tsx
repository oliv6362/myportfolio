import { ProjectCard } from '../molecules/projectCard';
import { projects } from '../../data/projects';
import { motion, AnimatePresence } from 'framer-motion';
import WaveDivider from '../atoms/waveDivider';

/**
 * ProjectSection component that renders a grid of project cards.  
 * - If there are no projects, renders nothing (`null`).  
 * - Ensures the grid adapts to screen size (1 column on small, 3 on large). 
 */
const ProjectSection: React.FC = () => {
    return (
        <section id="projects" className="relative bg-[#051937] scroll-mt-16">
            {/* Header text */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center mb-6 md:mb-10 lg:mb-15">Projects</h2>

            {/* Project cards */}
            <AnimatePresence >
                <motion.div className="grid grid-cols-1 xl:grid-cols-3 gap-12 xl:gap-8 place-items-center container mx-auto px-14 md:px-0">
                    {projects.map((project) => (
                        <ProjectCard key={project.link} project={project} />
                    ))}
                </motion.div>
            </AnimatePresence>

            {/* Waver divider */}
            <WaveDivider color="#011533" />

        </section>
    );
};

export default ProjectSection;