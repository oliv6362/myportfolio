import { FaGithub } from 'react-icons/fa';
import { Project } from '../../data/projects';
import { motion } from 'motion/react';
import { useProjectAnimations } from '../../utils/animationManager';

/**
 * ProjectCard component props.
 */
interface ProjectCardProps {
  project: Project;
}

/**
 * ProjectCard component that renders a project in a card format.
 */
export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { fadeItem, button } = useProjectAnimations();

  return (
    <motion.article key={project.link} className="flex max-w-md flex-col rounded-lg border-2 border-[#103758] bg-[#040d12]" {...fadeItem} >

      {/* Project title, tags, description */}
      <div className="p-4">
        <h3 className="mt-4 text-lg md:text-xl lg:text-2xl ">{project.title}</h3>

        <p className="mt-4 whitespace-pre-line text-base lg:text-lg text-gray-400">{project.description}</p>

        <ul className="mt-2 flex flex-wrap gap-2 mt-5">
          {project.tags.map((tag) => (
            <li key={tag} className="rounded-sm bg-[#126FAB] px-2 py-0.5 text-xs uppercase ">
              {tag}
            </li>
          ))}
        </ul>
      </div>

      {/* Footer with GitHub link */}
      <footer className="mt-auto flex items-center justify-end px-4 pb-2">
        <span className="font-bold">Learn More </span>
        <motion.a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub`} className="inline-block p-2 text-4xl text-white" {...button}>
          <FaGithub />
        </motion.a>
      </footer>
    </motion.article>
  );
};
