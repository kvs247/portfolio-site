import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { Typography } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';

import resume_pdf from '../assets/resume.pdf';
import github_img from '../assets/github.png';
import linkedin_img from '../assets/linkedin.png';

const navLink = (toId, text) => {
    return (
      <ScrollLink
        to={toId}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <Typography
          variant="h6"
          sx={{
            mx: 2,
            color: '#e1e1e1',
            textDecoration: 'none',
            cursor: 'pointer'
          }}
        >
          {text}
        </Typography>
      </ScrollLink>
    );
};

function NavBar() {
  return (
    <AppBar

      sx={{
        height: '4rem',
        backgroundColor: '#000000',
        py: '1rem',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6" noWrap>
            KYLE SCHNEIDER
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>

          {navLink('intro', 'HOME')}

          {navLink('about', 'ABOUT')}

          {navLink('skills', 'SKILLS')}

          {navLink('projects', 'PROJECTS')}

          {navLink('contact', 'CONTACT')}

          <Typography
            variant="h6"
            component="a"
            href={resume_pdf}
            target="_blank"
            sx={{
              mx: 2,
              color: '#e1e1e1',
              textDecoration: 'none',
            }}
          >
            RESUME
          </Typography>

          <Link href="https://github.com/kschneider0" target="_blank">
            <Box component="img" src={github_img} alt="" sx={{ mx: 2, height: '2rem' }} />
          </Link>

          <Link href="https://www.linkedin.com/in/kyle-v-schneider" target="_blank">
            <Box component="img" src={linkedin_img} alt="" sx={{ mx: 2, height: '2rem' }} />
          </Link>

        </Box>
      </Container>
    </AppBar>
  );
}

export default NavBar;
