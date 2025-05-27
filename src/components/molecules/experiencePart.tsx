const ExperiencePart: React.FC = () => {
    const experience = [
        {
            year: "2024 - 2024",
            company: "Null Frontier",
            position: "Internship - Full Stack Developer.",
            location: "Væksthuset Køge, Denmark.",
        },
        {
            year: "2017 - 2018",
            company: "Netto",
            position: "Shop Assistant.",
            location: "Næstved, Denmark.",
        },
    ]

    return (
        <section className="mt-4 px-10 pt-5 xl:pt-20">
            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-start pl-5">Experience</h2>

            <div className="relative border-s border-gray-300">
                {experience.map((exp, index) => (
                    <div key={index} className="pl-5">
                        <div className="absolute w-4 h-4 bg-green-700 rounded-full -ml-7"></div>

                        <div className="mt-4 bg-stone-950 p-4 rounded-lg text-start border-2 border-sky-950 hover:bg-slate-950">
                            <p className="text-sm lg:text-base text-green-700">{exp.year}</p>
                            <p className="text-lg lg:text-xl font-bold">{exp.company}</p>
                            <p className="text-base lg:text-lg text-gray-400">{exp.position}</p>
                            <p className="text-sm lg:text-base text-gray-400">{exp.location}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ExperiencePart;