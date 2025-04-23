const EducationPart: React.FC = () => {

    const education = [
        {
            year: "2022 - 2025",
            institution: "Computer Science",
            description: "AP Graduate in Computer Science.",
        },
        {
            year: "2022 - 2025",
            institution: "Higher Commercial Examination Programme (HHX)",
            description: "Business and Marketing",
        },
    ];

    return (
        <section className="mt-4 px-10">
            <h2 className="text-3xl font-bold text-start pl-5">Education</h2>

            <div className="relative border-s border-gray-300">
                {education.map((edu, index) => (
                    <div key={index} className="pl-5">
                        <div className="absolute w-4 h-4 bg-green-700 rounded-full -ml-7"></div>

                        <div className="mt-4 text-md bg-slate-950 p-4 rounded-lg text-start border-2 border-sky-950">
                            <p className="text-sm text-green-700">{edu.year}</p>
                            <p className="text-xl font-bold">{edu.institution}</p>
                            <p className="text-md text-gray-400">{edu.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default EducationPart