import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Profile from "./components/sections/Profile";
import Education from "./components/sections/Education";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Achievements from "./components/sections/Achievements";
import Contact from "./components/sections/Contact";
import { useSectionReveals } from "./hooks/useSectionReveals";
import PrintableResume from "./components/print/PrintableResume";

export default function App() {
  useSectionReveals();
  return (
    <>
      <div className="website-screen">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Navbar />
        <main id="main">
          <Hero />
          <Profile />
          <Education />
          <Skills />
          <Experience />
          <Projects />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
      <PrintableResume />
    </>
  );
}
