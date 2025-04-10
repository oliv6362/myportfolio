// src/pages/HomePage.tsx
import React from 'react';
import AboutSection from '../components/aboutSection';
import ProjectsSection from '../components/projectSection';
import ContactSection from '../components/contactSection';
import HomeSection from '../components/homeSection';
import TechStackSection from '../components/skillsSection';

const HomePage: React.FC = () => {
  return (
      <main>
        <HomeSection/>
        <AboutSection/>
        <TechStackSection/>
        <ProjectsSection title="projectTest" />
        <ContactSection title="contactTest" />
      </main>
  );
};

export default HomePage;
