const EducationPart: React.FC = () => {

    const education = [
        {
            year: "2022 - 2025",
            institution: "Computer Science",
            description: "AP Graduate in Computer Science.",
            location:"Zealand Erhvervsakademi, Denmark.",
        },
        {
            year: "2019 - 2025",
            institution: "HHX - Higher Commercial Examination Programme",
            description: "Business and Marketing.",
            location:"Zealand Business College, Denmark.",
        },
    ];

    return (
        <section className="mt-4 px-10">
            <h2 className="text-4xl text-start pl-5">Education</h2>

            <div className="relative border-s border-gray-300">
                {education.map((edu, index) => (
                    <div key={index} className="pl-5">
                        <div className="absolute w-4 h-4 bg-green-700 rounded-full -ml-7"></div>

                        <div className="mt-4 text-md bg-gray-950 p-4 rounded-lg text-start border-2 border-sky-950">
                            <p className="text-sm text-green-700">{edu.year}</p>
                            <p className="text-xl font-bold">{edu.institution}</p>
                            <p className="text-lg text-gray-400">{edu.description}</p>
                            <p className="text-md text-gray-400">{edu.location}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default EducationPart