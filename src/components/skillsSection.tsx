const SkillsSection: React.FC = () => {

    const skillsBackend = [
        { name: "C#", experience: "3 years" },
        { name: "Java", experience: "3 years" },
        { name: "Python", experience: "3 years" },
        { name: "Node.js", experience: "3 years" },
        { name: "Express", experience: "3 years" },
        { name: "MongoDB", experience: "3 years" },
    ];

    const skillsFrontend = [
        { name: "JavaScript", experience: "x years" },
        { name: "TypeScript", experience: "x years" },
        { name: "React", experience: "x years" },
        { name: "Redux", experience: "x years" },
        { name: "HTML", experience: "x years" },
        { name: "CSS", experience: "x years" },
        { name: "Tailwind CSS", experience: "x years" },
        { name: "Bootstrap", experience: "x years" },
        { name: "Next.js", experience: "x years" },
        { name: "Jest", experience: "x years" },
    ];

    const skillsDatabase = [
        { name: "MySQL", experience: "x years" },
        { name: "SQLite", experience: "x years" },
        { name: "MongoDB", experience: "x years" },
        { name: "Xata", experience: "x years" },
        { name: "PostgreSQL", experience: "x years" },
    ];

    const skillsTools = [
        { name: "Git", experience: "x years" },,
        { name: "Webpack", experience: "x years" },
        { name: "Figma", experience: "x years" },
        { name: "Visual Studio Code", experience: "x years" },
    ];

    const skillsSystemDevelopment = [
        { name: "Scrum", experience: "x years" },
        { name: "Extreme Programming (XP)", experience: "x years" },
        { name: "SOLID", experience: "x years" },
        { name: "UML", experience: "x years" },
        { name: "Database normalization", experience: "x years" },
        { name: "Object-oriented analysis & design (OOA/OOD)", experience: "x years" },
        { name: "Clean Code Architecture", experience: "x years" },
        { name: "Microservices Architecture", experience: "x years" },
        { name: "Event-Driven Architecture", experience: "x years" },
    ];

    return (
        <section id="skillsSection" className="bg-[#011533]">
            <div className="max-w-7xl mx-auto px-4 py-20">
                <h1 className="text-4xl font-bold text-center mb-8">Skills</h1>
                <div className="grid grid-cols-4 md:grid-cols-4 gap-8">

                    {/* Frontend Column */}
                    <div className="bg-gray-950 p-6 rounded-lg shadow text-center hover:bg-slate-950 hover:scale-105 transition-transform duration-300 border-2 border-sky-950">
                        <h2 className="text-3xl font-semibold mb-4">Frontend</h2>
                        <hr className="h-px border-t-0 bg-gradient-to-r opacity-25 dark:via-neutral-400" />
                        <ul className="space-y-2">
                            <li>
                                {skillsFrontend.map((skills, index) => (
                                    <div key={index} className="mt-4">
                                        <h3 className="text-2xl font-semibold mt-2">{skills.name}</h3>
                                        <p className="text-md">{skills.experience} of experience</p>
                                    </div>
                                ))}
                            </li>
                        </ul>
                    </div>

                    {/* Backend Column */}
                    <div className="bg-gray-950 p-6 rounded-lg shadow text-center hover:bg-slate-950 hover:scale-105 transition-transform duration-300 border-2 border-sky-950">
                        <h2 className="text-3xl font-semibold mb-4">Backend</h2>
                        <hr className="h-px border-t-0 bg-gradient-to-r opacity-25 dark:via-neutral-400" />
                        <ul className="space-y-2">
                            <li>
                                {skillsBackend.map((skills, index) => (
                                    <div key={index} className="mt-4">
                                        <h3 className="text-2xl font-semibold mt-2">{skills.name}</h3>
                                        <p className="text-md">{skills.experience} of experience</p>
                                    </div>
                                ))}
                            </li>
                        </ul>
                    </div>

                    {/* Database Column */}
                    <div className="bg-gray-950 p-6 rounded-lg shadow text-center hover:bg-slate-950 hover:scale-105 transition-transform duration-300 border-2 border-sky-950">
                        <h2 className="text-3xl font-semibold mb-4">Database</h2>
                        <hr className="h-px border-t-0 bg-gradient-to-r opacity-25 dark:via-neutral-400" />
                        <ul className="space-y-2">
                            <li>
                                {skillsDatabase.map((skills, index) => (
                                    <div key={index} className="mt-4">
                                        <h3 className="text-2xl font-semibold mt-2">{skills.name}</h3>
                                        <p className="text-md">{skills.experience} of experience</p>
                                    </div>
                                ))}
                            </li>
                        </ul>
                    </div>

                    {/* Tools Column */}
                    <div className="bg-gray-950 p-6 rounded-lg shadow text-center hover:bg-slate-950 hover:scale-105 transition-transform duration-300 border-2 border-sky-950">
                        <h2 className="text-3xl font-semibold mb-4">Tools</h2>
                        <hr className="h-px border-t-0 bg-gradient-to-r opacity-25 dark:via-neutral-400" />
                        <ul className="space-y-2">
                            <li>
                                {skillsTools.map((skills, index) => (
                                    <div key={index} className="mt-4">
                                        <h3 className="text-2xl font-semibold mt-2">{skills.name}</h3>
                                        <p className="text-md">{skills.experience} of experience</p>
                                    </div>
                                ))}
                            </li>
                        </ul>
                    </div>

                    
                    {/* System development Column 
                    <div className="bg-sky-700 p-6 rounded-lg shadow text-center hover:bg-sky-800 hover:scale-105 transition-transform duration-300">
                        <h2 className="text-3xl font-semibold mb-4">System Development</h2>
                        <ul className="space-y-2">
                            <li>
                                {skillsSystemDevelopment.map((tech, index) => (
                                    <div key={index} className="mt-4">
                                        <h3 className="text-2xl font-semibold mt-2">{tech.name}</h3>
                                        <p className="text-md">{tech.experience} of experience</p>
                                    </div>
                                ))}
                            </li>
                        </ul>
                    </div>
                    */}

                </div>
            </div>
        </section>
    );
}

export default SkillsSection;