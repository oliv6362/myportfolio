import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb"

const Social: React.FC = () => {
    return (
        <div className="flex space-x-4 mt-4 justify-center lg:justify-start xl:justify-start">
            <a
                href="https://linkedin.com/in/oliver-n-hansen-a268922a7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:scale-110 flex items-center space-x-2 text-3xl lg:text-4xl xl:text-4xl">
                <FaLinkedin />
            </a>
            <a
                href="https://github.com/oliv6362"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white-800 hover:scale-110 flex items-center space-x-2 text-3xl lg:text-4xl xl:text-4xl">
                <FaGithubSquare />
            </a>
            <a
                href="resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white-800 hover:scale-110 flex items-center space-x-2 text-3xl lg:text-4xl xl:text-4xl">
                <TbFileCv />
                
            </a>
        </div>
    );
};

export default Social;