import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import selfie_jpg from '../assets/selfie.jpg';

function Intro() {
    return (
        <Container 
          id='intro'
          maxWidth='none'
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            mt: '25vh',
            mb: '25vh',
            width: '75%',
          }}
        >
          <Box
            component='img'
            src={selfie_jpg}
            alt='headshot of Kyle Schneider'
            sx={{
              height: '35%',
              width: '35%',
              borderRadius: '10px',
            }}
          />
          <Box textAlign='center'>
            <Typography variant='h1'>Kyle Schneider</Typography>
            <Typography variant='h2'>Software Developer</Typography>
            <Typography>
              I am a software developer with a passion for learning and creating. 
              <br />
              I use my background in mathematics and science to solve problems and build applications.
            </Typography>
          </Box>
        </Container>
    );
}

export default Intro;