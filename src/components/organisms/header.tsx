import React, { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import Social from "../atoms/social"

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="top-+ fixed left-0 z-50 w-full">
      <nav className="bg-[#040d12] px-4 pt-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <a href="#home">O.H</a>
          </div>

          {/* Desktop nav */}
          <ul className="hidden space-x-4 text-lg lg:flex">
            <Social />
            <li>
              <a href="#home" className="rounded-lg p-2 transition-colors duration-350 hover:bg-[#126FAB]">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="rounded-lg p-2 transition-colors duration-350 hover:bg-[#126FAB]">
                About
              </a>
            </li>
            <li>
              <a href="#skillSection" className="rounded-lg p-2 transition-colors duration-350 hover:bg-[#126FAB]">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="rounded-lg p-2 transition-colors duration-350 hover:bg-[#126FAB]">
                Projects
              </a>
            </li>
          </ul>

          {/* Hamburger button */}
          <button className="text-2xl text-white focus:outline-none lg:hidden" onClick={() => setIsOpen((open) => !open)} aria-controls="mobile-menu" aria-expanded={isOpen}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div id="mobile-menu" className={`transition-max-h overflow-hidden bg-[#040d12] px-4 pb-2 duration-300 ease-in-out ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <ul className="flex flex-col space-y-2 pt-0.5 text-end">
          <li>
            <a href="#home" onClick={() => setIsOpen(false)} className="inline-block rounded-lg p-2 py-2 transition-colors hover:bg-[#126FAB]">
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setIsOpen(false)} className="inline-block rounded-lg p-2 py-2 transition-colors hover:bg-[#126FAB]">
              About
            </a>
          </li>
          <li>
            <a href="#skillSection" onClick={() => setIsOpen(false)} className="inline-block rounded-lg p-2 py-2 transition-colors hover:bg-[#126FAB]">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setIsOpen(false)} className="inline-block rounded-lg p-2 py-2 transition-colors hover:bg-[#126FAB]">
              Projects
            </a>
          </li>
        </ul>
      </div>

      {/*Line */}
      <hr className="h-px border-t-0 bg-gradient-to-r opacity-25 dark:via-neutral-400" />
    </header>
  )
}

export default Header
