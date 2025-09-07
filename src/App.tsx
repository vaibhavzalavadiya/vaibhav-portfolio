import { Switch, Route } from "wouter";
import HeroSection from "@components/sections/HeroSection";
import AboutSection from "@components/sections/AboutSection";
import SkillsSection from "@components/sections/SkillsSection";
import ProjectsSection from "@components/sections/ProjectsSection";
import ContactSection from "@components/sections/ContactSection";
import Navigation from "@components/layout/Navigation";
import Footer from "@components/layout/Footer";

function Portfolio() {
  return (
    <div>
      <Navigation />
      <main className="overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Switch>
      <Route path="/" component={Portfolio} />
      <Route component={Portfolio} />
    </Switch>
  );
}

export default App;
