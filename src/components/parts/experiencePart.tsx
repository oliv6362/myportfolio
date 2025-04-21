const ExperiencePart: React.FC = () => {
    return (
        <section className="mt-4 px-14">
            <h2 className="text-3xl font-bold text-center">Experience</h2>

            <div className="mt-4 text-md bg-slate-950 p-4 rounded-lg text-start border-2 border-sky-950">
                <p className="text-sm text-green-700">2024 - 2024</p>
                <p className="text-xl font-bold">Null Frontier</p>
                <p className="text-md text-gray-400">Internship - Fullstack developer</p>
            </div>

            <div className="mt-4 text-md bg-slate-950 p-4 rounded-lg text-start border-2 border-sky-950">
                <p className="text-sm text-green-700">2017 - 2018</p>
                <p className="text-xl font-bold">Netto</p>
                <p className="text-md text-gray-400">Shop Assistant</p>
            </div>
        </section>
    );
}

export default ExperiencePart;