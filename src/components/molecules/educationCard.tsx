const EducationPart: React.FC = () => {
    const education = [
        {
            year: "2022 - 2025",
            institution: "Computer Science",
            description: "AP Graduate in Computer Science.",
            location: "Zealand Academy of Technologies and Business, Denmark.",
        },
        {
            year: "2019 - 2025",
            institution: "HHX - Higher Commercial Examination Programme",
            description: "Business and Marketing.",
            location: "Zealand Business College, Denmark.",
        },
    ];

    return (
        <div className="mt-4 px-10 pt-20">
            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-start pl-5">Education</h2>

            <div className="relative">
                {education.map((edu, index) => (
                    <div key={index} className="pl-5">
                        {/* Circle for the timeline */}
                        <div className="absolute w-4 h-4 bg-[#126FAB] rounded-full -ml-7"></div>

                        {/* Vertical gradient line */}
                        <div className="absolute -left-0.5 top-0 h-full w-1 bg-gradient-to-b from-[#126FAB] to-transparent opacity-50"></div>

                        {/* Education details */}
                        <div className="mt-4 bg-[#030b10] p-4 rounded-lg text-start border-2 border-[#103758]">
                            <p className="text-sm lg:text-base text-[#126FAB]">{edu.year}</p>
                            <p className="text-lg lg:text-xl font-bold">{edu.institution}</p>
                            <p className="text-base lg:text-lg text-gray-400">{edu.description}</p>
                            <p className="text-sm lg:text-base text-gray-400">{edu.location}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EducationPart