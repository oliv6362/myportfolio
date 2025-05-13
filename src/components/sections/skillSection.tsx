import Wave from 'react-wavify';
import { motion } from 'framer-motion';
import { Icon } from "@iconify/react"
import { skillFrontend } from '../../data/skills';
import { skillBackend } from '../../data/skills';
import { skillDatabase } from '../../data/skills';
import { skillTools } from '../../data/skills';
import { skillSystemDevelopment } from '../../data/skills';
import { skillPlatformsAndEnvironments } from '../../data/skills';

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: 'easeOut' },
    },
};

const SkillSection: React.FC = () => {
    return (
        <section id="skillSection" className="bg-[#011533]">
            <div className="max-w-7xl mx-auto pb-10">
                <h1 className="text-5xl text-center mb-15">Skills</h1>
                <div className="grid grid-cols-3 grid-rows-[150px,1fr,150px] gap-8">

                    {/* Tools Column */}
                    <motion.div
                        className="col-span-3 bg-gray-950 p-6 rounded-lg shadow text-center hover:bg-slate-950 hover:scale-105 transition-transform duration-300 border-2 border-sky-950"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <h2 className="text-3xl font-semibold mb-4">Tools</h2>
                        <hr className="h-px border-t-0 bg-gradient-to-r opacity-25 dark:via-neutral-400" />
                        <ul className="flex flex-wrap justify-center gap-2 mt-4">
                            {skillTools.map((skill, i) => (
                                <motion.li
                                    key={i}
                                    className="flex items-center space-x-2 border-2 rounded-lg border-sky-950 bg-gray-900 px-2.5 py-2.5"
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                >
                                    <Icon icon={skill.icon} className="w-8 h-8" />
                                    <h3 className="text-2xl">{skill.name}</h3>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Frontend Column */}
                    <motion.div
                        className="bg-gray-950 p-5 rounded-lg shadow text-center hover:bg-slate-950 hover:scale-105 transition-transform duration-300 border-2 border-sky-950"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <h2 className="text-3xl font-semibold mb-4">Frontend</h2>
                        <hr className="h-px border-t-0 bg-gradient-to-r opacity-25 dark:via-neutral-400" />
                        <ul className="flex flex-wrap justify-center gap-2 mt-4">
                            {skillFrontend.map((skill, i) => (
                                <motion.li
                                    key={i}
                                    className="flex items-center space-x-2 border-2 rounded-lg border-sky-950 bg-gray-900 px-2.5 py-2.5"
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                >
                                    <Icon icon={skill.icon} className="w-8 h-8" />
                                    <h3 className="text-2xl">{skill.name}</h3>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Backend Column */}
                    <motion.div
                        className="bg-gray-950 p-6 rounded-lg shadow text-center hover:bg-slate-950 hover:scale-105 transition-transform duration-300 border-2 border-sky-950"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <h2 className="text-3xl font-semibold mb-4">Backend</h2>
                        <hr className="h-px border-t-0 bg-gradient-to-r opacity-25 dark:via-neutral-400" />
                        <ul className="flex flex-wrap justify-center gap-2 mt-4">
                            {skillBackend.map((skill, i) => (
                                <motion.li
                                    key={i}
                                    className="flex items-center space-x-2 border-2 rounded-lg border-sky-950 bg-gray-900 px-2.5 py-2.5"
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                >
                                    <Icon icon={skill.icon} className="w-8 h-8" />
                                    <h3 className="text-2xl">{skill.name}</h3>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Database Column */}
                    <motion.div
                        className="bg-gray-950 p-6 rounded-lg shadow text-center hover:bg-slate-950 hover:scale-105 transition-transform duration-300 border-2 border-sky-950"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <h2 className="text-3xl font-semibold mb-4">Database</h2>
                        <hr className="h-px border-t-0 bg-gradient-to-r opacity-25 dark:via-neutral-400" />
                        <ul className="flex flex-wrap justify-center gap-2 mt-4">
                            {skillDatabase.map((skill, i) => (
                                <motion.li
                                    key={i}
                                    className="flex items-center space-x-2 border-2 rounded-lg border-sky-950 bg-gray-900 px-2.5 py-2.5"
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                >
                                    <Icon icon={skill.icon} className="w-8 h-8" />
                                    <h3 className="text-2xl">{skill.name}</h3>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Platforms & Environments */}
                    <motion.div
                        className="col-span-3 bg-gray-950 p-5 rounded-lg shadow text-center hover:bg-slate-950 hover:scale-105 transition-transform duration-300 border-2 border-sky-950"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <h2 className="text-3xl font-semibold mb-4">Platforms & Environments</h2>
                        <hr className="h-px border-t-0 bg-gradient-to-r opacity-25 dark:via-neutral-400" />
                        <ul className="flex flex-wrap justify-center gap-2 mt-4">
                            {skillPlatformsAndEnvironments.map((skill, i) => (
                                <motion.li
                                    key={i}
                                    className="flex items-center space-x-2 border-2 rounded-lg border-sky-950 bg-gray-900 px-2.5 py-2.5"
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                >
                                    <Icon icon={skill.icon} className="w-8 h-8" />
                                    <h3 className="text-2xl">{skill.name}</h3>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* System Development Column */}
                    <motion.div
                        className="col-span-3 bg-gray-950 p-5 rounded-lg shadow text-center hover:bg-slate-950 hover:scale-105 transition-transform duration-300 border-2 border-sky-950"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <h2 className="text-3xl font-semibold mb-4">System Development</h2>
                        <hr className="h-px border-t-0 bg-gradient-to-r opacity-25 dark:via-neutral-400" />
                        <ul className="flex flex-wrap justify-center gap-2 mt-4">
                            {skillSystemDevelopment.map((skill, i) => (
                                <motion.li
                                    key={i}
                                    className="flex items-center space-x-2 border-2 rounded-lg border-sky-950 bg-gray-900 px-2.5 py-2.5"
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                >
                                    <Icon icon={skill.icon} className="w-8 h-8" />
                                    <h3 className="text-2xl">{skill.name}</h3>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>

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