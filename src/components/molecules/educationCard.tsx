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
  ]

  return (
    <div className="mt-4 px-10 pt-20">
      <h2 className="pl-5 text-start text-xl md:text-2xl lg:text-3xl xl:text-4xl">Education</h2>

      <div className="relative">
        {education.map((edu, index) => (
          <div key={index} className="pl-5">
            {/* Circle for the timeline */}
            <div className="absolute -ml-7 h-4 w-4 rounded-full bg-[#126FAB]"></div>

            {/* Vertical gradient line */}
            <div className="absolute top-0 -left-0.5 h-full w-1 bg-gradient-to-b from-[#126FAB] to-transparent opacity-50"></div>

            {/* Education details */}
            <div className="mt-4 rounded-lg border-2 border-[#103758] bg-[#030b10] p-4 text-start">
              <p className="text-sm text-[#126FAB] lg:text-base">{edu.year}</p>
              <p className="text-lg font-bold lg:text-xl">{edu.institution}</p>
              <p className="text-base text-gray-400 lg:text-lg">{edu.description}</p>
              <p className="text-sm text-gray-400 lg:text-base">{edu.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EducationPart
