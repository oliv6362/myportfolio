const EducationPart: React.FC = () => {
    return (
        <section className="mt-4 px-12">
            <h2 className="text-3xl font-bold text-center">Education</h2>

            <div className="mt-4 text-md bg-slate-950 p-4 rounded-lg text-start border-2 border-sky-950">
                <p className="text-sm text-green-700">2022 - 2025</p>
                <p className="text-xl font-bold">Computer Science</p>
                <p className="text-md text-gray-400">AP Graduate in Computer Science.</p>
            </div>

            <div className="mt-4 text-md bg-slate-950 p-4 rounded-lg text-start border-2 border-sky-950">
                <p className="text-sm text-green-700">2022 - 2025</p>
                <p className="text-xl font-bold">Higer Commerical Examination Programme (HHX)</p>
                <p className="text-md text-gray-400">Business and Marketing</p>
            </div>
        </section>
    );
}

export default EducationPart