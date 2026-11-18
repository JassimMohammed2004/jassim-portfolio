import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ProjectExperience from "@/components/ProjectExperience";
import Education from "@/components/Education";
import Research from "@/components/Research";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ProjectExperience />
      <Education />
      <Research />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
