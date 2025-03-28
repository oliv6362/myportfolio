import React from 'react';

const Header: React.FC = () => {
    return (
        <header>
            <nav className="bg-gray-800 p-4">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="text-white font-bold text-xl">My Portfolio</div>
                    <ul className="flex space-x-4">
                        <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
                        <li><a href="/background" className="text-gray-300 hover:text-white">Background</a></li>
                        <li><a href="/projects" className="text-gray-300 hover:text-white">Projects</a></li>
                        <li><a href="/contact" className="text-gray-300 hover:text-white">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;