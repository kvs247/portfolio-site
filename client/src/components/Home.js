import { Link } from 'react-router-dom';
import styled from 'styled-components';

import ProjectCard from './ProjectCard';


import selfie_jpg from '../assets/selfie.jpg';

// project screenshots
import chess_img from '../assets/chess.png';
import thesis_img from '../assets/thesis-snipet.png';
import ggg_img from '../assets/GGG.PNG';

import Skills from './Skills.js';

const testBackend = () => {
  fetch('/test')
  .then(res => res.json())
  .then(data => console.log(data))
};
testBackend();


function Home () {
    return (
        <>
          <IntroDiv id='title-div'>
            <img src={selfie_jpg} alt='' />
            <h1>Kyle Schneider</h1>
            <h2>Software Developer</h2>
            <p>
              I am a software developer with a passion for learning and creating.
              <br />
                <Link to='/about' style={{ color: '#e1e1e1'}}>
                  Click here
                </Link> 
              {' '}to learn more about who I am.
            </p>
          </IntroDiv>

          <Skills />
          
          <ProjectsDiv>
            <h2>Projects</h2>

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

          <h1 id="place">place</h1>

        </>
    );
}

export default Home;

const IntroDiv = styled.div`
    text-align: center;

    img {
        border-radius: 50%;
        height: 200px;
        border: 1px solid var(--white);
    }
`

const ProjectsDiv = styled.div`
    width: 75%;
    margin: 25px auto;
    text-align: center;
`