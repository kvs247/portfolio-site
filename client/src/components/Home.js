import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';

import ProjectCard from './ProjectCard';


import selfie_jpg from '../assets/selfie.jpg';

// project screenshots
import chess_img from '../assets/chess.png';
import thesis_img from '../assets/thesis-snipet.png';
import ggg_img from '../assets/GGG.PNG';

// technology logos
import python_img from '../assets/python.png';
import flask_img from '../assets/flask.png';
import javascript_img from '../assets/javascript.png';
import react_img from '../assets/react.png';
import html_img from '../assets/html.png';
import css_img from '../assets/css.png';

const technologies = [
    python_img, 
    flask_img, 
    javascript_img, 
    react_img, 
    html_img, 
    css_img 
  ]

const tech_list = technologies.map(url => {
    return <img key={url} src={url} alt='' />
});

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

          <TechnologiesDiv>
            <h2>Skills</h2>
            <div>
                {tech_list}
            </div>
          </TechnologiesDiv>


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

const TechnologiesDiv = styled.div`
    border: 5px solid var(--white);
    width: 50%;
    margin: auto;
    text-align: center;

    div {
        width: 80%;
        margin: auto;
    }
    
    img {
        width: 100px;
        margin: 10px;
    }
`

const ProjectsDiv = styled.div`
    width: 75%;
    margin: 25px auto;
    text-align: center;
`