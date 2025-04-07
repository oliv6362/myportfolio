import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="fixed top-+ left-0 w-full z-50">
            <nav className="bg-[#011533] p-4" >
                <div className="container mx-auto flex items-center justify-between">
                    <div className="text-white font-bold text-2xl">O.H</div>
                    <ul className="flex space-x-4 text-lg ">
                        <li><a href="#home" className="text-white hover:bg-green-700 rounded-lg p-2 transition-colors duration-350">Home</a></li>
                        <li><a href="#about" className="text-white hover:bg-green-700 rounded-lg p-2 transition-colors duration-350">About</a></li>
                        <li><a href="#projects" className="text-white hover:bg-green-700 rounded-lg p-2 transition-colors duration-350">Projects</a></li>
                        <li><a href="#contact" className="text-white hover:bg-green-700 rounded-lg p-2 transition-colors duration-350">Contact</a></li>
                    </ul>
                </div>
            </nav>
            <hr className=" h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
        </header>
    );
};

export default Header;