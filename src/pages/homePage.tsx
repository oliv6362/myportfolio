// src/pages/HomePage.tsx
import React from 'react';
import AboutSection from '../components/sections/aboutSection';
import ProjectSection from '../components/sections/projectSection';
import ContactSection from '../components/sections/contactSection';
import HomeSection from '../components/sections/homeSection';
import TechStackSection from '../components/sections/skillsSection';

const HomePage: React.FC = () => {
  return (
      <main>
        <HomeSection/>
        <AboutSection/>
        <TechStackSection/>
        <ProjectSection/>
        <ContactSection title="contactTest" />
      </main>
  );
};

export default HomePage;
