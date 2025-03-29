import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Social: React.FC = () => {
    return (
        <div className="flex space-x-4">
            <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 flex items-center space-x-2"
            >
                <FaTwitter />
                <span>Twitter</span>
            </a>
            <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900 flex items-center space-x-2"
            >
                <FaLinkedin />
                <span>LinkedIn</span>
            </a>
            <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-black flex items-center space-x-2"
            >
                <FaGithub />
                <span>GitHussb</span>
            </a>
        </div>
    );
};

export default Social;