import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Social from '../atoms/social';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-+ left-0 w-full z-50">
            <nav className="bg-[#040d12] pt-4 px-4" >
                <div className="container mx-auto flex items-center justify-between">

                    {/* Logo */}
                    <div className="font-bold text-2xl">
                        <a href="#home">O.H</a>
                    </div>

                    {/* Desktop nav */}
                    <ul className="hidden lg:flex space-x-4 text-lg">
                        <Social />
                        <li><a href="#home" className="hover:bg-[#126FAB] rounded-lg p-2 transition-colors duration-350">Home</a></li>
                        <li><a href="#about" className="hover:bg-[#126FAB] rounded-lg p-2 transition-colors duration-350">About</a></li>
                        <li><a href="#skillSection" className="hover:bg-[#126FAB] rounded-lg p-2 transition-colors duration-350">Skills</a></li>
                        <li><a href="#projects" className="hover:bg-[#126FAB] rounded-lg p-2 transition-colors duration-350">Projects</a></li>
                    </ul>



                    {/* Hamburger button */}
                    <button className="lg:hidden text-white text-2xl focus:outline-none" onClick={() => setIsOpen(open => !open)} aria-controls="mobile-menu" aria-expanded={isOpen}>
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            <div id="mobile-menu" className={` bg-[#040d12] px-4 pb-2 transition-max-h duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <ul className="flex flex-col space-y-2 text-end pt-0.5">
                    <li><a href="#home" onClick={() => setIsOpen(false)} className="inline-block py-2 hover:bg-[#126FAB] rounded-lg p-2 transition-colors">Home</a></li>
                    <li><a href="#about" onClick={() => setIsOpen(false)} className="inline-block py-2 hover:bg-[#126FAB] rounded-lg p-2 transition-colors">About</a></li>
                    <li><a href="#skillSection" onClick={() => setIsOpen(false)} className="inline-block py-2 hover:bg-[#126FAB] rounded-lg p-2 transition-colors">Skills</a></li>
                    <li><a href="#projects" onClick={() => setIsOpen(false)} className="inline-block py-2 hover:bg-[#126FAB] rounded-lg p-2 transition-colors">Projects</a></li>
                </ul>
            </div>

            {/*Line */}
            <hr className="h-px border-t-0 bg-gradient-to-r opacity-25 dark:via-neutral-400" />
        </header>
    );
};

export default Header;