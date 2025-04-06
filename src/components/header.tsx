import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-gray-800">
            <nav className="bg-gray-800 p-4">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="text-white font-bold text-xl">My Portfolio</div>
                    <ul className="flex space-x-4">
                        <li><a href="#home" className="text-gray-300 hover:text-white">Home</a></li>
                        <li><a href="#about" className="text-gray-300 hover:text-white">About</a></li>
                        <li><a href="#projects" className="text-gray-300 hover:text-white">Projects</a></li>
                        <li><a href="#contact" className="text-gray-300 hover:text-white">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;