
import Navbar from './Components/Navbar.jsx';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Skills from './Pages/Skills.jsx';
import Projects from './Pages/Projects.jsx';
import Certifications from './Pages/Certifications.jsx';
import Contact from './Pages/Contact.jsx';

function App() {
  return (
    <div className="min-h-screen">

      <Navbar />

      <main>
        <Home />

        <About />
        <Skills/>
        <Projects/>
        <Certifications/>
        <Contact/>


      </main>

    </div>
  );
}

export default App;
