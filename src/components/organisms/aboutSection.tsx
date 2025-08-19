import ONHProtrait from "../../assets/images/protrait/ONH.png"
import EducationPart from "../molecules/educationCard"
import ExperiencePart from "../molecules/experienceCard"
import { aboutParagraphs } from "../../data/abouts"
import { motion } from "framer-motion"
import { useAboutAnimations } from "../../utils/animationManager"

/**
 * AboutSection component that renders the “About me” section with:
 * 1. A profile image and staggered paragraphs that fade in on scroll
 * 2. Two sub-components (`EducationPart` and `ExperiencePart`) that also fade in
 * 3. A decorative, static SVG wave at the bottom
 *
 * Animations respect the user’s `prefers-reduced-motion` setting.
 */
const AboutSection: React.FC = () => {
  const { fadeItem, stagger, fadeUp } = useAboutAnimations()

  return (
    <section id="about" className="overflow-hidden bg-[#040d12]">
      <div className="py-10 md:px-4">
        {/* Image + Intro Text */}
        <motion.div className="mx-auto flex flex-col justify-center xl:flex-row" {...fadeUp}>
          <div className="mx-auto flex h-49 w-48 justify-center object-contain md:h-65 md:w-64 lg:h-98 lg:w-96 xl:mx-0 xl:mt-6 xl:mr-20">
            <img className="rounded-lg" src={ONHProtrait} alt="placeholder" />
          </div>

          <motion.article className="mx-auto max-w-2xl xl:mx-0" {...stagger}>
            <h2 className="mt-4 text-center text-2xl md:text-3xl lg:text-4xl xl:mt-0 xl:text-start xl:text-5xl">About me</h2>
            {aboutParagraphs.map((paragraph) => (
              <motion.p key={paragraph.text} className="mt-4 px-8 text-center text-base lg:px-0 lg:text-lg xl:text-start" {...fadeItem}>
                {paragraph.text}
              </motion.p>
            ))}
          </motion.article>
        </motion.div>

        {/* Education & Experience Timeline */}
        <motion.div className="mx-auto grid max-w-7xl grid-cols-1 xl:grid-cols-2" {...fadeUp}>
          <EducationPart />
          {/*<div className="hidden md:block border-l-2 border-gray-700 h-96"></div>*/}
          <ExperiencePart />
        </motion.div>
      </div>

      {/*Wave divider */}
      <hr className="m-15 h-1 border-t-0 bg-gradient-to-r via-[#126FAB] opacity-25" />
    </section>
  )
}

export default AboutSection
