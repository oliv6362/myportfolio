import React from "react";
import {FaLinkedin, FaGithub } from "react-icons/fa";

const Social: React.FC = () => {
    return (
        <div className="flex space-x-4 mt-4">
            <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900 flex items-center space-x-2 text-4xl">
                <FaLinkedin />
            </a>
            <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-black flex items-center space-x-2 text-4xl">
                <FaGithub />
            </a>
        </div>
    );
};

export default Social;