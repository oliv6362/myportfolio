import { SkillCategory } from '../molecules/skillCategory';
import Wave from 'react-wavify';
import {
    skillFrontend,
    skillBackend,
    skillDatabase,
    skillTools,
    skillSystemDevelopment,
    skillPlatformsAndEnvironments,
} from '../../data/skills';

/**
 * SkillSection component that organizes all skill categories into a “bento” grid:
 * - Top row: full-width Tools  
 * - Middle row: three columns (Frontend, Backend, Database)  
 * - Bottom rows: full-width Platforms & Environments, System Development  
 *  
 * Each `SkillCategory` animates into view on scroll.  
 * A decorative SVG wave divider caps the bottom.
 *
 * @returns {JSX.Element}
 *
 * @example
 * ```tsx
 * import SkillSection from './SkillSection';
 * <SkillSection />
 * ```
 */
const SkillSection: React.FC = () => {
    return (
        <section id="skillSection" className="bg-[#011533]">
            <div className="max-w-7xl mx-auto pb-10">
                <h1 className="text-5xl text-center mb-15">Skills</h1>

                <div className="grid grid-cols-3 grid-rows-[150px,1fr,150px] gap-8">
                    <SkillCategory title="Tools" skills={skillTools} fullWidth />

                    <SkillCategory title="Frontend" skills={skillFrontend} />
                    <SkillCategory title="Backend" skills={skillBackend} />
                    <SkillCategory title="Database" skills={skillDatabase} />

                    <SkillCategory
                        title="Platforms & Environments"
                        skills={skillPlatformsAndEnvironments}
                        fullWidth
                    />

                    <SkillCategory title="System Development" skills={skillSystemDevelopment} fullWidth />
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