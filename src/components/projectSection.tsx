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
        title: 'Car Details',
        tags: ["javascript", "html", "css", "express", "sequelize", "orm", "sqlite", "sql", "pug", "templating engine", "scrum", "xp", "uml diagrams", "rest", "restul api's", "Full-stack", "frontend", "backend", "database"],
        description: 'Project primarily focused on the practical application of agile methodologies, including Scrum and Extreme Programming.\n\nKey features include the ability to look up car details by license plate, create and login as a user, and favorite specific cars for future references.',
        imageUrl: SBFrontPage,
        footer: '2023',
        link: 'https://github.com/superDatamatikere/superBiler'
    },
    {
        title: 'Mini-Framework for 2D Games',
        tags: ["c#", ".net", "solid", "design patterns", "singleton", "template", "factory"],
        description: 'A Mini-Framework others can use to make turn-based 2D games.',
        imageUrl: imageplc,
        footer: '2024',
        link: 'https://github.com/oliv6362/MiniFramework2DGame'
    },
    {
        title: 'Logistics Company',
        tags: ["java", "html", "css", "mysql", "sql", "spring boot", "thymeleaf", "ooa/ood", "scrum", "uml diagrams", "clean code architecture", "design patterns", "Full-Stack", "Frontend", "Backend", "Database"],
        description: 'Project that focuses on registering packages that arrive from drivers to storage facilities.',
        imageUrl: imageplc,
        footer: '2023',
        link: 'https://github.com/oliv6362/LogistikfirmaEksamenFinal'
    },
    {
        title: 'My portfoilio',
        tags: ["typescript", "react", "vite", "tailwind", "html", "css"],
        description: 'This is my portfolio project, showcasing who I am, my skills, and the projects I’ve worked on. It also serves as the foundation for this website.',
        imageUrl: imageplc,
        footer: '2025',
        link: 'https://github.com/oliv6362/myportfolio'
    },
    {
        title: 'Movie & TV Series Catalog/Explorer',
        tags: ["javascript", "react", "redux", "redux toolkit & query", "html", "css"],
        description: 'It is a single-page application that uses TheMovieDb API. Here you can see popular, highest-rated, upcoming & favorited movies, or search for movies. There is also TV-Series! You can view Trailers from movies or TV-Series, and favorite Movies.',
        imageUrl: imageplc,
        footer: '2024',
        link: 'https://github.com/oliv6362/ReactRTKPractice'
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
                            <h3 className="text-2xl font-bold my-2">{project.title}</h3>
                            <div>
                                {project.tags.map(tag => (
                                    <span key={tag} className="inline-block uppercase text-xs font-medium me-2 px-2 py-0.75 my-1 rounded-sm bg-gray-900 text-green-500 border border-green-500">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <p className="text-lg text-gray-400 mt-2 whitespace-pre-line ">{project.description}</p>

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