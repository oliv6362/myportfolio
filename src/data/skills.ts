export interface Skill {
    name: string;
    icon: string;
}

export const skillFrontend: Skill[] = [
    { name: "JavaScript", icon: "skill-icons:javascript"},
    { name: "TypeScript", icon: 'skill-icons:typescript'},
    { name: "React", icon: 'skill-icons:react-dark'},
    { name: "Redux", icon: 'skill-icons:redux'},
    { name: "HTML", icon: 'skill-icons:html'},
    { name: "CSS", icon: 'skill-icons:css'},
    { name: "Tailwind CSS", icon: 'skill-icons:tailwindcss-dark'},
    { name: "Bootstrap", icon: 'skill-icons:bootstrap'},
    { name: "Next.js", icon: 'skill-icons:nextjs-dark'},
    { name: "Jest", icon: 'skill-icons:jest'},
];

export const skillBackend: Skill[] = [
    { name: "C#", icon: 'devicon:csharp'},
    { name: "Java", icon: 'skill-icons:java-dark'},
    { name: "Python", icon: 'skill-icons:python-dark'},
    { name: ".NET", icon: 'skill-icons:dotnet'},
    { name: "Spring Boot", icon: 'skill-icons:spring-dark'},
    { name: "Express.js", icon: 'skill-icons:expressjs-dark'},
    { name: "Node.js", icon: 'skill-icons:nodejs-dark'},
];

export const skillDatabase: Skill[] = [
    { name: "MySQL", icon: 'skill-icons:mysql-dark'},
    { name: "PostgreSQL", icon: 'skill-icons:postgresql-dark'},
    { name: "MongoDB", icon: 'skill-icons:mongodb'},
    { name: "SQLite", icon: 'skill-icons:sqlite'},
    { name: "Sequelize", icon: 'skill-icons:sequelize-dark'},
    { name: "Xata", icon: 'logos:xata-icon'},
];

export const skillTools: Skill[] = [
    { name: "Git", icon: 'logos:git-icon' },
    { name: "GitHub", icon: 'logos:github' },
    { name: "Vite", icon: 'logos:vitejs' },
    { name: "npm", icon: 'logos:npm-icon' },
    { name: "Yarn", icon: 'logos:yarn' },
    { name: "Webpack", icon: 'logos:webpack' },
    { name: "Figma", icon: 'logos:figma' },
    { name: "Visual Studio Code", icon: 'logos:visual-studio-code' },
];