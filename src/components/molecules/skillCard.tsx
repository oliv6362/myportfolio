import { Icon } from "@iconify/react"
import type { Skill } from "../../data/skills"

/**
 * A single skill object containing:
 * - `name`: display name of the skill
 * - `icon`: Iconify icon identifier string
 */
interface SkillCardProps {
  skill: Skill
}

/**
 * SkillCard component that renders one skill in a card format.
 */
export const SkillCard: React.FC<SkillCardProps> = ({ skill }) => (
  <div className="flex space-x-2 rounded-lg bg-[#103758] px-2.5 py-2.5">
    <Icon icon={skill.icon} className="h-4 w-4 lg:h-6 lg:w-6 xl:h-8 xl:w-8" aria-hidden="true" />
    <span className="text-base lg:text-lg xl:text-2xl">{skill.name}</span>
  </div>
)
