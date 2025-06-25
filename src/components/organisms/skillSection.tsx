import { SkillCategory } from '../molecules/skillCategory';
import { skillFrontend, skillBackend, skillDatabase, skillLanguage, skillSystemDevelopment, skillPlatformsAndEnvironments } from '../../data/skills';

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
        <section id="skillSection" className="bg-[#040D12] overflow-hidden">
            <div className="max-w-7xl mx-auto pb-10 px-14 xl:px-0">
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center mb-6 md:mb-10 lg:mb-15">Skills</h2>

                <div className="grid grid-cols-1 xl:grid-cols-3 grid-rows-[150px,1fr,150px] gap-12 xl:gap-8">
                    <SkillCategory title="Languages" skills={skillLanguage} />

                    <SkillCategory title="Frontend" skills={skillFrontend} fullHeight />
                    <SkillCategory title="Backend" skills={skillBackend} fullHeight />
                    <SkillCategory title="Database" skills={skillDatabase} fullHeight />

                    <SkillCategory title="Platforms & Environments" skills={skillPlatformsAndEnvironments} />

                    <SkillCategory title="System Development" skills={skillSystemDevelopment} />
                </div>
            </div>

            {/*Wave divider at the bottom */}
            <hr className="h-1 border-t-0 bg-gradient-to-r opacity-25 via-[#126FAB] m-15" />


        </section >
    );
}

export default SkillSection;