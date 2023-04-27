import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import resume_pdf from '../assets/resume.pdf';
import github_img from '../assets/github.png';
import linkedin_img from '../assets/linkedin.png';
import { Typography } from '@mui/material';

function NavBar () {
    return (
        <AppBar
          sx={{ 
            height: '3rem', 
            justifyContent: 'center', 
            backgroundColor: '#000000', 
            py: '1rem',
          }}
        >
          <Container 
            sx={{ 
              display: 'flex', 
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginLeft: 0,
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mx: 2,
                color: '#e1e1e1',
                textDecoration: 'none',
              }}              
            >
              HOME
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/about"
              sx={{
                mx: 2,
                color: '#e1e1e1',
                textDecoration: 'none',
              }}              
            >
              ABOUT
            </Typography>  
            <Typography
              variant="h6"
              noWrap
              component="a"
              href={resume_pdf}
              target='_blank'
              sx={{
                mx: 2,
                color: '#e1e1e1',
                textDecoration: 'none',
              }}              
            >
              RESUME
            </Typography>    
            <Link   
              href='https://github.com/kschneider0'
              target='_blank'
            >          
              <Box
                component='img'
                src={github_img}
                alt=''
                sx={{ mx: 2, height: '2rem'}}
              />                    
            </Link>
            <Link   
              href='https://www.linkedin.com/in/kyle-v-schneider'
              target='_blank'
            >          
              <Box
                component='img'
                src={linkedin_img}
                alt=''
                sx={{ mx: 2, height: '2rem'}}
              />                    
            </Link>            
          </Container>
        </AppBar>
    );
}

export default NavBar;