import { FaGithub } from 'react-icons/fa';
import { Project } from '../../data/projects';
import { motion } from 'motion/react';

/**
 * ProjectCard component props.
 *
 */
interface ProjectCardProps {
  project: Project;
}

/**
 * ProjectCard component that renders a project in a card format.
 *
 * @param {ProjectCardProps} props
 * @param {Project} props.project – The project data to render:
 *   - `title`: the display name  
 *   - `tags`: an array of tag strings  
 *   - `description`: a text description 
 *   - `thumbnail`: image URL or import  
 *   - `footer`: a footer label (e.g. year)  
 *   - `link`: external URL (opens in new tab)  
 * 
 * @returns {JSX.Element}
 *   A styled `<article>` element representing one project card.
 *
 * @example
 * ```tsx
 * import { ProjectCard } from './ProjectCard';
 * import { myProject } from '../data/projects';
 *
 * function App() {
 *   return <ProjectCard project={myProject} />;
 * }
 * ```
 */
export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const scrollVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.article
      key={project.link}
      className="flex max-w-md flex-col rounded-lg border-2 border-sky-950 bg-gray-950 h-full"
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.75, ease: 'easeOut' }}
      variants={scrollVariants} >

      {/* Thumbnail image */}
      <img src={project.thumbnail} alt={`${project.title} thumbnail`} loading="lazy" className="w-full rounded-t-lg" role="img" />

      {/* Project title, tags, description */}
      <div className="px-4 pb-2">
        <h3 className="my-2 text-lg md:text-xl lg:text-2xl ">{project.title}</h3>

        <ul className="mb-2 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li key={tag} className="rounded-sm border border-green-500 bg-gray-900 px-2 py-0.5 text-xs uppercase text-green-500">
              {tag}
            </li>
          ))}
        </ul>

        <p className="whitespace-pre-line text-base lg:text-lg text-gray-400">{project.description}</p>
      </div>

      {/* Footer with GitHub link */}
      <footer className="mt-auto flex items-center justify-between px-4 pb-2">
        <span className="font-bold text-gray-400">{project.footer}</span>
        <motion.a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title} on GitHub`}
          className="inline-block p-2 text-4xl text-white"
          whileHover={{ scale: 1.25 }}
          whileTap={{ scale: 0.9 }} >
          <FaGithub />
        </motion.a>
      </footer>
    </motion.article>
  );
};
