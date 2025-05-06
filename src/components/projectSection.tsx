import imageplc from '../assets/images/placeholder.png';
import SBFrontPage from '../assets/images/placeholder.png';
import { FaGithub } from "react-icons/fa"

interface Project {
    title: string;
    tags: string[];
    description: string;
    imageUrl: string;
    footer: string;
    link: string;
}

const projects: Project[] = [
    {
        title: 'Super Cars',
        tags: ["scrum", "xp", "express", "sqlite", "Pug", "Full-stack", "frontend", "backend",],
        description: 'Description of project 1',
        imageUrl: SBFrontPage,
        footer: '2024',
        link: 'https://github.com/superDatamatikere/superBiler'
    },
    {
        title: 'Project 1',
        tags: ["tag1", "tag2"],
        description: 'Description of project 2',
        imageUrl: imageplc,
        footer: '2023',
        link: 'https://github.com/superDatamatikere/superBiler'
    },
]

const ProjectSection: React.FC = () => {
    return (
        <section id="projects" className="bg-[#051937]">
            <div className="py-20 px-4">
                <h2 className="text-3xl font-bold text-center pl-5">Projects</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
                    {projects.map((project) => (
                        <div
                            key={project.title} className="bg-gray-950 border-2 border-sky-950 rounded-lg p-4 text-start hover:scale-105 transition-transform duration-300
                            flex flex-col h-full">

                            {/* thumbnail */}
                            <img src={project.imageUrl} alt={project.title} className="w-full h-auto mt-2 rounded-lg" />

                            {/* main content */}
                            <h3 className="text-xl font-bold mt-2">{project.title}</h3>
                            <div>
                                {project.tags.map(tag => (
                                    <span key={tag} className="inline-block uppercase text-xs font-medium me-2 px-2 py-0.5 rounded-sm bg-gray-900 text-green-500 border border-green-500">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <p className="text-lg text-gray-400 mt-2">{project.description}</p>

                            {/* footer */}
                            <div className="mt-auto flex justify-between items-center pt-4">
                                <p className="text-md text-gray-400">{project.footer}</p>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white-800 hover:scale-110 space-x-2 text-4xl"
                                    href={project.link}><FaGithub />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ProjectSection;