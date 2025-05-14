import AboutSection from '../components/organisms/aboutSection';
import ProjectSection from '../components/organisms/projectSection';
import ContactSection from '../components/organisms/contactSection';
import HomeSection from '../components/organisms/homeSection';
import TechStackSection from '../components/organisms/skillSection';

const HomePage: React.FC = () => {
  return (
    <main>
      <HomeSection />
      <AboutSection />
      <TechStackSection />
      <ProjectSection />
      <ContactSection />
    </main>
  );
};

export default HomePage;
