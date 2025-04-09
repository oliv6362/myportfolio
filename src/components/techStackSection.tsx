const TechStackSection: React.FC = () => {

    const techStackBackend = [
        { name: "C#", experience: "3 years" },
        { name: "Java", experience: "3 years" },
        { name: "Python", experience: "3 years" },
        { name: "Node.js", experience: "3 years" },
        { name: "Express", experience: "3 years" },
        { name: "MongoDB", experience: "3 years" },
    ];

    const techStackFrontend = [
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

    return (
        <section id="about" className="bg-[#011533] h-screen ">
            <div className="max-w-2xl mx-auto px-4 py-20">
                <h1 className="text-4xl font-bold text-center mb-8 text-green-700">My Tech Stack</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Frontend Column */}
                    <div className="bg-sky-700 p-6 rounded-lg shadow text-center hover:bg-sky-800 hover:scale-105 transition-transform duration-300">
                        <h2 className="text-3xl font-semibold mb-4">Frontend</h2>
                        <ul className="space-y-2">
                            <li>
                                {techStackFrontend.map((tech, index) => (
                                    <div key={index} className="mt-4">
                                        <h3 className="text-2xl font-semibold mt-2">{tech.name}</h3>
                                        <p className="text-md">{tech.experience} of experience</p>
                                    </div>
                                ))}
                            </li>
                        </ul>
                    </div>

                    {/* Backend Column */}
                    <div className="bg-sky-700 p-6 rounded-lg shadow text-center hover:bg-sky-800 hover:scale-105 transition-transform duration-300">
                        <h2 className="text-3xl font-semibold mb-4">Backend</h2>
                        <ul className="space-y-2">
                            <li>
                                {techStackBackend.map((tech, index) => (
                                    <div key={index} className="mt-4">
                                        <h3 className="text-2xl font-semibold mt-2">{tech.name}</h3>
                                        <p className="text-md">{tech.experience} of experience</p>
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

export default TechStackSection;