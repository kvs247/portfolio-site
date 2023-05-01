import styled from 'styled-components';
import Box from '@mui/material/Box';

import ProjectCard from './ProjectCard';

// project screenshots
import chess_img from '../assets/chess.png';
import thesis_img from '../assets/thesis-snipet.png';
import ggg_img from '../assets/GGG.PNG';

import Intro from './Intro.js';
import About from './About.js';
import Skills from './Skills.js';
import Projects from './Projects.js';
import Contact from './Contact.js';

// const testBackend = () => {
//   fetch('/test')
//   .then(res => res.json())
//   .then(data => console.log(data))
// };
// testBackend();


function Home () {
    return (
        <>
          <Intro />

          <About />

          <Skills />

          <Projects />

          {/* <Box sx={{ mb: '25vh' }}>
            <ProjectsDiv>
              <h2 id='projects'>Projects</h2>

              <ProjectCard
                title='Chess is Hard'
                description='Play chess against your friends or against the computer.'
                image={chess_img}
                url='https://chess.kvschneider.com/'
              />

              <ProjectCard
                title='Mathematics Honors Thesis'
                description='Research tool for computing the Laplacian Leader Follower Dynamics of graphs (networks).'
                image={thesis_img}
                url='https://github.com/Schnyle/laplacian-leader-follower-dynamics'
              />

              <ProjectCard
                title={'Gaben\'s Game Gallery'}
                description='Browse, search, save, and edit games on the RAWG API.'
                image={ggg_img}
                url='https://github.com/triciahughes/gabensgames'
              />

            </ProjectsDiv>
          </Box> */}

          <Contact />

        </>
    );
}

export default Home;

const ProjectsDiv = styled.div`
    width: 75%;
    margin: 25px auto;
    text-align: center;
`