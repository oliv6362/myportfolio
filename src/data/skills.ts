export interface Skill {
    name: string;
    icon: string;
}

export const skillFrontend: Skill[] = [
    { name: "React", icon: 'skill-icons:react-dark' },
    { name: "Redux", icon: 'skill-icons:redux' },
    { name: "HTML", icon: 'skill-icons:html' },
    { name: "CSS", icon: 'skill-icons:css' },
    { name: "Tailwind CSS", icon: 'skill-icons:tailwindcss-dark' },
    { name: "Bootstrap", icon: 'skill-icons:bootstrap' },
    { name: "Jest (Testing)", icon: 'skill-icons:jest' },
    { name: "Pug (Templating Engine)", icon: 'skill-icons:pug-dark' },
    { name: "Vite", icon: 'skill-icons:vite-dark' },
    { name: "Webpack", icon: 'skill-icons:webpack-dark' },
];

export const skillBackend: Skill[] = [
    { name: ".NET", icon: 'skill-icons:dotnet' },
    { name: "Spring Boot", icon: 'skill-icons:spring-dark' },
    { name: "Express.js", icon: 'skill-icons:expressjs-dark' },
    { name: "Node.js", icon: 'skill-icons:nodejs-dark' },
];

export const skillDatabase: Skill[] = [
    { name: "MySQL", icon: 'skill-icons:mysql-dark' },
    { name: "SQLite", icon: 'skill-icons:sqlite' },
    { name: "MongoDB", icon: 'skill-icons:mongodb' },
    { name: "Sequelize (ORM)", icon: 'skill-icons:sequelize-dark' },
];

export const skillLanguage: Skill[] = [
    { name: "JavaScript", icon: "skill-icons:javascript" },
    { name: "TypeScript", icon: 'skill-icons:typescript' },
    { name: "C#", icon: 'devicon:csharp' },
    { name: "Java", icon: 'skill-icons:java-dark' },
    { name: "Python", icon: 'skill-icons:python-dark' },
];

export const skillSystemDevelopment: Skill[] = [
    { name: "Agile Methodologies", icon: '' },
    { name: "SOLID", icon: '' },
    { name: "UML", icon: '' },
    { name: "Database normalization", icon: '' },
    { name: "Object-oriented analysis & design (OOA/OOD)", icon: '' },
    { name: "Clean Code Architecture", icon: '' },
    { name: "Design Patterns", icon: '' },
];

export const skillPlatformsAndEnvironments: Skill[] = [
    { name: "Linux", icon: 'skill-icons:linux-dark' },
    { name: "Arch-Linux", icon: 'skill-icons:arch-dark' },
    { name: "Windows", icon: 'skill-icons:windows-dark' },
    { name: "Cloudflare", icon: 'skill-icons:cloudflare-dark' },
]