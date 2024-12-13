import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Typography } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';
import { useMediaQuery } from '@mui/material';

// import resume_pdf from '/resume.pdf';
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
        onClick={() => {
          if (window.location.pathname !== '/') {
            window.location.href = '/#' + toId;
            // scroll.scrollTo('/#' + toId)
            setTimeout(() => {
              const element = document.getElementById(toId);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }, 100);
          }
        }}        
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

const handleClickResume = () => {
  const resumeUrl = `${process.env.PUBLIC_URL}/resume.pdf`;
  window.open(resumeUrl, "_blank");
};

const links = () => {
  return (
    <>  
      {navLink('intro', 'HOME')}
      {navLink('about', 'ABOUT')}
      {navLink('skills', 'SKILLS')}
      {navLink('projects', 'PROJECTS')}
      {navLink('contact', 'CONTACT')}
      
      <Typography
        variant="h6"
        component="a"
        onClick={handleClickResume}
        target="_blank"
        sx={{
          mx: 2,
          color: '#e1e1e1',
          textDecoration: 'none',
          cursor: 'pointer',
        }}
      >
        RESUME
      </Typography>

      <Link href="https://github.com/kvschneider0" target="_blank">
        <Box component="img" src={github_img} alt="" sx={{ mx: 2, height: '2rem' }} />
      </Link>

      <Link href="https://www.linkedin.com/in/kyle-v-schneider" target="_blank">
        <Box component="img" src={linkedin_img} alt="" sx={{ mx: 2, height: '2rem' }} />
      </Link>
    </>
  );
};


function NavBar() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down(1080));
  
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
      ) { return; }
      setIsDrawerOpen(!isDrawerOpen);
    };
    
  const renderMobileMenu = () => {
    return (
      <>
        <Button onClick={() => toggleDrawer()}>
          <MenuIcon />
        </Button>
        <SwipeableDrawer
          open={isDrawerOpen}
          onOpen={toggleDrawer}
          onClose={toggleDrawer}
          >
          {links()}
        </SwipeableDrawer>
      </>
    );
  };
  
  const renderDesktopMenu = () => {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {links()}
      </Box>
    );
  };

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
        {isMobile ? renderMobileMenu() : renderDesktopMenu()}
      </Container>
    </AppBar>
  );
}

export default NavBar;
