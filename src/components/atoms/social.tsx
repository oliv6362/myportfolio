import { FaLinkedin, FaGithubSquare } from "react-icons/fa"
import { TbFileCv } from "react-icons/tb"

const Social: React.FC = () => {
  return (
    <div className="mr-10 flex justify-center space-x-4 lg:justify-start">
      <a href="https://linkedin.com/in/oliver-n-hansen-a268922a7" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-3xl hover:scale-110">
        <FaLinkedin />
      </a>
      <a href="https://github.com/oliv6362" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-3xl hover:scale-110">
        <FaGithubSquare />
      </a>
      <a href="resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-3xl hover:scale-110">
        <TbFileCv />
      </a>
    </div>
  )
}

export default Social
