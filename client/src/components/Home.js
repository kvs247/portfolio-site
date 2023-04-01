import { Link } from 'react-router-dom';
import styled from 'styled-components';

import selfie_jpg from '../assets/selfie.jpg';
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
    return <img key={url} src={url}/>
});

function Home () {
    return (
        <>
          <IntroDiv id='title-div'>
            <img src={selfie_jpg} />
            <h1>Kyle Schneider</h1>
            <h2>Software Developer</h2>
            <p>
              I am a software developer with a passion for learning and creating.
              <br />
                <Link to='/about'>Click</Link> to learn more about who I am.
            </p>
          </IntroDiv>

          <TechnologiesDiv>
            <h2>Skills</h2>
            <div>
                {tech_list}
            </div>
          </TechnologiesDiv>

          <ProjectsDiv>

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
    border: 5px solid var(--white);
    width: 75%;
    margin: 25px auto;
`