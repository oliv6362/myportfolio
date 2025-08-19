import { SkillCategory } from "../molecules/skillCategory"
import { skillFrontend, skillBackend, skillDatabase, skillLanguage, skillSystemDevelopment, skillPlatformsAndEnvironments } from "../../data/skills"

/**
 * SkillSection component that organizes all skill categories into a “bento” grid:
 * - Top row: full-width Tools
 * - Middle row: three columns (Frontend, Backend, Database)
 * - Bottom rows: full-width Platforms & Environments, System Development
 *
 * Each `SkillCategory` animates into view on scroll.
 * A decorative SVG wave divider caps the bottom.
 */
const SkillSection: React.FC = () => {
  return (
    <section id="skillSection" className="overflow-hidden bg-[#040D12]">
      <div className="mx-auto max-w-7xl px-14 pb-10 xl:px-0">
        <h2 className="mb-6 text-center text-2xl md:mb-10 md:text-3xl lg:mb-15 lg:text-4xl xl:text-5xl">Skills</h2>

        <div className="grid grid-cols-1 grid-rows-[150px,1fr,150px] gap-12 xl:grid-cols-3 xl:gap-8">
          <SkillCategory title="Languages" skills={skillLanguage} />

          <SkillCategory title="Frontend" skills={skillFrontend} fullHeight />
          <SkillCategory title="Backend" skills={skillBackend} fullHeight />
          <SkillCategory title="Database" skills={skillDatabase} fullHeight />

          <SkillCategory title="Platforms & Environments" skills={skillPlatformsAndEnvironments} />

          <SkillCategory title="System Development" skills={skillSystemDevelopment} />
        </div>
      </div>

      {/*Wave divider at the bottom */}
      <hr className="m-15 h-1 border-t-0 bg-gradient-to-r via-[#126FAB] opacity-25" />
    </section>
  )
}

export default SkillSection
