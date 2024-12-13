import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import book1 from '../assets/books/oil_power_and_war.jpg';
import book2 from '../assets/books/loving_what_is.png';
import book3 from '../assets/books/how_to_win_at_chess.png';
import book4 from '../assets/books/cracking_the_coding_interview.png';

const books = [book1, book2, book3, book4]

function About() {
  return (
    <Container
      id='about'
      maxWidth='none'
      sx={{
        mx: 'auto',
        mb: '25vh',
        width: '75%',
      }}
    >
      <Typography variant='h2' textAlign='center'>About</Typography>
      <Box>
        <Typography color='#e1e1e1'>
          As a software developer with foundations in scientific computing and full-stack development, I combine expertise in JavaScript, Python, and C++ with analytical rigor. My experience includes scientific data analysis, optimizing simulations (95\% runtime reduction) and architecting cloud applications, with a personal focus on type safety, performance, and maintainability. Throughout my career I have balanced technical quality with clear communication to align solutions with team priorities and business requirements.
        </Typography>
      </Box>
      <Box>
        {/* Books */}
        <Typography
          variant='h3'
          textAlign='center'
          sx={{ mt: '5vh' }}
        >
          Books I'm Reading
        </Typography>
        <Box
          display='flex'
          flexDirection='row'
          justifyContent='center'
          alignItems='center'
          marginTop='32px'
        >
          {books.map((book, index) => {
            return (
              <div
                style={{
                  padding: '24px',
                  background: '#292929',
                  margin: '0 12px',
                }}
              >
                <Box
                  key={index}
                  component='img'
                  src={book}
                  alt=''
                  sx={{
                    height: '18vw',
                    width: '12vw',
                    mx: 2,
                  }}
                />
              </div>
            );
          })}
        </Box>
      </Box>
    </Container>
  );
}

export default About