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
        <section className="mt-4 px-12">
            <h2 className="text-3xl font-bold text-center">Education</h2>
            <div>
                {education.map((edu, index) => (
                    <div key={index} className="mt-4 text-md bg-slate-950 p-4 rounded-lg text-start border-2 border-sky-950">
                        <p className="text-sm text-green-700">{edu.year}</p>
                        <p className="text-xl font-bold">{edu.institution}</p>
                        <p className="text-md text-gray-400">{edu.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default EducationPart