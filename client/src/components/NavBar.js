import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

import resume_pdf from '../assets/resume.pdf';
import github_img from '../assets/github.png';
import linkedin_img from '../assets/linkedin.png';

function NavBar () {
    return (
        <Header>
          <nav>

            <NavLink exact to='/'>Home</NavLink>

            <NavLink to='/about'>About</NavLink>

            <NavLink to={resume_pdf} target='_blank'>Resume</NavLink>

            <NavLink to={{pathname: 'https://github.com/kschneider0'}} target="_blank">
              <Logo src={github_img} alt='' />
            </NavLink>

            <NavLink to={{pathname: 'https://www.linkedin.com/in/kyle-v-schneider/'}} target="_blank">
              <Logo src={linkedin_img} alt='' />
            </NavLink>         
               
          </nav>    
        </Header>
    );
}

export default NavBar;

const Header = styled.header`
    align-items: center;
    background-color: grey;
    border: 1px solid var(--white);
    display: flex;
    height: 40px;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10000;

    nav > * {
        margin: 0 20px;
        text-decoration: none;
        color: var(--black);

        &:active, &:focus, &:hover, &.active {
            color: var(--white);
        }
    }
`

const Logo = styled.img`
    height: 20px;
`