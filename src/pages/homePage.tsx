import AboutSection from '../components/organisms/aboutSection';
import ProjectSection from '../components/organisms/projectSection';
import HomeSection from '../components/organisms/homeSection';
import SkillSection from '../components/organisms/skillSection';

const HomePage: React.FC = () => {
  return (
    <main>
      <HomeSection />
      <AboutSection />
      <SkillSection />
      <ProjectSection /> 
    </main>
  );
};

export default HomePage;
