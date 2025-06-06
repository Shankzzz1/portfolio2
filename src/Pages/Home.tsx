import PortfolioBackground from "@/Sections/PortfolioBackground";
import WelcomeSection from "@/Sections/Welcome";
import AboutSection from "@/Sections/AboutSection";
import Navbar from "@/Sections/Navbar";
import EducationSection from "@/Sections/EducationSection";
import SkillsSection from "@/Sections/SkillSection";
import ExperienceSection from "@/Sections/ExperienceSection";
import ProjectsSection from "@/Sections/ProjectSection";
import ContactSection from "@/Sections/ContactSection";
import Footer from "@/Sections/Footer";

const Home = () => {
  return (
    <PortfolioBackground>
        <Navbar/>
      <WelcomeSection />
      <AboutSection />
      <EducationSection/>
      <SkillsSection/>
      <ExperienceSection/>
      <ProjectsSection/>    
      <ContactSection/>
      <Footer/>
    </PortfolioBackground>
  );
};

export default Home;
