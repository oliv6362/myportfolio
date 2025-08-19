import { ProjectCard } from "../molecules/projectCard"
import { projects } from "../../data/projects"
import { motion, AnimatePresence } from "framer-motion"

/**
 * ProjectSection component that renders a grid of project cards.
 * - If there are no projects, renders nothing (`null`).
 * - Ensures the grid adapts to screen size (1 column on small, 3 on large).
 */
const ProjectSection: React.FC = () => {
  return (
    <section id="projects" className="relative overflow-hidden bg-[#040d12]">
      {/* Header text */}
      <h2 className="mb-6 text-center text-2xl md:mb-10 md:text-3xl lg:mb-15 lg:text-4xl xl:text-5xl">Projects</h2>

      {/* Project cards */}
      <AnimatePresence>
        <motion.div className="project-flex-container mx-auto flex flex-wrap justify-center gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.link} project={project} />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Waver divider */}
      <hr className="m-15 h-1 border-t-0 bg-gradient-to-r via-[#126FAB] opacity-25" />
    </section>
  )
}

export default ProjectSection
