import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoCloud from "@/components/LogoCloud";
import About from "@/components/About";
import StatsBar from "@/components/StatsBar";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CursorEffect from "@/components/CursorEffect";
import AnimatedBackground from "@/components/AnimatedBackground";
import SectionDivider from "@/components/SectionDivider";

const Index = () => {
  return (
    <div className="min-h-screen bg-background cursor-none relative">
      <AnimatedBackground />
      <CursorEffect />
      <Navbar />
      <Hero />
      <LogoCloud />
      <SectionDivider />
      <About />
      <StatsBar />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Resume />
      <SectionDivider />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
