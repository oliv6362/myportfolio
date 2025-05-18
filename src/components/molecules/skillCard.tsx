import { Icon } from '@iconify/react';
import type { Skill } from '../../data/skills';

/**
 * A single skill object containing:
 * - `name`: display name of the skill  
 * - `icon`: Iconify icon identifier string
 */
interface SkillCardProps {
    skill: Skill;
}

/**
 * SkillCard component that renders one skill in a card format.
 */
export const SkillCard: React.FC<SkillCardProps> = ({ skill }) => (
    <div className="flex items-center space-x-2 border-2 rounded-lg border-sky-950 bg-gray-900 px-2.5 py-2.5">
        <Icon icon={skill.icon} className="w-4 h-4 lg:w-6 lg:h-6 xl:w-8 xl:h-8" aria-hidden="true" />
        <span className="text-md lg:text-lg xl:text-2xl">{skill.name}</span>
    </div>
);