import React from "react";
import {FaLinkedin, FaGithubSquare  } from "react-icons/fa";

const Social: React.FC = () => {
    return (
        <div className="flex space-x-4 mt-4">
            <a
                href="https://linkedin.com/in/oliver-n-hansen-a268922a7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:scale-110 flex items-center space-x-2 text-4xl">
                <FaLinkedin />
            </a>
            <a
                href="https://github.com/oliv6362"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white-800 hover:scale-110 flex items-center space-x-2 text-4xl">
                <FaGithubSquare  />
            </a>
        </div>
    );
};

export default Social;