import { SkillCategory } from '../molecules/skillCategory';
import Wave from 'react-wavify';
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
        <section id="skillSection" className="bg-[#011533] scroll-mt-16">
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
            <Wave fill='#051937'
                paused={true}
                style={{ display: 'flex' }}
                options={{
                    height: 50,
                    amplitude: 50,
                    speed: 0.15,
                    points: 3
                }}
            />
        </section >
    );
}

export default SkillSection;