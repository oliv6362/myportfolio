const EducationPart: React.FC = () => {
    const education = [
        {
            year: "2022 - 2025",
            institution: "Computer Science",
            description: "AP Graduate in Computer Science.",
            location: "Zealand Erhvervsakademi, Denmark.",
        },
        {
            year: "2019 - 2025",
            institution: "HHX - Higher Commercial Examination Programme",
            description: "Business and Marketing.",
            location: "Zealand Business College, Denmark.",
        },
    ];

    return (
        <section className="mt-4 px-10 pt-20">
            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-start pl-5">Education</h2>

            <div className="relative border-s border-gray-300">
                {education.map((edu, index) => (
                    <div key={index} className="pl-5">
                        <div className="absolute w-4 h-4 bg-green-700 rounded-full -ml-7"></div>

                        <div className="mt-4 bg-black p-4 rounded-lg text-start border-2 border-sky-950 hover:bg-slate-950">
                            <p className="text-sm lg:text-base text-green-700">{edu.year}</p>
                            <p className="text-lg lg:text-xl font-bold">{edu.institution}</p>
                            <p className="text-base lg:text-lg text-gray-400">{edu.description}</p>
                            <p className="text-sm lg:text-base text-gray-400">{edu.location}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default EducationPart