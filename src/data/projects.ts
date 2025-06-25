export interface Project {
    title: string;
    tags: string[];
    description: string;
    footer: string;
    link: string;
}

export const projects: Project[] = [
    {
        title: 'My portfoilio',
        tags: ["typescript", "react", "vite", "tailwind"],
        description: 'This is my portfolio project, showcasing who I am, my skills, and the projects I’ve worked on. It also serves as the foundation for this website.',
        footer: '2025',
        link: 'https://github.com/oliv6362/myportfolio'
    },
    {
        title: 'Mini-Framework for 2D Games',
        tags: ["c#", ".net", "solid", "design patterns", "singleton", "template", "factory"],
        description: 'A Mini-Framework others can use to make turn-based 2D games.',
        footer: '2024',
        link: 'https://github.com/oliv6362/MiniFramework2DGame'
    },
    {
        title: 'Movie & TV Series Catalog/Explorer',
        tags: ["javascript", "react", "redux", "redux toolkit & query"],
        description: 'React application that uses TheMovieDb API.\n Key features include the ability to show popular, highest-rated, upcoming & favorited movies or TV Series. Being able to search for movies or TV Series, and view trailers.',
        footer: '2024',
        link: 'https://github.com/oliv6362/ReactRTKPractice'
    },
    {
        title: 'Agile-Driven Car Explorer App.',
        tags: ["javascript", "express", "sequelize", "sqlite", "pug", "agile methodologies", "uml diagrams", "rest", "Full-stack"],
        description: 'Key features include the ability to look up car details by license plate, create and log in as a user, and favorite specific cars for future reference.',
        footer: '2023',
        link: 'https://github.com/superDatamatikere/superBiler'
    },
    {
        title: 'Agile-Driven Driver Check-In App.',
        tags: ["java", "mysql", "ooa/ood", "agile methodologies", "uml diagrams", "clean code architecture", "design patterns", "Full-Stack"],
        description: 'Self-service application for driver registration at storage facilities. Upon arrival, drivers check in by entering: Full name, driver’s license number, and Company affiliation.',
        footer: '2023',
        link: 'https://github.com/oliv6362/LogistikfirmaEksamenFinal'
    },
]