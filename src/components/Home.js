import Intro from './Intro.js';
import About from './About.js';
import Skills from './Skills.js';
import Projects from './Projects.js';
import Contact from './Contact.js';


function Home () {
    return (
        <>
          <Intro />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </>
    );
}

export default Home;