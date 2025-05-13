import Wave from 'react-wavify';
import { Icon } from "@iconify/react"
import { skillFrontend } from '../../data/skills';
import { skillBackend } from '../../data/skills';
import { skillDatabase } from '../../data/skills';
import { skillTools } from '../../data/skills';
import { skillSystemDevelopment } from '../../data/skills';
import { skillPlatformsAndEnvironments } from '../../data/skills';


const SkillSection: React.FC = () => {
    return (
        <section id="skillSection" className="bg-[#011533]">
            <div className="max-w-7xl mx-auto pb-10">
                <h1 className="text-5xl text-center mb-15">Skills</h1>
                <div className="grid grid-cols-3 grid-rows-[150px,1fr,150px] gap-8">

                    {/* Tools Column */}
                    <div className="col-span-3 bg-gray-950 p-6 rounded-lg shadow text-center hover:bg-slate-950 hover:scale-105 transition-transform duration-300 border-2 border-sky-950">
                        <h2 className="text-3xl font-semibold mb-4">Tools</h2>
                        <hr className="h-px border-t-0 bg-gradient-to-r opacity-25 dark:via-neutral-400" />
                        <ul className="place-items-center ">
                            <li className="flex flex-wrap space-x-2 ">
                                {skillTools.map((Tskills, index) => (
                                    <div key={index} className="mt-4 flex border-2 rounded-lg border-sky-950 bg-gray-900 place-items-center px-2.5 py-2.5 space-x-2">
                                        <Icon
                                            icon={Tskills.icon}
                                            className="w-8 h-8"
                                        />
                                        <h3 className="text-2xl">{Tskills.name}</h3>
                                    </div>
                                ))}
                            </li>
                        </ul>
                    </div>

                    {/* Frontend Column */}
                    <div className="bg-gray-950 p-5 rounded-lg shadow text-center hover:bg-slate-950 hover:scale-105 transition-transform duration-300 border-2 border-sky-950">
                        <h2 className="text-3xl font-semibold mb-4">Frontend</h2>
                        <hr className="h-px border-t-0 bg-gradient-to-r opacity-25 dark:via-neutral-400" />
                        <ul>
                            <li className="flex flex-wrap space-x-2">
                                {skillFrontend.map((Fskills, index) => (
                                    <div key={index} className="mt-4 flex border-2 rounded-lg border-sky-950 bg-gray-900 place-items-center px-2.5 py-2.5 space-x-2">
                                        <Icon
                                            icon={Fskills.icon}
                                            className="w-8 h-8"
                                        />
                                        <h3 className="text-2xl">{Fskills.name}</h3>
                                    </div>
                                ))}
                            </li>
                        </ul>
                    </div>

                    {/* Backend Column */}
                    <div className="bg-gray-950 p-6 rounded-lg shadow text-center hover:bg-slate-950 hover:scale-105 transition-transform duration-300 border-2 border-sky-950">
                        <h2 className="text-3xl font-semibold mb-4">Backend</h2>
                        <hr className="h-px border-t-0 bg-gradient-to-r opacity-25 dark:via-neutral-400" />
                        <ul>
                            <li className="flex flex-wrap space-x-2">
                                {skillBackend.map((Bskills, index) => (
                                    <div key={index} className="mt-4 flex border-2 rounded-lg border-sky-950 bg-gray-900 place-items-center px-2.5 py-2.5 space-x-2">
                                        <Icon
                                            icon={Bskills.icon}
                                            className="w-8 h-8"
                                        />
                                        <h3 className="text-2xl">{Bskills.name}</h3>
                                    </div>
                                ))}
                            </li>
                        </ul>
                    </div>

                    {/* Database Column */}
                    <div className="bg-gray-950 p-6 rounded-lg shadow text-center hover:bg-slate-950 hover:scale-105 transition-transform duration-300 border-2 border-sky-950">
                        <h2 className="text-3xl font-semibold mb-4">Database</h2>
                        <hr className="h-px border-t-0 bg-gradient-to-r opacity-25 dark:via-neutral-400" />
                        <ul>
                            <li className="flex flex-wrap space-x-2">
                                {skillDatabase.map((Dskills, index) => (
                                    <div key={index} className="mt-4 flex border-2 rounded-lg border-sky-950 bg-gray-900 place-items-center px-2.5 py-2.5 space-x-2">
                                        <Icon
                                            icon={Dskills.icon}
                                            className="w-8 h-8"
                                        />
                                        <h3 className="text-2xl">{Dskills.name}</h3>
                                    </div>
                                ))}
                            </li>
                        </ul>
                    </div>

                    {/* Platforms & Environments */}
                    <div className="col-span-3 bg-gray-950 p-5 rounded-lg shadow text-center hover:bg-slate-950 hover:scale-105 transition-transform duration-300 border-2 border-sky-950">
                        <h2 className="text-3xl font-semibold mb-4">Platforms & Environments</h2>
                        <hr className="h-px border-t-0 bg-gradient-to-r opacity-25 dark:via-neutral-400" />
                        <ul className="place-items-center ">
                            <li className="flex flex-wrap space-x-2">
                                {skillPlatformsAndEnvironments.map((PEskills, index) => (
                                    <div key={index} className="mt-4 flex border-2 rounded-lg border-sky-950 bg-gray-900 place-items-center px-2.5 py-2.5 space-x-2">
                                        <Icon
                                            icon={PEskills.icon}
                                            className="w-8 h-8"
                                        />
                                        <h3 className="text-2xl">{PEskills.name}</h3>
                                    </div>
                                ))}
                            </li>
                        </ul>
                    </div>

                    {/* System development Column */}
                    <div className="col-span-3 bg-gray-950 p-5 rounded-lg shadow text-center hover:bg-slate-950 hover:scale-105 transition-transform duration-300 border-2 border-sky-950">
                        <h2 className="text-3xl font-semibold mb-4">System Development</h2>
                        <hr className="h-px border-t-0 bg-gradient-to-r opacity-25 dark:via-neutral-400" />
                        <ul className="place-items-center ">
                            <li className="flex flex-wrap space-x-2">
                                {skillSystemDevelopment.map((SDskills, index) => (
                                    <div key={index} className="mt-4 flex border-2 rounded-lg border-sky-950 bg-gray-900 place-items-center px-2.5 py-2.5 space-x-2">
                                        <Icon
                                            icon={SDskills.icon}
                                            className="w-8 h-8"
                                        />
                                        <h3 className="text-2xl">{SDskills.name}</h3>
                                    </div>
                                ))}
                            </li>
                        </ul>
                    </div>
                </div>
            </div >

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