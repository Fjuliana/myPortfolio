import styles from "./App.module.css";
import { About } from "./components/about/About.jsx";
import { Experience } from "./components/Experience/Experience.jsx";
import { Contact } from "./components/contact/Contact.jsx";
import { Hero } from "./components/Hero/Hero.jsx";
import { Navbar } from "./components/navbar/Navbar.jsx";
import { Projects } from "./components/projects/Projects.jsx";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;