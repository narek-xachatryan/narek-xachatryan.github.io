import { Header } from './components/header/Header.jsx';
import { Footer } from './components/footer/Footer.jsx';
import { Hero } from './components/hero/Hero.jsx';
import { About } from './components/about/About.jsx';
import { Skills } from './components/skills/Skills.jsx';
import { Project } from './components/project/Project.jsx';
import { Contact } from './components/contact/Contact.jsx';
 
function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
