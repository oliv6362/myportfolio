import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb"

const Social: React.FC = () => {
    return (
        <div className="flex space-x-4 justify-center lg:justify-start mr-10">
            <a
                href="https://linkedin.com/in/oliver-n-hansen-a268922a7"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 flex items-center space-x-2 text-3xl">
                <FaLinkedin />
            </a>
            <a
                href="https://github.com/oliv6362"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 flex items-center space-x-2 text-3xl">
                <FaGithubSquare />
            </a>
            <a
                href="resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 flex items-center space-x-2 text-3xl">
                <TbFileCv />
                
            </a>
        </div>
    );
};

export default Social;