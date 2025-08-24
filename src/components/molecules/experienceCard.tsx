const ExperiencePart: React.FC = () => {
  const experience = [
    {
      year: "2024 - 2024",
      company: "Null Frontier",
      position: "Internship - Full Stack Developer.",
      location: "Væksthuset Køge, Denmark.",
    },
  ]

  return (
    <div className="mt-4 px-10 pt-5 xl:pt-20">
      <h2 className="pl-5 text-start text-xl md:text-2xl lg:text-3xl xl:text-4xl">Experience</h2>

      <div className="relative">
        {experience.map((exp, index) => (
          <div key={index} className="pl-5">
            {/* Circle for the timeline */}
            <div className="absolute -ml-7 h-4 w-4 rounded-full bg-[#126FAB]"></div>

            {/* Vertical gradient line */}
            <div className="absolute top-0 -left-0.5 h-full w-1 bg-gradient-to-b from-[#126FAB] to-transparent opacity-50"></div>

            <div className="mt-4 rounded-lg border-2 border-[#103758] bg-[#040d12] p-4 text-start">
              <p className="text-sm text-[#126FAB] lg:text-base">{exp.year}</p>
              <p className="text-lg font-bold lg:text-xl">{exp.company}</p>
              <p className="text-base text-gray-400 lg:text-lg">{exp.position}</p>
              <p className="text-sm text-gray-400 lg:text-base">{exp.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExperiencePart
