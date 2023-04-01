import { Link } from 'react-router-dom';
import styled from 'styled-components';

import selfie_jpg from '../assets/selfie.jpg';

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