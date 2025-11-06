import './App.css';
import Home from './pages/home';
import Education from './pages/education';
import Skills from './pages/skills';
import Projects from './pages/projects';
import CertificateGallery from './pages/certificate';
import Achievements from './pages/achievements';
import Contact from './pages/contact';

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f0f4f8" }}>
      
      {/* Hero / Home Section */}
      <Home />

      {/* Sections stacked */}
      <Education />
      <Skills />
      <Projects />
      <CertificateGallery />
      <Achievements />
      <Contact />

    </div>
  );
}

export default App;
