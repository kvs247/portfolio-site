import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Contact() {
    return (
        <Container 
          id='contact'
          
        >
          <Typography variant='h2' textAlign='center'>
            Contact Me
          </Typography>
          <Box
            sx={{ border: '1px solid white', borderRadius: '10px', p: 2, mt: 2 }}
          >
            <Typography variant='h4' textAlign='center'>
              Email: kylesch115@gmail.com
            </Typography>
            <Typography variant='h4' textAlign='center'>
              LinkedIn: https://www.linkedin.com/in/kyle-v-schneider/
            </Typography>            
          </Box>
        </Container>
    );
}

export default Contact;