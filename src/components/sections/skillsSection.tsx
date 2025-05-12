

interface Skill {
    name: string;
    experience: string;
}

const skillBackend: Skill[] = [
    { name: "C#", experience: "3 years" },
    { name: "Java", experience: "3 years" },
    { name: "Python", experience: "3 years" },
    { name: "Node.js", experience: "3 years" },
    { name: "Express", experience: "3 years" },
    { name: "MongoDB", experience: "3 years" },
];

const skillFrontend: Skill[] = [
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

const skillDatabase: Skill[] = [
    { name: "MySQL", experience: "x years" },
    { name: "SQLite", experience: "x years" },
    { name: "MongoDB", experience: "x years" },
    { name: "Xata", experience: "x years" },
    { name: "PostgreSQL", experience: "x years" },
];

const skillTools: Skill[] = [
    { name: "Git", experience: "x years" },
    { name: "Webpack", experience: "x years" },
    { name: "Figma", experience: "x years" },
    { name: "Visual Studio Code", experience: "x years" },
];

const SkillSection: React.FC = () => {
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
                                {skillFrontend.map((Fskills, index) => (
                                    <div key={index} className="mt-4">
                                        <h3 className="text-2xl font-semibold mt-2">{Fskills.name}</h3>
                                        <p className="text-md">{Fskills.experience} of experience</p>
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
                                {skillBackend.map((Bskills, index) => (
                                    <div key={index} className="mt-4">
                                        <h3 className="text-2xl font-semibold mt-2">{Bskills.name}</h3>
                                        <p className="text-md">{Bskills.experience} of experience</p>
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
                                {skillDatabase.map((Dskills, index) => (
                                    <div key={index} className="mt-4">
                                        <h3 className="text-2xl font-semibold mt-2">{Dskills.name}</h3>
                                        <p className="text-md">{Dskills.experience} of experience</p>
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
                                {skillTools.map((Tskills, index) => (
                                    <div key={index} className="mt-4">
                                        <h3 className="text-2xl font-semibold mt-2">{Tskills.name}</h3>
                                        <p className="text-md">{Tskills.experience} of experience</p>
                                    </div>
                                ))}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SkillSection;