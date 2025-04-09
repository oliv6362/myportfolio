const TechStackSection: React.FC = () => {
    return (
        <section id="about" className="bg-[#011533] h-screen ">
            <div className="max-w-2xl mx-auto px-4 py-20">
                <h1 className="text-4xl font-bold text-center mb-8 text-green-700">My Tech Stack</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Frontend Column */}
                    <div className="bg-sky-700 p-6 rounded-lg shadow text-center hover:bg-sky-800 hover:scale-105 transition-transform duration-300">
                        <h2 className="text-3xl font-semibold mb-4">Frontend</h2>
                        <ul className="space-y-2">
                            <li><h3 className="text-2xl font-semibold mb-4">JavaScript</h3></li>
                            <li><h3 className="text-2xl font-semibold mb-4">TypeScript</h3></li>
                            <li><h3 className="text-2xl font-semibold mb-4">React</h3></li>
                            <li><h3 className="text-2xl font-semibold mb-4">Redux</h3></li>
                            <li><h3 className="text-2xl font-semibold mb-4">HTML</h3></li>
                            <li><h3 className="text-2xl font-semibold mb-4">CSS</h3></li>
                            <li><h3 className="text-2xl font-semibold mb-4">Tailwind CSS</h3></li>
                            <li><h3 className="text-2xl font-semibold mb-4">Bootstrap</h3></li>
                            <li><h3 className="text-2xl font-semibold mb-4">Next.js</h3></li>
                            <li><h3 className="text-2xl font-semibold mb-4">Jest</h3></li>
                        </ul>
                    </div>

                    {/* Backend Column */}
                    <div className="bg-sky-700 p-6 rounded-lg shadow text-center hover:bg-sky-800 hover:scale-105 transition-transform duration-300">
                        <h2 className="text-3xl font-semibold mb-4">Backend</h2>
                        <ul className="space-y-2">
                            <li><h3 className="text-2xl font-semibold mb-4">C#</h3></li>
                            <li><h3 className="text-2xl font-semibold mb-4">Java</h3></li>
                            <li><h3 className="text-2xl font-semibold mb-4">Python</h3></li>
                            <li><h3 className="text-2xl font-semibold mb-4">Node.js</h3></li>
                            <li><h3 className="text-2xl font-semibold mb-4">Express</h3></li>
                            <li><h3 className="text-2xl font-semibold mb-4">MongoDB</h3></li>

                        </ul>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default TechStackSection;