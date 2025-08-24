import { motion } from "framer-motion"
import { SkillCard } from "./skillCard"
import type { Skill } from "../../data/skills"
import { useSkillAnimations } from "../../utils/animationManager"

/**
 * Heading text for this category (e.g. “Frontend”)
 * Array of `Skill` objects to display in this category
 * If true, span the full width of the grid (uses `col-span-3`)
 */
interface SkillCategoryProps {
  title: string
  skills: Skill[]
  fullHeight?: boolean
}

/**
 * SkillCategory component that wraps a set of skills under a common heading, with optional
 * fade-up animation on scroll
 */
export const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills, fullHeight = false }) => {
  const { fadeUp } = useSkillAnimations()
  const spanClasses = fullHeight ? "xl:col-span-1" : ""

  return (
    <motion.div className={`${spanClasses} col-span-3 rounded-lg border-2 border-[#103758] bg-[#040D12] p-5 text-center transition-transform duration-300`}>
      <h3 className="mb-4 text-xl md:text-2xl lg:text-3xl">{title}</h3>
      <hr className="h-px border-t-0 bg-gradient-to-r opacity-25 dark:via-neutral-400" />

      <ul className="mt-4 flex flex-wrap justify-center gap-2">
        {skills.map((skill) => (
          <motion.li key={skill.name} className="w-max" {...fadeUp}>
            <SkillCard skill={skill} />
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}
